// Shared Framer Motion variants

export const staggerContainer = (staggerDelay = 0.1) => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay
    }
  }
});

export const fadeInUpItem = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 }
};

export const scaleInItem = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1 }
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
};
