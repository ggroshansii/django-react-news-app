import React from "react";
import "./AsideItem.css";
import { NavLink } from "react-router-dom"

export default function AsideItem(props) {
    return (
        <NavLink to={`/blogs/detail/${props.id}`} className="aside-item-navlink">
        <div className="aside-item-container">
            
            <div className="aside-item-img-container">
                <img
                    className="aside-item-img"
                    src={props.image}
                    alt=""
                />
            </div>
            <div className="aside-item-text-container">
                <p className="aside-item-category">#{props.category}</p>
                <h2 className="aside-item-title">
                    {props.title}
                </h2>
                <p className="aside-item-author">{props.author}</p>
            </div>
            
        </div>
        </NavLink>
    );
}
