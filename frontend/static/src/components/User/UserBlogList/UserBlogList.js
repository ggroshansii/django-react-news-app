import Cookies from "js-cookie";
import React from "react";
import { useState, useEffect } from "react";
import UserBlogPost from "./UserBlogPost/UserBlogPost";
import BlogPost from "../../Main/BlogPostList/BlogPost/BlogPost"
import "./UserBlogList.css";

export default function UserBlogList(props) {
    const [OwnBlogsState, setOwnBlogsState] = useState([]);
    const [categorySelection, setCategorySelection] = useState("ALL");

    useEffect(() => {
        grabOwnBlogs(categorySelection);
    }, [, categorySelection]);

    async function grabOwnBlogs(category = "ALL") {
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "X-CSRFToken": Cookies.get("csrftoken"),
            },
        };
        const response = await fetch(`/api/articles/user/${category}`, options);
        if (response.ok === false) {
            console.log("FAILED", response);
        } else {
            const data = await response.json();
            setOwnBlogsState(data);
        }
    }

    function handleOptionChange(e) {
        setCategorySelection(e.target.value);
    }

    let html;
    if (OwnBlogsState.length === 0) {
           html = <h1 className="no-current-drafts-heading mx-auto mt-10">
                No Current Articles in this Section
            </h1>
    }

    else if (categorySelection == "DFT") {
        html = OwnBlogsState.map((blog) => {
            return (
                <UserBlogPost
                    {...blog}
                    removeBlog={props.removeBlog}
                    setOwnBlogsState={setOwnBlogsState}
                    OwnBlogsState={OwnBlogsState}
                />
            );
        });
    } else  {
        html = OwnBlogsState.map((blog) => {
            return (
                <BlogPost
                    {...blog}
                    removeBlog={props.removeBlog}
                    setOwnBlogsState={setOwnBlogsState}
                    OwnBlogsState={OwnBlogsState}
                />
            );
        });
    } 

    return (
        <div>
            <div className="admin-blog-list-container">
                <form className="form-control">
                    <div className="form-group">
                        <label HTMLfor="status">
                            Filter Your Blogs by Status:
                        </label>

                        <select
                            id="status"
                            className="form-select"
                            onChange={handleOptionChange}
                            value={categorySelection}
                        >
                            <option value="ALL" selected>
                                All
                            </option>
                            <option value="DFT">Draft</option>
                            <option value="SBMT">Submitted</option>
                            <option value="PBLH">Published</option>
                            <option value="RJT">Rejected</option>
                        </select>
                    </div>
                </form>

                <div className="ownblogs-list-container">{html}</div>
            </div>

            <div className="ownblogs-list-container"></div>
        </div>
    );
}
