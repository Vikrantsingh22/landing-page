import React from "react";
import "./Timeline.css";
function Timeline() {
  return (
    <div className="Timelinebody">
      <div className="title">
        <div>
          <h1 className="Timelineh1">The North Pole 2022</h1>
        </div>
        <p className="Timelinep">The ultimate arctic adventure</p>
      </div>
      <div className="timeline">
        <div className="checkpoint">
          <div>
            <h2 className="Timelineh2">Day 1: Helsinki, Finland</h2>
            <p className="Timelinep">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et
              leo id libero efficitur volutpat
            </p>
          </div>
        </div>
        <div className="checkpoint">
          <div>
            <h2 className="Timelineh2">Day 2: Embarkation Day in Murmansk</h2>
            <p className="Timelinep">
              Ut sed nibh laoreet, fermentum magna quis, gravida orci. Vivamus
              sapien lacus, bibendum a mattis quis, pretium non eros. In vitae
              hendrerit libero, vitae mollis ante. Fusce fermentum finibus
              porta. Fusce sed erat placerat, pellentesque ex ac, dictum tortor.
            </p>
          </div>
        </div>
        <div className="checkpoint">
          <div>
            <h2 className="Timelineh2">
              Day 3-6: Northbound in the Arctic Ocean
            </h2>
            <p className="Timelinep">
              Vestibulum dictum semper leo sed luctus. Aliquam at tempus felis.
              Aenean blandit purus id mattis volutpat. Sed eget porta sem, sed
              cursus orci. Nunc aliquam lobortis lorem, congue condimentum odio
              lobortis ut.
            </p>
          </div>
        </div>
        <div className="checkpoint">
          <div>
            <h2 className="Timelineh2">Day 7: 90deg North</h2>
            <p className="Timelinep">
              Nulla turpis turpis, iaculis eu fermentum dictum, sagittis non
              mauris. Donec aliquam mattis vulputate. Vivamus congue ligula sed
              sollicitudin pellentesque. Cras vel massa semper diam tempus
              pharetra. Etiam finibus lectus vel nibh feugiat, ut dapibus ligula
              blandit. Integer id fringilla purus.
            </p>
          </div>
        </div>
        <div className="checkpoint">
          <div>
            <h2 className="Timelineh2">
              Day 8: Southbound in the Arctic Ocean
            </h2>
            <p className="Timelinep">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et
              leo id libero efficitur volutpat
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
