import Cookies from 'js-cookie'
import React from 'react'
import { useState, useEffect } from 'react'
import UserBlogPost from './UserBlogPost/UserBlogPost'
import './UserBlogList.css'

export default function UserBlogList() {

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

if (OwnBlogsState.length === 0) {
    return <h1 className="no-current-drafts-heading">No Current Drafts</h1>
}


    return (
        <div className="ownblogs-list-container">
            {OwnBlogsState.map(blog => {
                return <UserBlogPost {...blog} />
            })}
        </div>
    )
}
