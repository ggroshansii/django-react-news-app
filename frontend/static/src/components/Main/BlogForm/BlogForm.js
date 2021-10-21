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

    const [preview, setPreview] = useState()

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
        const file = e.target.files[0];
        updatedPost['image'] = file;
        setPost(updatedPost)

        const reader = new FileReader();
        reader.onloadend = () => {
            setPreview(reader.result);
        }
        reader.readAsDataURL(file);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        alert('hey');
        const formData = new FormData();
        formData.append('title', post.title)
        formData.append('body', post.body)
        formData.append('image', post.image)
        formData.append('category', post.category)

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
            setPost(() => ({
                title: "",
                body: "",
                image: null,
                category: "General Science",
            }))
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
                <button type="submit" className="btn btn-primary">Submit New Draft</button>
            </form>
        </div>
    );
}
