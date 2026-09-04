"use client";

import { useLanguage } from "@/lib/i18n";
import { contact, profile } from "@/content/resume";
import { SectionComment } from "@/components/ui/SectionComment";
import { Reveal } from "@/components/ui/Reveal";
import { TerminalWindow } from "@/components/ui/TerminalWindow";

export function Contact() {
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      className="mx-auto max-w-3xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-24"
    >
      <SectionComment index="06" label="contact.sh" />

      <Reveal>
        <TerminalWindow title="contact.sh">
          <p className="text-[13px] text-fg-muted">
            <span className="text-accent-green">#</span> {t(contact.sub)}
          </p>

          <div className="mt-5 flex flex-col gap-2 font-mono text-[13.5px]">
            <a
              href={`mailto:${profile.email}`}
              className="group flex items-center gap-2 rounded-md px-2 py-1.5 -mx-2 transition-colors hover:bg-bg-inset"
            >
              <span className="text-accent-green">$</span>
              <span className="text-fg-soft">open</span>
              <span className="text-fg group-hover:text-accent-blue">
                mailto:{profile.email}
              </span>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-md px-2 py-1.5 -mx-2 transition-colors hover:bg-bg-inset"
            >
              <span className="text-accent-green">$</span>
              <span className="text-fg-soft">open</span>
              <span className="text-fg group-hover:text-accent-blue">
                {profile.linkedinHandle}
              </span>
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-md px-2 py-1.5 -mx-2 transition-colors hover:bg-bg-inset"
            >
              <span className="text-accent-green">$</span>
              <span className="text-fg-soft">open</span>
              <span className="text-fg group-hover:text-accent-blue">
                {profile.githubHandle}
              </span>
            </a>
            <a
              href={t(profile.cvPath)}
              download
              className="group flex items-center gap-2 rounded-md px-2 py-1.5 -mx-2 transition-colors hover:bg-bg-inset"
            >
              <span className="text-accent-green">$</span>
              <span className="text-fg-soft">curl -O</span>
              <span className="text-fg group-hover:text-accent-blue">
                {t(profile.cvPath).split("/").pop()}
              </span>
            </a>
          </div>
        </TerminalWindow>
      </Reveal>
    </section>
  );
}
