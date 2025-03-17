import React from "react";
import "./CongratsCard.css";

const CongratsCard = () => {
  return (
    <div className="card-container">
      <h1 className="heading">Congratulations</h1>
      <div className="profile-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
          className="profile"
        />
        <h1 className="heading1">Kiran V</h1>
        <p className="paragraph">
          Vishnu Institute of Computers and Technology Bhimavaram
        </p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
          className="profile"
        />
      </div>
    </div>
  );
};

export default CongratsCard;
