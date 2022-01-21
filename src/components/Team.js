import React from 'react';
import Heading from './Heading';
import '../styles/team.scss';
import SubHeading from './SubHeading';
import TeamMember from './TeamMember';
import { useInView } from 'react-intersection-observer';
const team = [
  {
    name: 'Sereja',
    position: 'designer',
    egg: '/imgs/eggs/1.png',
    dino: '/imgs/dinos/1.png',
  },
  {
    name: 'Alesha',
    position: 'designer',
    egg: '/imgs/eggs/2.png',
    dino: '/imgs/dinos/2.png',
  },
  {
    name: 'KSY',
    position: 'designer',
    egg: '/imgs/eggs/3.png',
    dino: '/imgs/dinos/6.png',
  },
  {
    name: 'Sheldon',
    position: 'designer',
    egg: '/imgs/eggs/5.png',
    dino: '/imgs/dinos/5.png',
  },
];
export default function Team() {
  const { ref, inView } = useInView({ threshold: 0.5 });
  return (
    <div id="team" className="relative bg-team">
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
      <div className="bg-gradient-to-b from-team to-transparent absolute w-full h-10 top-0 left-0 "></div>
      <div className="bg-gradient-to-t from-team to-transparent absolute w-full h-20 bottom-0 left-0  z-10"></div>
      <div className="my-container relative team-grid">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 ">
          {team.map((member, i) => (
            <TeamMember key={i} bio={member} />
          ))}
        </div>
        <div className="relative z-10 pt-5 row-start-1 lg:col-start-2 pb-10 lg:pb-0">
          <Heading>
            <span
              ref={ref}
              className={`relative  block ${
                inView ? 'shadow-show' : 'shadow-none'
              }`}
            >
              Team
            </span>
          </Heading>
          <SubHeading>
            Donec gravida tellus nec elit consequat ultrices. Vivamus vel
            tincidunt mauris. Sed sollicitudin congue nunc ac.
          </SubHeading>
        </div>
      </div>
    </div>
  );
}
