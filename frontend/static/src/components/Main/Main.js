import React from "react";
import BlogPostList from "./BlogPostList/BlogPostList";
import Aside from "./Aside/Aside";
import BlogForm from "./BlogForm/BlogForm";
import "./Main.css";

export default function Main(props) {
    const uniqueCategories = new Set();
    props.currentBlogs.map((blog) => {
        uniqueCategories.add(blog.category);
    });

    function handleClick(e) {
        props.setFilter(e.target.value);
    }
    return (
        <div>
            <div className="header-category-container">
                <button
                    className="header-category"
                    value={null}
                    onClick={handleClick}
                >
                    All
                </button>
                {[...uniqueCategories].map((category) => {
                    return (
                        <button
                            className="header-category"
                            value={category}
                            onClick={handleClick}
                        >
                            #{category}
                        </button>
                    );
                })}
            </div>
            <div className="main-container container">
                <div className="row">
                    <div className="col">
                        <BlogPostList
                            currentBlogs={props.currentBlogs}
                            filteredBlogs={props.filteredBlogs}
                        />
                    </div>
                    <div className="col">
                        <Aside currentBlogs={props.currentBlogs} />
                    </div>
                </div>
            </div>
        </div>
    );
}
