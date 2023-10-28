import React, { useRef, useState, useEffect } from "react";
import "./Time.css";
const Time = () => {
  const [timeDays, setTimerDays] = useState("00");
  const [timeHours, setTimerHours] = useState("00");
  const [timeMinutes, setTimerMinutes] = useState("00");
  const [timeSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date("Dec 05, 2023 00:00:00").getTime();

    interval.current = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const Days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const Hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const Minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const Seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(Days);
        setTimerHours(Hours);
        setTimerMinutes(Minutes);
        setTimerSeconds(Seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  }, []);

  return (
    <div className="Timebody">
      <section className="Timer-Container">
        <section className="Timer">
          <div>
            <h2>The Registration Begins in:</h2>
          </div>

          <div>
            <section>
              <p>{timeDays}</p>
              <p>
                <small>Days</small>
              </p>
            </section>
            <span>:</span>
            <section>
              <p>{timeHours}</p>
              <p>
                <small>Hours</small>
              </p>
            </section>
            <span>:</span>
            <section>
              <p>{timeMinutes}</p>
              <p>
                <small>Minutes</small>
              </p>
            </section>
            <span>:</span>
            <section>
              <p>{timeSeconds}</p>
              <p>
                <small>Seconds</small>
              </p>
            </section>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Time;
