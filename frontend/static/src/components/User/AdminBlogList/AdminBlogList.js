import Cookies from "js-cookie";
import React from "react";
import { useState, useEffect } from "react";
import AdminBlogPost from "./AdminBlogPost/AdminBlogPost";
import BlogPost from "../../Main/BlogPostList/BlogPost/BlogPost";
import "./AdminBlogList.css";

export default function AdminBlogList() {
    const [adminArticles, setAdminArtcles] = useState([]);
    const [categorySelection, setCategorySelection] = useState("");

    useEffect(() => {
        grabAdminArticles("ALL");
    }, []);

    useEffect(() => {
        grabAdminArticles(categorySelection);
    }, [categorySelection]);

    async function grabAdminArticles(category) {
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "X-CSRFToken": Cookies.get("csrftoken"),
            },
        };
        const response = await fetch(
            `/api/articles/admin/${category}`,
            options
        );
        if (response.ok === false) {
            console.log("FAILED", response);
        } else {
            const data = await response.json();
            setAdminArtcles(data);
        }
    }

   function handleOptionChange(e) {
        setCategorySelection(e.target.value);
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

            <div className="ownblogs-list-container">{
    categorySelection == "SBMT"
        ? adminArticles.map((blog) => {
              return <AdminBlogPost {...blog} />;
          })
        : adminArticles.map((blog) => {
              return <BlogPost {...blog} />;
          })}</div>
        </div>
    );
}
