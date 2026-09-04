"use client";

import { useLanguage } from "@/lib/i18n";
import { skillGroups } from "@/content/resume";
import { SectionComment } from "@/components/ui/SectionComment";
import { Reveal } from "@/components/ui/Reveal";
import { TerminalWindow } from "@/components/ui/TerminalWindow";

export function Skills() {
  const { t } = useLanguage();

  return (
    <section
      id="skills"
      className="mx-auto max-w-3xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-20"
    >
      <SectionComment index="04" label="skills.yaml" />

      <Reveal>
        <TerminalWindow title="skills.yaml">
          <pre className="overflow-x-auto text-[13px] leading-8">
            <code>
              {skillGroups.map((group) => (
                <div key={group.key}>
                  <span className="text-accent-blue">{t(group.title)}</span>
                  <span className="text-fg-soft">:</span>
                  {group.items.map((item, i) => (
                    <div key={i} className="pl-4">
                      <span className="text-fg-soft">- </span>
                      <span className="text-accent-green">{item}</span>
                    </div>
                  ))}
                </div>
              ))}
            </code>
          </pre>
        </TerminalWindow>
      </Reveal>
    </section>
  );
}
