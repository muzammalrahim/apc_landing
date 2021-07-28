import React from "react";
import "./Join.css";
import joinImage from "../../assets/join-image.png";

function Join() {
  return (
    <div className="join ">
      <div className="join__imageSection">
        <img src={joinImage} alt="" className="join__image" />
      </div>
      <h1 className="join__heading">
        Would you like to be <br /> the next one joining us?
      </h1>

      <button className="join__btn">Get in touch</button>
    </div>
  );
}

export default Join;
