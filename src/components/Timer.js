import React, { useEffect, useState } from "react";
import TimerCountItem from "./TimerCountItem";

import { calculateTimeLeft } from "./utils";
export default function Timer() {
  const dayX = new Date(Date.UTC(2021, 11, 1, 0, 0, 0)).getTime();
  const [timeLeft, setTimeLeft] = useState({
    hours: "0",
    days: "0",
    minutes: "0",
    seconds: "0",
  });

  useEffect(() => {
    let timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(dayX));
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  });
  return (
    <div className=" flex items-center  mb-4 lg:mb-6  relative ">
      <p className="text-white top-4 relative font-mont font-bold">
        Time till <br />
        launch:
      </p>
      <div className=" text-white  timer">
        <TimerCountItem time={timeLeft.days} text="Days" />

        <TimerCountItem time={timeLeft.hours} text="Hours" />

        <TimerCountItem time={timeLeft.minutes} text="Minutes" />

        <TimerCountItem time={timeLeft.seconds} text="Seconds" />
      </div>
    </div>
  );
}
