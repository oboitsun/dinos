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
      { isChecked: true, head: 'grow twitter', text: 'account and following' },
      { isChecked: true, head: 'design', text: 'of eggs and dinosaurs NFTs' },
      { isChecked: true, head: 'design and launch', text: 'website' },
      { isChecked: true, head: 'announce', text: 'roadmap' },
      {
        isChecked: false,
        head: 'launch discord',
        text: 'and assign pre-sale whitelist roles',
      },
      {
        isChecked: false,
        head: 'grow community',
        text: 'including giveaways and contents',
      },
      { isChecked: false, head: 'announce', text: 'partnership' },
      {
        isChecked: false,
        head: 'assign rarities',
        text: 'to dinosaur species includuing super rare mints',
      },
      {
        isChecked: false,
        head: 'announce dates',
        text: 'for pre-sale and public sale',
      },
      {
        isChecked: false,
        head: 'pre-sale of dinosaur eggs',
        text: 'at a discounted rate',
      },
      { isChecked: false, head: 'public sale', text: 'for remainder of eggs' },
      {
        isChecked: false,
        head: 'second hand marketplace',
        text: 'trading launched on entrepot',
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
        head: 'design & development',
        text: 'of dino portal to manage eggs hatching and dinos',
      },
      {
        isChecked: false,
        head: 'deploy dino portal',
        text: 'on ic blockchain and connect major wallets',
      },
      {
        isChecked: false,
        head: 'announce rarity charts',
        text: 'and teasers for dinosaurs that will hatch',
      },
      {
        isChecked: false,
        head: 'announce dates',
        text: 'in which hatching will be available',
      },
      {
        isChecked: false,
        head: 'allow users',
        text: 'to now hatch their eggs',
      },
      {
        isChecked: false,
        head: 'allow users',
        text: 'to see the dinosaur that inside of their egg and the species and gender',
      },
    ],
  },
  {
    isChecked: false,
    progress: 0,
    name: 'Third Stage',
    content: [
      {
        isChecked: false,
        head: 'ability',
        text: 'to name your own dinosaur',
      },
      {
        isChecked: false,
        head: 'development and launch',
        text: 'of our own dino token to be used in game',
      },
      {
        isChecked: false,
        head: 'ability yo interact',
        text: 'and look after your dinosaurs, tamagotchi style',
      },
      {
        isChecked: false,
        head: 'ability for your dinosaur ',
        text: 'to age with time - baby, teenager and adult',
      },
      {
        isChecked: false,
        head: 'ability to purchase',
        text: 'other add-ons and customisations for your pet dinosaur using icp or dino tokens',
      },
    ],
  },
  {
    isChecked: false,
    name: 'Fourth Stage',
    content: [
      {
        isChecked: false,
        head: 'development ',
        text: 'of augmented reality/virtual reality options for ic dinos',
      },
      {
        isChecked: false,
        head: 'air-drops',
        text: 'for existing holders for another similar collection to enter the dino-verse',
      },
      {
        isChecked: false,
        head: 'development',
        text: 'and design of 3d dinosaurs',
      },
    ],
  },
  {
    isChecked: false,
    name: 'Fifth stage',
    content: [
      {
        isChecked: false,
        head: 'development',
        text: 'of p2e game which dinosaurs will be used in and earn dino tokens',
      },
      {
        isChecked: false,
        head: 'leaderboard',
        text: 'will be live and viewable on blockchain',
      },
      {
        isChecked: false,
        head: 'look at options',
        text: 'for ic dinos to enter the meta-verse',
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
      <div className="bg-gradient-to-b from-roadmap to-transparent absolute w-full h-10 top-0 left-0 "></div>
      <div className="bg-gradient-to-t from-roadmap to-transparent absolute w-full h-10 bottom-0 left-0 z-10"></div>
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
          Donec gravida tellus nec elit consequat ultrices. Vivamus vel
          tincidunt mauris. Sed sollicitudin congue nunc ac iaculis. Vivamus
          tristique massa ante, et accumsan felis imperdiet at. In purus libero,
          venenatis dignissim massa ac, sodales malesuada quam. Aliquam in
          fermentum metus. Donec in mauris arcu.
        </SubHeading>

        <div className="roadmap__road-wrapper py-10 lg:py-16">
          {roadmap.map((point, i) => (
            <RoadMap3Point idx={i} point={point} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Roadmap3;
