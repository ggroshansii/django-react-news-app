import React from "react";
import "./BlogPost.css";

export default function BlogPost() {
    return (
        <div>
            <div className="blog-card-container">
                <div className="blog-card-img-container">
                    <img
                        className="blog-card-img"
                        src="https://www.sciencenews.org/wp-content/uploads/2021/07/072221_LG-HT_star-age_feat.jpg"
                        alt=""
                    />
                </div>
                <div className="blog-card-text-container">
                    <p className="blog-card-category">Science</p>
                    <h2 className="blog-card-title">
                        How do we Calculate the Age of Star?
                    </h2>
                    <p className="blog-card-author">By Garth Groshans</p>
                </div>
            </div>
        </div>
    );
}
