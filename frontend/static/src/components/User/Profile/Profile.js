import { useState } from "react";
import Cookies from "js-cookie";
import BlogForm from "../../Main/BlogForm/BlogForm";
import { NavLink } from "react-router-dom";
import "./Profile.css"

function Profile(props) {
    const [profile, setProfile] = useState({
        alias: "",
        avatar: null,
    });
    const [preview, setPreview] = useState("");

    function handleChange(e) {
        const { name, value } = e.target;
        let updatedProfile = { ...profile };
        updatedProfile[name] = value;
        setProfile(updatedProfile);
        console.log(profile);
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
        const response = await fetch("/api/accounts/profile/", options);

        if (response.ok === false) {
            console.log("POST FAILED", response);
        } else {
            const data = await response.json();
            console.log("Success");
            console.log(data);
        }
    }

    return (
        <div className="profile-container text-center row">
            <div className="profile-details-container">
                <h2 className="profile-details-heading">Profile:</h2>
                <h3 className="profile-details-subheading mt-3">Username: </h3>
                <p>{props.userDetails.username}</p>
                <h3 className="profile-details-subheading">Email: </h3>
                <p>{props.userDetails.email}</p>
            </div>

            <div>
                <NavLink to="/account/blogs/create">
                    <button className="btn btn-primary profile-btn btn-goldenrod">
                        Submit New Blog!
                    </button>
                </NavLink>
                <NavLink to="/account/blogs/drafts">
                    <button className="btn btn-primary profile-btn btn-goldenrod mt-2">My Drafts</button>
                </NavLink>
            </div>
        </div>
    );
}

export default Profile;
