import React from "react";
import Heading from "./Heading";
import "../styles/Percs.scss";
import { useInView } from "react-intersection-observer";
import GetToKnow from "./GetToKnow";
const percs = [
  {
    icon: "/imgs/perks/badge.svg",
    head: "Buy and sell your dinos on our own marketplace or secondary one",
    text: "",
    btnStyle: "orange-btn",
  },
  {
    icon: "/imgs/perks/coins.svg",
    btnStyle: "yellow-btn",
    head: "Earn DINO tokens by taking place in our coming P2E game",
    text: "",
  },
  {
    icon: "/imgs/perks/star.svg",
    btnStyle: "green-btn",
    head: "Monthly collector challenges to receive prizes ",
    text: "",
  },
  {
    icon: "/imgs/perks/diamond.svg",
    head: "Many rarities of dinosaurs including super rare elementals and ultra rare/legendaries",
    text: "",
    btnStyle: "darkBrown-btn",
  },
  {
    icon: "/imgs/perks/breed.svg",
    btnStyle: "turf-btn",
    head: "Over 20 different species of dinosaurs in the collection",
    text: "",
  },
  {
    icon: "/imgs/perks/egg.svg",
    btnStyle: "brown-btn",
    head: "Dino eggs can hold some rare dinosaurs inside",
    text: "",
  },
];

function Percs() {
  const { ref, inView } = useInView({ threshold: 0.5 });
  return (
    <div id="perks" className="relative bg-team">
      <img
        className="w-full h-auto absolute bottom-0 transform translate-y-1/2 left-0 z-10"
        src="/imgs/border2.svg"
        alt="border"
      />
      <img
        className="w-full h-full object-cover absolute top-0 left-0 "
        src="/imgs/turf.svg"
        alt="turf"
      />

      {/* <div className="bg-gradient-to-b from-team to-transparent absolute w-full h-10 top-0 left-0 "></div>
      <div className="bg-gradient-to-t from-team to-transparent absolute w-full h-20 bottom-0 left-0  z-10"></div> */}
      <div className="my-container relative  ">
        <Heading>
          <span ref={ref} className={`relative  block ${inView ? "shadow-show" : "shadow-none"}`}>
            Perks for NFT Holders
          </span>
        </Heading>

        <div className="grid lg:grid-cols-3 gap-9 mt-9">
          {percs.map((p, i) => (
            <div key={i} className="flex">
              <div
                className={`${p.btnStyle} w-20 h-20 rounded-2xl flex items-center justify-center mr-4 flex-shrink-0`}
              >
                <img className="w-10 h-10" src={p.icon} alt="icon" />
              </div>
              <p className="text-white leading-relaxed">{p.head}</p>
            </div>
          ))}
        </div>
      </div>
      <GetToKnow />
    </div>
  );
}

export default Percs;
