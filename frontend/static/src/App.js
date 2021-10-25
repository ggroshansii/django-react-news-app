import "./App.css";
import Cookies, { remove } from "js-cookie";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import UserBlogList from "./components/User/UserBlogList/UserBlogList";
import UserBlogEditDetail from "./components/User/UserBlogEditDetail/UserBlogEditDetail";
import Main from "./components/Main/Main";
import Profile from "./components/User/Profile/Profile";
import Registration from "./components/User/Registration/Registration";
import Login from "./components/User/Login/Login";
import BlogForm from "./components/Main/BlogForm/BlogForm";
import { useState, useEffect } from "react";
import { Route, Switch, withRoute, useHistory } from "react-router-dom";
import BlogDetailReadOnly from "./components/Main/BlogDetail/BlogDetailReadOnly";
import AdminBlogList from "./components/User/AdminBlogList/AdminBlogList";

function App() {
    const [isAuth, setIsAuth] = useState();
    const [currentBlogs, setCurrentBlogs] = useState([]);
    const history = useHistory();
    const [isAdmin, setIsAdmin] = useState(false);
    const [filter, setFilter] = useState(null);
    const [userDetails, setUserDetails] = useState({
        username: "",
        email: "",
    })

    useEffect(() => {
        const checkAuth = async () => {
            const response = await fetch("/rest-auth/user/");
            if (response.ok === false) {
                setIsAuth(false);
            } else {
                setIsAuth(true);
            }
        };
        checkAuth();
    }, []);

    useEffect(() => {
        grabBlogs();
    }, []);

    useEffect(() => {
        grabUserDetails();
    }, [isAuth]);

    async function grabBlogs() {
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "X-CSRFToken": Cookies.get("csrftoken"),
            },
        };
        const response = await fetch("/api/articles/", options);
        const data = await response.json();
        if (response.ok === false) {
        } else {
            setCurrentBlogs(data);
        }
    }

    async function grabUserDetails() {
        let options = {
            method: "GET",
            header: {
                "Content-Type": "application/json",
                "X-CSRFToken": "csrftoken",
            },
        };
        let response = await fetch("/rest-auth/user/", options);
        if (response.ok === false) {
            console.log("FAILED", response);
        } else {
            const data = await response.json();
            console.log("success grabbing details", data);
            setUserDetails({
                "username": data.username,
                "email": data.email
            })
            if (data.is_staff === true || data.is_superuser === true) {
                setIsAdmin(true);
            }
        }
    }

    function filteredBlogs() {
        if (filter && filter !== "All") {
            return currentBlogs.filter((blog) => blog.category === filter);
        } else {
            return currentBlogs;
        }
    }

    function removeBlog(id, arr, func) {
       let index = arr.findIndex((element) => element.id === id);
       let updatedArr = [...arr]
       updatedArr.splice(index, 1)
       func(updatedArr)
    }

    async function updatePopularityScore(id, props) {

        let newPopularityScore = props.popularity_score + 1

        let updatedObj = {
            title: props.title,
            body: props.body,
            category: props.category,
            popularity_score: newPopularityScore
        }

        const options = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "X-CSRFToken": Cookies.get("csrftoken")
            },
            body: JSON.stringify(updatedObj)
        }
        const response = await fetch(`/api/articles/${id}/`, options)
        if (response.ok === false) {
            console.log("POP SCORE UPDATE FAIL")
        } else {
            const data = await response.json()
        }
    }

    return (
        <>
            <Header
                currentBlogs={currentBlogs}
                isAuth={isAuth}
                setFilter={setFilter}
                setIsAuth={setIsAuth}
                isAdmin={isAdmin}
                setIsAdmin={setIsAdmin}
            />
            <Switch>
                <Route path="/registration">
                    <Registration isAuth={isAuth} setIsAuth={setIsAuth} />
                </Route>
                <Route path="/profile">
                    <Profile userDetails={userDetails}/>
                </Route>
                <Route path="/admin/portal">
                    <AdminBlogList removeBlog={removeBlog} />
                </Route>
                <Route path="/account/blogs/create">
                    <BlogForm />
                </Route>
                <Route path="/account/blogs/drafts">
                    <UserBlogList removeBlog={removeBlog}/>
                </Route>
                <Route path="/login">
                    <Login isAuth={isAuth} setIsAuth={setIsAuth}/>
                </Route>
                <Route path="/logout">
                    <Login isAuth={isAuth} setIsAuth={setIsAuth} />
                </Route>
                <Route path="/blogs/detail/:id">
                    <BlogDetailReadOnly />
                </Route>
                <Route path="/account/blogs/detail/:id">
                    <UserBlogEditDetail/>
                </Route>
                <Route path="/">
                    <Main
                        setFilter={setFilter}
                        filteredBlogs={filteredBlogs}
                        currentBlogs={currentBlogs}
                        updatePopularityScore={updatePopularityScore}
                    />
                </Route>
            </Switch>
            <Footer />
        </>
    );
}

export default App;
