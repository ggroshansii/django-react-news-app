import React from 'react'
import BlogPostList from './BlogPostList/BlogPostList'
import Aside from './Aside/Aside'
import BlogForm from "./BlogForm/BlogForm"
import "./Main.css"

export default function Main(props) {
    return (
        <div className="main-container">
            {/* <BlogPostList currentArticles={props.currentArticles}/>
            <Aside currentArticles={props.currentArticles}/> */}
            <BlogForm/>
        </div>
    )
}
