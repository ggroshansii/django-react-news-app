import React from 'react'
import BlogPost from './BlogPost/BlogPost'
import "./BlogPostList.css"

export default function BlogPostList(props) {
    return (
        <div className="blog-post-list-container">
            {props.currentBlogs.map(blog => {
                return <BlogPost {...blog} />
            })}
        </div>
    )
}
