import React from 'react'
import { useState } from 'react'
import Cookies from 'js-cookie'

export default function Login(props) {

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
            console.log(response)
            console.log(data)
        } else {
            const data = await response.json()
            Cookies.set("Authorization", `Token ${data.key}`)
            console.log(data)
            props.setState(() => ({
                isAuth: true,
                page: 'content'
            }))
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                <label htmlFor="username">Username:</label>
                    <input value={user.username} className="form-control" type="text" id="username" onChange={handleChange} placeholder="Enter Username.." />
                </div>
                <div className="form-group">
                <label htmlFor="password">Password:</label>
                    <input value={user.password} className="form-control" type="password" id="password" onChange={handleChange} placeholder="Enter Password.." />
                </div>
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}
