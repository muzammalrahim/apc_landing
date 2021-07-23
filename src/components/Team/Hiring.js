import React from "react";
import "./Hiring.css";
import card1 from "../../assets/footer-logo.png";
import card2 from "../../assets/meet-card3.png";
import card3 from "../../assets/meet-card5.png";
import arrow from "../../assets/team-arrow.png";

function Hiring() {
  return (
    <div className="hiring container mt-5 py-5">
      <h2 className="hiring__heading mb-5">We're hiring!</h2>
      <div className="container">
        {/* card 1 */}
        <span className="hiring__cardText py-2 px-5">
          <span className="mr-3"> See job positions at</span>
          <img src={card1} alt="" className="hiring__cardTextImage pt-2 pl-5" />
        </span>
        <span className="hiring__cardRight1 ">
          <img src={arrow} alt="" />{" "}
        </span>
        {/* card 2 */}
        <span className="hiring__cardText py-2  px-5">
          <span className="mr-3"> See job positions at</span>
          <img src={card2} alt="" className="hiring__cardTextImage pt-2 pl-5" />
        </span>
        <span className="hiring__cardRight2 ">
          <img src={arrow} alt="" />{" "}
        </span>
        {/* card 3 */}
        <span className="hiring__cardText py-2  px-5">
          <span className="mr-3"> See job positions at</span>
          <img src={card3} alt="" className="hiring__cardTextImage pt-2 pl-5" />
        </span>
        <span className="hiring__cardRight3 ">
          <img src={arrow} alt="" />{" "}
        </span>
      </div>
    </div>
  );
}

export default Hiring;
