export interface SectionDef {
  id: string;
  tab: string;
}

export const sections: SectionDef[] = [
  { id: "about", tab: "about.tsx" },
  { id: "experience", tab: "experience.json" },
  { id: "project", tab: "project.py" },
  { id: "skills", tab: "skills.yaml" },
  { id: "education", tab: "education.md" },
  { id: "contact", tab: "contact.sh" },
];
