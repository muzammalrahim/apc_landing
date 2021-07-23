import React from "react";
import "./MeetCompanyCard.css";
import card1 from "../../assets/meet-card1.png";

function MeetCompanyCard({ image, text }) {
  return (
    <div className="meetCompanyCard">
      <img className="meetCompanyCard__image" src={image} />
      <p className="meetCompanyCard__text mt-5">{text}</p>
    </div>
  );
}

export default MeetCompanyCard;
