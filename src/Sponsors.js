import LocomotiveScroll from "locomotive-scroll";
import React, { useEffect } from "react";
import "./Sponsors.css";
const Sponsors = () => {
  useEffect(() => {
    // Initialize Locomotive Scroll
    const scroll = new LocomotiveScroll({
      el: document.querySelector(".box-container"),
      smooth: true,
    });

    return () => {
      // Clean up Locomotive Scroll when the component unmounts
      scroll.destroy();
    };
  }, []);

  return (
    <div className="Sponsorsbody">
      <div className="box-container">
        <div className="box1">
          <div className="box-content">
            <div className="box-front">
              <div className="photo-box"></div>
            </div>
            <div className="box-back">
              <p> Text1</p>
            </div>
          </div>
        </div>
        <div className="box2">
          <div className="box-content">
            <div className="box-front">
              <div className="photo-box"></div>
            </div>
            <div className="box-back">
              <p> Text2</p>
            </div>
          </div>
        </div>
        <div className="box3">
          <div className="box-content">
            <div className="box-front">
              <div className="photo-box"></div>
            </div>
            <div className="box-back">
              <p> Text3</p>
            </div>
          </div>
        </div>
        <div className="box4">
          <div className="box-content">
            <div className="box-front">
              <div className="photo-box"></div>
            </div>
            <div className="box-back">
              <p> Text4</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
