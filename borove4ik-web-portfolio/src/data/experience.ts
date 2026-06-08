export type ExperienceItem = {
  id: number
  company: string
  role: string
  type: "full-time" | "intern" | "freelance" | "contract"
  period: string
  duration: string
  description: string
  achievements: string[]
  logo?: string
}

export const experiences: ExperienceItem[] = [
  {
    id: 1,
    company: "Your Company",
    role: "Frontend Engineer",
    type: "full-time",
    period: "Jan 2025 — Present",
    duration: "ongoing",
    description:
      "Leading frontend architecture and building scalable UI systems for a high-traffic product.",
    achievements: [
      "Reduced bundle size by 40% via code splitting and lazy loading",
      "Built a reusable design system used across 3 products",
      "Mentored 2 junior developers",
    ],
  },
  {
    id: 2,
    company: "Previous Company",
    role: "Mid Frontend Developer",
    type: "full-time",
    period: "Mar 2023 — Jan 2025",
    duration: "1 yr 10 mos",
    description:
      "Developed and maintained core features of an enterprise SaaS dashboard, migrating from legacy jQuery to React.",
    achievements: [
      "Migrated 30+ legacy pages to React without downtime",
      "Introduced TypeScript, reducing runtime errors by 60%",
      "Improved Lighthouse score from 54 to 92",
    ],
  },
  {
    id: 3,
    company: "Agency / Studio",
    role: "Junior Frontend Developer",
    type: "full-time",
    period: "Jun 2022 — Mar 2023",
    duration: "9 mos",
    description:
      "Built client-facing websites and internal tools, collaborating closely with designers in Figma.",
    achievements: [
      "Delivered 12 client projects on schedule",
      "Set up CI/CD pipeline reducing deploy time by 70%",
      "Created a component library used in 8 projects",
    ],
  },
  {
    id: 4,
    company: "Startup Name",
    role: "Developer Intern",
    type: "intern",
    period: "Jan 2022 — Jun 2022",
    duration: "6 mos",
    description:
      "First professional experience. Worked on React components, bug fixes, and UI improvements under senior guidance.",
    achievements: [
      "Built 20+ reusable UI components",
      "Learned code review practices and git workflow",
      "Contributed to improving accessibility across the app",
    ],
  },
]
