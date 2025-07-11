"use client";

import { motion } from "framer-motion";

const FloatingShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large floating circle */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-br from-green-200 to-emerald-200 rounded-full opacity-20 mix-blend-multiply"
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Medium floating circle */}
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-gradient-to-br from-emerald-200 to-teal-200 rounded-full opacity-25 mix-blend-multiply"
        animate={{
          y: [0, 25, 0],
          x: [0, -15, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Small floating squares */}
      <motion.div
        className="absolute top-1/2 left-1/5 w-6 h-6 bg-green-300 rotate-45 opacity-30"
        animate={{
          y: [0, -20, 0],
          rotate: [45, 135, 45],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/3 w-8 h-8 bg-emerald-300 rotate-45 opacity-25"
        animate={{
          y: [0, 15, 0],
          rotate: [45, -45, 45],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />

      {/* Floating dots */}
      <motion.div
        className="absolute top-2/3 right-1/5 w-4 h-4 bg-green-400 rounded-full opacity-40"
        animate={{
          y: [0, -10, 0],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-1/3 left-2/3 w-3 h-3 bg-teal-400 rounded-full opacity-50"
        animate={{
          y: [0, 12, 0],
          opacity: [0.5, 0.9, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      />
    </div>
  );
};

export default FloatingShapes;
