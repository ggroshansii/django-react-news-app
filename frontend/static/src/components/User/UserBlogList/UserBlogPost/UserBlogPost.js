import React from "react";
import "./UserBlogPost.css";
import { NavLink } from "react-router-dom";

export default function BlogDetailUser(props) {

    function handleEditClick(){

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
                      <NavLink to="/">  <button onClick={handleEditClick} className="btn btn-warning ownblog-btn">Edit</button> </NavLink>
                        <button className="btn btn-success ownblog-btn">
                            Final Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
