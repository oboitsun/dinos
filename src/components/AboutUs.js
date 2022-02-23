import React from 'react';
import Heading from './Heading';
import SubHeading from './SubHeading';
import '../styles/about-us.scss';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const dinos = [
  { egg: '/imgs/eggs/1.png', back: '/imgs/nftBacks/1.jpg' },
  { egg: '/imgs/eggs/2.png', back: '/imgs/nftBacks/2.jpg' },
  { egg: '/imgs/eggs/3.png', back: '/imgs/nftBacks/3.jpg' },
  { egg: '/imgs/eggs/4.png', back: '/imgs/nftBacks/4.jpg' },
  { egg: '/imgs/eggs/5.png', back: '/imgs/nftBacks/3.jpg' },
  { egg: '/imgs/eggs/6.png', back: '/imgs/nftBacks/1.jpg' },
  { egg: '/imgs/eggs/7.png', back: '/imgs/nftBacks/4.jpg' },
  { egg: '/imgs/eggs/5.png', back: '/imgs/nftBacks/2.jpg' },
];

export default function AboutUs({ setDiscord }) {
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
                  className={`relative z-20 text-left block text-orange ${
                    inView ? 'shadow-show' : 'shadow-none'
                  }`}
                >
                  8888 Unique <br /> NFT Dinosaur <br /> Eggs to Hatch
                </div>
              </div>
            </Heading>
            <SubHeading>
              IC Dinos is an NFT collection on the DFINITY Internet Computer
              blockchain centered around hatchable and oh-so-adorable dinosaurs
              that make up the Dino Planet. Each dino egg is unique and owned
              100% by you. Your eggs will hatch when ready onto a baby dinosaur
              and then grow into a teen and adult in time. Enjoy the journey!
            </SubHeading>
            <button
              onClick={() => {
                setDiscord({ show: true, what: 'discord' });
              }}
              className="bg-black w-max text-white leading-none py-4 px-6 rounded-full cursor-pointer mt-2 hover:bg-orange transition-all duration-500"
              href="#"
            >
              <span className="relative top-1">join the community</span>
            </button>
          </div>
          <div ref={ref2} className="grid grid-cols-4 gap-2 self-start">
            {dinos.map((item, i) => (
              <div
                className={`relative border-white rounded-lg border-4 overflow-hidden shadow-lg pic-template `}
                key={i}
              >
                <img
                  className="absolute top-0 left-0 w-full object-cover h-full"
                  src={item.back}
                  alt="bg"
                />
                <motion.img
                  initial={{ x: i > 3 ? '200%' : '-200%' }}
                  animate={
                    inView2
                      ? {
                          x: '-50%',
                          transition: {
                            duration: 0.4,
                            delay: inView2 ? i * 0.1 : 0,
                          },
                        }
                      : { x: i > 3 ? '200%' : '-200%' }
                  }
                  className={`absolute  pic z-10`}
                  src={item.egg}
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
