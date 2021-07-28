import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import HomeBanner from "../../components/home/HomeBanner";
import GetStart from "../../components/home/GetStart";
import Slider from "../../components/home/Slider";
import Vision from "../../components/home/Vision";

function Home() {
  return (
    <div>
      <Header />

      <HomeBanner />
      <GetStart />

      <Slider />
      <Vision />
      <Footer />
    </div>
  );
}

export default Home;
