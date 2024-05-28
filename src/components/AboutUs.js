import React from "react";
import { useInView } from "react-intersection-observer";
import "../styles/about-us.scss";
import AboutUsEggItem from "./AboutUsEggItem";
import DelayedRender from "./DelayRender";
import Heading from "./Heading";
import SubHeading from "./SubHeading";

const dinos = [
  { dino: "/imgs/dinos/1.png", egg: "/imgs/eggs/1.png", back: "/imgs/nftBacks/1.jpg" },
  { dino: "/imgs/dinos/2.png", egg: "/imgs/eggs/2.png", back: "/imgs/nftBacks/7.jpg" },
  { dino: "/imgs/dinos/3.png", egg: "/imgs/eggs/3.png", back: "/imgs/nftBacks/2.jpg" },
  { dino: "/imgs/dinos/4.png", egg: "/imgs/eggs/4.png", back: "/imgs/nftBacks/4.jpg" },
  { dino: "/imgs/dinos/5.png", egg: "/imgs/eggs/5.png", back: "/imgs/nftBacks/5.jpg" },
  { dino: "/imgs/dinos/6.png", egg: "/imgs/eggs/6.png", back: "/imgs/nftBacks/6.jpg" },
  { dino: "/imgs/dinos/7.png", egg: "/imgs/eggs/7.png", back: "/imgs/nftBacks/3.jpg" },
  { dino: "/imgs/dinos/8.png", egg: "/imgs/eggs/8.png", back: "/imgs/nftBacks/8.jpg" },
];

export default function AboutUs({ setDiscord }) {
  const { ref, inView } = useInView({ threshold: 0.5 });
  const { ref: ref2, inView: inView2 } = useInView({ threshold: 0.5 });
  return (
    <div id="about-us" className="pt-12">
      <DelayedRender delay={500}>
        <div className="my-container relative  lg:pb-16">
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="flex flex-col ">
              <Heading>
                <div className="flex justify-center lg:justify-start">
                  <div
                    ref={ref}
                    className={`relative z-20 text-left block text-orange relative ${
                      inView ? "shadow-show" : "shadow-none"
                    }`}>
                    8888 Unique <br /> NFT Dinosaur <br /> Eggs to Hatch
                  </div>
                </div>
              </Heading>
              <SubHeading>
                IC Dinos is an NFT collection on the DFINITY Internet Computer blockchain centered
                around hatchable and oh-so-adorable dinosaurs that make up the Dino Planet. Each
                dino egg is unique and owned 100% by you. Your eggs will hatch when ready onto a
                baby dinosaur and then grow into a teen and adult in time. Enjoy the journey!
              </SubHeading>
              <a
                //   onClick={() => {
                //     setDiscord({ show: true, what: 'discord' });
                //   }}
                className="bg-black w-max text-white leading-none py-4 px-6 rounded-full cursor-pointer mt-2 hover:bg-orange transition-all duration-500"
                href="https://discord.com/invite/icdinosofficial">
                <span className="relative top-1">join the community</span>
              </a>
            </div>
            <div ref={ref2} className="grid grid-cols-4 gap-2 self-start">
              {dinos.map((item, i) => (
                <AboutUsEggItem key={i} i={i} inView2={inView2} item={item} />
              ))}
            </div>
          </div>
        </div>
      </DelayedRender>
    </div>
  );
}
