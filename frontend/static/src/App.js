import "./App.css";
import Cookies from "js-cookie";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import UserBlogList from "./components/User/UserBlogList/UserBlogList";
import UserBlogEditDetail from "./components/User/UserBlogEditDetail/UserBlogEditDetail";
import Main from "./components/Main/Main";
import Profile from "./components/User/Profile/Profile"
import Registration from "./components/User/Registration/Registration";
import Login from "./components/User/Login/Login";
import BlogForm from './components/Main/BlogForm/BlogForm';
import { useState, useEffect } from "react";
import { Route, Switch, withRoute, useHistory } from "react-router-dom";
import BlogDetailReadOnly from "./components/Main/BlogDetail/BlogDetailReadOnly";
import AdminBlogList from "./components/User/AdminBlogList/AdminBlogList";

function App() {

    const [isAuth, setIsAuth] = useState();
    const [currentBlogs, setCurrentBlogs] = useState([]);
    const history = useHistory();    
    const [isAdmin, setIsAdmin] = useState(false)

    useEffect(() => {
        const checkAuth = async () => {
            const response = await fetch("rest-auth/user/");
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

    useEffect(()=> {
        grabUserDetails()
    }, [isAuth])

    async function grabBlogs() {
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "X-CSRFToken": Cookies.get('csrftoken')
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
                "Content-Type": 'application/json',
                "X-CSRFToken": 'csrftoken'
            }
        }
        let response = await fetch('/rest-auth/user/', options)
        if (response.ok === false) {
            console.log("FAILED", response)
        } else {
            const data = await response.json()
            console.log("success grabbing details", data);
            if (data.is_staff === true || data.is_superuser === true) {
                setIsAdmin(true)
            }
        }
    }

    

    return (
        <>
            <Header currentBlogs={currentBlogs} isAuth={isAuth} isAdmin={isAdmin}/>
            <Switch>
                <Route path="/registration">
                    <Registration isAuth={isAuth} setIsAuth={setIsAuth} />
                </Route>
                <Route path="/profile">
                    <Profile />
                </Route>
                <Route path="/admin/portal">
                    <AdminBlogList/>
                </Route>
                <Route path="/account/blogs/create">
                    <BlogForm />
                </Route>
                <Route path="/account/blogs/drafts">
                    <UserBlogList />
                </Route>
                <Route path="/login">
                    <Login isAuth={isAuth} setIsAuth={setIsAuth} />
                </Route>
                <Route path="/blogs/detail/:id">
                    <BlogDetailReadOnly />
                </Route>
                <Route path="/account/blogs/detail/:id">
                    <UserBlogEditDetail />
                </Route>
                <Route path="/">
                    <Main currentBlogs={currentBlogs}/>
                </Route>
            </Switch>
            <Footer />
        </>
    );
}

export default App;
