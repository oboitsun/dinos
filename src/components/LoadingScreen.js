import React from "react";
import Logo from "./Logo";
import { motion } from "framer-motion";
export default function LoadingScreen() {
  return (
    <motion.div
      key={1}
      exit={{ opacity: 0, y: "100vh" }}
      className="min-h-screen flex h-full w-full justify-center items-center"
    >
      <motion.div
        initial={{ y: "50vh", opacity: 0 }}
        animate={{ y: "0vh", opacity: 1 }}
        transition={{ ease: "easeInOut" }}
        className="w-3/4 h-auto animate-pulse flex justify-center items-center"
      >
        <Logo />
      </motion.div>
    </motion.div>
  );
}
