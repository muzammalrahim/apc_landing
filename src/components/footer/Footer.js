import React from "react";
import "./Footer.css";
import rightImage from "../../assets/footer-right.png";
import logo from "../../assets/footer-logo.png";
import LinkedIn from "../../assets/linkedin 5.png";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="footer">
      <div className="container">
      <div className="row">
        <div className="col-md-7 footer__left">
          <div className="container ml-5">
            <h1 className="footer__heading ">
              Let's work <span>together.</span>
            </h1>

            <div className="footer__btnBox mt-5 ">
              <Link to="/contact">
                <button className="footer__btnContact">Contact us</button>
              </Link>
            </div>
            <div className="footer__Box ">
              <img src={logo} alt="" className="footer__logo " />

              <p className="footer__text">
                Amsterdam Platform Creation B.V,
                <br /> Parnassusweg 805, 1082 LZ Amsterdam, The <br />{" "}
                Netherlands
              </p>
              
                <a href="https://nl.linkedin.com/company/amsterdam-platform-creation" target="_blank">
              <img src={LinkedIn} alt="" className="linkedIn" />
              </a>
             
            </div>
            {/* <h1 className="footer__heading">
              Let's work <span>together.</span>
            </h1>
            <Link to="/contact">
              <button className="footer__btnContact">Contact us</button>
            </Link>*/}
          </div>
        </div>
        {/* <div className="col-md-5  ">
          <img src={rightImage} alt="" className="footer__rightImage" />
        </div> */}
        
      </div>
      </div>
    </div>
  );
}

export default Footer;
