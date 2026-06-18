export interface TechItem {
  name: string;
  level?: "primary" | "secondary";
}

export interface TechGroup {
  category: string;
  items: TechItem[];
}

export const techStack: TechGroup[] = [
  {
    category: "Languages",
    items: [
      { name: "TypeScript", level: "primary" },
      { name: "Python", level: "primary" },
      { name: "Go", level: "primary" },
      { name: "PHP", level: "secondary" },
    ],
  },
  {
    category: "AI & ML",
    items: [
      { name: "PyTorch", level: "primary" },
      { name: "LangChain", level: "secondary" },
      { name: "OpenAI API", level: "primary" },
      { name: "Pandas", level: "secondary" },
    ],
  },
  {
    category: "Web & Core",
    items: [
      { name: "React", level: "primary" },
      { name: "Next.js", level: "primary" },
      { name: "Tailwind CSS", level: "primary" },
      { name: "Node.js", level: "secondary" },
    ],
  },
  {
    category: "Tools & DB",
    items: [
      { name: "MySQL / Postgres", level: "primary" },
      { name: "Git", level: "primary" },
      { name: "Linux", level: "primary" },
      { name: "Docker", level: "secondary" },
    ],
  },
];
