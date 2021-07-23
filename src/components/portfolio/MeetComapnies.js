import React from "react";
import "./MeetCompanies.css";
import MeetCompanyCard from "./MeetCompanyCard";
import card1 from "../../assets/meet-card1.png";
import card2 from "../../assets/meet-card2.png";
import card3 from "../../assets/meet-card3.png";
import card4 from "../../assets/meet-card4.png";
import card5 from "../../assets/meet-card5.png";
import card6 from "../../assets/meet-card-6.png";

function MeetComapnies() {
  return (
    <div className="meetCompanies">
      <div className="container">
        <h2 className="meetCompanies__heading">Meet the companies</h2>
        <div className="row">
          <div className="col-md-4">
            <MeetCompanyCard
              image={card1}
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </div>
          <div className="col-md-4">
            <MeetCompanyCard
              image={card2}
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </div>
          <div className="col-md-4">
            <MeetCompanyCard
              image={card3}
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </div>
          <div className="col-md-4">
            <MeetCompanyCard
              image={card4}
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </div>
          <div className="col-md-4">
            <MeetCompanyCard
              image={card5}
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </div>
          <div className="col-md-4">
            <MeetCompanyCard
              image={card6}
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MeetComapnies;
