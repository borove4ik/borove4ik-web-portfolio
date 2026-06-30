"use client"

import { motion } from "framer-motion"
import { RippleBackground } from "@/components/shared/RippleBackground"

// ─── Данные (замени на свои) ──────────────────────────────────────────────────
const NAME = "Denis Borovets"
const ROLE = "Frontend Developer"
const LOCATION = "Kostanay, Kazakhstan"
const CV_URL = "/frontend__Borovets.pdf"
const CONTACTS = {
  github: "https://github.com/yourhandle",
  linkedin: "https://www.linkedin.com/in/borove4ik",
  telegram: "https://t.me/yourhandle",
  email: "mailto:you@email.com",
}

// ─── Анимации ─────────────────────────────────────────────────────────────────
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

// ─── Иконки соцсетей (простые SVG, без внешних зависимостей) ─────────────────
function GithubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function TelegramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21.198 2.433a2.242 2.242 0 0 0-1.022.215L3.92 9.515a2.25 2.25 0 0 0 .284 4.263l3.697 1.098 1.098 3.697a2.25 2.25 0 0 0 4.263.284l6.867-16.256a2.242 2.242 0 0 0-2.931-2.168z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  )
}

function DownloadIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  )
}

function MessageIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  )
}

function PinIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

// ─── Главный компонент ────────────────────────────────────────────────────────
export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-6 overflow-hidden"
    >
      {/* Эффект капли — работает по всей странице через fixed canvas */}
      <RippleBackground />

      {/* Контент поверх canvas */}
      <div className="relative z-10 max-w-2xl mx-auto w-full">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-6"
        >
          {/* Статус / локация */}
          <motion.div variants={item} className="flex items-center gap-2">
            <span className="flex items-center gap-1.5 text-lg text-muted-foreground border border-border/50 rounded-full px-3 py-1">
              <span className="relative flex size-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full size-1.5 bg-green-500" />
              </span>
              Available for work
            </span>
            {LOCATION && (
              <span className="flex items-center gap-1 text-lg text-muted-foreground/60">
                <PinIcon />
                {LOCATION}
              </span>
            )}
          </motion.div>

          {/* Имя */}
          <motion.div variants={item}>
            <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight text-foreground leading-none">
              {NAME}
            </h1>
          </motion.div>

          {/* Должность */}
          <motion.div variants={item}>
            <p className="text-2xl sm:text-3xl font-medium text-muted-foreground tracking-tight">
              {ROLE}
            </p>
          </motion.div>

       

          {/* CTA кнопки */}
          <motion.div
            variants={item}
            className="flex flex-wrap items-center gap-3 pt-2"
          >
            <a
              href={CONTACTS.email}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg
                bg-foreground text-background text-base font-medium
                hover:opacity-90 active:scale-[0.98] transition-all duration-150"
            >
              <MessageIcon />
              Contact me
            </a>

            <a
              href={CV_URL}
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg
                border border-border/60 text-foreground text-base font-medium
                hover:bg-muted/60 active:scale-[0.98] transition-all duration-150"
            >
              <DownloadIcon />
              Download CV
            </a>
          </motion.div>

          {/* Соцсети */}
          <motion.div
            variants={item}
            className="flex items-center gap-3 pt-1"
          >
            {[
              { href: CONTACTS.github, icon: <GithubIcon />, label: "GitHub" },
              { href: CONTACTS.linkedin, icon: <LinkedinIcon />, label: "LinkedIn" },
              { href: CONTACTS.telegram, icon: <TelegramIcon />, label: "Telegram" },
              { href: CONTACTS.email, icon: <MailIcon />, label: "Email" },
            ].map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex items-center justify-center size-9 rounded-lg
                  border border-border/40 text-muted-foreground
                  hover:border-border hover:text-foreground hover:bg-muted/40
                  transition-all duration-150"
              >
                {icon}
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Скролл-хинт снизу */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-border/60 to-transparent"
        />
      </motion.div>
    </section>
  )
}
