import React from 'react';
import Heading from './Heading';
import SubHeading from './SubHeading';
import '../styles/roadmap3.scss';
import { useInView } from 'react-intersection-observer';
import RoadMap3Point from './RoadMap3Point';
const roadmap = [
  {
    isChecked: true,
    progress: 0,
    name: 'First Stage',
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
        isChecked: false,
        head: `Pre-sale of dinosaur eggs at a discounted rate`,
      },
      { isChecked: false, head: `Public sale for remainder of eggs` },
      {
        isChecked: false,
        head: `Second hand marketplace trading ,launched on Entrepot`,
      },
    ],
  },
  {
    isChecked: false,
    progress: 20,
    name: 'Second Stage',
    content: [
      {
        isChecked: false,
        head: ` Design and development of Dino Portal to manage dinos`,
      },
      { isChecked: false, head: ` Deploy Dino Portal on IC blockchain ` },
      { isChecked: false, head: ` Connect major wallets to our portal ` },
      {
        isChecked: false,
        head: ` Announce rarity charts for potential dinos to hatch`,
      },
      {
        isChecked: false,
        head: ` Announce dates for when hatching is available`,
      },
      { isChecked: false, head: ` Allow users to now hatch their eggs` },
      {
        isChecked: false,
        head: ` User can see their dinosaur and rarity/species`,
      },
    ],
  },
  {
    isChecked: false,
    progress: 0,
    name: 'Third Stage',
    content: [
      { isChecked: false, head: ` Ability to name your own dinosaur` },
      {
        isChecked: false,
        head: ` Launch of our own DINO token to be used in portal`,
      },
      {
        isChecked: false,
        head: ` Ability to interact and look after your dinosaur`,
      },
      { isChecked: false, head: ` Ability for your dinosaur to age with time` },
      {
        isChecked: false,
        head: ` NFT can change into baby, teenager and adult with age`,
      },
      {
        isChecked: false,
        head: ` Ability to buy other add-ons using ICP or DINOs`,
      },
      {
        isChecked: false,
        head: ` Network with Dinosaur FB Groups`,
      },
      {
        isChecked: false,
        head: ` Market to Mainstream Dinosaur lovers`,
      },
    ],
  },
  {
    isChecked: false,
    name: 'Fourth Stage',
    content: [
      { isChecked: false, head: ` Design and development of p2e game concept` },
      {
        isChecked: false,
        head: `Air-drops for existing holders for another similar collection to enter the dino-verse`,
      },
      {
        isChecked: false,
        head: `Leaderboard will be live and viewable on blockchain`,
      },
    ],
  },
  {
    isChecked: false,
    name: 'Fifth stage',
    content: [
      {
        isChecked: false,
        head: `Development of a p2e game which the dinosaurs will be used in and to earn DINO tokens`,
      },
      {
        isChecked: false,
        head: `Development and design concept of 3D Dinosaurs `,
      },
      {
        isChecked: false,
        head: `Development of augmented reality/virtual reality options for IC Dinos`,
      },
      {
        isChecked: false,
        head: `Look at options for IC Dinos to enter the meta-verse`,
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
          <span
            ref={ref}
            className={`relative  block ${
              inView ? 'shadow-show' : 'shadow-none'
            }`}
          >
            Roadmap
            {/* <span className="map absolute right-0 bottom-0">map</span> */}
          </span>
        </Heading>
        <SubHeading>
          We have been working hard on the roadmap for the IC Dinos project and
          the Dino World. We believe that a successful NFT project requires
          transparency and a clear vision for the future so that holders know
          what they can expect from the team and how their NFT's may be utilised
          in the future.
        </SubHeading>

        <div className="roadmap__road-wrapper pt-10 lg:pt-16">
          {roadmap.map((point, i) => (
            <RoadMap3Point idx={i} point={point} key={i} />
          ))}
        </div>
        <p className="text-center text-white  pb-16">
          *Please note this roadmap is subject to change at any time and will be
          updated
        </p>
      </div>
    </div>
  );
}

export default Roadmap3;
