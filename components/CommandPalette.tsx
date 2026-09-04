"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { Command } from "cmdk";
import { AnimatePresence, motion } from "motion/react";
import { useLanguage, ui, pick } from "@/lib/i18n";
import { sections } from "@/lib/sections";
import { profile } from "@/content/resume";

interface CommandPaletteContextValue {
  open: () => void;
  close: () => void;
  isOpen: boolean;
}

const CommandPaletteContext = createContext<CommandPaletteContextValue | null>(
  null
);

export function useCommandPalette() {
  const ctx = useContext(CommandPaletteContext);
  if (!ctx) {
    throw new Error(
      "useCommandPalette must be used within a CommandPaletteProvider"
    );
  }
  return ctx;
}

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function downloadCv(lang: "pt" | "en") {
  const href = pick(profile.cvPath, lang);
  const a = document.createElement("a");
  a.href = href;
  a.download = href.split("/").pop() ?? "";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

export function CommandPaletteProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const { lang, toggle: toggleLang } = useLanguage();

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") setIsOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(null), 1600);
    return () => clearTimeout(timer);
  }, [toast]);

  const runAndClose = useCallback(
    (fn: () => void) => {
      fn();
      setIsOpen(false);
    },
    []
  );

  const contextValue = useMemo(
    () => ({ open, close, isOpen }),
    [open, close, isOpen]
  );

  return (
    <CommandPaletteContext.Provider value={contextValue}>
      {children}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-start justify-center bg-black/60 p-4 pt-[12vh] backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: -8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: -8 }}
              transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg overflow-hidden rounded-lg border border-border-strong bg-bg-elevated shadow-2xl"
            >
              <Command label="Command palette" className="flex flex-col">
                <div className="flex items-center gap-2 border-b border-border px-4">
                  <span className="text-accent-green">$</span>
                  <Command.Input
                    autoFocus
                    placeholder={pick(ui.cmdPalette.placeholder, lang)}
                    className="w-full bg-transparent py-3.5 text-sm text-fg placeholder:text-fg-soft outline-none"
                  />
                </div>

                <Command.List className="max-h-80 overflow-y-auto p-2">
                  <Command.Empty className="px-3 py-6 text-center text-sm text-fg-soft">
                    {pick(ui.cmdPalette.empty, lang)}
                  </Command.Empty>

                  <Command.Group
                    heading={pick(ui.cmdPalette.groupNav, lang)}
                    className="px-2 py-1.5 text-[11px] uppercase tracking-wide text-fg-soft [&_[cmdk-group-heading]]:mb-1.5 [&_[cmdk-group-heading]]:mt-2"
                  >
                    {sections.map((s) => (
                      <Command.Item
                        key={s.id}
                        onSelect={() => runAndClose(() => scrollToSection(s.id))}
                        className="flex cursor-pointer items-center gap-2.5 rounded-md px-2.5 py-2 text-sm text-fg-muted aria-selected:bg-bg-inset aria-selected:text-fg"
                      >
                        <span className="text-accent-blue">#</span>
                        {pick(ui.cmdPalette.goTo, lang)} {s.tab}
                      </Command.Item>
                    ))}
                  </Command.Group>

                  <Command.Separator className="my-1 h-px bg-border" />

                  <Command.Group
                    heading={pick(ui.cmdPalette.groupActions, lang)}
                    className="px-2 py-1.5 text-[11px] uppercase tracking-wide text-fg-soft [&_[cmdk-group-heading]]:mb-1.5 [&_[cmdk-group-heading]]:mt-2"
                  >
                    <Command.Item
                      onSelect={() =>
                        runAndClose(() => {
                          navigator.clipboard.writeText(profile.email);
                          setToast(pick(ui.cmdPalette.emailCopied, lang));
                        })
                      }
                      className="flex cursor-pointer items-center gap-2.5 rounded-md px-2.5 py-2 text-sm text-fg-muted aria-selected:bg-bg-inset aria-selected:text-fg"
                    >
                      <span className="text-accent-purple">@</span>
                      {pick(ui.cmdPalette.copyEmail, lang)}
                    </Command.Item>
                    <Command.Item
                      onSelect={() =>
                        runAndClose(() =>
                          window.open(profile.github, "_blank", "noopener")
                        )
                      }
                      className="flex cursor-pointer items-center gap-2.5 rounded-md px-2.5 py-2 text-sm text-fg-muted aria-selected:bg-bg-inset aria-selected:text-fg"
                    >
                      <span className="text-accent-purple">↗</span>
                      {pick(ui.cmdPalette.openGithub, lang)}
                    </Command.Item>
                    <Command.Item
                      onSelect={() =>
                        runAndClose(() =>
                          window.open(profile.linkedin, "_blank", "noopener")
                        )
                      }
                      className="flex cursor-pointer items-center gap-2.5 rounded-md px-2.5 py-2 text-sm text-fg-muted aria-selected:bg-bg-inset aria-selected:text-fg"
                    >
                      <span className="text-accent-purple">↗</span>
                      {pick(ui.cmdPalette.openLinkedin, lang)}
                    </Command.Item>
                    <Command.Item
                      onSelect={() => runAndClose(() => downloadCv(lang))}
                      className="flex cursor-pointer items-center gap-2.5 rounded-md px-2.5 py-2 text-sm text-fg-muted aria-selected:bg-bg-inset aria-selected:text-fg"
                    >
                      <span className="text-accent-amber">↓</span>
                      {pick(ui.cmdPalette.downloadCv, lang)}
                    </Command.Item>
                    <Command.Item
                      onSelect={() => runAndClose(toggleLang)}
                      className="flex cursor-pointer items-center gap-2.5 rounded-md px-2.5 py-2 text-sm text-fg-muted aria-selected:bg-bg-inset aria-selected:text-fg"
                    >
                      <span className="text-accent-green">⇄</span>
                      {pick(ui.cmdPalette.switchLang, lang)}
                    </Command.Item>
                  </Command.Group>
                </Command.List>
              </Command>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            className="fixed bottom-6 left-1/2 z-[110] -translate-x-1/2 rounded-md border border-border-strong bg-bg-elevated px-4 py-2 text-sm text-accent-green shadow-lg"
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </CommandPaletteContext.Provider>
  );
}
