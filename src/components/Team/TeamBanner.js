import React from "react";
import "./TeamBanner.css";
import plus from "../../assets/team-plus.svg";
import equal from "../../assets/team-equal.svg";
import line from "../../assets/team-banner-line.svg";

function TeamBanner() {
  return (
    <div className="container teamBanner">
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
