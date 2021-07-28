import React from "react";
import "./ContactLeft.css";
import logo from "../../assets/logo.png";
import arrow from "../../assets/contact-arrow.png";
function ContactLeft() {
  return (
    <div>
      <div className="contactLeft">
        <div className="container">
          <img src={logo} alt="" className="contactLeft__logo" />
          <h5 className="contactLeft__text">
            Are you the next <br /> fintech success <br /> story?
          </h5>
        </div>
      </div>
      <img src={arrow} alt="" className="contactLeft__image" />
    </div>
  );
}

export default ContactLeft;
