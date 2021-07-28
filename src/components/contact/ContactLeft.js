import React from "react";
import "./ContactLeft.css";
import logo from "../../assets/APC-logo.svg";
import arrow from "../../assets/yellow_arrow_line_contact.svg";
import { Link } from "react-router-dom";
function ContactLeft() {
  return (
    <div>
      <div className="contactLeft">
        <div className="container">
        <Link to="/" className="navbar-brand" href="#">
          <img src={logo} alt="" className="contactLeft__logo" />
          </Link>
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
