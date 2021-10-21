import "./Header.css";
import React from "react";
import { NavLink } from "react-router-dom";

export default function Header(props) {
    const currentDate = new Date();
    const [month, day, year] = [
        currentDate.getMonth(),
        currentDate.getDate(),
        currentDate.getFullYear(),
    ];

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

    return (
        <div className="header-container">
            <h1 className="newspaper-name">The Gartholomew Gazette</h1>
            <h2 className="header-date">
                {month_string}, {day} {year}{" "}
            </h2>
            <div className="collpase navbar-collapse nav-container" id="navbarResponsive">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/profile">Profile</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/login">Login</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/registration">Registration</NavLink>
                            </li>
                        </ul>
                    </div>
            <div className="header-category-container">
            {props.currentBlogs.map(blog => {
                return <p className="header-category">#{blog.category}</p>})}
            </div>
        </div>
    );
}
