"use client";

import { useLanguage } from "@/lib/i18n";
import { experience } from "@/content/resume";
import { SectionComment } from "@/components/ui/SectionComment";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

export function Experience() {
  const { t } = useLanguage();

  return (
    <section
      id="experience"
      className="mx-auto max-w-3xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-20"
    >
      <SectionComment index="02" label="experience.json" />

      <RevealGroup className="flex flex-col gap-4">
        {experience.map((entry, i) => (
          <RevealItem key={i}>
            <div className="rounded-lg border border-border bg-bg-elevated p-5 transition-colors hover:border-border-strong sm:p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-[15px] font-semibold text-fg">
                  {t(entry.role)}
                  <span className="ml-2 font-normal text-accent-blue">
                    {entry.org}
                  </span>
                  <span className="ml-1.5 text-[12px] text-fg-soft">
                    · {entry.orgType}
                  </span>
                </h3>
                <span className="font-mono text-[11px] text-fg-soft">
                  {t(entry.date)}
                </span>
              </div>

              {entry.note && (
                <p className="mt-1 text-[12px] italic text-fg-soft">
                  {t(entry.note)}
                </p>
              )}

              <ul className="mt-3 flex flex-col gap-1.5">
                {t(entry.bullets).map((b, j) => (
                  <li
                    key={j}
                    className="relative pl-4 text-[13.5px] leading-relaxed text-fg-muted"
                  >
                    <span className="absolute left-0 text-accent-green">
                      ›
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
