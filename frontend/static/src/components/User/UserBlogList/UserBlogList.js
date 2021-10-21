import Cookies from 'js-cookie'
import React from 'react'
import { useState, useEffect } from 'react'
import UserBlogPost from './UserBlogPost/UserBlogPost'
import './UserBlogList.css'

export default function OwnBlogs() {

const [OwnBlogsState, setOwnBlogsState] = useState([])

useEffect(() => {
    grabOwnBlogs()
}, [])

async function grabOwnBlogs(){
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': Cookies.get('csrftoken')
        }
    }
    const response = await fetch("/api/articles/mydrafts/", options)
    if (response.ok === false) {
        console.log("FAILED", response)
    } else {
        const data = await response.json()
        setOwnBlogsState(data)
    }
}


    return (
        <div className="ownblogs-list-container">
            {OwnBlogsState.map(blog => {
                return <UserBlogPost {...blog} />
            })}
        </div>
    )
}
