"use client";

import { motion } from "framer-motion";
import { profile, hero } from "@/data/content";
import { fadeUpLarge, staggerContainer } from "@/lib/motion";

export function Hero() {
  const [before, after] = hero.headline.split(hero.headlineAccent);

  return (
    <section
      id="top"
      className="relative z-10 flex flex-col items-start px-6 py-28 sm:px-8 sm:py-32"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="mx-auto w-full max-w-5xl"
      >
        <motion.span
          variants={fadeUpLarge}
          className="mb-3 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-accent"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          {profile.availability}
        </motion.span>

        <motion.p
          variants={fadeUpLarge}
          className="mb-8 font-mono text-xs uppercase tracking-[0.08em] text-muted"
        >
          {hero.roleLine}
        </motion.p>

        <motion.h1
          variants={fadeUpLarge}
          className="max-w-3xl text-[42px] leading-[1.1] tracking-tight sm:text-6xl"
        >
          {before}
          <em className="text-accent italic">{hero.headlineAccent}</em>
          {after}
        </motion.h1>

        <motion.p
          variants={fadeUpLarge}
          className="mt-8 max-w-lg font-mono text-sm leading-relaxed text-muted"
        >
          {hero.sub}
        </motion.p>

        <motion.div variants={fadeUpLarge} className="mt-10 flex flex-wrap items-center gap-3.5">
          <a
            href="#work"
            className="bg-foreground px-6 py-3.5 font-mono text-xs uppercase tracking-widest text-background transition-colors hover:bg-accent"
          >
            View the work
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="border border-foreground px-6 py-3.5 font-mono text-xs uppercase tracking-widest text-foreground transition-colors hover:bg-foreground/6"
          >
            Get in touch
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
