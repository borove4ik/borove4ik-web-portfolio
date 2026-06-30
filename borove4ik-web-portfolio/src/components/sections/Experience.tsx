"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { experiences, type ExperienceItem } from "@/data/experience"

const typeBadge: Record<ExperienceItem["type"], string> = {
  "full-time": "bg-primary/10 text-primary border-primary/20",
  intern: "bg-amber-500/10 text-amber-500 border-amber-500/20",
  freelance: "bg-violet-500/10 text-violet-500 border-violet-500/20",
  contract: "bg-cyan-500/10 text-cyan-500 border-cyan-500/20",
}

const typeLabel: Record<ExperienceItem["type"], string> = {
  "full-time": "full-time",
  intern: "intern",
  freelance: "freelance",
  contract: "contract",
}

// ─── Строка опыта ─────────────────────────────────────────────────────────────
function ExperienceRow({ item, index }: { item: ExperienceItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const isLeft = index % 2 === 0

  const handleDateEnter = () => {
    if (!dotRef.current) return
    dotRef.current.style.boxShadow =
      "0 0 0 5px hsl(var(--primary) / 0.2), 0 0 20px 6px hsl(var(--primary) / 0.5)"
    dotRef.current.style.transform = "scale(1.5)"
  }

  const handleDateLeave = () => {
    if (!dotRef.current) return
    dotRef.current.style.boxShadow = ""
    dotRef.current.style.transform = ""
  }

  return (
    <div
      ref={ref}
      className={`relative flex w-full items-start gap-0 md:gap-8 ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      } flex-col`}
    >
      {/* ── Карточка ── */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`group relative w-full md:w-[calc(50%-2rem)] rounded-xl border border-border/50 bg-card p-6
          hover:border-border hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/20
          transition-all duration-300 ${isLeft ? "md:text-left" : "md:text-right"}`}
      >
        <div className={`absolute top-8 hidden md:block h-px w-8 bg-border/60 ${isLeft ? "-right-8" : "-left-8"}`} />

        <div className={`flex items-start gap-3 mb-4 ${isLeft ? "flex-row" : "md:flex-row-reverse"} flex-row`}>
          <div className="shrink-0 size-10 rounded-lg bg-muted flex items-center justify-center text-xs font-semibold text-muted-foreground border border-border/50">
            {item.company.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase()}
          </div>
          <div className={`flex-1 min-w-0 ${isLeft ? "" : "md:text-right"}`}>
            <p className="font-semibold text-foreground leading-tight truncate">{item.company}</p>
            <p className="text-sm text-muted-foreground">{item.role}</p>
          </div>
          <span className={`shrink-0 text-[11px] font-medium px-2 py-0.5 rounded-md border ${typeBadge[item.type]}`}>
            {typeLabel[item.type]}
          </span>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed mb-4">{item.description}</p>

        <ul className={`space-y-1.5 ${isLeft ? "" : "md:items-end"} flex flex-col`}>
          {item.achievements.map((ach, i) => (
            <li key={i} className={`flex items-start gap-2 text-xs text-muted-foreground ${isLeft ? "flex-row" : "md:flex-row-reverse"} flex-row`}>
              <span className="mt-1.5 shrink-0 size-1 rounded-full bg-primary/60" />
              <span>{ach}</span>
            </li>
          ))}
        </ul>

        <div className={`mt-4 pt-4 border-t border-border/40 flex items-center gap-2 text-xs text-muted-foreground/60 ${isLeft ? "flex-row" : "md:flex-row-reverse"} flex-row`}>
          <span>{item.period}</span>
          {item.duration !== "ongoing" && (
            <><span>·</span><span>{item.duration}</span></>
          )}
        </div>
      </motion.div>

      {/* ── Точка на timeline ── */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="hidden md:flex shrink-0 w-16 items-center justify-center relative z-10"
      >
        <div
          ref={dotRef}
          className="size-3 rounded-full bg-primary ring-4 ring-background border border-primary/30"
          style={{ transition: "box-shadow 0.3s ease, transform 0.3s ease" }}
        />
      </motion.div>

      {/* ── Дата — поворот + при ховере светится точка ── */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? 40 : -40 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`hidden md:flex w-[calc(50%-2rem)] items-start pt-7 ${isLeft ? "justify-start" : "justify-end"}`}
      >
        <motion.div
          whileHover={{ rotate: isLeft ? -6 : 6, scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          onMouseEnter={handleDateEnter}
          onMouseLeave={handleDateLeave}
          className={`cursor-default select-none rounded-lg border border-border/40 bg-muted/50 px-3 py-2
            ${isLeft ? "text-left" : "text-right"}`}
        >
          <p className="text-xs font-medium text-foreground/70 leading-tight">{item.period}</p>
          {item.duration !== "ongoing" && (
            <p className="text-[11px] text-muted-foreground/50 mt-0.5">{item.duration}</p>
          )}
        </motion.div>
      </motion.div>
    </div>
  )
}

// ─── Timeline линия ───────────────────────────────────────────────────────────
function TimelineLine() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })
  return (
    <div ref={ref} className="absolute left-1/2 top-0 -translate-x-1/2 w-px h-full hidden md:block overflow-hidden">
      <motion.div
        initial={{ scaleY: 0, originY: 0 }}
        animate={isInView ? { scaleY: 1 } : {}}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="h-full w-full bg-gradient-to-b from-transparent via-border to-transparent"
      />
    </div>
  )
}

// ─── Заголовок ────────────────────────────────────────────────────────────────
function SectionHeader() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="mb-16 text-center"
    >
      <h2 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight">Experience </h2>
      <p className="mt-3 text-muted-foreground max-w-md mx-auto text-sm leading-relaxed">
        My Professional Path.
      </p>
    </motion.div>
  )
}

// ─── Главный экспорт ──────────────────────────────────────────────────────────
export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <SectionHeader />
        <div className="relative">
          <TimelineLine />
          <div className="flex flex-col gap-12">
            {experiences.map((item, index) => (
              <ExperienceRow key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}