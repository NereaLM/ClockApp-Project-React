import React, { useState, useEffect } from "react";
import "./Countdown.css";

const Countdown = () => {
  const [time, setTime] = useState("");
  useEffect(() => {
    let countDownDate = new Date("March 16, 2022 16:35:00").getTime();
    let x = setInterval(() => {
      let now = new Date().getTime();

      let distance = countDownDate - now;

      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTime(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");

      if (distance < 0) {
        clearInterval(x);
        setTime("COUNTDOWN FINISHED");
      }

    }, 1000);
  }, []);
  return (
    <div className="countdown">
      <h1 className="title">Cuenta antrás</h1>
      <h2 className="count">{time}</h2>
    </div>
  );
};

export default Countdown;