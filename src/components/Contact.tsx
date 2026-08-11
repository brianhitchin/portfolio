"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/content";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function Contact() {
  return (
    <section id="contact" className="relative z-10 px-6 pb-28 sm:px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
        className="mx-auto grid max-w-5xl grid-cols-1 gap-9 border-t border-foreground pt-8 sm:grid-cols-[1fr_auto] sm:items-end"
      >
        <div>
          <motion.p
            variants={fadeUp}
            className="mb-4 font-mono text-xs uppercase tracking-[0.14em] text-accent"
          >
            {profile.availability}
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="max-w-xl text-3xl leading-snug tracking-tight sm:text-[44px]"
          >
            If you&apos;re building something that needs a full-stack
            engineer who ships, let&apos;s talk.
          </motion.h2>
          <motion.a
            variants={fadeUp}
            href={`mailto:${profile.email}`}
            className="mt-4 inline-block border-b border-accent font-mono text-sm text-accent transition-colors hover:border-foreground hover:text-foreground"
          >
            {profile.email}
          </motion.a>
        </div>

        <motion.div
          variants={fadeUp}
          className="flex flex-col gap-2.5 font-mono text-xs uppercase tracking-widest"
        >
          <a
            href={profile.resumeUrl}
            download="Brian-Hitchin-Resume.pdf"
            className="bg-foreground px-6 py-3.5 text-center text-background transition-colors hover:bg-accent"
          >
            Download résumé →
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-border-strong px-6 py-3 text-center text-muted transition-colors hover:border-foreground hover:text-foreground"
          >
            LinkedIn →
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
