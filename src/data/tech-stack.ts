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
    category: "Frontend",
    items: [
      { name: "React", level: "primary" },
      { name: "Next.js", level: "primary" },
      { name: "TypeScript", level: "primary" },
      { name: "Tailwind CSS", level: "primary" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Laravel", level: "primary" },
      { name: "PHP", level: "primary" },
      { name: "Node.js", level: "secondary" },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "MySQL", level: "primary" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", level: "primary" },
      { name: "GitHub", level: "primary" },
      { name: "VS Code", level: "primary" },
      { name: "Linux/WSL", level: "secondary" },
      { name: "Figma", level: "secondary" },
    ],
  },
];
