"use client";

import { useLanguage } from "@/lib/i18n";
import { about } from "@/content/resume";
import { SectionComment } from "@/components/ui/SectionComment";
import { Reveal } from "@/components/ui/Reveal";
import { TerminalWindow } from "@/components/ui/TerminalWindow";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="mx-auto max-w-3xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-20">
      <Reveal>
        <SectionComment index="01" label="about.tsx" />
        <TerminalWindow title="about.tsx">
          <p className="text-[15px] leading-relaxed text-fg-muted">
            {t(about.text)}
          </p>
        </TerminalWindow>
      </Reveal>
    </section>
  );
}
