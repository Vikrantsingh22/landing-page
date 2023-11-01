import React from "react";
import Plx from "react-plx";
import "./Herro.css";
import Navbar from "./Navbar";
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
        <img
          className="image2"
          style={{ width: "100%" }}
          src="mobileBG.png"
          alt="background"
        />
      </Plx>
      <Plx
        // yaha par Navbar add kiya hain
        parallaxData={[
          {
            start: 0,
            end: 100,
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
          top: "0",
          width: "100%",
        }}
      >
        <Navbar />
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
        <div>
          <img
            //   src="/text-img.webp"
            className="image1"
            src="hacklogo.png"
            alt="Goonies"
          />
        </div>
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
