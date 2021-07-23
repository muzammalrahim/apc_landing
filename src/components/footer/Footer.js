import React from "react";
import "./Footer.css";
import rightImage from "../../assets/footer-right.png";
import logo from "../../assets/footer-logo.png";
import LinkedIn from "../../assets/linkedin 5.png";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="footer container-fluid">
      <div className="row">
        <div className="col-md-7 footer__left">
          <h1 className="footer__heading ">
            Let's work <span>together.</span>
          </h1>

          <div className="footer__btnBox">
            <Link to="/contact">
              <button className="footer__btnContact">Contact us</button>
            </Link>
          </div>
          <div className="footer__Box">
            <img src={logo} alt="" className="footer__logo" />
          </div>
          <div className="footer__Box">
            <p className="footer__text">
              Amsterdam Platform Creation B.V,
              <br /> Parnassusweg 805, 1082 LZ Amsterdam, The <br /> Netherlands
            </p>
            <img src={LinkedIn} alt="" className="linkedIn" />
          </div>
        </div>
        <div className="col-md-5 footer__right  text-right">
          <img src={rightImage} alt="" className="footer__rightImage" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
