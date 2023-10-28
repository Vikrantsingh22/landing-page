import React from "react";
import "./Team_card.css";
const TeamMemberCard = () => {
  return (
    <div className="card-body">
      <div className="team-cards">
        {/* sample card 1  */}
        <div className="card">
          <div className="team-image">
            <img
              className="imageprof"
              src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fprofile&psig=AOvVaw3Lo65tgqP31sOxbARa609Q&ust=1698046727930000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJjFoJKTiYIDFQAAAAAdAAAAABAE"
              alt=""
            />
          </div>
          <h2 className="team-name">Name of the member</h2>
          <small className="designation">Designation</small>
          <h3 className="team-about">About</h3>
          <p className="team-about-paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
            explicabo soluta? Quod voluptates odio tenetur, similique
            dignissimos suscipit, cum eaque soluta quasi exercitationem quae
            corrupti dolorum optio architecto consequatur delectus.
          </p>
        </div>
        {/* sample card 2 */}
        <div className="card">
          <div className="team-image">
            <img
              className="imageprof"
              src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fprofile&psig=AOvVaw3Lo65tgqP31sOxbARa609Q&ust=1698046727930000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJjFoJKTiYIDFQAAAAAdAAAAABAE"
              alt=""
            />
          </div>
          <h2 className="team-name">Name of the member</h2>
          <small className="designation">Designation</small>
          <h3 className="team-about">About</h3>
          <p className="team-about-paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
            explicabo soluta? Quod voluptates odio tenetur, similique
            dignissimos suscipit, cum eaque soluta quasi exercitationem quae
            corrupti dolorum optio architecto consequatur delectus.
          </p>
        </div>
        {/* sample card 3  */}
        <div className="card">
          <div className="team-image">
            <img
              className="imageprof"
              src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fprofile&psig=AOvVaw3Lo65tgqP31sOxbARa609Q&ust=1698046727930000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJjFoJKTiYIDFQAAAAAdAAAAABAE"
              alt=""
            />
          </div>
          <h2 className="team-name">Name of the member</h2>
          <small className="designation">Designation</small>
          <h3 className="team-about">About</h3>
          <p className="team-about-paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
            explicabo soluta? Quod voluptates odio tenetur, similique
            dignissimos suscipit, cum eaque soluta quasi exercitationem quae
            corrupti dolorum optio architecto consequatur delectus.
          </p>
        </div>

        {/* card entered */}
      </div>
    </div>
  );
};

export default TeamMemberCard;
