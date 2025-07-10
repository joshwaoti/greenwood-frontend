"use client";

import { motion } from "framer-motion";

// variants matching Transition.js pattern
const transitionVariants = {
  initial: {
    x: "100%",
    width: "100%",
  },
  animate: {
    x: "0%",
    width: "0%",
  },
  exit: {
    x: ["0%", "100%"],
    width: ["0%", "100%"],
  },
};

export default function PageTransitionOverlay() {
  return (
    <>
      {/* Sheet 1 – white */}
      <motion.div
        className="pointer-events-none fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-white"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
      />
      {/* Sheet 2 – light green */}
      <motion.div
        className="pointer-events-none fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-green-100"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
      />
      {/* Sheet 3 – emerald */}
      <motion.div
        className="pointer-events-none fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-emerald-200"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.6, duration: 0.6, ease: "easeInOut" }}
      />
    </>
  );
}
