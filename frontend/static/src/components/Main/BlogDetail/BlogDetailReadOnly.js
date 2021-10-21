import React from "react";
import { withRouter } from "react-router-dom";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import "./BlogDetailReadOnly.css";

function BlogDetailReadOnly(props) {

    const [blogObj, setBlogObj] = useState({
        id: null,
        author: "",
        title: "",
        body: "",
        category: "",
        image: "",
        status: "",
    })


    const blogID = props.match.params.id;

    useEffect(() => {
        getBlogDetail();
    }, []);

    async function getBlogDetail() {
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "X-CSRFToken": Cookies.get("csrftoken"),
            },
        };
        const response = await fetch(`/api/articles/${blogID}`, options);
        if (response.ok === false) {
            console.log("Detail Failed", response);
        } else {
            const data = await response.json();
            console.log("success", data);
            setBlogObj({
                id: data.id,
                author: data.author,
                title: data.title,
                body: data.body,
                category: data.category,
                image: data.image,
                status: data.status,
            })
        }
    }

    return (
        <div>
            <div>
                <div className="blog-detail-card-container">
                    <div className="blog-card-img-container">
                        <img
                            className="blog-card-img"
                            src={blogObj.image}
                            alt=""
                        />
                    </div>
                    <div className="blog-card-text-container">
                        <p className="blog-card-category">{blogObj.category}</p>
                        <h2 className="blog-card-title">{blogObj.title}</h2>
                        <p>{blogObj.body}</p>
                        <p className="blog-card-author">Author:{blogObj.author}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withRouter(BlogDetailReadOnly);
