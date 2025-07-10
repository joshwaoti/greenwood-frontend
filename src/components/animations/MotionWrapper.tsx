"use client";

import { motion, AnimatePresence, TargetAndTransition } from "framer-motion";
import { ReactNode } from "react";
import { ScrollAnimationProps } from "@/types";
import {
  fadeInUp,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "./variants";

interface MotionWrapperProps {
  children: ReactNode;
  className?: string;
  variant?:
    | "fadeInUp"
    | "fadeInDown"
    | "fadeInLeft"
    | "fadeInRight"
    | "scaleIn";
  delay?: number;
  duration?: number;
  once?: boolean;
  whileHover?: TargetAndTransition;
  whileTap?: TargetAndTransition;
}

const variantMap = {
  fadeInUp,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  scaleIn,
};

export const MotionWrapper = ({
  children,
  className = "",
  variant = "fadeInUp",
  delay = 0,
  duration = 0.6,
  once = true,
  whileHover,
  whileTap,
}: MotionWrapperProps) => {
  const selectedVariant = variantMap[variant];

  return (
    <motion.div
      className={className}
      variants={selectedVariant}
      initial="initial"
      whileInView="animate"
      viewport={{ once, margin: "-100px" }}
      whileHover={whileHover}
      whileTap={whileTap}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
};

// Scroll-triggered animation component that works with GSAP
export const ScrollAnimation = ({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  direction = "up",
}: ScrollAnimationProps) => {
  const getVariant = () => {
    switch (direction) {
      case "up":
        return fadeInUp;
      case "down":
        return fadeInDown;
      case "left":
        return fadeInLeft;
      case "right":
        return fadeInRight;
      default:
        return fadeInUp;
    }
  };

  const variant = getVariant();

  return (
    <motion.div
      className={className}
      variants={variant}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
};

// Page transition wrapper
export const PageTransition = ({ children }: { children: ReactNode }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

// Enhanced button with motion
export const MotionButton = ({
  children,
  className = "",
  onClick,
  disabled = false,
  ...props
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  [key: string]: any;
}) => {
  return (
    <motion.button
      className={className}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      transition={{ duration: 0.2 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};
