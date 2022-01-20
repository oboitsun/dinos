import React from 'react';
import Heading from './Heading';
import SubHeading from './SubHeading';
import '../styles/roadmap3.scss';
import { useInView } from 'react-intersection-observer';
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
    <div id="roadmap">
      <div className="my-container relative">
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
            <div
              className={`roadmap-point ${point.isChecked ? 'checked' : ''}`}
            >
              <div className="road-line top"></div>
              <div className="road-line bottom"></div>
              <div
                className={`point-mark ${point.isChecked ? 'checked' : ''}`}
              ></div>
              <div className="text-part">
                <p className="progress text-orange">
                  {point.progress}% {point.name}
                </p>
                <p className="description">{point.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Roadmap3;
