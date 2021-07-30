import React from "react";
import "./MeetCompanies.css";
import MeetCompanyCard from "./MeetCompanyCard";
import MeetCompanyCard2 from "./MeetCompanyCard2";
import card1 from "../../assets/meet-card1.png";
import card2 from "../../assets/meet-card2.png";
import card3 from "../../assets/meet-card3.png";
import card4 from "../../assets/meet-card4.png";
import card5 from "../../assets/meet-card5.png";
import card6 from "../../assets/meet-card-6.png";

function MeetComapnies() {
  return (
    <div className="meetCompanies">
      <div className="portfolio-bg"></div>

      <div className="portfolio-wrap">
      <div className="container">
        <h2 className="meetCompanies__heading">Meet the companies</h2>
        <div className="row">
          <div className="col-md-4">
            <a href="https://budgetbakers.com/" target="_blank">
              <MeetCompanyCard
                image={card1}
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              />
            </a>
          </div>
          <div className="col-md-4">
          <a href="https://greenonline.org/" target="_blank">
            <MeetCompanyCard
              image={card2}
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            </a>
          </div>
          <div className="col-md-4">
          <a href="https://www.orangebuddies.com/" target="_blank">
            <MeetCompanyCard
              image={card3}
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            </a>
          </div>
          <div className="col-md-4">
          <a href="https://www.seniorenvoordeelpas.nl/" target="_blank">
            <MeetCompanyCard2
              image={card4}
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            </a>
          </div>
          <div className="col-md-4">
          <a href="https://www.sniptech.com/" target="_blank">
            <MeetCompanyCard2
              image={card5}
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            </a>
          </div>
          <div className="col-md-4">
            <MeetCompanyCard2
              image={card6}
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </div>
        </div>
      </div>
      

      </div>
    </div>
  );
}

export default MeetComapnies;
