"use client";

import { useLanguage, ui, pick } from "@/lib/i18n";
import { profile } from "@/content/resume";

export function StatusBar() {
  const { lang } = useLanguage();

  return (
    <footer className="sticky bottom-0 z-30 flex flex-wrap items-center justify-between gap-2 border-t border-border bg-bg-inset px-4 py-2 text-[11px] text-fg-soft sm:px-6">
      <div className="flex items-center gap-4">
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-green" />
          {pick(ui.statusBar.ready, lang)}
        </span>
        <span className="hidden sm:inline">⎇ {pick(ui.statusBar.branch, lang)}</span>
        <span className="hidden sm:inline">UTF-8</span>
        <span className="hidden md:inline">{lang === "pt" ? "pt-BR" : "en-US"}</span>
      </div>
      <div className="flex items-center gap-4">
        <span className="hidden sm:inline">{pick(ui.statusBar.openTo, lang)}</span>
        <span>&copy; {new Date().getFullYear()} {profile.name}</span>
      </div>
    </footer>
  );
}
