"use client";

import { motion } from "motion/react";
import { useLanguage, ui, pick } from "@/lib/i18n";
import { profile } from "@/content/resume";
import { TerminalWindow } from "@/components/ui/TerminalWindow";
import { useTypewriter } from "@/components/ui/Typewriter";

function CodeLine({
  n,
  children,
}: {
  n: number;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <span className="w-4 shrink-0 select-none text-right text-fg-soft/60">
        {n}
      </span>
      <span className="min-w-0">{children}</span>
    </div>
  );
}

function TypedRole({ words }: { words: string[] }) {
  const typed = useTypewriter(words);
  return (
    <>
      <span className="text-accent-green">&quot;{typed}</span>
      <span className="caret text-accent-green">▌</span>
      <span className="text-accent-green">&quot;</span>
    </>
  );
}

export function Hero() {
  const { lang, t } = useLanguage();
  const words = ui.hero.typed.map((w) => pick(w, lang));

  return (
    <section className="mx-auto max-w-3xl px-4 pb-20 pt-14 sm:px-6 sm:pb-28 sm:pt-20">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      >
        <TerminalWindow title="profile.ts">
          <pre className="overflow-x-auto text-[13px] leading-7 sm:text-[14px]">
            <code>
              <CodeLine n={1}>
                <span className="text-accent-purple">const</span>{" "}
                <span className="text-accent-blue">profile</span> = {"{"}
              </CodeLine>
              <CodeLine n={2}>
                <span className="pl-4 text-fg-muted">name</span>
                <span className="text-fg-soft">: </span>
                <span className="text-accent-green">
                  &quot;{profile.name}&quot;
                </span>
                <span className="text-fg-soft">,</span>
              </CodeLine>
              <CodeLine n={3}>
                <span className="pl-4 text-fg-muted">role</span>
                <span className="text-fg-soft">: </span>
                <TypedRole key={lang} words={words} />
                <span className="text-fg-soft">,</span>
              </CodeLine>
              <CodeLine n={4}>
                <span className="pl-4 text-fg-muted">location</span>
                <span className="text-fg-soft">: </span>
                <span className="text-accent-green">
                  &quot;{pick(profile.location, lang)}&quot;
                </span>
                <span className="text-fg-soft">,</span>
              </CodeLine>
              <CodeLine n={5}>{"}"}</CodeLine>
            </code>
          </pre>
        </TerminalWindow>

        <p className="mt-8 max-w-xl text-[15px] leading-relaxed text-fg-muted">
          {t(profile.tagline)}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#contact"
            className="group inline-flex items-center gap-1.5 rounded-md bg-accent-green px-4 py-2.5 text-[13px] font-semibold text-bg transition-transform hover:-translate-y-0.5"
          >
            <span className="text-bg/60">$</span>
            {pick(ui.hero.ctaContact, lang)}
          </a>
          <a
            href={profile.cvPath}
            download
            className="inline-flex items-center gap-1.5 rounded-md border border-border-strong px-4 py-2.5 text-[13px] font-semibold text-fg transition-colors hover:border-accent-green/50"
          >
            <span className="text-accent-green">$</span>
            {pick(ui.hero.ctaCv, lang)}
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="inline-flex h-[42px] w-[42px] items-center justify-center rounded-md border border-border-strong text-fg-muted transition-colors hover:border-accent-green/50 hover:text-fg"
          >
            <svg viewBox="0 0 24 24" className="h-4.5 w-4.5 fill-current">
              <path d="M12 2a10 10 0 0 0-3.16 19.5c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
            </svg>
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="inline-flex h-[42px] w-[42px] items-center justify-center rounded-md border border-border-strong text-fg-muted transition-colors hover:border-accent-green/50 hover:text-fg"
          >
            <svg viewBox="0 0 24 24" className="h-4.5 w-4.5 fill-current">
              <path d="M6.94 8.5H3.56V20H6.94V8.5ZM5.25 6.86A1.94 1.94 0 1 0 5.25 3a1.94 1.94 0 0 0 0 3.86ZM20.44 20h.01v-6.4c0-3.13-.67-5.54-4.33-5.54-1.76 0-2.94.96-3.42 1.88h-.05V8.5H9.4V20h3.38v-5.7c0-1.5.28-2.95 2.14-2.95 1.83 0 1.86 1.71 1.86 3.05V20h3.66Z" />
            </svg>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
