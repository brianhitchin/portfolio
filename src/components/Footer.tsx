import { profile } from "@/data/content";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-border">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5 font-mono text-[11px] uppercase tracking-widest text-muted sm:px-8">
        <span>
          {profile.name} — {profile.location}
        </span>
        <span>Built {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
