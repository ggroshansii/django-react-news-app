import React from "react";
import "./BlogPost.css";
import { useState } from "react";
import Cookies from "js-cookie";
import { NavLink } from 'react-router-dom'

export default function BlogPost(props) {

    return (
        <div>
            <NavLink to={`/blogs/detail/${props.id}`}>
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
                        <p className="blog-card-author">{props.author}</p>
                    </div>
                </div>
            </NavLink>
        </div>
    );
}
