import React, { useEffect, useState } from "react";
import TimerCountItem from "./TimerCountItem";

import { calculateTimeLeft } from "./utils";
export default function Timer() {
  const today = Date.now();
  const dayX = new Date(Date.UTC(2022, 2, 6, 15, 0, 0)).getTime();
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
    <div className=" flex items-center  mb-2 relative ">
      {dayX < today ? (
        <a
          href="https://entrepot.app/sale/icdinos"
          className="btn btn-entrepot text-xl lg:text-4xl text-white"
        >
          <span className="relative top-1">Buy Now on Entrepot</span>
        </a>
      ) : (
        <>
          <p className="text-white leading-none top-2 mr-1 transform  relative font-mont font-bold">
            Time till <br />
            launch:
          </p>
          <div className=" text-white  timer">
            <TimerCountItem time={timeLeft.days} text="Days" />

            <TimerCountItem time={timeLeft.hours} text="Hours" />

            <TimerCountItem time={timeLeft.minutes} text="Minutes" />

            <TimerCountItem time={timeLeft.seconds} text="Seconds" />
          </div>
        </>
      )}
    </div>
  );
}
