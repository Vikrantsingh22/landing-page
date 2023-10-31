import React from "react";
import "./Prizes.css";
function Prizes() {
  return (
    <div className="prizebody">
      <h2 className="prizes-heading">Prizes</h2>
      <p className="subheading">Top Rewards for Top Ideas</p>
      <div className="prizes-container">
        <div className="prize-card">
          <div className="service">
            <div className="service-logo">
              <div className="imageprof"></div>
            </div>
            <h4 className="prize-heading prizeName">First Prize</h4>
            <p className="prize-heading">
              Total Prize of Worth <b>$15,000</b>
              <br />
              Cash Prize of <b>INR 40,000</b>
            </p>
          </div>
        </div>

        <div className="prize-card">
          <div className="service">
            <div className="service-logo">
              <div className="imageprof"></div>
            </div>
            <h4 className="prize-heading prizeName">Second Prize</h4>
            <p className="prize-heading">
              Total Prize of Worth <b>$10,000</b>
              <br />
              Cash Prize of <b>INR 30,000</b>
            </p>
          </div>
        </div>

        <div className="prize-card">
          <div className="service">
            <div className="service-logo">
              <div className="imageprof"></div>
            </div>
            <h4 className="prize-heading prizeName">Third Prize</h4>
            <p className="prize-heading">
              Total Prize of Worth <b>$5,000</b>
              <br />
              Cash Prize of <b>INR 20,000</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Prizes;
