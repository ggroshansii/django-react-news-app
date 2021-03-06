import React from 'react'


export default function Splash(props) {

function handleClick(e) {
    props.setState(prevState => ({
        ...prevState,
        page: e.target.value
    }))
}
    return (
        <div>
            <button value="register" onClick={handleClick}>Register</button>
            <button value="login" onClick={handleClick}>Login</button>
        </div>
    )
}
