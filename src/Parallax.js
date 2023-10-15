import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./Parallax.css"; // Create a corresponding CSS file for styling

const Hero = () => {
  return (
    <div className="hero-container">
      <Parallax pages={1.5}>
        <ParallaxLayer
          offset={0}
          speed={0}
          factor={1}
          style={{
            // backgroundImage: "url(./image-full.png)",
            background: "black",
            backgroundSize: "cover",
          }}
        />
        <ParallaxLayer offset={0.8} speed={0.2}>
          <div className="hero-text">Your Moving Text</div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default Hero;
