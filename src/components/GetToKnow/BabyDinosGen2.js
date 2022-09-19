import React, { useState, useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";
import "react-lazy-load-image-component/src/effects/blur.css";
export default function BabyDinosGen2() {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");

  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(setActive === "active" ? "0px" : `${content.current.scrollHeight + 64}px`);
  }
  const dinos = [
    { src: "/imgs/nfts/gen2/baby/liopleurodon.png", name: "Liopleurodon" },
    { src: "/imgs/nfts/gen2/baby/dacosaurus.png", name: "Dacosaurus" },
    { src: "/imgs/nfts/gen2/baby/mososaurus.png", name: "Mososaurus" },
    { src: "/imgs/nfts/gen2/baby/plesiosaur.png", name: "Plesiosaur" },
  ].sort((a, b) => a.name.localeCompare(b.name));
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
    <div>
      <div className="min-h-[280px] grid grid-cols-2 lg:grid-cols-5 gap-y-8 gap-x-4 pb-8">
        {dinos.map(
          (d, i) =>
            i < 10 && (
              <motion.div
                custom={i}
                variants={item}
                initial="hidden"
                animate="visible"
                className="flex flex-col items-center justify-center"
                key={d.name}
              >
                <span className="text-white text-lg">{d.name}</span>
                <div
                  className={`lg:min-h-[200px] nft-pic ${i % 2 === 0 ? "skew-left" : "skew-right"}`}
                >
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
            )
        )}
      </div>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className={`transition-all overflow-hidden  grid grid-cols-2 lg:grid-cols-5 gap-y-8 gap-x-4  ${
          setActive ? "pb-8" : ""
        }`}
      >
        {dinos.map(
          (d, i) =>
            i > 9 && (
              <motion.div
                custom={i - 9}
                variants={item}
                initial="hidden"
                animate={setActive ? "visible" : "hidden"}
                className="flex flex-col items-center justify-center gap-4"
                key={d.name}
              >
                <span className="text-white text-lg">{d.name}</span>
                <div
                  className={`lg:min-h-[200px] nft-pic ${i % 2 === 0 ? "skew-left" : "skew-right"}`}
                >
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
            )
        )}
      </div>
      <div className="w-full flex justify-center">
        {" "}
        <button
          className="bg-black w-max text-white leading-none py-4 px-6 rounded-full cursor-pointer mt-2 hover:bg-orange transition-all duration-500 mx-auto"
          onClick={toggleAccordion}
        >
          {" "}
          <span className="top-1 relative">
            {" "}
            {setActive === "active" ? "show less" : "show more"}
          </span>
        </button>
      </div>
    </div>
  );
}
