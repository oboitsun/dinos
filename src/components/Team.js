import React from "react";
import Heading from "./Heading";
import "../styles/team.scss";
import SubHeading from "./SubHeading";
import TeamMember from "./TeamMember";
import { useInView } from "react-intersection-observer";
const team = [
  {
    name: "Sereja",
    position: "designer",
    egg: "/imgs/eggs/1.png",
    dino: "/imgs/dinos/1.png",
  },
  {
    name: "Alesha",
    position: "designer",
    egg: "/imgs/eggs/2.png",
    dino: "/imgs/dinos/2.png",
  },
  {
    name: "KSY",
    position: "designer",
    egg: "/imgs/eggs/3.png",
    dino: "/imgs/dinos/6.png",
  },
  {
    name: "Sheldon",
    position: "designer",
    egg: "/imgs/eggs/5.png",
    dino: "/imgs/dinos/5.png",
  },
];
export default function Team() {
  const { ref, inView } = useInView({ threshold: 0.5 });
  return (
    <div id="team">
      <div className="my-container relative">
        <img
          className=" absolute top-0 right-full pr-10 w-1/6"
          src="/imgs/turf2.png"
          alt="turf"
        />
        <img
          className=" absolute top-1/4 left-full  w-1/6 opacity-50"
          src="/imgs/bone.png"
          alt="bone"
        />
        <Heading>
          <span
            ref={ref}
            className={`relative  block ${inView ? "shadow-show" : "shadow-none"}`}
          >
            Team
          </span>
        </Heading>
        <SubHeading>
          Donec gravida tellus nec elit consequat ultrices. Vivamus vel tincidunt mauris.
          Sed sollicitudin congue nunc ac iaculis. Vivamus tristique massa ante, et
          accumsan felis imperdiet at. In purus libero, venenatis dignissim massa ac,
          sodales malesuada quam. Aliquam in fermentum metus. Donec in mauris arcu.
        </SubHeading>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 pt-5 lg:pt-10">
          {team.map((member, i) => (
            <TeamMember key={i} bio={member} />
          ))}
        </div>
      </div>
    </div>
  );
}
