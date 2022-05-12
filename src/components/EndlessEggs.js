import React from "react";
import "../styles/endlessEggs.scss";
const hamsters = [
  "/imgs/eggs/1.png",
  "/imgs/eggs/2.png",
  "/imgs/eggs/3.png",
  "/imgs/eggs/4.png",
  "/imgs/eggs/5.png",
  "/imgs/eggs/6.png",
  "/imgs/eggs/7.png",
];
const EggTemplate = ({ src }) => (
  <>
    <img className="w-full " src="/imgs/slider1-bg.png" alt="bg" />
    <img className={`absolute  pic z-10`} src={src} alt="egg" />
  </>
);
export default function EndlessEggs({ reverse = false }) {
  return (
    <div className="endless-hamsters overflow-hidden ">
      <div className={`relative w-full endless  ${reverse ? "reverse" : ""}`}>
        <div className="hams ">
          <ul>
            {hamsters.map((h, i) => (
              <li
                className={`relative border-white rounded-lg border-2 overflow-hidden ${
                  i > 3 && "hidden lg:block"
                }`}
                key={i}
              >
                <EggTemplate src={h} />
              </li>
            ))}
            <li
              className="relative border-white rounded-lg border-2 overflow-hidden z-10  hidden 2xl:block"
              key={100}
            >
              <EggTemplate src={`/imgs/eggs/10.png`} />
            </li>
          </ul>
        </div>
        <div className="hams">
          <ul>
            {hamsters.map((h, i) => (
              <li
                className={`relative border-white rounded-lg border-2 overflow-hidden ${
                  i > 3 && "hidden lg:block"
                }`}
                key={i}
              >
                <EggTemplate src={h} />
              </li>
            ))}
            <li
              className="relative border-white rounded-lg border-2 overflow-hidden z-10  hidden 2xl:block"
              key={100}
            >
              <EggTemplate src={`/imgs/eggs/10.png`} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
