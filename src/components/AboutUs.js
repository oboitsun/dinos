import React from "react";
import Heading from "./Heading";
import SubHeading from "./SubHeading";
import "../styles/about-us.scss";
import { useInView } from "react-intersection-observer";
import EndlessEggs from "./EndlessEggs";

export default function AboutUs() {
  const { ref, inView } = useInView({ threshold: 0.5 });
  return (
    <div id="about-us">
      <div className="my-container relative lg:-top-20">
        <img
          className="rock1 absolute top-1/4 right-full pr-10 w-1/12"
          src="/imgs/rock1.svg"
          alt="rock"
        />
        <img
          className=" absolute top-1/4 left-full pr-10 w-1/6"
          src="/imgs/turf1.png"
          alt="turf"
        />
        <div className="about-us-header">
          <div className="flex flex-col items-center">
            <Heading>
              <div className="flex justify-center lg:justify-start">
                <div
                  ref={ref}
                  className={`relative  block ${
                    inView ? "shadow-show" : "shadow-none"
                  }`}
                >
                  10,000 eggs <br className="lg:hidden" /> to hatch
                  <div className="map absolute right-1/2 translate-x-1/2 transform lg:translate-x-0 lg:right-0 bottom-0">
                    to hatch
                  </div>
                </div>
              </div>
            </Heading>
            <SubHeading>
              Dino World is a game centered around breedable, and oh-so-adorable
              creatures we call Dino World! Each cat is one-of-a-kind and 100%
              owned by you; it cannot be replicated, taken away, or destroyed.
            </SubHeading>
          </div>
        </div>
      </div>
      <div className="relative lg:-top-10">
        <EndlessEggs />
        {/* <EndlessEggs reverse /> */}
      </div>
    </div>
  );
}
