import React from 'react';
import Heading from './Heading';
import SubHeading from './SubHeading';
import '../styles/roadmap.scss';
import RoadmapPoint from './RoadmapPoint';
import { useInView } from 'react-intersection-observer';
const roadmap = [
  {
    month: 'March ',
    text: ` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
    Ipsum has been`,
    dino: '/imgs/eggs/big1.png',
  },
  {
    month: 'April ',
    text: ` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
    Ipsum has been`,
    dino: '/imgs/eggs/big1.png',
  },
  {
    month: 'May ',
    text: ` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
    Ipsum has been`,
    dino: '/imgs/eggs/big1.png',
  },
  {
    month: 'June ',
    text: ` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
    Ipsum has been`,
    dino: '/imgs/eggs/big1.png',
  },
  {
    month: 'July ',
    text: ` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
    Ipsum has been`,
    dino: '/imgs/eggs/big1.png',
  },
];
export default function Roadmap() {
  const { ref, inView } = useInView({ threshold: 0.5 });
  return (
    <div id="roadmap">
      <div className="my-container relative">
        <img
          className="rock1 absolute top-0 left-3/4 w-1/12 opacity-50 lg:opacity-100"
          src="/imgs/rock2.svg"
          alt="rock"
        />
        <img
          className="rock1 absolute top-1/2 right-full mr-10 w-1/6"
          src="/imgs/rock3.svg"
          alt="rock"
        />
        <Heading>
          <div className="flex justify-center">
            <span
              ref={ref}
              className={`relative  block ${
                inView ? 'shadow-show' : 'shadow-none'
              }`}
            >
              Roadmap
              {/* <span className="map absolute right-0 bottom-0">map</span> */}
            </span>
          </div>
        </Heading>
        <SubHeading>
          We have been working hard on the roadmap for the IC Dinos project and
          the Dino World. We believe that a successful NFT project requires
          transparency and a clear vision for the future so that holders know
          what they can expect from the team and how their NFT's may be utilised
          in the future.
        </SubHeading>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 pt-10">
          {roadmap.map((r, i) => (
            <RoadmapPoint key={i} point={r} left={i % 2 === 0 && true} />
          ))}
        </div>
      </div>
    </div>
  );
}
