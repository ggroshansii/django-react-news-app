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
            <div className="header-category-container container-fluid ">
                <div className="row header-category-row">
                <button
                    className="header-category col-md col-sm-4"
                    value={null}
                    onClick={handleClick}
                >
                    #Recent
                </button>
                {[...uniqueCategories].map((category) => {
                    return (
                        <button
                            className="header-category col-md col-sm-4"
                            value={category}
                            onClick={handleClick}
                        >
                            #{category}
                        </button>
                    );
                })}
                </div>

            </div>
            <div className="main-container container">
                <div className="row gx-5">
                    <div className="col">
                        <BlogPostList
                            currentBlogs={props.currentBlogs}
                            filteredBlogs={props.filteredBlogs}
                            updatePopularityScore={props.updatePopularityScore}
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
