import React from "react";
import "./AsideItem.css"

export default function AsideItem() {
    return (
        <div className="aside-item-container">
            <div className="aside-item-img-container">
                <img
                    className="aside-item-img"
                    src="https://www.sciencenews.org/wp-content/uploads/2021/07/072221_LG-HT_star-age_feat.jpg"
                    alt=""
                />
            </div>
            <div className="aside-item-text-container">
                <p className="aside-item-category">#SCIENCE</p>
                <h2 className="aside-item-title">
                    How do we Calculate the Age of Star?
                </h2>
                <p className="aside-item-author">By Garth Groshans</p>
            </div>
        </div>
    );
}
