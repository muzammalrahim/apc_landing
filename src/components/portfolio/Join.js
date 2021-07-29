import React from "react";
import "./Join.css";
import joinImage from "../../assets/join-image.svg";

function Join() {
  return (
    <div className="join ">
      <div className="join__imageSection">
        <img src={joinImage} alt="" className="join__image" />
      </div>
      <h1 className="join__heading">
        Would you like to be <br /> the next one joining us?
      </h1>
      <a href="mailto:hr@apcreation.nl">
      <button className="join__btn">Get in touch</button>
      </a>
    </div>
  );
}

export default Join;
