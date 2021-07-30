import React, { useState, useEffect } from "react";
import "./Vision.css";
import vision from "../../assets/Vision_section_image.jpg";
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
    <div className="vision px-5">
      <div className="container pr-0">
        <div className="row mt-5">
          <div className="col-md-6 pr-0">
            <img src={vision} alt="" className="vision__image" />
          </div>
          <div className="col-md-6 pr-5 pl-0">
            <h1 className="vision__heading">{visionTitle}</h1>
            {/* <p className="vision__content">{visionData}</p> */}
            <p className="vision__content">Our believe is that by strategically investing in the best-in-class tech and fintech firms we can help them become better. Together with our team of experts, we will revolutionize the tech industry and make it more accountable, accessible and human. We have 65 people in six Development teams plus Marketing, BI, Project Management and General Support to fuel the growth of our portfolio companies. And with 100 million committed capital our ambition is only limited to our own imagination.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vision;
