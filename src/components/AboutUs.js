import React from 'react';
import Heading from './Heading';
import SubHeading from './SubHeading';
import '../styles/about-us.scss';
import { useInView } from 'react-intersection-observer';
import EndlessEggs from './EndlessEggs';
const EggTemplate = ({ src }) => (
  <>
    <img
      className="w-full object-cover h-full"
      src="/imgs/slider1-bg.png"
      alt="bg"
    />
    <img className={`absolute  pic z-10`} src={src} alt="ham" />
  </>
);
const hamsters = [
  '/imgs/eggs/1.png',
  '/imgs/eggs/2.png',
  '/imgs/eggs/3.png',
  '/imgs/eggs/4.png',
  '/imgs/eggs/5.png',
  '/imgs/eggs/6.png',
  '/imgs/eggs/7.png',
  '/imgs/eggs/4.png',
];
export default function AboutUs() {
  const { ref, inView } = useInView({ threshold: 0.5 });
  return (
    <div id="about-us">
      <div className="my-container relative lg:pb-16">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="flex flex-col ">
            <Heading>
              <div className="flex justify-center lg:justify-start">
                <div
                  ref={ref}
                  className={`relative text-left block text-orange ${
                    inView ? 'shadow-show' : 'shadow-none'
                  }`}
                >
                  10,000 <br /> eggs to hatch
                </div>
              </div>
            </Heading>
            <SubHeading>
              Dino World is a game centered around breedable, and oh-so-adorable
              creatures we call Dino World! Each cat is one-of-a-kind and 100%
              owned by you; it cannot be replicated, taken away, or destroyed.
            </SubHeading>
            <a
              className="bg-black w-max text-white leading-none py-4 px-6 rounded-full cursor-pointer mt-2"
              href="https://discord.com"
            >
              <span className="relative top-1">join the community</span>
            </a>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {hamsters.map((item, i) => (
              <div
                className={`relative border-white rounded-lg border-4 overflow-hidden shadow-lg `}
                key={i}
              >
                <EggTemplate src={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
