import React from "react";
import "./ContactRight.css";
import line from "../../assets/contact-right-line.png";
import { Link } from "react-router-dom";
import social from "../../assets/linkedin 5.png";
import bottomLine from "../../assets/contactRight-bottom.png";

function ContactRight() {
  return (
    <div className="contactRight container">
      <nav className="navbar navbar-expand-lg navbar-light contactNav   container">
        <ul className="navbar-nav  ml-auto mr-auto ">
          <li className="nav-item  mx-3">
            <Link to="/" className="nav-link header__link" href="#">
              About
            </Link>
          </li>
          <li className="nav-item mx-3">
            <Link to="/portfolio" className="nav-link header__link" href="#">
              Portfolio
            </Link>
          </li>
          <li className="nav-item mx-3">
            <Link to="/team" className="nav-link header__link" href="#">
              Team
            </Link>
          </li>
          <li className="nav-item mx-3">
            <a className="nav-link header__link" href="#">
              Jobs
            </a>
          </li>
          <li className="nav-item ml-3">
            <Link
              to="/contact"
              className="nav-link header__link contactRight__borderBottom"
              href="#"
            >
              Contact us
            </Link>
          </li>
        </ul>
      </nav>
      <h1 className="contactRight__heading">Get in touch</h1>
      <img src={line} alt="" className="contactRight__bottomLine " /> <br />
      <button className="join__btn contactRight__btn ">Get in touch</button>
      <h6 className="contactRight__smallHeading">
        Amsterdam Platform Creation B.V,
      </h6>
      <p className="contactRight__text">
        Parnassusweg 805, 1082 LZ Amsterdam, The <br /> Netherlands
      </p>
      <img src={social} alt="" className="contactRight__social" />
      {/* <div className="contactRight__bottomImageSection">
        <img src={bottomLine} alt="" className="contactRight__bottomImage" />
      </div> */}
      {/* <img src={bottomLine} alt="" className="contactRight__bottomImage" /> */}
    </div>
  );
}

export default ContactRight;
