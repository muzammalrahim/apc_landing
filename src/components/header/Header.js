import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

function Header() {
  const [active, setActive] = useState("about");

  return (
    <div className="header ">
      <nav className="navbar navbar-expand-lg navbar-light   container">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto ">
            <li className="nav-item  mx-4">
              <Link
                to="/"
                className="nav-link header__link header__borderBottom"
                href="#"
                style={{
                  borderBottom: active === "about" && "2px solid black",
                }}
                onClick={() => setActive("about")}
              >
                About
              </Link>
            </li>
            <li className="nav-item mx-4">
              <Link
                to="/portfolio"
                className="nav-link header__link"
                href="#"
                style={{
                  borderBottom: active === "portfolio" && "2px solid black",
                }}
                onClick={() => setActive("portfolio")}
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item mx-4">
              <Link
                to="/team"
                className="nav-link header__link"
                href="#"
                onClick={() => setActive("team")}
                style={{
                  borderBottom: active === "team" && "2px solid black",
                }}
              >
                Team
              </Link>
            </li>
            <li className="nav-item mx-4">
              <a className="nav-link header__link" href="#">
                Jobs
              </a>
            </li>
            <li className="nav-item ml-4">
              <Link to="/contact" className="nav-link header__link" href="#">
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
