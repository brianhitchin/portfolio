import { projects } from "@/data/content";
import { RevealSection, RevealItem } from "@/components/RevealOnScroll";

export function Projects() {
  return (
    <RevealSection as="section" id="work" className="relative z-10 px-6 py-8 sm:px-8 sm:py-12">
      <div className="mx-auto max-w-5xl">
        <RevealItem className="mb-11 flex items-baseline justify-between border-b border-border pb-3.5">
          <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
            Selected work
          </h2>
          <span className="font-mono text-xs text-muted">T-Mobile · 2024 —</span>
        </RevealItem>

        <div className="flex flex-col gap-10">
          {projects.map((p) => (
            <RevealItem key={p.n}>
              <article className="grid grid-cols-1 gap-5 border-t border-foreground pt-5 sm:grid-cols-[3.5rem_1fr] lg:grid-cols-[3.5rem_1fr_16rem]">
                <span className="font-mono text-[13px] text-muted">{p.n}</span>
                <div>
                  <h3 className="text-2xl leading-snug tracking-tight sm:text-[27px]">
                    {p.title}
                  </h3>
                  <p className="mt-2.5 max-w-xl font-mono text-[13px] leading-relaxed text-muted">
                    {p.body}
                  </p>
                  <div className="mt-3.5 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="border border-border-strong px-2.5 py-1 font-mono text-[11px] text-muted"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-row items-baseline gap-2 sm:col-span-2 sm:flex-col sm:items-start sm:gap-1 lg:col-span-1">
                  <span className="text-4xl leading-none text-accent sm:text-[46px]">
                    {p.metric}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-widest text-muted">
                    {p.metricLabel}
                  </span>
                </div>
              </article>
            </RevealItem>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
