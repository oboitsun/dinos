import React from 'react';
import FaqItem from './FaqItem';
import '../styles/faq.scss';
import Heading from './Heading';
import SubHeading from './SubHeading';
import { useInView } from 'react-intersection-observer';

const faqs = [
  {
    qstn: 'How do I buy a  IC Dinos?',
    answr: `We are going to most likely be partnered with Entrepot for our initial sale of the eggs - this will be confirmed soon. You will be able to connect your Stoic Wallet and purchase from the Entrepot marketplace.
    `,
    back: 'orange-btn',
  },
  {
    qstn: 'What Blockhain and technology are  IC Dinos on?',
    answr: 'IC Dinos is based on DFINITY Internet Computer Blockchain.',
    back: 'yellow-btn',
  },
  {
    qstn: 'HOW MANY IC DINOS CAN I BUY?',
    answr: `20 dinosaurs max per wallet - this is to keep under control the Whales. Please note there are white-listed dinos who will get the eggs at a lower price then the normal dinos.
    `,
    back: 'green-btn',
  },
  {
    qstn: 'HOW LONG WILL IT TAKE FOR MY DINO EGG TO HATCH?',
    answr: `We do not have an exact time frame right now, but it will be announced shortly on when the eggs will be ready to be hatched. Don't worry you won't be waiting for too long!`,
    back: 'green-btn',
  },
  {
    qstn: 'HOW MUCH WILL AN IC DINOS EGG COST?',
    answr: `We will announce the pricing in Discord as well as the launch date when it's ready.`,
    back: 'turf-btn',
  },
];
export default function FAQ() {
  const { ref, inView } = useInView({ threshold: 0.5 });
  return (
    <div id="faq" className="relative">
      <div className=" relative">
        {/* <img
          className=" absolute top-0 right-full ml-10 w-1/12"
          src="/imgs/turf3.png"
          alt="turf"
        />
        <img
          className=" absolute top-0 left-full ml-5 w-1/12"
          src="/imgs/rock1.svg"
          alt="rock"
        />
        <img
          className=" absolute top-full left-0 mt-10 mr-5 w-1/6 opacity-40"
          src="/imgs/bone.png"
          alt="bone"
        /> */}
        <div className="">
          <Heading>
            <div className="flex justify-center">
              <span
                ref={ref}
                className={`relative  block ${
                  inView ? 'shadow-show' : 'shadow-none'
                }`}
              >
                FAQ'S <span className="map absolute right-0 bottom-0">'S</span>
              </span>
            </div>
          </Heading>
          <SubHeading>
            Some answers to the questions you may have about the IC Dinos
            project and NFT collection
          </SubHeading>
        </div>
        <div className="grid grid-cols-1  gap-4 lg:gap-4 w-full">
          {faqs.map((f, i) => (
            <FaqItem key={i} {...f} />
          ))}
        </div>
      </div>
    </div>
  );
}
