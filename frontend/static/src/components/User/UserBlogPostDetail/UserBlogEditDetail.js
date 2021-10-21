import React from "react";
import { withRouter } from "react-router-dom";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import "./UserBlogEditDetail.css";
import { FiEdit3 } from "react-icons/fi";

function UserBlogPostDetail(props) {

    const [blogObj, setBlogObj] = useState({
        id: null,
        author: "",
        title: "",
        body: "",
        category: "",
        image: "",
        status: "",
    });


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
            });
        }
    }

    function handleChange(e) {
        let updatedBlogObj = {...blogObj}
        updatedBlogObj[e.target.id] = e.target.value;
        setBlogObj(updatedBlogObj)
    }

    function handleImage() {}
    function handleSubmit() {}

    return (
        <div className="edit-post-form-container">
            <form className="form-control" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        className="form-control"
                        type="text"
                        id="title"
                        placeholder="Enter Title.."
                        onChange={handleChange}
                        value={blogObj.title}
                        name="title"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="body">Body</label>
                    <textarea
                        className="form-control"
                        id="body"
                        placeholder="Enter Body.."
                        onChange={handleChange}
                        value={blogObj.body}
                        name="body"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="image">Image</label>
                    <input
                        className="form-control"
                        type="file"
                        id="image"
                        onChange={handleImage}
                        name="image"
                        // value={blogObj.image}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="category">Category</label>
                    <select
                        className="form-control"
                        id="category"
                        onChange={handleChange}
                        value={blogObj.category}
                        name="category"
                    >
                        <option value="General Science">General Science</option>
                        <option value="Geology">Geology</option>
                        <option value="Soil Science">Soil Science</option>
                        <option value="Hydrology">Hydrology</option>
                        <option value="Mineralogy">Mineralology</option>
                        <option value="Petrology">Petrology</option>
                        <option value="Sedimentology">Sedimentology</option>
                        <option value="Volcanology">Volcanology</option>
                        <option value="General Tectonics">
                            General Tectonics
                        </option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit New Draft
                </button>
            </form>
        </div>
    );
}

export default withRouter(UserBlogPostDetail);
