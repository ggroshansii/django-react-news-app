import Cookies from "js-cookie";
import React from "react";
import { useState } from 'react'

export default function BlogForm() {

    const [post, setPost] = useState({
        title: "",
        body: "",
        image: null,
        category: "General Science",
    })

    function handleChange(e) {
        let updatedPost = {
            ...post,
        }
        updatedPost[e.target.id] = e.target.value;
        setPost(updatedPost)
        console.log(post)
    }
    
    function handleImage(e) {
        let updatedPost = {
            ...post
        }
        updatedPost['image'] = e.target.files[0];
        setPost(updatedPost)
        console.log(post)
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', post.title)
        formData.append('body', post.body)
        formData.append('image', post.image)
        formData.append('category', post.category)

        console.log("FD", formData)

        const options = {
            method: "POST",
            headers: {
                "X-CSRFToken": Cookies.get('csrftoken')
            },
            body: formData
        }
        const response = await fetch("/api/articles/", options)
        const data = await response.json()
        if (response.ok === false) {
            console.log("r", response);
            console.log('d', data);
        } else {
            console.log('SUCCESS', data)
        }
    }

    return (
        <div>
            <form className="form-control" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        className="form-control"
                        type="text"
                        id="title"
                        placeholder="Enter Title.."
                        onChange={handleChange}
                        value={post.title}
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
                        value={post.body}
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
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="category">Category</label>
                    <select
                        className="form-control"
                        id="category"
                        onChange={handleChange}
                        value={post.category}
                        name="category"
                    >
                        <option value="General Science" selected>General Science</option>
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
                <button type="submit">Submit Article</button>
            </form>
        </div>
    );
}
