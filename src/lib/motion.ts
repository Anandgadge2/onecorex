// Framer Motion Variants for OneCoreX
import { Variants, Easing } from 'framer-motion';

// Premium easing functions for smoother animations
export const smoothEase:Easing = [0.25, 0.46, 0.45, 0.94];
export const premiumEase:Easing = [0.22, 1, 0.36, 1];
export const slowEase:Easing = [0.4, 0, 0.2, 1];

// Fade In Up - smoother and more elegant
export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: smoothEase,
    }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: {
      duration: 0.4,
      ease: slowEase,
    }
  },
};

// Fade In Scale - more subtle
export const fadeInScale: Variants = {
  initial: { opacity: 0, scale: 0.97 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.7,
      ease: premiumEase,
    }
  },
  exit: { 
    opacity: 0, 
    scale: 0.98,
    transition: {
      duration: 0.3,
      ease: slowEase,
    }
  },
};

// Slide In From Left - smoother
export const slideInLeft: Variants = {
  initial: { opacity: 0, x: -40 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.8,
      ease: premiumEase,
    }
  },
  exit: { 
    opacity: 0, 
    x: -20,
    transition: {
      duration: 0.4,
      ease: slowEase,
    }
  },
};

// Slide In From Right - smoother
export const slideInRight: Variants = {
  initial: { opacity: 0, x: 40 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.8,
      ease: premiumEase,
    }
  },
  exit: { 
    opacity: 0, 
    x: 20,
    transition: {
      duration: 0.4,
      ease: slowEase,
    }
  },
};

// Stagger Container - more refined timing
export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

// Stagger Item - smoother animation
export const staggerItem: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: premiumEase,
    },
  },
};

// Hero Text Animation - smoother entrance
export const heroText: Variants = {
  initial: { opacity: 0, y: 40 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: premiumEase,
    },
  },
};

// Card Hover - more subtle
export const cardHover: Variants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.015,
    transition: {
      duration: 0.5,
      ease: smoothEase,
    },
  },
};

// Image Reveal - smoother
export const imageReveal: Variants = {
  initial: { scale: 1.1, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: premiumEase,
    },
  },
};

// Page Transition
export const pageTransition: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

// Nav Link Underline
export const navLinkUnderline: Variants = {
  initial: { scaleX: 0, originX: 0 },
  hover: {
    scaleX: 1,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

// Letter Animation (for text reveals)
export const letterAnimation: Variants = {
  initial: { opacity: 0, y: 50 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.03,
      ease: [0.4, 0, 0.2, 1],
    },
  }),
};

// Parallax Y
export const parallaxY = (y: number): Variants => ({
  initial: { y: 0 },
  animate: {
    y,
    transition: {
      duration: 0,
    },
  },
});

// Default transition settings
export const defaultTransition = {
  duration: 0.6,
  ease: [0.4, 0, 0.2, 1],
};

export const smoothTransition = {
  duration: 0.8,
  ease: [0.4, 0, 0.2, 1],
};

export const springTransition = {
  type: 'spring',
  stiffness: 100,
  damping: 20,
};






////////////////////////////////////////////////////////////////////////
// Framer Motion Variants for OneCoreX – Premium Motion System
// import { Variants ,Easing} from 'framer-motion';

// /* ======================================================
//    GLOBAL EASING & TIMING (single source of truth)
// ====================================================== */

// export const easePremium:Easing = [0.22, 1, 0.36, 1]; // smooth, confident
// export const fastEase:Easing = [0.4, 0, 0.2, 1];

// /* ======================================================
//    FADE / REVEAL MOTIONS
// ====================================================== */

// // Fade In Up (subtle)
// export const fadeInUp: Variants = {
//   initial: { opacity: 0, y: 20 },
//   animate: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.7,
//       ease: easePremium,
//     },
//   },
//   exit: {
//     opacity: 0,
//     y: 10,
//     transition: { duration: 0.4, ease: fastEase },
//   },
// };

// // Fade In Scale (glass cards, modals)
// export const fadeInScale: Variants = {
//   initial: { opacity: 0, scale: 0.96 },
//   animate: {
//     opacity: 1,
//     scale: 1,
//     transition: {
//       duration: 0.6,
//       ease: easePremium,
//     },
//   },
//   exit: {
//     opacity: 0,
//     scale: 0.97,
//     transition: { duration: 0.4, ease: fastEase },
//   },
// };

// /* ======================================================
//    SLIDE MOTIONS (used sparingly)
// ====================================================== */

// export const slideInLeft: Variants = {
//   initial: { opacity: 0, x: -24 },
//   animate: {
//     opacity: 1,
//     x: 0,
//     transition: {
//       duration: 0.7,
//       ease: easePremium,
//     },
//   },
// };

// export const slideInRight: Variants = {
//   initial: { opacity: 0, x: 24 },
//   animate: {
//     opacity: 1,
//     x: 0,
//     transition: {
//       duration: 0.7,
//       ease: easePremium,
//     },
//   },
// };

// /* ======================================================
//    STAGGER SYSTEM
// ====================================================== */

// export const staggerContainer: Variants = {
//   initial: {},
//   animate: {
//     transition: {
//       staggerChildren: 0.08,
//       delayChildren: 0.15,
//     },
//   },
// };

// export const staggerItem: Variants = {
//   initial: { opacity: 0, y: 16 },
//   animate: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.6,
//       ease: easePremium,
//     },
//   },
// };

// /* ======================================================
//    HERO / HEADING TEXT
// ====================================================== */

// export const heroText: Variants = {
//   initial: { opacity: 0, y: 30 },
//   animate: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 1,
//       ease: easePremium,
//     },
//   },
// };

// /* ======================================================
//    TRUE TYPEWRITER LETTER ANIMATION
// ====================================================== */

// export const letterContainer: Variants = {
//   initial: {},
//   animate: {
//     transition: {
//       staggerChildren: 0.045,
//     },
//   },
// };

// export const letterAnimation: Variants = {
//   initial: { opacity: 0 },
//   animate: {
//     opacity: 1,
//     transition: {
//       duration: 0.05,
//       ease: 'linear',
//     },
//   },
// };

// /* ======================================================
//    CARD & INTERACTIVE STATES
// ====================================================== */

// export const cardHover: Variants = {
//   initial: { scale: 1 },
//   hover: {
//     scale: 1.015,
//     transition: {
//       duration: 0.35,
//       ease: easePremium,
//     },
//   },
// };

// /* ======================================================
//    IMAGE / MEDIA REVEALS
// ====================================================== */

// export const imageReveal: Variants = {
//   initial: { scale: 1.08, opacity: 0 },
//   animate: {
//     scale: 1,
//     opacity: 1,
//     transition: {
//       duration: 2,
//       ease: easePremium,
//     },
//   },
// };

// /* ======================================================
//    PAGE TRANSITIONS
// ====================================================== */

// export const pageTransition: Variants = {
//   initial: { opacity: 0 },
//   animate: {
//     opacity: 1,
//     transition: {
//       duration: 0.6,
//       ease: easePremium,
//     },
//   },
//   exit: {
//     opacity: 0,
//     transition: {
//       duration: 0.3,
//       ease: fastEase,
//     },
//   },
// };

// /* ======================================================
//    NAV / MICRO INTERACTIONS
// ====================================================== */

// export const navLinkUnderline: Variants = {
//   initial: { scaleX: 0, originX: 0 },
//   hover: {
//     scaleX: 1,
//     transition: {
//       duration: 0.35,
//       ease: easePremium,
//     },
//   },
// };

// /* ======================================================
//    PARALLAX (controlled, never animated directly)
// ====================================================== */

// export const parallaxY = (y: number): Variants => ({
//   initial: { y: 0 },
//   animate: {
//     y,
//     transition: {
//       duration: 0,
//     },
//   },
// });

// /* ======================================================
//    TRANSITION PRESETS
// ====================================================== */

// export const defaultTransition = {
//   duration: 0.6,
//   ease: easePremium,
// };

// export const smoothTransition = {
//   duration: 0.8,
//   ease: easePremium,
// };

// export const springTransition = {
//   type: 'spring',
//   stiffness: 90,
//   damping: 22,
// };

