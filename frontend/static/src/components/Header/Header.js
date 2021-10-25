import "./Header.css";
import React from "react";
import { NavLink, Redirect } from "react-router-dom";
import Cookies from "js-cookie";

export default function Header(props) {
    const currentDate = new Date();
    const [month, day, year] = [
        currentDate.getMonth(),
        currentDate.getDate(),
        currentDate.getFullYear(),
    ];




    async function handleLogout (){
         const options = {
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json',
                 'X-CSRFToken': Cookies.get('csrftoken'),
             },
             body: JSON.stringify({}),
         };
         const response = await fetch('/rest-auth/logout/', options)
         if(!response){
             console.log(response);
         } else {
             console.log(response)
             const data = await response.json();
             Cookies.remove('Authorization');
            props.setIsAuth(false)
            props.setIsAdmin(false)
         }
        }





    let month_string;
    switch (month + 1) {
        case 1:
            month_string = "January";
            break;
        case 2:
            month_string = "February";
            break;
        case 3:
            month_string = "March";
            break;
        case 4:
            month_string = "April";
            break;
        case 5:
            month_string = "May";
            break;
        case 6:
            month_string = "June";
            break;
        case 7:
            month_string = "July";
            break;
        case 8:
            month_string = "August";
            break;
        case 9:
            month_string = "September";
            break;
        case 10:
            month_string = "October";
            break;
        case 11:
            month_string = "November";
            break;
        case 12:
            month_string = "December";
            break;
    }

    let loginRegisterLink;
    let logoutLink;
    let profileLink;
    let adminLink;

    if (props.isAuth === true) {

        logoutLink =  <li className="nav-item" onClick={handleLogout}>
                <NavLink
                    className="nav-link"
                    to="/logout"
                >
                    Logout
                </NavLink>
            </li>

        if (props.isAdmin === true) {
            console.log("ADMIN FIRED", props.isAdmin)
            adminLink = (
                <>
                    <li className="nav-item">
                        <NavLink
                            className="nav-link"
                            to="/admin/portal"
                        >
                            Admin Portal
                        </NavLink>
                    </li>
                </>
            );
        } else {
            profileLink = (
                <li className="nav-item" >
                    <NavLink
                        className="nav-link"
                        to="/profile"
                    >
                        Profile
                    </NavLink>
                </li>
            );
        }
    } else {
        loginRegisterLink = (
            <>
                <li className="nav-item" >
                    <NavLink
                        className="nav-link"
                        to="/login"
                    >
                        Login
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        className="nav-link"
                        to="/registration"
                    >
                        Registration
                    </NavLink>
                </li>
            </>
        );
    }

    return (
        <div className="header-container">
            <h1 className="newspaper-name">The Gartholomew Gazette</h1>
            <h2 className="header-date">
                {month_string}, {day} {year}{" "}
            </h2>
            <div className="collpase navbar-collapse " id="navbarResponsive">
                <ul className="navbar-nav nav-container">
                    <li className="nav-item">
                        <NavLink
                            className="nav-link"
                            style=""
                            to="/"
                        >
                            Home
                        </NavLink>
                    </li>
                    {profileLink}
                    {loginRegisterLink}
                    {adminLink}
                    {logoutLink}
                </ul>
            </div>

        </div>
    );
}
