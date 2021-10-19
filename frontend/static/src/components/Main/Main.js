import React from 'react'
import BlogPostList from './BlogPostList/BlogPostList'
import Aside from './Aside/Aside'
import BlogForm from "./BlogForm/BlogForm"
import "./Main.css"

export default function Main() {
    return (
        <div className="main-container">
            {/* <BlogPostList/>
            <Aside /> */}
            <BlogForm/>
        </div>
    )
}
