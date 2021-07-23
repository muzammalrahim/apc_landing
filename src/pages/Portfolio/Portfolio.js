import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Join from "../../components/portfolio/Join";
import MeetComapnies from "../../components/portfolio/MeetComapnies";
import PortfolioBanner from "../../components/portfolio/PortfolioBanner";

function Portfolio() {
  return (
    <div>
      <Header />
      <PortfolioBanner />
      <MeetComapnies />
      <Join />
      <Footer />
    </div>
  );
}

export default Portfolio;
