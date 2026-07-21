import type { Metadata } from "next"
import { ThemeProvider } from "@/components/layout/ThemeProvider"
import { ScrollToTop } from "@/components/shared/ScrollToTop"
import "./globals.css"

// Возвращаем метаданные на место — это важно для поиска и рекрутеров
export const metadata: Metadata = {
  title: "borove4ik",
  description:
    "Frontend Developer specializing in React, Next.js, TypeScript and Tailwind CSS.",
  keywords: ["Frontend", "React", "Next.js", "TypeScript", "Portfolio"],
  authors: [{ name: "Denis Borovets" }],
  openGraph: {
    title: "Denis Borovets — Frontend Developer",
    description: "Frontend Developer specializing in React, Next.js, TypeScript.",
    type: "website",
    url: "https://borove4ik.vercel.app/", // Сюда потом вставишь свой домен, когда на прод выкатишь
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Оставляем Devicon для иконок технологий */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      {/* Класс antialiased делает шрифты визуально более сглаженными и аккуратными */}
      <body className="antialiased">
        {/* Закрываем пропсы ThemeProvider нормально, без сокращений */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <ScrollToTop />
      </body>
    </html>
  )
}