import { animate, delay } from "motion";

export const container = (direction, transDelay = 0, duration = 0.3) => ({
  initial: {
    x: direction === "LTR" ? -100 : direction === "RTL" ? 100 : 0,
    y: direction === "TTB" ? -100 : direction === "BTT" ? 100 : 0,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: duration,
      delay: transDelay,
      repeatType: "reverse",
    },
  },
});

export const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

export const underline = () => ({
  initial: { scale: 0 },
  animate: { scale: 0.9, transition: { delay: 0.5 } },
});

export const image = () => ({
  initial: { scale: 1 },
  animate: { scale: 1.1 },
});
