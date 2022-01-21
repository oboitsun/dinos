import React from 'react';
import '../styles/nft-utils.scss';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
const NFTUtilsItem = ({ btnStyle, iconSrc, heading, text, delay, inView }) => {
  return (
    <motion.div
      initial={{ y: ['100vw'], opacity: 0 }}
      animate={
        inView
          ? { y: ['2vw', '0vw'], opacity: 1 }
          : { opacity: 0, y: ['100vw'] }
      }
      transition={
        inView ? { delay: 0.2 * delay, duration: 0.6 } : { delay: 0.3 }
      }
      className={`flex flex-col items-center NUI rounded-2xl box-border ${btnStyle} shadow-lg`}
    >
      <div className="NUI__circle overflow-hidden">
        <motion.img
          // initial={{ y: '150%' }}
          // animate={inView ? { y: '-50%', x: '-50%' } : { y: '150%' }}
          // transition={inView ? { delay: 0.2 * delay + 1 } : { delay: 0 }}
          className="NUI__icon"
          src={iconSrc}
          alt={`${heading} utility`}
        />
      </div>
      <div className="NUI__textpart">
        <p className="NUI__heading">{heading}</p>
        <p className="NUI__text">{text}</p>
      </div>
    </motion.div>
  );
};

const nft_utils = [
  {
    iconSrc: '/imgs/nft-utils/favorite.svg',
    heading: 'royalty',
    text: 'monthly royalty back to holders',
    style: 'orange-btn',
  },
  {
    iconSrc: '/imgs/nft-utils/airdrop.svg',
    heading: 'airdrops',
    text: 'Future airdrops to IC dinos holders',
    style: 'yellow-btn',
  },
  {
    iconSrc: '/imgs/nft-utils/globe.svg',
    heading: 'portal',
    text: 'Access to the IC dinos Portal',
    style: 'green-btn',
  },
  {
    iconSrc: '/imgs/nft-utils/gamepad.svg',
    heading: 'games',
    text: 'More cards - more games!',
    style: 'turf-btn',
  },
  {
    iconSrc: '/imgs/nft-utils/diamond.svg',
    heading: 'Perks',
    text: 'Secret Perks for Cardholders',
    style: 'brown-btn',
  },
];
function NFTUtils() {
  const { ref, inView } = useInView({ threshold: 0.2 });
  return (
    <div className="my-container">
      <div
        ref={ref}
        className="grid grid-cols-2 lg:grid-cols-5 gap-5 xl:gap-10 mb-5 nft-utils-wrapper"
      >
        {nft_utils.map((item, i) => (
          <NFTUtilsItem
            btnStyle={item.style}
            delay={i}
            inView={inView}
            {...item}
            key={i}
          />
        ))}
      </div>
    </div>
  );
}

export default NFTUtils;