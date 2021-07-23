import React, { useState, useEffect } from "react";
import "./Vision.css";
import vision from "../../assets/home-vision.png";
import client from "../../client";

function Vision() {
  const [visionData, setVisionData] = useState("");
  const [visionTitle, setVisionTitle] = useState("");
  const fetchData = async () => {
    var res = await client.fetch(
      `*[_type=='our-vision-section']{vision[0],title}`
    );
    // console.log(res[0].title);
    if (res && res.length > 0) {
      setVisionData(res[0].vision.children[0].text);
      setVisionTitle(res[0].title);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="vision">
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-6 vision__left">
            <img src={vision} alt="" className="vision__image" />
          </div>
          <div className="col-md-6 vision__right">
            <h1 className="vision__heading">{visionTitle}</h1>
            <p className="vision__content">{visionData}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vision;
