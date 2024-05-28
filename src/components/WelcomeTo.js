import { motion } from "framer-motion";
import React from "react";
import Timer from "./Timer";
// import dynamic from "next/dynamic";
import ConnectWallet from "./ConnectWallet";
import LastEventInfo from "./LastEventInfo";
// const DynamicComponent = dynamic(() => import("./ConnectWallet"), { ssr: false });
export default function WelcomeTo({
  setShowPopup,
  showPopup,
  setUserAddress,
  userAddress,
  setDiscord,
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
    hidden: { x: "-60vw", opacity: 0, transition: { duration: 1 } },
  };
  return (
    <motion.div variants={cont} initial="hidden" animate="show" className="welcome-to ">
      <motion.p
        variants={item}
        key={1}
        className="title flex flex-col items-center  text-center mb-2 relative">
        <span className="text-white "> Hatch.grow.play.</span>

        <span className="title-big">Enter the Dino-verse now</span>

        {/* <img
          className="absolute bottom-0 left-1/2 w-4/5 transform translate-y-2/3 -translate-x-1/2"
          src="/imgs/logo.png"
          alt="IC Dinos  logo"
        /> */}
      </motion.p>
      <span className="lg:text-lg mb-2 text-center  text-white leading-none">
        An NFT based dinosaur project of 8888 dinos on the ICP blockchain
      </span>
      <motion.div className="  w-full lg:w-auto hidden lg:block" variants={item} key={4}>
        <Timer />
      </motion.div>
      <motion.div className="pb-3 " variants={item} key={3}>
        {" "}
        <LastEventInfo />{" "}
      </motion.div>
      <motion.div className="pb-3  w-full lg:w-auto lg:hidden " variants={item} key={4}>
        <Timer />
      </motion.div>

      <motion.div
        variants={item}
        key={5}
        className="w-full lg:w-auto connect-wallet z-20 grid grid-cols-2 lg:flex lg:flex-row items-center  gap-3">
        <ConnectWallet
          showPopup={showPopup}
          setShowPopup={setShowPopup}
          setUserAddress={setUserAddress}
          userAddress={userAddress}
        />
        <a
          href="https://discord.com/invite/icdinosofficial"
          // onClick={() => {
          //   setDiscord({ show: true, what: "discord" });
          // }}
          className="btn btn-discord w-full">
          {" "}
          Join The Discord
        </a>{" "}
        <img
          style={{ width: 64 }}
          className="block   h-auto col-span-2  mx-auto"
          src="/imgs/dfinity-logo.png"
          alt="dfinity-blockchain"
        />
      </motion.div>
    </motion.div>
  );
}
