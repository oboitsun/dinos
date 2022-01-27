import React from 'react';
import Heading from './Heading';
import '../styles/Percs.scss';
import { useInView } from 'react-intersection-observer';
const percs = [
  {
    icon: '/imgs/badge.svg',
    head: '25% of monthly sales will go back to holders',
    text: '',
    btnStyle: 'orange-btn',
  },
  {
    icon: '/imgs/coins.svg',
    btnStyle: 'yellow-btn',
    head: '25% of initial public sale held to buy back and stabilise floor',
    text: '',
  },
  {
    icon: '/imgs/star.svg',
    btnStyle: 'green-btn',
    head: 'the more dinosaurs you hold - the more benefits you get',
    text: '',
  },
  {
    icon: '/imgs/nft-utils/diamond.svg',
    head: 'Gold, Silver or Platinum are rare valuable eggs',
    text: '',
    btnStyle: 'darkBrown-btn',
  },
  {
    icon: '/imgs/breed.svg',
    btnStyle: 'turf-btn',
    head: 'Different rare breeds of dinosaurs (albinos, blue spotted etc) ',
    text: '',
  },
  {
    icon: '/imgs/egg.svg',
    btnStyle: 'brown-btn',
    head: 'Over 10 different species of dinosaurs in first collection',
    text: '',
  },
];

function Percs() {
  const { ref, inView } = useInView({ threshold: 0.5 });
  return (
    <div id="percs" className="relative bg-team">
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
      {/* <div className="bg-gradient-to-b from-team to-transparent absolute w-full h-10 top-0 left-0 "></div>
      <div className="bg-gradient-to-t from-team to-transparent absolute w-full h-20 bottom-0 left-0  z-10"></div> */}
      <div className="my-container relative  ">
        <Heading>
          <span
            ref={ref}
            className={`relative  block ${
              inView ? 'shadow-show' : 'shadow-none'
            }`}
          >
            Perks for NFT Holders
          </span>
        </Heading>

        <div className="grid lg:grid-cols-3 gap-9 mt-9">
          {percs.map((p, i) => (
            <div key={i} className="flex">
              <div
                className={`${p.btnStyle} w-20 h-20 rounded-2xl flex items-center justify-center mr-4 flex-shrink-0`}
              >
                <img className="w-10 h-10" src={p.icon} alt="icon" />
              </div>
              <p className="text-white leading-relaxed">{p.head}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Percs;
