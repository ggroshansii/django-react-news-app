import React from 'react'
import BlogPost from './BlogPost/BlogPost'
import "./BlogPostList.css"

export default function BlogPostList() {
    return (
        <div className="blog-post-list-container">
            <BlogPost/>
            <BlogPost/>
        </div>
    )
}
