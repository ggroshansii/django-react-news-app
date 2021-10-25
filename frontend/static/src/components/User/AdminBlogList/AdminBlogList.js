import Cookies from "js-cookie";
import React from "react";
import { useState, useEffect } from "react";
import AdminBlogSubmitPost from "./AdminBlogSubmitPost/AdminBlogSubmitPost";
import AdminBlogRejectPost from "./AdminBlogRejectPost/AdminBlogRejectPost";
import AdminBlogPublishPost from "./AdminBlogPublishPost/AdminBlogPublishPost";
import BlogPost from "../../Main/BlogPostList/BlogPost/BlogPost";
import "./AdminBlogList.css";

export default function AdminBlogList(props) {
    const [adminArticles, setAdminArticles] = useState([]);
    const [categorySelection, setCategorySelection] = useState("ALL");



    useEffect(() => {
        grabAdminArticles(categorySelection);
    }, [categorySelection]);

    async function grabAdminArticles(category = "ALL") {
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "X-CSRFToken": Cookies.get("csrftoken"),
            },
        };
        const response = await fetch(`/api/articles/admin/${category}`,
            options
        );
        if (response.ok === false) {
            console.log("FAILED", response);
        } else {
            const data = await response.json();
            setAdminArticles(data);
        }
    }

   function handleOptionChange(e) {
        setCategorySelection(e.target.value);
    }
    
    let html;
    if (categorySelection == "SBMT") {
        html = adminArticles.map((blog) => {
            return <AdminBlogSubmitPost {...blog} removeBlog={props.removeBlog} adminArticles={adminArticles} setAdminArticles={setAdminArticles}/>
        })
    } else if (categorySelection == "ALL" || categorySelection == "DFT") {
        html = adminArticles.map((blog) => {
            return <BlogPost {...blog} />
        })
    } else if (categorySelection == "RJT") {
        html = adminArticles.map((blog) => {
            return <AdminBlogRejectPost {...blog} removeBlog={props.removeBlog} adminArticles={adminArticles} setAdminArticles={setAdminArticles} />
        })
    } else if (categorySelection == "PBLH") {
        html = adminArticles.map((blog) => {
            return <AdminBlogPublishPost {...blog} removeBlog={props.removeBlog} adminArticles={adminArticles} setAdminArticles={setAdminArticles}/>
        })
    }


    return (
        <div className="admin-blog-list-container">
            <form className="form-control">
                <div className="form-group">
                    <label HTMLfor="status">Filter Articles by Status:</label>

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
    );
}
