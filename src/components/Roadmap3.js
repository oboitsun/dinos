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
    name: 'Welcome ',
    text: `Donec gravida tellus nec elit consequat ultrices. Vivamus vel tincidunt mauris. `,
  },
  {
    isChecked: false,
    progress: 20,
    name: 'Warm up ',
    text: ` Donec gravida tellus nec elit consequat ultrices. Vivamus vel tincidunt mauris. Sed sollicitudin congue nunc ac iaculis. Vivamus tristique massa ante, et accumsan felis imperdiet at. In purus libero, venenatis dignissim massa ac, sodales malesuada quam. `,
  },
  {
    isChecked: false,
    progress: 40,
    name: 'Marketing',
    text: ` Donec gravida tellus nec elit consequat ultrices. Vivamus vel tincidunt mauris. Sed sollicitudin congue nunc ac iaculis. Vivamus tristique massa ante, et accumsan felis imperdiet at. In purus libero, venenatis dignissim massa ac, sodales malesuada quam. `,
  },
  {
    isChecked: false,
    progress: 60,
    name: 'Portal',
    text: ` Donec gravida tellus nec elit consequat ultrices. Vivamus vel tincidunt mauris. Sed sollicitudin congue nunc ac iaculis. Vivamus tristique massa ante, et accumsan felis imperdiet at. In purus libero, venenatis dignissim massa ac, sodales malesuada quam. `,
  },
  {
    isChecked: false,
    progress: 80,
    name: 'Online Minigames',
    text: ` Donec gravida tellus nec elit consequat ultrices. Vivamus vel tincidunt mauris. Sed sollicitudin congue nunc ac iaculis. Vivamus tristique massa ante, et accumsan felis imperdiet at. In purus libero, venenatis dignissim massa ac, sodales malesuada quam. `,
  },
  {
    isChecked: false,
    progress: 100,
    name: 'Giftuary',
    text: ` Donec gravida tellus nec elit consequat ultrices. Vivamus vel tincidunt mauris. Sed sollicitudin congue nunc ac iaculis. Vivamus tristique massa ante, et accumsan felis imperdiet at. In purus libero, venenatis dignissim massa ac, sodales malesuada quam. `,
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
