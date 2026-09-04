"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
  type ReactNode,
} from "react";

export type Lang = "pt" | "en";

export interface Localized<T = string> {
  pt: T;
  en: T;
}

export function pick<T>(value: Localized<T>, lang: Lang): T {
  return value[lang];
}

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggle: () => void;
  t: <T>(value: Localized<T>) => T;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("pt");

  const toggle = useCallback(() => {
    setLang((prev) => (prev === "pt" ? "en" : "pt"));
  }, []);

  const t = useCallback(
    <T,>(value: Localized<T>) => pick(value, lang),
    [lang]
  );

  const value = useMemo(
    () => ({ lang, setLang, toggle, t }),
    [lang, toggle, t]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}

// Standalone UI strings that don't live in content/resume.ts
export const ui = {
  skipLink: { pt: "Pular para o conteúdo", en: "Skip to content" },
  cmdPalette: {
    placeholder: {
      pt: "Digite um comando ou busque...",
      en: "Type a command or search...",
    },
    empty: { pt: "Nenhum resultado encontrado.", en: "No results found." },
    groupNav: { pt: "Navegar", en: "Navigate" },
    groupActions: { pt: "Ações", en: "Actions" },
    hint: { pt: "para abrir a paleta de comandos", en: "to open the command palette" },
    goTo: { pt: "Ir para", en: "Go to" },
    copyEmail: { pt: "Copiar e-mail", en: "Copy email" },
    emailCopied: { pt: "E-mail copiado!", en: "Email copied!" },
    openGithub: { pt: "Abrir GitHub", en: "Open GitHub" },
    openLinkedin: { pt: "Abrir LinkedIn", en: "Open LinkedIn" },
    downloadCv: { pt: "Baixar CV", en: "Download CV" },
    switchLang: { pt: "Switch to English", en: "Mudar para Português" },
  },
  hero: {
    ctaContact: { pt: "contato", en: "contact" },
    ctaCv: { pt: "baixar_cv", en: "download_cv" },
    typed: [
      { pt: "Product Manager", en: "Product Manager" },
      { pt: "Engenheiro de Controle e Automação", en: "Control & Automation Engineer" },
      { pt: "Construtor de produtos", en: "Product builder" },
    ] as Localized<string>[],
  },
  statusBar: {
    ready: { pt: "pronto", en: "ready" },
    branch: { pt: "main", en: "main" },
    openTo: { pt: "aberto a oportunidades", en: "open to opportunities" },
  },
  tabs: {
    about: "about.tsx",
    experience: "experience.json",
    project: "project.py",
    skills: "skills.yaml",
    education: "education.md",
    contact: "contact.sh",
  },
} as const;
