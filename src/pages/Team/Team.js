import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Hiring from "../../components/Team/Hiring";
import TeamBanner from "../../components/Team/TeamBanner";
import TeamManagement from "../../components/Team/TeamManagement";

function Team() {
  return (
    <div className="team">
      <Header />
      <TeamBanner />
      <TeamManagement />
      <Hiring />
      <Footer />
    </div>
  );
}

export default Team;
