export type StackItem = {
  name: string
  level: "expert" | "proficient" | "familiar"
}

export type StackCategory = {
  id: string
  label: string
  items: StackItem[]
}

export const stack: StackCategory[] = [
  {
    id: "core",
    label: "Core",
    items: [
      { name: "JavaScript", level: "expert" },
      { name: "TypeScript", level: "expert" },
      { name: "HTML", level: "expert" },
      { name: "CSS / SCSS", level: "expert" },
    ],
  },
  {
    id: "frameworks",
    label: "Frameworks",
    items: [
      { name: "React", level: "expert" },
      { name: "Next.js", level: "expert" },
      { name: "Tailwind CSS", level: "expert" },
      { name: "Vue.js", level: "proficient" },
      { name: "Node.js", level: "proficient" },
      { name: "Express.js", level: "proficient" },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    items: [
      { name: "Git", level: "expert" },
      { name: "Figma", level: "proficient" },
      { name: "Docker", level: "familiar" },
      { name: "Vite", level: "proficient" },
      { name: "Postman", level: "proficient" },
    ],
  },
  {
    id: "other",
    label: "Other",
    items: [
      { name: "MongoDB", level: "proficient" },
      { name: "Zustand", level: "proficient" },
      { name: "shadcn/ui", level: "expert" },
      { name: "JWT", level: "familiar" },
      { name: "Webpack", level: "familiar" },
    ],
  },
]

// Добавляй новые технологии по примеру выше.
// level: "expert" | "proficient" | "familiar"
