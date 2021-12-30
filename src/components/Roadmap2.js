import React from "react";
import Heading from "./Heading";
import SubHeading from "./SubHeading";
import "../styles/roadmap2.scss";
import Roadmap2Point from "./Roadmap2Point";
import { useInView } from "react-intersection-observer";
const roadmap = [
  {
    month: "March ",
    text: ` Donec gravida tellus nec elit consequat ultrices. Vivamus vel tincidunt mauris. Sed sollicitudin congue nunc ac iaculis. Vivamus tristique massa ante, et accumsan felis imperdiet at. In purus libero, venenatis dignissim massa ac, sodales malesuada quam. `,
    egg: "/imgs/eggs/big1.png",
  },
  {
    month: "April ",
    text: ` Donec gravida tellus nec elit consequat ultrices. Vivamus vel tincidunt mauris. Sed sollicitudin congue nunc ac iaculis. Vivamus tristique massa ante, et accumsan felis imperdiet at. In purus libero, venenatis dignissim massa ac, sodales malesuada quam. `,
    egg: "/imgs/eggs/big2.png",
  },
  {
    month: "May ",
    text: ` Donec gravida tellus nec elit consequat ultrices. Vivamus vel tincidunt mauris. Sed sollicitudin congue nunc ac iaculis. Vivamus tristique massa ante, et accumsan felis imperdiet at. In purus libero, venenatis dignissim massa ac, sodales malesuada quam. `,
    egg: "/imgs/eggs/big3.png",
  },
  {
    month: "June ",
    text: ` Donec gravida tellus nec elit consequat ultrices. Vivamus vel tincidunt mauris. Sed sollicitudin congue nunc ac iaculis. Vivamus tristique massa ante, et accumsan felis imperdiet at. In purus libero, venenatis dignissim massa ac, sodales malesuada quam. `,
    egg: "/imgs/eggs/big4.png",
  },
  {
    month: "July ",
    text: ` Donec gravida tellus nec elit consequat ultrices. Vivamus vel tincidunt mauris. Sed sollicitudin congue nunc ac iaculis. Vivamus tristique massa ante, et accumsan felis imperdiet at. In purus libero, venenatis dignissim massa ac, sodales malesuada quam. `,
    egg: "/imgs/eggs/big5.png",
  },
];
function Roadmap2() {
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

        <div className="roadmap__road-wrapper py-10 lg:py-16">
          {roadmap.map((r, i) => (
            <Roadmap2Point key={i} point={r} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Roadmap2;
