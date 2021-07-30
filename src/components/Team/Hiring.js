import React from "react";
import "./Hiring.css";
import card1 from "../../assets/footer-logo.png";
import card2 from "../../assets/meet-card3.png";
import card3 from "../../assets/meet-card5.png";
import arrow from "../../assets/team-arrow.png";

function Hiring() {
  return (
    <div className="hiring container mt-5 py-5 text-center">
      <h2 className="hiring__heading mb-5">We're hiring!</h2>
      <div className="container">
        {/* card 1 */}
        <div className="wrap">
        <a href="https://apc.homerun.co/">
          <span className="hiring__cardText py-2 px-5">
            <span className="mr-3"> See job positions at</span>
            <img style={{width:'auto'}} src={card1} alt="" className="hiring__cardTextImage pt-2 pl-5" />
          </span>
          <span className="hiring__cardRight1 ">
            <img src={arrow} alt="" />{" "}
          </span>
        </a>
        </div>
        {/* card 2 */}
        <div className="wrap">
        <a href="https://www.orangebuddies.com/jobs/">
        <span className="hiring__cardText py-2  px-5">
          <span className="mr-3"> See job positions at</span>
          <img style={{width:'40%'}} src={card2} alt="" className="hiring__cardTextImage pt-0 pl-5" />
        </span>
        <span className="hiring__cardRight2 ">
          <img src={arrow} alt="" />{" "}
        </span>
        </a>
        </div>
        {/* card 3 */}
        <div className="wrap">
        <a href="https://www.sniptech.com/join-us/">
        <span className="hiring__cardText py-2  px-5">
          <span className="mr-3"> See job positions at</span>
          <img style={{width:'30%'}} src={card3} alt="" className="hiring__cardTextImage pt-1 pl-5" />
        </span>
        <span className="hiring__cardRight3 ">
          <img src={arrow} alt="" />{" "}
        </span>
        </a>
        </div>
      </div>
    </div>
  );
}

export default Hiring;
