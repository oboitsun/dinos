import React from "react";
import Heading from "./Heading";
import SubHeading from "./SubHeading";
import "../styles/about-us.scss";
import AboutUsSliders from "./AboutUsSliders";
import { useInView } from "react-intersection-observer";
import AboutUsSlider2 from "./AboutUsSlider2";

export default function AboutUs() {
  const { ref, inView } = useInView({ threshold: 0.5 });
  return (
    <div id="about-us">
      <div className="my-container about-grid relative">
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
          <img className="egg" src="/imgs/eggs/4.png" alt="egg" />
          <div className="">
            <Heading>
              <div className="flex justify-center lg:justify-start">
                <span
                  ref={ref}
                  className={`relative  block ${inView ? "shadow-show" : "shadow-none"}`}
                >
                  About <br className="lg:hidden" /> dino world{" "}
                  <span className="map absolute">dino world</span>
                </span>
              </div>
            </Heading>
            <SubHeading>
              Dino World is a game centered around breedable, and oh-so-adorable creatures
              we call Dino World! Each cat is one-of-a-kind and 100% owned by you; it
              cannot be replicated, taken away, or destroyed.
            </SubHeading>
          </div>
        </div>
        <AboutUsSlider2 />
      </div>
    </div>
  );
}
