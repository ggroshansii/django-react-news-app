import { useState } from "react";
import Cookies from "js-cookie";
import BlogForm from "../../Main/BlogForm/BlogForm"
import { NavLink } from 'react-router-dom'

function Profile() {
    const [profile, setProfile] = useState({
        alias: "",
        avatar: null,
    });
    const [preview, setPreview] = useState("");

    function handleChange(e) {
        const { name, value } = e.target;
        let updatedProfile = {...profile}
        updatedProfile[name] = value;
        setProfile(updatedProfile)
        console.log(profile)
    }

    function handleImage(e) {
        const file = e.target.files[0];
        setProfile({
            ...profile,
            avatar: file,
        });
        const reader = new FileReader();
        reader.onloadend = () => {
            setPreview(reader.result);
        };
        reader.readAsDataURL(file);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append("display_name", profile.alias);
        formData.append("avatar", profile.avatar);

        const options = {
            method: "POST",
            headers: {
                "X-CSRFToken": Cookies.get("csrftoken"),
            },
            body: formData,
        };
        const response = await fetch('/api/accounts/profile/', options)

        if (response.ok === false) {
            console.log("POST FAILED", response)
        } else {
            const data = await response.json()
            console.log("Success")
            console.log(data)
        }
    }

    return (
        <div className="profile-container text-center row">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="alias">Display Name:</label>
                    <input
                        id="alias"
                        type="text"
                        value={profile.alias}
                        name="alias"
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="avatar">Choose your avatar: </label>
                    <input
                        id="avatar"
                        type="file"
                        name="avatar"
                        onChange={handleImage}
                    />
                </div>

                <button type="submit" className="btn btn-success mt-3">
                    Save profile
                </button>

            </form>
            <div>
               <NavLink to="/blogs/create"><button>Blog Submit Form</button></NavLink>
               <NavLink to="/blogs/drafts"><button>See My Drafts</button></NavLink>
            </div>
        </div>
    );
}

export default Profile;
