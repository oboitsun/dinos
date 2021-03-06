import React, { useState, useEffect } from "react";
import Slider2 from "./Slider2";
const slides = [
  { type: "dino", imgSrc: "/imgs/dinos/1.png" },
  { type: "egg", imgSrc: "/imgs/eggs/1.png" },
  { type: "dino", imgSrc: "/imgs/dinos/2.png" },
  { type: "egg", imgSrc: "/imgs/eggs/3.png" },
  { type: "dino", imgSrc: "/imgs/dinos/3.png" },
  { type: "egg", imgSrc: "/imgs/eggs/2.png" },
  { type: "dino", imgSrc: "/imgs/dinos/4.png" },
  { type: "egg", imgSrc: "/imgs/eggs/5.png" },
  { type: "dino", imgSrc: "/imgs/dinos/5.png" },
  { type: "egg", imgSrc: "/imgs/eggs/7.png" },
  { type: "dino", imgSrc: "/imgs/dinos/6.png" },
  { type: "egg", imgSrc: "/imgs/eggs/9.png" },
];
export default function AboutUsSlider2() {
  const backs = [
    "/imgs/slider1-bg.png",
    "/imgs/slider1-bg2.jpg",
    "/imgs/slider1-bg3.png",
  ];
  const [slideIdx, setSlideIdx] = useState(0);
  const [currentBG, setCurrentBG] = useState(backs[0]);

  const randomBgIndex = (backs) => {
    if (!backs?.length) return backs;
    return Math.floor(Math.random() * backs.length);
  };
  useEffect(() => {
    setCurrentBG(backs[randomBgIndex(backs)]);
  }, []);
  return (
    <>
      <div className="w-full overflow-hidden relative flex flex-col gap-5 items-center ">
        <div className="w-full h-full hidden lg:grid grid-cols-4 grid-rows-3 gap-4 ">
          {slides.map((slide, i) => (
            <div
              key={i}
              className={`rounded-xl border-4 border-white bg-black w-full h-full relative overflow-hidden ${
                i === slideIdx ? "" : "filter grayscale"
              }`}
            >
              <img
                className="absolute h-full object-cover  bottom-0"
                src={currentBG}
                alt="bg"
              />
              <img
                className={`slide-img`}
                src={slide.imgSrc}
                alt={`${slide.type}-${i}`}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="w-full overflow-hidden relative flex flex-col gap-5  items-center">
        <div className="slider ">
          <Slider2 bg={currentBG} setLegend={setSlideIdx} slides={slides} />
        </div>
        <div className="flex justify-center w-full px-2">
          <div id="swpr-prev2" className={`swpr-button flex items-center`}>
            <img src="/imgs/arrow-prev.svg" alt="prev slide" />
          </div>
          <p className="text-white text-4xl w-3/4 mx-auto text-center">
            {`${slides[slideIdx].type}#${slideIdx + 1}`}
          </p>
          <div id="swpr-next2" className={`swpr-button  flex items-center`}>
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
