import { about } from "@/data/content";
import { RevealSection, RevealItem } from "@/components/RevealOnScroll";

export function About() {
  return (
    <RevealSection
      as="section"
      id="about"
      className="relative z-10 px-6 py-24 sm:px-8 sm:py-28"
    >
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-14 lg:grid-cols-[1fr_21rem]">
        <RevealItem>
          <h2 className="mb-6 border-b border-border pb-3.5 font-mono text-xs uppercase tracking-[0.14em] text-muted">
            About
          </h2>
          <p className="max-w-xl text-xl leading-relaxed sm:text-[22px]">
            I came to engineering from neuroscience, which is probably why I
            keep reaching for the same question:{" "}
            <em className="text-accent italic">
              where is the system making a human do work it could do itself?
            </em>
          </p>
          <p className="mt-5 max-w-lg font-mono text-[13px] leading-loose text-muted">
            {about.secondary}
          </p>
        </RevealItem>

        <RevealItem className="flex flex-col gap-6 pt-0 font-mono text-xs lg:pt-14">
          {about.facts.map((f) => (
            <div key={f.label} className="flex flex-col gap-1.5 border-t border-border pt-3">
              <span className="text-[11px] uppercase tracking-widest text-accent">
                {f.label}
              </span>
              <span className="leading-relaxed">{f.value}</span>
            </div>
          ))}
        </RevealItem>
      </div>
    </RevealSection>
  );
}
