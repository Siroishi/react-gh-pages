import React from "react";
import UserProfile from "../components/UserProfile.jsx"; // Імпортуємо UserProfile
import "./Profile.css";

const Profile = () => {
    return (
        <div>
            <h1>Profile</h1>
            <UserProfile name="Олександр" age={25} hobby="Гітара" /> {/* Виводимо профіль */}
        </div>
    );
}

export default Profile;
