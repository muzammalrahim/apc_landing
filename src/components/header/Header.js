import React, { useState, useEffect } from "react";
import "./Header.css";
import logo from "../../assets/APC-logo.svg";
import { Link } from "react-router-dom";

function Header() {
  const [actives, setActive] = useState("");
  // const changeClass = (val) => {
  //   console.log("inside func", val);
  //   setActive(val);
  // };

  return (
    <div className="container header pl-0 pr-0">
      <nav className="navbar navbar-expand-lg navbar-light   ">
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
                className={
                  actives === "about"
                    ? "nav-link header__link header__borderBottom active"
                    : "nav-link header__link header__borderBottom"
                }
                href="#"
                onClick={() => setActive("about")}
              >
                About
              </Link>
            </li>
            <li className="nav-item mx-4">
              <Link
                to="/portfolio"
                className={
                  actives === "portfolio"
                    ? "nav-link header__link header__borderBottom active"
                    : "nav-link header__link header__borderBottom"
                }
                href="#"
                onClick={() => setActive("portfolio")}
              >
                Portfolio
              </Link>
            </li>

            <li className="nav-item mx-4">
              <Link
                to="/team"
                className={
                  actives === "team"
                    ? "nav-link header__link header__borderBottom active"
                    : "nav-link header__link header__borderBottom"
                }
                href="#"
                onClick={() => setActive("team")}
              >
                Team
              </Link>
            </li>
            <li className="nav-item mx-4">
              <a
                className={
                  actives === "jobs"
                    ? "nav-link header__link header__borderBottom active"
                    : "nav-link header__link header__borderBottom"
                }
                href="https://apc.homerun.co/"
                onClick={() => setActive("jobs")}
                target="_blank"
              >
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
