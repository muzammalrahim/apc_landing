import React from "react";
import "./MeetCompanyCard2.css";
import card1 from "../../assets/meet-card1.png";

function MeetCompanyCard({ image, text }) {
  return (
    <div className="meetCompanyCard2">
      <img className="meetCompanyCard2__image" src={image} />
      <p className="meetCompanyCard2__text mt-5">{text}</p>
    </div>
  );
}

export default MeetCompanyCard;
