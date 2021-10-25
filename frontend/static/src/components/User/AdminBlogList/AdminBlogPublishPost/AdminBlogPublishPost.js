import React from "react";
import {withRouter, Redirect } from "react-router-dom";
import Cookies from 'js-cookie'

function AdminBlogPublishPost(props) {

    async function handlePublishClick() {
        let updatedObj = {
            title: props.title,
            body: props.body,
            category: props.category,
            status: 'SBMT'
        }

        const options = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "X-CSRFToken": Cookies.get("csrftoken")
            },
            body: JSON.stringify(updatedObj)
        }
        const response = await fetch(`/api/articles/admin/ALL/${props.id}/`, options)
        if (response.ok === false) {
        } else {
            const data = await response.json()
            props.removeBlog(props.id, props.adminArticles, props.setAdminArticles);
        }
    }

    return (
        <div>
            <div>
                <div className="ownblog-card-container">
                    <div className="blog-card-img-container">
                        <img
                            className="blog-card-img"
                            src={props.image}
                            alt=""
                        />
                    </div>
                    <div className="blog-card-text-container">
                        <p className="blog-card-category">{props.category}</p>
                        <h2 className="blog-card-title">{props.title}</h2>
                        <p className="blog-card-author">{props.author}</p>
                    </div>
                    <div className="ownblog-edit-btn-container">
                      <button className="btn btn-danger ownblog-btn" onClick={handlePublishClick}>Reverse Publication</button>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default withRouter(AdminBlogPublishPost)