import React, { useState, useEffect } from "react";
import "./About.css";
const TypewriterBox = () => {
  const [paragraphs, setParagraphs] = useState([]);
  const paragraphsToType = [
    "A hackathon is an exciting and collaborative event that brings together creative individuals, often including programmers, designers, and innovators, for a focused period to develop innovative solutions to real-world problems. These intensive coding marathons typically span a day or more, during which participants work diligently to build software, apps, or hardware prototypes. Hackathons foster an atmosphere of innovation, learning, and competition, pushing participants to think outside the box and come up with inventive solutions.. Overall, hackathons are a hub of creativity and innovation, where like-minded individuals come together to create, learn, and make a difference.",
  ];
  const [currentParagraphIndex, setCurrentParagraphIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    const paragraph = paragraphsToType[currentParagraphIndex];

    if (currentText.length < paragraph.length) {
      const timeoutId = setTimeout(() => {
        setCurrentText(paragraph.slice(0, currentText.length + 1));
      }, 100);

      return () => {
        clearTimeout(timeoutId);
      };
    } else if (currentParagraphIndex < paragraphsToType.length - 1) {
      setCurrentText("");
      setCurrentParagraphIndex(currentParagraphIndex + 1);
    }
  }, [currentText, currentParagraphIndex]);

  return (
    <div className="AboutBody">
      <div className="typewriter-container">
        <h1 className="typewriter-title">About Hackanova 3.0</h1>
        <div className="typewriter-box">
          <p>
            {currentText}
            <span className="cursor"></span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TypewriterBox;
