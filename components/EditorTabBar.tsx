"use client";

import { motion } from "motion/react";
import { sections } from "@/lib/sections";
import { useActiveSection } from "@/lib/useActiveSection";
import { useLanguage } from "@/lib/i18n";
import { useCommandPalette } from "@/components/CommandPalette";

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function EditorTabBar() {
  const active = useActiveSection();
  const { lang, toggle } = useLanguage();
  const { open } = useCommandPalette();

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center gap-1 overflow-x-auto px-3 sm:px-6">
        <div className="flex shrink-0 items-center pr-3">
          <span className="flex h-7 w-7 items-center justify-center rounded border border-border-strong text-[11px] font-bold text-accent-green">
            RT
          </span>
        </div>

        <nav className="flex min-w-0 flex-1 items-center gap-0.5">
          {sections.map((s) => {
            const isActive = active === s.id;
            return (
              <button
                key={s.id}
                onClick={() => scrollToSection(s.id)}
                className={`relative shrink-0 whitespace-nowrap px-3 py-3.5 text-[13px] transition-colors ${
                  isActive
                    ? "text-fg"
                    : "text-fg-soft hover:text-fg-muted"
                }`}
              >
                {s.tab}
                {isActive && (
                  <motion.span
                    layoutId="tab-indicator"
                    className="absolute inset-x-2 bottom-0 h-[2px] bg-accent-green"
                    transition={{ type: "spring", stiffness: 400, damping: 35 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-2 pl-2">
          <button
            onClick={open}
            className="hidden items-center gap-1.5 rounded-md border border-border-strong px-2.5 py-1.5 text-[11px] text-fg-soft transition-colors hover:border-accent-green/50 hover:text-fg sm:flex"
            aria-label="Open command palette"
          >
            <span>⌘K</span>
          </button>
          <button
            onClick={toggle}
            className="rounded-md border border-border-strong px-2.5 py-1.5 font-mono text-[11px] font-semibold text-fg-soft transition-colors hover:border-accent-green/50 hover:text-fg"
            aria-label="Switch language"
          >
            <span className={lang === "pt" ? "text-accent-green" : ""}>PT</span>
            <span className="mx-1 text-fg-soft">/</span>
            <span className={lang === "en" ? "text-accent-green" : ""}>EN</span>
          </button>
        </div>
      </div>
    </header>
  );
}
