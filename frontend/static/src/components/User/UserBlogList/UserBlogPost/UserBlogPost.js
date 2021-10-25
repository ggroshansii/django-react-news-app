import React from "react";
import "./UserBlogPost.css";
import {withRouter } from "react-router-dom";
import Cookies from 'js-cookie'

function UserBlogPost(props) {

    async function submitForReview() {

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
        const response = await fetch(`/api/articles/mydrafts/${props.id}/`, options)
        if (response.ok === false) {
            console.log("SUBMIT FOR REVIEW FAILED", response);
        } else {
            const data = await response.json()
            console.log("Success for submit for review", data);
        }
    }

    function handleEditClick() {
        console.log("hey")
        props.history.push(`/account/blogs/detail/${props.id}`)
    }

    function handleFinalSubmit() {
        submitForReview()
        props.removeBlog(props.id, props.OwnBlogsState, props.setOwnBlogsState)
        props.history.push('/account/blogs/drafts/')
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
                      <button className="btn btn-warning ownblog-btn" onClick={handleEditClick}>Edit</button>
                        <button className="btn btn-success ownblog-btn" value={props.id} onClick={handleFinalSubmit}>
                            Final Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withRouter(UserBlogPost)
