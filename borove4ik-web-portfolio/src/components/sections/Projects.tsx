"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { projects, type Project } from "@/data/projects"

// ─── Градиентные заглушки (пока нет скринов) ─────────────────────────────────
const placeholderGradients = [
  "from-violet-500/20 via-purple-500/10 to-blue-500/20",
  "from-emerald-500/20 via-teal-500/10 to-cyan-500/20",
  "from-orange-500/20 via-amber-500/10 to-yellow-500/20",
  "from-rose-500/20 via-pink-500/10 to-fuchsia-500/20",
]

// ─── Иконки ───────────────────────────────────────────────────────────────────
function GithubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
    </svg>
  )
}

function ExternalLinkIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  )
}

// ─── Карточка проекта ─────────────────────────────────────────────────────────
function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })

  const gradient = placeholderGradients[index % placeholderGradients.length]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="group relative flex flex-col rounded-xl overflow-hidden
        border border-border/40 bg-card
        hover:border-border hover:shadow-xl hover:shadow-black/5
        dark:hover:shadow-black/30
        transition-all duration-300 cursor-default"
    >
      {/* ── Превью (верхняя часть) ── */}
      <div className="relative h-44 overflow-hidden bg-muted/30">
        {/* Заглушка-градиент — замени на <Image> когда будут скрины */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${gradient} transition-transform duration-500 group-hover:scale-105`}
        />

        {/* Инициалы проекта по центру */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl font-semibold text-foreground/10 select-none">
            {project.title
              .split(" ")
              .map((w) => w[0])
              .join("")
              .slice(0, 2)
              .toUpperCase()}
          </span>
        </div>

        {/* Оверлей при ховере с описанием и стеком */}
        <div className="absolute inset-0 bg-background/90 backdrop-blur-sm
          opacity-0 group-hover:opacity-100
          transition-opacity duration-300
          flex flex-col justify-center px-5 gap-3">
          <p className="text-sm text-foreground leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] px-2 py-0.5 rounded-md
                  bg-muted text-muted-foreground border border-border/50"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Нижняя часть (название + ссылки) ── */}
      <div className="flex items-center justify-between gap-3 px-4 py-3
        border-t border-border/40">
        <div className="flex items-center gap-2 min-w-0">
          <h3 className="font-medium text-sm text-foreground truncate">
            {project.title}
          </h3>
          {/* Статус-точка */}
          <span
            className={`shrink-0 size-1.5 rounded-full ${
              project.status === "live"
                ? "bg-emerald-500"
                : project.status === "wip"
                ? "bg-amber-400"
                : "bg-muted-foreground/30"
            }`}
            title={project.status === "live" ? "Live" : project.status === "wip" ? "In progress" : "Archived"}
          />
        </div>

        <div className="flex items-center gap-1 shrink-0">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} GitHub`}
              className="flex items-center justify-center size-7 rounded-md
                text-muted-foreground hover:text-foreground hover:bg-muted/50
                transition-all duration-150"
            >
              <GithubIcon />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live demo`}
              className="flex items-center justify-center size-7 rounded-md
                text-muted-foreground hover:text-foreground hover:bg-muted/50
                transition-all duration-150"
            >
              <ExternalLinkIcon />
            </a>
          )}
        </div>
      </div>
    </motion.div>
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
      className="mb-12"
    >
      <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-3">
        Projects
      </p>
      <h2 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
        Selected work
      </h2>
      <p className="mt-3 text-muted-foreground text-sm leading-relaxed max-w-md">
        Things I've built — pet projects and real products.
      </p>
    </motion.div>
  )
}

// ─── Главный экспорт ──────────────────────────────────────────────────────────
export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <SectionHeader />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
