import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

function Header() {
  const [active, setActive] = useState("");

  return (
    <div className="header ">
      <nav className="navbar navbar-expand-lg navbar-light   container">
        <Link to="/" className="navbar-brand" href="#">
          <img src={logo} alt="" />
        </Link>
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
                className="nav-link header__link header__borderBottom "
                href="#"
                onClick={() => setActive("about")}
                style={{
                  borderBottom: active === "about" ? "2px solid black" : "",
                }}
              >
                About
              </Link>
            </li>
            <li className="nav-item mx-4">
              <Link
                to="/portfolio"
                className="nav-link header__link header__borderBottom "
                href="#"
                onClick={() => setActive("portfolio")}
                style={{
                  borderBottom: active === "portfolio" ? "2px solid black" : "",
                }}
              >
                Portfolio
              </Link>
            </li>

            <li className="nav-item mx-4">
              <Link
                to="/team"
                className="nav-link header__link header__borderBottom "
                href="#"
                onClick={() => setActive("team")}
                style={{
                  borderBottom: active === "team" ? "2px solid black" : "",
                }}
              >
                Team
              </Link>
            </li>
            <li className="nav-item mx-4">
              <Link
                className="nav-link header__link header__borderBottom "
                href="#"
                onClick={() => setActive("jobs")}
                style={{
                  borderBottom: active === "jobs" ? "2px solid black" : "",
                }}
              >
                Jobs
              </Link>
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
