import React, { useState, useEffect } from "react";
import "./HomeBanner.css";
import design from "../../assets/home-banner.png";
import bulb from "../../assets/home-bulb.png";
import client from "../../client";



function HomeBanner() {
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
    <div className="homeBanner ">
      <div className="container">
        <h1 className="homeBanner__heading">
          To us, investing in fintech starts with investing in
          <span> people.</span>
        </h1>
      </div>

      {/* <div className="homeBanner__image">
        <div className="banner__image">




        </div>
      </div> */}

      <div className="container-fluid b-Wraper">

        <div className="circle"> 
          <div className="black-full">
            <div className="container b-content">
            {/*  <h1 className="homeBanner__heading">
                To us, investing in fintech starts with investing in
                <span> people.</span>
              </h1>*/}

              <div class="row">
                  <div class="col text-col">
                    <h1 className="start__heading">{title}</h1>
                    <p className="start__content">{content}</p>
                    </div>
                  <div class="col"><img src={bulb} alt="" className="start__image" /></div>
              </div>
            </div> 

          </div>
          <div class="start__line text-left"><img src="/static/media/start-line.c7bfac14.png" alt="" class="line__image" /></div>

        </div>

        {/* <div className="line-after"> </div> */}

       

      </div>




    </div>
  );
}

export default HomeBanner;
