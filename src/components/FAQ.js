import React from "react";
import FaqItem from "./FaqItem";
import "../styles/faq.scss";
import Heading from "./Heading";
import SubHeading from "./SubHeading";
import { useInView } from "react-intersection-observer";

const faqs = [
  { qstn: "How do I buy a Dino Planet?", answr: "The Answer" },
  { qstn: "What Blockhain and technology are Dino Planet on?", answr: "The Answer" },
  { qstn: "What can I do with once I get my Dino Planet NFT?", answr: "The Answer" },
  { qstn: "How many Dino Planet can I buy?", answr: "The Answer" },
];
export default function FAQ() {
  const { ref, inView } = useInView({ threshold: 0.5 });
  return (
    <div id="faq" className="relative">
      <div className="my-container relative">
        <img
          className=" absolute top-0 right-full ml-10 w-1/12"
          src="/imgs/turf3.png"
          alt="turf"
        />
        <img
          className=" absolute top-0 left-full ml-5 w-1/12"
          src="/imgs/rock1.svg"
          alt="rock"
        />
        <img
          className=" absolute top-full left-0 mt-10 mr-5 w-1/6 opacity-40"
          src="/imgs/bone.png"
          alt="bone"
        />
        <div className="">
          <Heading>
            <div className="flex justify-center">
              <span
                ref={ref}
                className={`relative  block ${inView ? "shadow-show" : "shadow-none"}`}
              >
                FAQ'S <span className="map absolute right-0 bottom-0">'S</span>
              </span>
            </div>
          </Heading>
          <SubHeading>
            Donec gravida tellus nec elit consequat ultrices. Vivamus vel tincidunt
            mauris. Sed sollicitudin congue nunc ac iaculis. Vivamus tristique massa ante,
            et accumsan felis imperdiet at. In purus libero, venenatis dignissim massa ac,
            sodales malesuada quam. Aliquam in fermentum metus. Donec in mauris arcu.
          </SubHeading>
        </div>
        <div className="grid grid-cols-1  gap-5 lg:gap-10 w-full">
          {faqs.map((f, i) => (
            <FaqItem key={i} {...f} />
          ))}
        </div>
      </div>
    </div>
  );
}
