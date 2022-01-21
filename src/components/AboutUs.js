import React from 'react';
import Heading from './Heading';
import SubHeading from './SubHeading';
import '../styles/about-us.scss';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

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
  const { ref: ref2, inView: inView2 } = useInView({ threshold: 0.5 });
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
          <div ref={ref2} className="grid grid-cols-4 gap-2 self-start">
            {hamsters.map((item, i) => (
              <div
                className={`relative border-white rounded-lg border-4 overflow-hidden shadow-lg pic-template `}
                key={i}
              >
                <img
                  className="absolute top-0 left-0 w-full object-cover h-full"
                  src="/imgs/slider1-bg.png"
                  alt="bg"
                />
                <motion.img
                  initial={{ x: i > 3 ? '200%' : '-200%' }}
                  animate={
                    inView2 ? { x: '-50%' } : { x: i > 3 ? '200%' : '-200%' }
                  }
                  transition={{ duration: 0.4, delay: inView2 ? i * 0.1 : 0 }}
                  className={`absolute  pic z-10`}
                  src={item}
                  alt="ham"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
