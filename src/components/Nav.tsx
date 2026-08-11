"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { nav, profile } from "@/data/content";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-20 border-b border-border backdrop-blur-sm">
      <nav className="mx-auto flex max-w-5xl items-baseline justify-between px-6 py-5 sm:px-8">
        <a
          href="#top"
          className="font-mono text-[13px] uppercase tracking-[0.12em]"
        >
          {profile.name}
        </a>

        <div className="hidden items-center gap-7 font-mono text-xs uppercase tracking-[0.08em] sm:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-muted transition-colors hover:text-accent"
            >
              {item.label}
            </a>
          ))}
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-accent"
          >
            LinkedIn
          </a>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent transition-colors hover:text-foreground"
          >
            Résumé →
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center border border-border-strong p-2 sm:hidden"
        >
          {open ? <X size={16} /> : <Menu size={16} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-border sm:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4 font-mono text-xs uppercase tracking-[0.08em]">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="py-2 text-muted transition-colors hover:text-accent"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="py-2 text-muted transition-colors hover:text-accent"
              >
                LinkedIn
              </a>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="py-2 text-accent"
              >
                Résumé →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
