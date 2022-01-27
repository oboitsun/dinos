import React from 'react';
import { motion } from 'framer-motion';
import Timer from './Timer';
// import dynamic from "next/dynamic";
import ConnectWallet from './ConnectWallet';
// const DynamicComponent = dynamic(() => import("./ConnectWallet"), { ssr: false });
export default function WelcomeTo({
  setShowPopup,
  showPopup,
  setUserAddress,
  userAddress,
}) {
  const cont = {
    show: {
      x: 0,
      transition: { duration: 0.3, staggerChildren: 0.1, delayChildren: 0.3 },
    },
    hidden: { x: 0, transition: { duration: 1 } },
  };
  const item = {
    show: { x: 0, opacity: 1, transition: { duration: 0.3 } },
    hidden: { x: '-60vw', opacity: 0, transition: { duration: 1 } },
  };
  return (
    <motion.div
      variants={cont}
      initial="hidden"
      animate="show"
      className="welcome-to "
    >
      <motion.p
        variants={item}
        key={1}
        className="title flex flex-col items-center  text-center mb-2 relative"
      >
        <span className="text-white "> Hatch.grow.play.</span>

        <span className="title-big">Eggs on sale soon</span>

        {/* <img
          className="absolute bottom-0 left-1/2 w-4/5 transform translate-y-2/3 -translate-x-1/2"
          src="/imgs/logo.png"
          alt="IC Dinos  logo"
        /> */}
      </motion.p>
      <span className="text-lg mb-2 text-center  text-white leading-none">
        An NFT based dinosaur project of 8888 dinos on the ICP blockchain
      </span>
      <motion.div className="pb-5 lg:pb-0" variants={item} key={4}>
        <Timer />
      </motion.div>
      <motion.div
        variants={item}
        key={5}
        className="w-full lg:w-auto connect-wallet z-20 flex flex-col lg:flex-row items-center  gap-3"
      >
        <ConnectWallet
          header
          showPopup={showPopup}
          setShowPopup={setShowPopup}
          setUserAddress={setUserAddress}
          userAddress={userAddress}
        />
        <a className="block w-full" href="https://discord.com">
          <button className="btn btn-discord w-full"> Join The Discord</button>{' '}
        </a>
        <img
          style={{ width: 64 }}
          className="block   h-auto"
          src="/imgs/dfinity-logo.png"
          alt="dfinity-blockchain"
        />
      </motion.div>
    </motion.div>
  );
}
