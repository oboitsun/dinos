import React from "react";
import Logo from "./Logo";
import { motion } from "framer-motion";
export default function LoadingScreen() {
  return (
    <div className="min-h-screen flex h-full w-full justify-center items-center bg-turf">
      <motion.div
        initial={{ y: "50vh", opacity: 0 }}
        animate={{ y: "0vh", opacity: 1 }}
        transition={{ ease: "easeInOut" }}
        className="w-3/4 h-auto animate-pulse flex justify-center items-center"
      >
        <Logo />
      </motion.div>
    </div>
  );
}
