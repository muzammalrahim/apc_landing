import React, { useState, useEffect } from "react";
import "./PortfolioBanner.css";
import banner from "../../assets/portfolio-banner.png";
import client from "../../client";
import line from "../../assets/portfolio-banner-line.png";

function PortfolioBanner() {
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const fetchData = async () => {
    var res = await client.fetch(`*[_type=='seo']`);
    // console.log(res[0].pageDescription);
    if (res && res.length > 0) {
      setText(res[0].pageDescription);
      setTitle(res[0].pageTitle);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="container portfolioBanner">
      <h1 className="portfolioBanner__heading">
        Be part of the next fintech <span> success story.</span>
        {/* <div className="text-right ">
          <img src={line} alt="" className="bottom__image" />
        </div> */}
      </h1>
      <p className="portfolioBanner__text mt-5 pt-5">
        {/* APC strategically invests in fintech firms that deliver best in class
        financial related services. And to us, investing in fintech starts with
        investing in people. */}
      </p>

      {/* <div className="portfolioBanner__imageSection">
        <img className="portfolioBanner__image" src={banner} alt="" />
      </div> */}
    </div>
  );
}

export default PortfolioBanner;
