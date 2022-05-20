import React from "react";
import FaqItem from "./FaqItem";
import "../styles/faq.scss";
import Heading from "./Heading";
import SubHeading from "./SubHeading";
import { useInView } from "react-intersection-observer";

const faqs = [
  {
    qstn: "How do I buy a  An IC Dinos Egg?",
    answr: `You can purchase an egg at www.entrepot.app - they are our partners for our NFT collections.`,
    back: "orange-btn",
  },
  {
    qstn: "What Blockhain  are  IC Dinos on?",
    answr: "IC Dinos are on the DFINITY Internet Computer blockchain - no gas fees!",
    back: "yellow-btn",
  },
  {
    qstn: "HOW DO I GROW MY DINO?",
    answr: `There will be a GROW button soon added under your NFT in which you will be able to grow to a teenager.`,
    back: "green-btn",
  },
  {
    qstn: "HOW LONG WILL IT TAKE FOR MY DINO EGG TO HATCH?",
    answr: `You are able to hatch your dinosaur immediately using the "GROW" button in your collections on Entrepot.`,
    back: "brown-btn",
  },
  {
    qstn: "HOW MUCH WILL AN IC DINOS EGG COST?",
    answr: (
      <span>
        Eggs price is always changing depending on demand - check out current floor prices at{" "}
        <a style={{ textDecoration: "underline" }} href="https://entrepot.app/sale/icdinos">
          www.entrepot.app
        </a>
      </span>
    ),
    back: "darkBrown-btn",
  },
];
export default function FAQ() {
  const { ref, inView } = useInView({ threshold: 0.5 });
  return (
    <div id="faq" className="relative">
      <div className=" relative">
        {/* <img
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
        /> */}
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
            Some answers to the questions you may have about the IC Dinos project and NFT collection
          </SubHeading>
        </div>
        <div className="grid grid-cols-1  gap-4 lg:gap-4 w-full">
          {faqs.map((f, i) => (
            <FaqItem key={i} {...f} />
          ))}
        </div>
      </div>
    </div>
  );
}
