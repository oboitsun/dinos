import React, { useState } from "react";
import Slider from "./Slider";
const dinos = [
  "/imgs/dinos/1.png",
  "/imgs/dinos/2.png",
  "/imgs/dinos/3.png",
  "/imgs/dinos/4.png",
];
const eggs = [
  "/imgs/eggs/1.png",
  "/imgs/eggs/2.png",
  "/imgs/eggs/3.png",
  "/imgs/eggs/5.png",
];
export default function AboutUsSliders() {
  const [dinoIdx, setDinoIdx] = useState(0);
  const [eggsIdx, setEggsIdx] = useState(0);
  return (
    <>
      <div className="w-full overflow-hidden relative flex flex-col gap-5 items-center ">
        <div className="slider ">
          <Slider setLegend={setDinoIdx} idx={0} slides={dinos} />
        </div>
        <div className="flex justify-center w-full px-2">
          <div id="swpr-prev" className={`swpr-button flex items-center`}>
            <img src="/imgs/arrow-prev.svg" alt="prev slide" />
          </div>
          <p className="text-white text-4xl w-3/4 mx-auto text-center">
            dino#{dinoIdx + 1}
          </p>
          <div id="swpr-next" className={`swpr-button  flex items-center`}>
            <img
              className=" transform rotate-180"
              src="/imgs/arrow-prev.svg"
              alt="next slide"
            />
          </div>
        </div>
      </div>
      <div className="w-full overflow-hidden relative flex flex-col gap-5  items-center">
        <div className="slider ">
          <Slider setLegend={setEggsIdx} slides={eggs} />
        </div>
        <div className="flex justify-center w-full px-2">
          <div id="swpr-prev1" className={`swpr-button flex items-center`}>
            <img src="/imgs/arrow-prev.svg" alt="prev slide" />
          </div>
          <p className="text-white text-4xl w-3/4 mx-auto text-center">
            Egg#{eggsIdx + 1}
          </p>
          <div id="swpr-next1" className={`swpr-button flex items-center`}>
            <img
              className=" transform rotate-180"
              src="/imgs/arrow-prev.svg"
              alt="next slide"
            />
          </div>
        </div>
      </div>
    </>
  );
}
