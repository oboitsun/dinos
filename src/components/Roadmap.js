import React from "react";
import Heading from "./Heading";
import SubHeading from "./SubHeading";
import "../styles/roadmap.scss";
import RoadmapPoint from "./RoadmapPoint";
import { useInView } from "react-intersection-observer";
const roadmap = [
  {
    month: "March ",
    text: ` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
    Ipsum has been`,
    dino: "/imgs/eggs/big1.png",
  },
  {
    month: "April ",
    text: ` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
    Ipsum has been`,
    dino: "/imgs/eggs/big1.png",
  },
  {
    month: "May ",
    text: ` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
    Ipsum has been`,
    dino: "/imgs/eggs/big1.png",
  },
  {
    month: "June ",
    text: ` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
    Ipsum has been`,
    dino: "/imgs/eggs/big1.png",
  },
  {
    month: "July ",
    text: ` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
    Ipsum has been`,
    dino: "/imgs/eggs/big1.png",
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
                inView ? "shadow-show" : "shadow-none"
              }`}
            >
              Roadmap <span className="map absolute right-0 bottom-0">map</span>
            </span>
          </div>
        </Heading>
        <SubHeading>
          Donec gravida tellus nec elit consequat ultrices. Vivamus vel
          tincidunt mauris. Sed sollicitudin congue nunc ac iaculis. Vivamus
          tristique massa ante, et accumsan felis imperdiet at. In purus libero,
          venenatis dignissim massa ac, sodales malesuada quam. Aliquam in
          fermentum metus. Donec in mauris arcu.
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
