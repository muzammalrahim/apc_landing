import React from "react";
import "./TeamCard.css";

function TeamCard({ image, name, post }) {
  return (
    <div className="teamCard">
      <img src={image} alt="" className="teamCard__image" />
      <div className="teamCard__content">
        <h4 className="teamCard__Name">{name}</h4>
        <p className="teamCard__designation">{post}</p>
      </div>
    </div>
  );
}

export default TeamCard;
