"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
]

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])
  if (!mounted) return <div className="size-9" />

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
      className="flex items-center justify-center size-9 rounded-lg
        border border-border/40 text-muted-foreground
        hover:border-border hover:text-foreground hover:bg-muted/40
        transition-all duration-150"
    >
      {theme === "dark" ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="5"/>
          <line x1="12" y1="1" x2="12" y2="3"/>
          <line x1="12" y1="21" x2="12" y2="23"/>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
          <line x1="1" y1="12" x2="3" y2="12"/>
          <line x1="21" y1="12" x2="23" y2="12"/>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
      )}
    </button>
  )
}

export function Navbar() {
  const [hidden, setHidden] = useState(false)
  const [atTop, setAtTop] = useState(true)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0
    setHidden(latest > prev && latest > 80)
    setAtTop(latest < 10)
  })

  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <motion.header
      animate={{ y: hidden ? -80 : 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-50 h-14
        flex items-center justify-between px-6
        transition-all duration-300
        ${atTop ? "bg-transparent" : "bg-background/80 backdrop-blur-md border-b border-border/40"}`}
    >
      {/* Логотип */}
      <button
        onClick={() => scrollTo("#hero")}
        className="font-semibold text-sm text-foreground tracking-tight hover:opacity-70 transition-opacity"
      >
        borove4ik<span className="text-muted-foreground"></span>
      </button>

      {/* Навигация */}
      <nav className="hidden md:flex items-center gap-1">
        {NAV_LINKS.map(({ label, href }) => (
          <button
            key={href}
            onClick={() => scrollTo(href)}
            className="px-3 py-1.5 text-sm text-muted-foreground rounded-md
              hover:text-foreground hover:bg-muted/50
              transition-all duration-150"
          >
            {label}
          </button>
        ))}
      </nav>

      <ThemeToggle />
    </motion.header>
  )
}
