import React from "react";
import "./TeamBanner.css";
import plus from "../../assets/team-plus.png";
import equal from "../../assets/team-equal.png";
import line from "../../assets/team-banner-line.png";

function TeamBanner() {
  return (
    <div className="teamBanner container">
      <h1 className="teamBanner__heading">
        A strong community <br /> <img src={plus} alt="" /> decades of
        experience <img src={equal} alt="" /> <br />{" "}
        <span> Listening and learning.</span>
      </h1>
      <div className="teamBanner__image mt-5">
        <img src={line} alt="" />
      </div>
    </div>
  );
}

export default TeamBanner;
