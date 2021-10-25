import React from 'react'
import { useState } from 'react'
import Cookies from 'js-cookie'
import { Redirect, withRouter } from 'react-router'
import "./Login.css"

function Login(props) {

    const [user, setUser] = useState({
        username: "",
        password: ""
    })

    function handleChange(e) {
        let updatedUser = {...user, 
        }
        updatedUser[e.target.id] = e.target.value
        setUser(updatedUser)
    }

   async function handleSubmit(e) {
        e.preventDefault()
        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': Cookies.get('csrftoken')
            },
            body: JSON.stringify(user)
        }
        const response = await fetch("/rest-auth/login/", options)
        if (response.ok === false) {
            const data = await response.json()
        } else {
            const data = await response.json()
            Cookies.set("Authorization", `Token ${data.key}`)
            props.setIsAuth(true);
        }
    }

    if (props.isAuth) {
        return <Redirect to="/"/>
    }

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <h2 className="login-heading">Login:</h2>
                <div className="form-group mt-3">
                <label htmlFor="username">Username:</label>
                    <input value={user.username} className="form-control mt-1" type="text" id="username" onChange={handleChange} placeholder="Enter Username.." />
                </div>
                <div className="form-group mt-2">
                <label htmlFor="password">Password:</label>
                    <input value={user.password} className="form-control mt-1" type="password" id="password" onChange={handleChange} placeholder="Enter Password.." />
                </div>
                <button type='submit' className="btn btn-primary mt-3 login-btn btn-goldenrod">Submit</button>
            </form>
        </div>
    )
}

export default Login