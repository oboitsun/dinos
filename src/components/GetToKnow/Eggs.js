import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";
import "react-lazy-load-image-component/src/effects/blur.css";
export default function Eggs() {
  const eggs = [
    { src: "/imgs/nfts/eggs/egg1.png", name: "egg" },
    { src: "/imgs/nfts/eggs/egg2.png", name: "egg" },
    { src: "/imgs/nfts/eggs/egg3.png", name: "egg" },
    { src: "/imgs/nfts/eggs/egg4.png", name: "egg" },
    { src: "/imgs/nfts/eggs/egg5.png", name: "egg" },
    { src: "/imgs/nfts/eggs/egg6.png", name: "egg" },
    { src: "/imgs/nfts/eggs/egg7.png", name: "egg" },
    { src: "/imgs/nfts/eggs/egg8.png", name: "egg" },
    { src: "/imgs/nfts/eggs/egg9.png", name: "egg" },
    { src: "/imgs/nfts/eggs/egg10.png", name: "egg" },
    { src: "/imgs/nfts/eggs/egg11.png", name: "egg" },
    { src: "/imgs/nfts/eggs/egg12.png", name: "egg" },
  ];
  const item = {
    hidden: {
      opacity: 0,
    },
    visible: (custom) => {
      return {
        opacity: 1,
        transition: { duration: 1, delay: custom * 0.05 },
      };
    },
  };
  return (
    <div className="min-h-[440px] grid grid-cols-2 lg:grid-cols-6 gap-y-8 gap-x-4">
      {eggs.map((d, i) => (
        <motion.div
          custom={i}
          variants={item}
          initial="hidden"
          animate="visible"
          key={i}
          className="flex flex-col items-center justify-center"
        >
          {/* <span className="text-white text-lg">{d.name}</span> */}
          <div className={`lg:min-h-[200px] nft-pic ${i % 2 === 0 ? "skew-left" : "skew-right"}`}>
            <LazyLoadImage className alt={d.name} effect="blur" src={d.src} />
          </div>

          <a
            href="https://entrepot.app/marketplace/icdinos"
            className="rounded-full text-white h-10 flex items-center gap-1 justify-center bg-orange w-full"
          >
            <span className="relative top-0.5">buy now</span>{" "}
            <img className="" src="/imgs/entrepot-logo-small.png" alt="buy on entrepot" />
          </a>
        </motion.div>
      ))}
    </div>
  );
}
