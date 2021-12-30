import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
function Roadmap2Point({ point }) {
  const { ref, inView } = useInView({ threshold: 0.2 });
  return (
    <div ref={ref} className="point-block">
      <div className="egg-wrapper">
        <img className="egg" src={point.egg} alt="roadmap point" />
        <img className="road" src="/imgs/roadmap-road.svg" alt="roadmap road" />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        className="text-part"
      >
        <p className="text-border heading">{point.month}</p>
        <p className="text">{point.text}</p>
      </motion.div>
    </div>
  );
}

export default Roadmap2Point;
