import React, { useEffect, useState } from "react";
import "./Test1.css"; // Create CountdownTimer.css for your styles

const CountdownTimer = () => {
  const [countToDate, setCountToDate] = useState(
    new Date().setHours(new Date().getHours() + 48)
  );
  const [previousTimeBetweenDates, setPreviousTimeBetweenDates] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = new Date();
      const timeBetweenDates = Math.ceil((countToDate - currentDate) / 1000);
      flipAllCards(timeBetweenDates);

      setPreviousTimeBetweenDates(timeBetweenDates);
    }, 250);

    return () => clearInterval(interval);
  }, [countToDate]);

  const flipAllCards = (time) => {
    const seconds = time % 60;
    const minutes = Math.floor(time / 60) % 60;
    const hours = Math.floor(time / 3600);
    const days = Math.floor(hours / 24);

    flip(document.querySelector("[data-days-tens]"), Math.floor(days / 10));
    flip(document.querySelector("[data-days-ones]"), days % 10);
    flip(document.querySelector("[data-hours-tens]"), Math.floor(hours % 24 / 10));
    flip(document.querySelector("[data-hours-ones]"), hours % 24 % 10);
    flip(document.querySelector("[data-minutes-tens]"), Math.floor(minutes / 10));
    flip(document.querySelector("[data-minutes-ones]"), minutes % 10);
    flip(document.querySelector("[data-seconds-tens]"), Math.floor(seconds / 10));
    flip(document.querySelector("[data-seconds-ones]"), seconds % 10);
  };

  const flip = (flipCard, newNumber) => {
    const topHalf = flipCard.querySelector(".top");
    const startNumber = parseInt(topHalf.textContent);
    if (newNumber === startNumber) return;

    const bottomHalf = flipCard.querySelector(".bottom");
    const topFlip = document.createElement("div");
    topFlip.classList.add("top-flip");
    const bottomFlip = document.createElement("div");
    bottomFlip.classList.add("bottom-flip");

    topHalf.textContent = startNumber;
    bottomHalf.textContent = startNumber;
    topFlip.textContent = startNumber;
    bottomFlip.textContent = newNumber;

    topFlip.addEventListener("animationstart", (e) => {
      topHalf.textContent = newNumber;
    });
    topFlip.addEventListener("animationend", (e) => {
      topFlip.remove();
    });
    bottomFlip.addEventListener("animationend", (e) => {
      bottomHalf.textContent = newNumber;
      bottomFlip.remove();
    });
    flipCard.appendChild(topFlip);
    flipCard.appendChild(bottomFlip);
  };

  return (
    <div className="containerbody">
      <div className="container">
        <div className="container-segment">
          <div className="segment-title">Days</div>
          <div className="segment">
            <div className="flip-card" data-days-tens>
              <div className="top">0</div>
              <div className="bottom">0</div>
            </div>
            <div className="flip-card" data-days-ones>
              <div className="top">0</div>
              <div className="bottom">0</div>
            </div>
          </div>
        </div>
        <div className="container-segment">
          <div className="segment-title">Hours</div>
          <div className="segment">
            <div className="flip-card" data-hours-tens>
              <div className="top">2</div>
              <div className="bottom">2</div>
            </div>
            <div className="flip-card" data-hours-ones>
              <div className="top">4</div>
              <div className="bottom">4</div>
            </div>
          </div>
        </div>
        <div className="container-segment">
          <div className="segment-title">Minutes</div>
          <div className="segment">
            <div className="flip-card" data-minutes-tens>
              <div className="top">0</div>
              <div className="bottom">0</div>
            </div>
            <div className="flip-card" data-minutes-ones>
              <div className="top">0</div>
              <div className="bottom">0</div>
            </div>
          </div>
        </div>
        <div className="container-segment">
          <div className="segment-title">Seconds</div>
          <div className="segment">
            <div className="flip-card" data-seconds-tens>
              <div className="top">0</div>
              <div className="bottom">0</div>
            </div>
            <div className="flip-card" data-seconds-ones>
              <div className="top">0</div>
              <div className="bottom">0</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
