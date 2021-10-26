import React from "react";
import "./BlogPost.css";
import { useState } from "react";
import Cookies from "js-cookie";
import { NavLink } from 'react-router-dom'

export default function BlogPost(props) {


    function handleScoreUpdate() {
        console.log("IS AUTH", props.isAuth)
        console.log("!IS AUTH", !props.isAuth)
        if (props.isAuth === false) {
            props.updatePopularityScore(props.id, props)
        }

    }

    return (
        <div onClick={handleScoreUpdate}>
            <NavLink to={`/blogs/detail/${props.id}`} className="nav-link-container">
                <div className="blog-card-container">
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
                        <p className="blog-card-author">By: {props.author}</p>
                    </div>
                </div>
            </NavLink>
        </div>
    );
}
