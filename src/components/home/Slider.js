import React, { useState, useEffect } from "react";
import "./Slider.css";
import icon from "../../assets/slider-icon.png";
import company from "../../assets/slide-company.png";

import design from "../../assets/slider_design.png";
import design1 from "../../assets/slider-image1.png";
import design2 from "../../assets/slider-image2.png";
import design3 from "../../assets/slide-image3.png";
import design4 from "../../assets/slider-image4.png";

import next from "../../assets/arrow-next.png";
import prev from "../../assets/arrow-prev.png";
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
      detail = quotes[content].text;
      author = quotes[content].quotee;
    }
    if (content == 1) {
      image = design2;
      detail = quotes[content].text;
      author = quotes[content].quotee;
    }
    if (content == 2) {
      image = design3;
      detail = quotes[content].text;
      author = quotes[content].quotee;
    }
  }

  return (
    <div className="slider">
      <div className="container slider__content">
        <div className="slider__content">
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
    </div>
  );
}

export default HomeSlider;
