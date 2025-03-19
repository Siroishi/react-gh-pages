import React from "react";
import PropTypes from "prop-types";
import "./userprofile.css";

const UserProfile = ({ name, age, hobby }) => {
    return (
        <div className="user-profile">
            <h2>👤 Профіль користувача</h2>
            <p><span>Ім'я:</span> {name}</p>
            <p><span>Вік:</span> {age}</p>
            <p><span>Хобі:</span> {hobby}</p>
        </div>
    );
};

UserProfile.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    hobby: PropTypes.string,
};

const App = () => {
    return (
        <div className="flex flex-col gap-4 p-6">
            <UserProfile name="Олександр" age={25} hobby="Гітара" />
            <UserProfile name="Марія" age={27} hobby="Читання" />
            <UserProfile name="Іван" age={30} hobby="Ігри" />
        </div>
    );
};

export default App;
