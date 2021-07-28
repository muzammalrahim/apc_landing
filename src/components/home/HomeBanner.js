import React from "react";
import "./HomeBanner.css";
import design from "../../assets/home-banner.png";

function HomeBanner() {
  return (
    <div className="homeBanner ">
      <div className="container">
        <h1 className="homeBanner__heading">
          To us, investing in fintech starts with investing in
          <span> people.</span>
        </h1>
      </div>

      <div className="homeBanner__image">
        {/* <img src={design} alt="" /> */}
        <div className="banner__image"></div>
      </div>
    </div>
  );
}

export default HomeBanner;
