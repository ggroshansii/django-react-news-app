import React from "react";
import { withRouter, useHistory } from "react-router-dom";
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

    const history = useHistory();
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
        const response = await fetch(`/api/articles/mydrafts/${blogID}`, options);
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
                image: "",
                category: data.category,
                status: data.status,
            });
        }
    }

    function handleChange(e) {
        let updatedBlogObj = {...blogObj}
        updatedBlogObj[e.target.id] = e.target.value;
        setBlogObj(updatedBlogObj)
        console.log(blogObj.image)
    }

    function handleImage(e) {
        const file = e.target.files[0]
        let updatedBlogObj = {...blogObj}
        updatedBlogObj[e.target.id] = file

        const reader = new FileReader();
        reader.readAsDataURL(file);
    }



    async function handleSubmit(e) {
        e.preventDefault()
        const formData = new FormData ();
        formData.append('id', blogObj.id)
        formData.append('author', blogObj.author)
        formData.append('title', blogObj.title)
        formData.append('body', blogObj.body)
        formData.append('category', blogObj.category)
        formData.append('status', blogObj.status)

        if (blogObj.image !== "") {
            formData.append('image', blogObj.image)
        }

        const options = {
            method: 'PUT',
            headers: {
                'X-CSRFToken': Cookies.get('csrftoken')
            },
            body: formData,
        }
        const response = await fetch(`/api/articles/mydrafts/${blogID}/`, options)
        if (response.ok === false) {
            console.log("EDIT POST FAILED", response)
        } else {
            const data = await response.json()
            console.log("EDIT SUCCESS", data)
            history.push("/account/blogs/drafts")
        }
    }

    return (
        <div className="blogform-container">
        <h2 className="blogform-heading mb-3">Edit Blog:</h2>
            <form className="form-control" onSubmit={handleSubmit}>
                
                <div className="form-group mt-2">
                    <label htmlFor="title">Title</label>
                    <input
                        className="form-control mt-1"
                        type="text"
                        id="title"
                        placeholder="Enter Title.."
                        onChange={handleChange}
                        value={blogObj.title}
                        name="title"
                    />
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="body">Body</label>
                    <textarea
                        className="form-control mt-1"
                        id="body"
                        placeholder="Enter Body.."
                        onChange={handleChange}
                        value={blogObj.body}
                        name="body"
                    />
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="image">Image</label>
                    <input
                        className="form-control mt-1"
                        type="file"
                        id="image"
                        onChange={handleImage}
                        name="image"
                    />
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="category">Category</label>
                    <select
                        className="form-control mt-1"
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
                        <option value="General Tectonics">General Tectonics</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary btn-goldenrod blogform-btn mt-3">Submit New Draft</button>
            </form>
        </div>
    );
}

export default withRouter(UserBlogPostDetail);
