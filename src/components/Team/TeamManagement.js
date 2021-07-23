import React, { useState, useEffect } from "react";
import TeamCard from "./TeamCard";
import "./TeamManagement.css";
import client from "../../client";

import team1 from "../../assets/team1.png";
import team2 from "../../assets/team2.png";
import team3 from "../../assets/team3.png";
import team4 from "../../assets/team4.png";
import team5 from "../../assets/team5.png";
import team6 from "../../assets/team6.png";
import team7 from "../../assets/team7.png";
import team8 from "../../assets/team8.png";

function TeamManagement() {
  const [team, setTeam] = useState("");
  const fetchData = async () => {
    var res = await client.fetch(`*[_type=='team-section']{text}`);
    if (res && res.length > 0) setTeam(res[0].text);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="teamManagement">
      <div className="container">
        <h2 className="teamManagement__heading mb-5">
          Meet our Management Team
        </h2>
        <p className="teamManagement__text mb-5">
          {/* We invest in the brilliant people that will bring the best expertise
          from finance to marketing and tech, to help you grow. */}
          {team}
        </p>
        <div className="row">
          <div className="col-md-3 ">
            <TeamCard
              image={team1}
              name="Jasper Anderluh"
              post="Managing Partner"
            />
          </div>
          <div className="col-md-3">
            <TeamCard image={team2} name="Niels Klok" post="Managing Partner" />
          </div>
          <div className="col-md-3">
            <TeamCard
              image={team3}
              name="Heike Bult"
              post="Finance department"
            />
          </div>
          <div className="col-md-3">
            <TeamCard
              image={team4}
              name="Maarten Hoffer"
              post="Sales department"
            />
          </div>
          <div className="col-md-3">
            <TeamCard
              image={team5}
              name="Stephanie Magnan"
              post="Marketing department"
            />
          </div>
          <div className="col-md-3">
            <TeamCard
              image={team6}
              name="Florea Parauan"
              post="Technology department"
            />
          </div>
          <div className="col-md-3">
            <TeamCard
              image={team7}
              name="Coen Stipdonk"
              post="Operation department"
            />
          </div>
          <div className="col-md-3">
            <TeamCard
              image={team8}
              name="Hans van der Woude"
              post="Acquisition department"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamManagement;
