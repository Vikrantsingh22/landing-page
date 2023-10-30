import React from "react";
import Plx from "react-plx";
import "./Herro.css";
function Herro() {
  return (
    <div className="parallaxbody">
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 800,
            properties: [
              {
                startValue: 1,
                endValue: 1.18,
                property: "scale",
              },
            ],
          },
        ]}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: "100%",
        }}
      >
        <img
          className="image"
          style={{ width: "100%" }}
          src="background.jpg"
          alt="background"
        />
      </Plx>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 400,
            properties: [
              {
                startValue: 1,
                endValue: 0,
                property: "opacity",
              },
            ],
          },
        ]}
        style={{
          position: "fixed",
          left: 0,
          top: "26vw",
          width: "100%",
        }}
      >
        <img
          style={{
            width: "30vw",
          }}
          //   src="/text-img.webp"
          className="image1"
          src="hacklogo.png"
          alt="Goonies"
        />
      </Plx>
      {/* <div
        style={{
          position: "fixed",
          lefft: 0,
          top: 0,
          zIndex: 200,
          paddingTop: "56%",
          height: "400vh",
          width: "100%",
        }}
      >
        <div
          style={{
            background: "#000",
            height: "100%",
          }}
        ></div>
      </div> */}
    </div>
  );
}

export default Herro;
