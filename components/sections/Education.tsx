"use client";

import { useLanguage, pick } from "@/lib/i18n";
import { education, leadership } from "@/content/resume";
import { SectionComment } from "@/components/ui/SectionComment";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { TerminalWindow } from "@/components/ui/TerminalWindow";

export function Education() {
  const { lang, t } = useLanguage();

  return (
    <section
      id="education"
      className="mx-auto max-w-3xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-20"
    >
      <SectionComment index="05" label="education.md" />

      <Reveal>
        <TerminalWindow title="education.md">
          <p className="font-mono text-[13px] text-accent-purple">
            ## {pick({ pt: "Formação", en: "Education" }, lang)}
          </p>
          <div className="mt-3">
            <p className="text-[14.5px] font-semibold text-fg">
              {education.school}
            </p>
            <p className="mt-0.5 text-[13px] text-fg-muted">
              {t(education.degree)}
            </p>
            <p className="mt-0.5 font-mono text-[11.5px] text-fg-soft">
              {t(education.date)}
            </p>
          </div>

          <p className="mt-6 font-mono text-[13px] text-accent-purple">
            ## {pick({ pt: "Cursos complementares", en: "Additional courses" }, lang)}
          </p>
          <ul className="mt-3 flex flex-col gap-1.5">
            {education.courses.map((c, i) => (
              <li
                key={i}
                className="relative pl-4 text-[13px] leading-relaxed text-fg-muted"
              >
                <span className="absolute left-0 text-accent-green">-</span>
                {t(c)}
              </li>
            ))}
          </ul>
        </TerminalWindow>
      </Reveal>

      <p className="mb-4 mt-12 select-none font-mono text-xs uppercase tracking-wide text-fg-soft">
        {pick(
          { pt: "// liderança & experiência acadêmica", en: "// leadership & academic experience" },
          lang
        )}
      </p>

      <RevealGroup className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {leadership.map((entry, i) => (
          <RevealItem key={i}>
            <div className="h-full rounded-lg border border-border bg-bg-elevated p-4">
              <div className="flex items-start justify-between gap-3">
                <h4 className="text-[13.5px] font-semibold text-fg">
                  {t(entry.role)}
                </h4>
                <span className="shrink-0 font-mono text-[10.5px] text-fg-soft">
                  {t(entry.date)}
                </span>
              </div>
              <p className="mt-1 text-[12px] font-medium text-accent-blue">
                {entry.org}
              </p>
              {entry.desc && (
                <p className="mt-2 text-[12.5px] leading-relaxed text-fg-muted">
                  {t(entry.desc)}
                </p>
              )}
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
