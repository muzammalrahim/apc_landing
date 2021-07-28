import React, { useState, useEffect } from "react";
import "./GetStart.css";
import bulb from "../../assets/home-bulb.png";
import line from "../../assets/start-line.png";
import client from "../../client";

function GetStart() {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const fetchData = async () => {
    var res = await client.fetch(`*[_type=='about-section']{content[0]}`);
    // console.log(res[0].content.text);
    if (res && res.length > 0) {
      setContent(res[0].content.text);
      setTitle(res[0].content.title);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="start_main">
      {/* <div className="start">
        <div className="row my-5 py-5">
          <div className="col-md-6 start__left">
            <h1 className="start__heading">{title}</h1>
            <p className="start__content">{content}</p>
          </div>
          <div className="col-md-6 start__right">
            <img src={bulb} alt="" className="start__image" />
          </div>
        </div>
      </div>
      <div className="start__line text-left">
        <img src={line} alt="" className="line__image" />
      </div> */}
    </div>
  );
}

export default GetStart;
