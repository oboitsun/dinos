import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
export default function RoadmapPoint({ point, left }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });
  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, x: left ? "-100%" : "100%" }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: left ? "-90%" : "90%" }}
        className="roadmap-point"
      >
        <div className="relative pet-container">
          <img className="pet" src={point.dino} alt="dino" />
        </div>
        <div className="roadmap-text-cont">
          <p className="roadmap-heading">{point.month}</p>
          <p className="roadmap-text">{point.text}</p>
        </div>
      </motion.div>
    </div>
  );
}
