import React from "react";
import { useState } from "react";
import Cookies from 'js-cookies'

export default function Registration() {
    const [user, setUser] = useState({
        username: "",
        email: "",
        password1: "",
        password2: "",
    });

    const [error, setError] = useState(null);

    function handleChange(e) {
        let updatedUser = {
            ...user,
        };
        updatedUser[e.target.id] = e.target.value;
        setUser(updatedUser);
    }



    function handleSubmit(e) {
        e.preventDefault();
        if (user.password1 !== user.password2) {
            setError(true)
        } else {
            const options = {
                method: "POST",
                headers: {
                    'Content-Type': "application/json",
                    'X-CSRFToken': Cookies.get('csrftoken')
                },
                body: JSON.stringify(user)
            }
            const response = fetch(url, options)
        }
    }

    return (
        <div className="registration-container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input
                        id="username"
                        className="form-control"
                        type="text"
                        placeholder="Enter Username.."
                        onChange={handleChange}
                        value={user.username}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        id="email"
                        className="form-control"
                        type="email"
                        placeholder="Enter Email..."
                        onChange={handleChange}
                        value={user.email}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password1">Password:</label>
                    <input
                        id="password1"
                        className="form-control"
                        type="password"
                        placeholder="Enter Password..."
                        onChange={handleChange}
                        value={user.password1}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password2">Confirm Password:</label>
                    <input
                        id="password2"
                        className="form-control"
                        type="password"
                        placeholder="Enter Password..."
                        onChange={handleChange}
                        value={user.password2}
                    />
                    {error && (
                        <span className="text-danger">
                            Passwords do not match
                        </span>
                    )}
                    
                </div>
                <button type='submit' className="btn btn-success">Register</button>
            </form>
        </div>
    );
}
