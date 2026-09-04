"use client";

import { useLanguage, pick } from "@/lib/i18n";
import { featuredProject, otherProjects } from "@/content/resume";
import { SectionComment } from "@/components/ui/SectionComment";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { TerminalWindow } from "@/components/ui/TerminalWindow";
import { Tag } from "@/components/ui/Tag";

export function Projects() {
  const { lang, t } = useLanguage();

  return (
    <section
      id="project"
      className="mx-auto max-w-3xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-20"
    >
      <SectionComment index="03" label="project.py" />

      <Reveal>
        <TerminalWindow title="~/tcc — python thesis.py --summary">
          <p className="font-mono text-[12px] text-accent-green">
            $ python thesis.py --summary
          </p>
          <p className="mt-3 text-[11px] uppercase tracking-wide text-accent-purple">
            {t(featuredProject.tag)}
          </p>
          <h3 className="mt-2 text-[18px] font-bold leading-snug text-fg sm:text-[20px]">
            {t(featuredProject.name)}
          </h3>
          <p className="mt-3 text-[14px] leading-relaxed text-fg-muted">
            {t(featuredProject.desc)}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {featuredProject.stack.map((s) => (
              <Tag key={s}>{s}</Tag>
            ))}
          </div>
        </TerminalWindow>
      </Reveal>

      <p className="mb-4 mt-12 select-none font-mono text-xs uppercase tracking-wide text-fg-soft">
        {pick(
          { pt: "// outros projetos", en: "// other projects" },
          lang
        )}
      </p>

      <RevealGroup className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {otherProjects.map((p) => (
          <RevealItem key={p.name}>
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col rounded-lg border border-border bg-bg-elevated p-4 transition-colors hover:border-accent-green/50"
            >
              <h4 className="font-mono text-[13px] font-semibold text-accent-blue">
                {p.name}
              </h4>
              <p className="mt-2 flex-1 text-[12.5px] leading-relaxed text-fg-muted">
                {t(p.desc)}
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {p.tags.map((tg) => (
                  <span
                    key={tg}
                    className="font-mono text-[10.5px] text-accent-purple"
                  >
                    {tg}
                  </span>
                ))}
              </div>
            </a>
          </RevealItem>
        ))}
      </RevealGroup>

      <p className="mt-6">
        <a
          href="https://github.com/rodrigotriboni1?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[13px] font-medium text-accent-green hover:underline"
        >
          {pick(
            {
              pt: "ver todos os repositórios no GitHub →",
              en: "see all repositories on GitHub →",
            },
            lang
          )}
        </a>
      </p>
    </section>
  );
}
