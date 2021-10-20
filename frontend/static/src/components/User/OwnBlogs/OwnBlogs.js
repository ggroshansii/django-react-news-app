import Cookies from 'js-cookie'
import React from 'react'
import { useState, useEffect } from 'react'
import OwnBlog from '../OwnBlog/OwnBlog'

export default function OwnBlogs() {

const [OwnBlogsState, setOwnBlogsState] = useState([])

useEffect(() => {
    grabOwnArticles()
   
}, [])

async function grabOwnArticles(){
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': Cookies.get('csrftoken')
        }
    }
    const response = await fetch("/api/articles/", options)
    if (response.ok === false) {
        console.log("FAILED", response)
    } else {
        const data = await response.json()
        setOwnBlogsState(data)
    }
}


    return (
        <div>
            {OwnBlogsState.map(blog => {
                return <OwnBlog {...blog} />
            })}
        </div>
    )
}
