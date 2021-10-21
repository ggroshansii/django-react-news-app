import "./App.css";
import Cookies from "js-cookie";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import OwnBlogs from "./components/User/OwnBlogs/OwnBlogs";
import Main from "./components/Main/Main";
import Splash from "./components/User/Splash/Splash";
import Profile from "./components/User/Profile/Profile"
import Registration from "./components/User/Registration/Registration";
import Login from "./components/User/Login/Login";
import BlogForm from './components/Main/BlogForm/BlogForm';
import { useState, useEffect } from "react";
import { Route, Switch, withRoute, useHistory } from "react-router-dom";

function App() {

    const [isAuth, setIsAuth] = useState();
    const [currentBlogs, setCurrentBlogs] = useState([]);
    const history = useHistory();

    useEffect(() => {
        const checkAuth = async () => {
            const response = await fetch("rest-auth/user/");
            if (response.ok === false) {
                setIsAuth(false);
                history.push("/login");
            } else {
                setIsAuth(true);
                history.push("/profile");
            }
        };
        checkAuth();
    }, [history]);

    useEffect(() => {
        grabBlogs();
    }, []);

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

    return (
        <>
            <Header currentBlogs={currentBlogs} />
            <Switch>
                <Route path="/registration">
                    <Registration isAuth={isAuth} setIsAuth={setIsAuth} />
                </Route>
                <Route path="/profile">
                    <Profile />
                </Route>
                <Route path="/blogs/create">
                    <BlogForm />
                </Route>
                <Route path="/blogs/drafts">
                    <OwnBlogs />
                </Route>
                <Route path="/login">
                    <Login isAuth={isAuth} setIsAuth={setIsAuth} />
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
