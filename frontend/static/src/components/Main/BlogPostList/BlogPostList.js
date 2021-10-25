import React from 'react'
import BlogPost from './BlogPost/BlogPost'
import "./BlogPostList.css"

export default function BlogPostList(props) {

    let currentBlogs = props.filteredBlogs()
    console.log(currentBlogs)
    return (
        <div className="blog-post-list-container">
            {currentBlogs.map(blog => {
                return <BlogPost updatePopularityScore={props.updatePopularityScore} {...blog} />
            })}
        </div>
    )
}
