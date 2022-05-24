import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

function RoadMap3Point({ point, idx }) {
  const { ref, inView } = useInView({ threshold: 0.5 });
  useEffect(() => {
    if (inView && idx > 0) {
      const prevChild = document.querySelectorAll(".roadmap-point")[idx - 1];
      prevChild.querySelector(".road-line.bottom").classList.add("checked");
    }
  }, [inView]);
  const half = Math.floor(point.content.length / 2);

  const firstHalf = point.content.slice(0, half + (point.content.length % 2));
  const secondHalf = point.content.slice(-half);
  const Point = ({ p, i }) => (
    <p key={i} className={`lg:text-base text-sm ${p.isChecked ? "text-orange" : "text-white"}`}>
      <span
        className={`inline-block w-3 h-3 rounded-sm  border-2 mr-2 ${
          p.isChecked ? "border-orange bg-orange" : "border-white"
        }`}
      >
        {p.isChecked && <img className="w-2 h-2" src="/imgs/check-mark.svg" alt="checked" />}
      </span>
      <span className="">{p.head}</span>
    </p>
  );
  point.name === "Fourth Stage" && console.log(firstHalf, secondHalf);
  return (
    <div ref={ref} className={`roadmap-point ${inView || point.isChecked ? "checked" : ""}`}>
      <div className="road-line top">
        <div className="yellow-line w-full bg-orange"></div>
      </div>
      <div className="road-line bottom">
        <div className="yellow-line w-full bg-orange"></div>
      </div>
      <div className={`point-mark ${inView || point.isChecked ? "checked" : ""}`}></div>
      <div className="text-part">
        <p
          className={`progress ${point.isChecked ? "text-orange" : " text-white"} text-border pb-5`}
        >
          {point.name}
        </p>
        <div className="grid lg:grid-cols-2">
          <div>
            {firstHalf.map((p, i) => (
              <Point p={p} i={i} />
            ))}
          </div>
          <div>
            {secondHalf.map((p, i) => (
              <Point p={p} i={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoadMap3Point;
