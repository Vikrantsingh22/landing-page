import React from "react";
import "./Prizes.css";
function Prizes() {
  return (
    <div className=".prizebody">
      <h2 className="prizes-heading">Prizes</h2>
      <p className="subheading">Top Rewards for Top Ideas</p>
      <div className="prizes-container">
        <div className="prize-card">
          <div className="service">
            <div className="service-logo">
              <img
                className="imageprof"
                src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fprofile&psig=AOvVaw3Lo65tgqP31sOxbARa609Q&ust=1698046727930000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJjFoJKTiYIDFQAAAAAdAAAAABAE"
                alt=""
              />
            </div>
            <h4 className="prize-heading">First Prize</h4>
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
              <img
                className="imageprof"
                src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fprofile&psig=AOvVaw3Lo65tgqP31sOxbARa609Q&ust=1698046727930000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJjFoJKTiYIDFQAAAAAdAAAAABAE"
                alt=""
              />
            </div>
            <h4 className="prize-heading">Second Prize</h4>
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
              <img
                className="imageprof"
                src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fprofile&psig=AOvVaw3Lo65tgqP31sOxbARa609Q&ust=1698046727930000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJjFoJKTiYIDFQAAAAAdAAAAABAE"
                alt=""
              />
            </div>
            <h4 className="prize-heading">Third Prize</h4>
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
