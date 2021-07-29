import React, { useState, useEffect } from "react";
import "./Slider.css";
import icon from "../../assets/slider-icon.png";
import company from "../../assets/slide-company.png";

import design from "../../assets/slider_design.png";
import design1 from "../../assets/slider-image1.png";
import design2 from "../../assets/slider-image2.png";
import design3 from "../../assets/slide-image3.png";
import design4 from "../../assets/slider-image4.png";

import next from "../../assets/arrow-next.svg";
import prev from "../../assets/arrow-prev.svg";
import client from "../../client";

function HomeSlider() {
  const [content, setContent] = useState(0);
  const [quotes, setQuotes] = useState([]);
  const [isFirstTime, setIsFirstTime] = useState(true);
  // var qouteModel = new QouteModel();

  const fetchData = async () => {
    if (isFirstTime) {
      var res = await client.fetch(`*[_type=='quote-section']{quotes}`);
      console.log(res[0].quotes);
      setQuotes(res[0].quotes);
      setIsFirstTime(false);
      if (quotes.length > 0) console.log(quotes[0].text);
    }
  };
  useEffect(() => {
    fetchData();
  });

  const nextHandler = () => {
    if (content >= 0 && content < 2) {
      setContent(content + 1);
    } else {
      setContent(0);
    }
  };
  const prevHandler = () => {
    if (content <= 2 && content > 0) {
      setContent(content - 1);
    } else {
      setContent(2);
    }
  };

  let detail, author, image;
  if (quotes && quotes.length > 0) {
    if (content == 0) {
      image = design1;
      // detail = quotes[content].text;
      // author = quotes[content].quotee;
      detail =
        "“You just want to work with people that have been in your shoes, and nobody has the track record that APC has in the Startup and Fintech scene. Their knowhow has been an invaluable asset in order to achieve our targets at each single level.“";
      author = "Carlos Valenzuela, CEO";
    }
    if (content == 1) {
      image = design2;
      // detail = quotes[content].text;
      // author = quotes[content].quotee;
      detail =
        "“APC brings so much to the table over just money as the team is very experienced in the fintech space. For us, if we could pick any investor to have on board, it would be APC.”";
      author = "Frank Schuitemaker, CEO, Sniptech";
    }
    if (content == 2) {
      image = design3;
      // detail = quotes[content].text;
      // author = quotes[content].quotee;
      detail =
        "“Working with APC, we’ve been able to get connections we never would have been able to previously. The team provides us with active support, has helped us find great technical collaboration partners and potential customers.”";
      author = "Gijs de Jager, CCO, Orangebuddies";
    }
    if (content == 3) {
      image = design4;
      // detail = quotes[content].text;
      // author = quotes[content].quotee;
      detail =
        "“It’s notable the amount of experience and learnings we were able to accelerate by working with APC. The team knows how to deal with a growing scale-up because they’ve been on the other side.”";
      author = "Michal Kratochvil, CEO, Budgetbakers";
    }
  }
//console.log("content count",content)
  return (
    <div className="slider">
      <div className="container slider__content">
        <p className="slider__text">{detail}</p>
        <p className="slider__author mt-3">{author}</p>
        <div className="slider__company">
          {/* <img src={icon} alt="" />
          <img src={company} alt="" /> */}
          <img className="slider__companyLogo" src={image} alt="" />
        </div>
        <div className="slider__design">
          <img src={design} alt="" />
        </div>
      </div>
      <div className="slider__arrows">
        <img
          style={{ cursor: "pointer" }}
          src={prev}
          alt=""
          className="mx-5"
          onClick={prevHandler}
        />
        <img
          style={{ cursor: "pointer" }}
          src={next}
          alt=""
          onClick={nextHandler}
        />
      </div>
    </div>
  );
}

export default HomeSlider;
