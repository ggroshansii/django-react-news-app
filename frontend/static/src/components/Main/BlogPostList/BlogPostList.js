import React from 'react'
import BlogPost from './BlogPost/BlogPost'
import "./BlogPostList.css"

export default function BlogPostList(props) {
    return (
        <div className="blog-post-list-container">
            {props.currentArticles.map(article => {
                return <BlogPost {...article} />
            })}
        </div>
    )
}
