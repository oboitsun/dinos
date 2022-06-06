import React from "react";
import Heading from "./Heading";
import SubHeading from "./SubHeading";
import "../styles/roadmap3.scss";
import { useInView } from "react-intersection-observer";
import RoadMap3Point from "./RoadMap3Point";
const roadmap = [
  {
    isChecked: true,
    progress: 0,
    name: "First Stage",
    content: [
      { isChecked: true, head: `Grow Twitter Account and following` },
      { isChecked: true, head: `Design of Dino eggs and Dinosaurs NFT’s ` },
      { isChecked: true, head: `Design and launch website` },
      { isChecked: true, head: `Announce roadmap` },
      {
        isChecked: true,
        head: `Launch Discord and assign pre-sale whitelist roles`,
      },
      {
        isChecked: true,
        head: `Grow community including giveaways and contests`,
      },
      { isChecked: true, head: `Announce partnerships/collabs ` },
      {
        isChecked: true,
        head: `Assign rarities to dinosaur species including super rare mints`,
      },
      { isChecked: true, head: `Announce dates for pre-sale and public sale` },
      {
        isChecked: true,
        head: `Pre-sale of dinosaur eggs at a discounted rate`,
      },
      { isChecked: true, head: `Public sale for remainder of eggs` },
      {
        isChecked: true,
        head: `Second hand marketplace trading ,launched on Entrepot`,
      },

      {
        isChecked: true,
        head: `Hatch date 2 weeks after minting date to see baby dinosaur`,
      },
      {
        isChecked: true,
        head: `More sneak peaks done for the project before dinos are hatched`,
      },
      {
        isChecked: true,
        head: `User can now hatch eggs and see rarity of the dinosaurs`,
      },
    ],
  },
  {
    isChecked: true,
    progress: 20,
    name: "Second Stage",
    content: [
      {
        isChecked: true,
        head: `Design of NFT air-drop for OG/Whitelisted/Wallet Holders`,
      },
      {
        isChecked: true,
        head: ` Air-drop of NFT for OG/Whitelisted/Wallet Holders`,
      },
      {
        isChecked: true,
        head: `Announcement of monthly collectors challenge rewards`,
      },
      {
        isChecked: true,
        head: `Announcement and sneak peaks of the teenager age dinosaurs`,
      },
      {
        isChecked: true,
        head: `Announcement and sneak peak of GEN2 dinos and how fit into project`,
      },
      {
        isChecked: true,
        head: `Arrange air-drops for monthly challenges rewards as required`,
      },
      {
        isChecked: true,
        head: `Design and development of Dino Portal to manage dinos`,
      },
      {
        isChecked: true,
        head: `Deploy Dino Portal on IC blockchain`,
      },
      {
        isChecked: true,
        head: `Connect major wallets to our portal`,
      },
      {
        isChecked: true,
        head: `User can see their dinosaur and meta-data of their NFTs`,
      },
    ],
  },
  {
    isChecked: false,
    progress: 0,
    name: "Third Stage",
    content: [
      {
        isChecked: false,
        head: `Ability to name your own dinosaur and save in Dino Portal`,
      },
      {
        isChecked: false,
        head: `Launch of our own DINO token to be used in portal and purchased using ICP`,
      },
      //   {
      //     isChecked: false,
      //     head: ` Ability to interact and look after your dinosaur`,
      //   },
      {
        isChecked: false,
        head: `Implementing the aging functionality for dinosaurs to age - teenager and adult`,
      },
      {
        isChecked: false,
        head: `Ability to buy other items in the STORE part of the Dino Portal using DINO tokens`,
      },
      {
        isChecked: false,
        head: ` Network with dinosaur groups online and off-line`,
      },
      {
        isChecked: false,
        head: `Extra marketing done `,
      },
    ],
  },
  {
    isChecked: false,
    name: "Fourth Stage",
    content: [
      {
        isChecked: false,
        head: `Design concepts for the P2E game which NFTs can be used within`,
      },
      {
        isChecked: false,
        head: `Potential other drop of new species to add to the GEN2 pool for collectors rewards/store 
        `,
      },
      {
        isChecked: false,
        head: ` More collectors challenges and rewards each month for holders that can be met`,
      },
    ],
  },
  {
    isChecked: false,
    name: "Fifth stage",
    content: [
      {
        isChecked: false,
        head: `Whitepaper and more information for the P2E game concept`,
      },

      {
        isChecked: false,
        head: `Development of P2E game which the dinosaurs will be used in and to earn DINO token`,
      },
      {
        isChecked: false,
        head: `Leaderboard will be live and viewable on blockchain`,
      },
      {
        isChecked: false,
        head: `Development and design concept of 3D Dinosaurs`,
      },
    ],
  },
];
function Roadmap3() {
  const { ref, inView } = useInView({ threshold: 0.5 });

  return (
    <div id="roadmap" className="relative bg-roadmap">
      <img
        className="w-full h-auto absolute bottom-0 transform translate-y-1/2 left-0 z-10"
        src="/imgs/border3.svg"
        alt="border"
      />
      <img
        className="w-full h-full object-cover absolute top-0 left-0 z-10"
        src="/imgs/turf.svg"
        alt="turf"
      />
      {/* <div className="bg-gradient-to-b from-roadmap to-transparent absolute w-full h-10 top-0 left-0 "></div>
      <div className="bg-gradient-to-t from-roadmap to-transparent absolute w-full h-10 bottom-0 left-0 z-10"></div> */}
      <div className="my-container relative z-10">
        <Heading>
          <span ref={ref} className={`relative  block ${inView ? "shadow-show" : "shadow-none"}`}>
            Roadmap
            {/* <span className="map absolute right-0 bottom-0">map</span> */}
          </span>
        </Heading>
        <SubHeading>
          We have been working hard on the roadmap for the IC Dinos project and the Dino World. We
          believe that a successful NFT project requires transparency and a clear vision for the
          future so that holders know what they can expect from the team and how their NFT's may be
          utilised in the future.
        </SubHeading>

        <div className="roadmap__road-wrapper pt-10 lg:pt-16">
          {roadmap.map((point, i) => (
            <RoadMap3Point idx={i} point={point} key={i} />
          ))}
        </div>
        <p className="text-center text-white  pb-16">
          *Please note this roadmap is subject to change at any time and will be updated
        </p>
      </div>
    </div>
  );
}

export default Roadmap3;
