export type ExperienceItem = {
  id: number
  company: string
  role: string
  period: string
  duration?: string
  description?: string
  achievements: string[]
  logo?: string
}

export const experiences: ExperienceItem[] = [
  {
    id: 1,
    company: "Freelance",
    role: "Frontend Developer",
    period: "Jan 2026 — Present",
    description:
      "Codelibs is a web platform for discovering programming books, with filtering by programming language and technology.",
    achievements: [
      "Fixed UI and application logic issues across existing modules.",
      "Refactored legacy JavaScript code to improve maintainability and readability.",
      "Collaborated with other developers through code reviews and technical discussions.",
      "Contributed to the ongoing development and improvement of the platform."
    ],
  },
  {
    id: 2,
    company: "Kostanay Engineering and Economics University",
    role: "Frontend Developer",
    period: "Jan 2025 — Jan 2026",
    description:
      "One of the biggest universities in Kostanay",
    achievements: [
      "Developed and redesigned corporate website pages, fixed bugs and implemented responsive design for tablets and mobiles, which improved usability for students and teachers.",
      "Enhanced and optimized student and teacher dashboard interfaces, ensuring a more intuitive and user-friendly experience.",
      "Developed a job fair web application that enabled student registration and employer visit tracking, used by over 100 participants.",
    ],
    logo: "/images/keeu.png",
  },
  {
    id: 3,
    company: "ANO 'I Hear You'",
    role: "Frontend Developer",
    period: "Sep 2025 — Nov 2025",
    description:
      "The project focused on supporting people with hearing impairments, allowing them to receive important information and assistance through the Telegram bot.",
    achievements: [
      "Built core admin dashboard pages: analytics, user list, bot logic configuration.",
      "Implemented UI-kit (buttons, inputs, dropdowns, modals).",
      "Integrated dashboard with backend endpoints: data fetching, state handling, error and loading states.",
      "Collaborated with backend developers handling bot logic and ensured API contracts."
    ],
    logo: "/images/i-hear-u.png",
  },
  {
    id: 4,
    company: "Tessera Mosaic School",
    role: "Frontend Developer",
    period: "Mar 2024 — Jun 2025",
    description:
      "Website for Mosaic Courses that utilizes React and Django. It allows users to view available courses, book them, and access various other features.",
    achievements: [
      "Integrated REST API endpoints for courses and authentication.",
      "Learned code review practices and git workflow",
      "Contributed to improving accessibility across the app",
    ],
    logo: "/images/tessera-art.png"

  },
]
