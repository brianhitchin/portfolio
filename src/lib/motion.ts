import type { Variants } from "framer-motion";

/** Fade + rise, used for section headings and cards as they enter the viewport. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

/** Parent wrapper that staggers its children's fadeUp animation. */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

/** Larger rise used for hero headline words. */
export const fadeUpLarge: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

/** Simple opacity fade, for backgrounds / decorative elements. */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

/** Shared viewport config: animate once, slightly before fully in view. */
export const viewportOnce = { once: true, margin: "-80px" } as const;
