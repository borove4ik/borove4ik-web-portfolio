"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

// ─── Типы ─────────────────────────────────────────────────────────────────────
type StackItem = {
  name: string
  icon: string        // devicon class, напр. "devicon-react-original"
  color: string       // фирменный цвет для hover
}

type StackCategory = {
  id: string
  label: string
  items: StackItem[]
}

// ─── Данные ───────────────────────────────────────────────────────────────────
// Полный список devicon-классов: https://devicon.dev/
const stack: StackCategory[] = [
  {
    id: "core",
    label: "Core",
    items: [
      { name: "HTML5",       icon: "devicon-html5-plain",           color: "#E34F26" },
      { name: "CSS3",        icon: "devicon-css3-plain",            color: "#1572B6" },
      { name: "JavaScript",  icon: "devicon-javascript-plain",      color: "#F7DF1E" },
      { name: "TypeScript",  icon: "devicon-typescript-plain",      color: "#3178C6" },
    ],
  },
  {
    id: "frameworks",
    label: "Frameworks & Libraries",
    items: [
      { name: "React",       icon: "devicon-react-original",        color: "#61DAFB" },
      { name: "Next.js",     icon: "devicon-nextjs-plain",          color: "#000000" },
      { name: "Vue.js",      icon: "devicon-vuejs-plain",           color: "#4FC08D" },
      { name: "Tailwind",    icon: "devicon-tailwindcss-plain",     color: "#06B6D4" },
      { name: "Node.js",     icon: "devicon-nodejs-plain",          color: "#339933" },
      { name: "Express",     icon: "devicon-express-original",      color: "#000000" },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    items: [
      { name: "Git",         icon: "devicon-git-plain",             color: "#F05032" },
      { name: "Figma",       icon: "devicon-figma-plain",           color: "#F24E1E" },
      { name: "Docker",      icon: "devicon-docker-plain",          color: "#2496ED" },
      { name: "Vite",        icon: "devicon-vitejs-plain",          color: "#646CFF" },
      { name: "Webpack",     icon: "devicon-webpack-plain",         color: "#8DD6F9" },
    ],
  },
  {
    id: "other",
    label: "Other",
    items: [
      { name: "MongoDB",     icon: "devicon-mongodb-plain",         color: "#47A248" },
      { name: "Django",      icon: "devicon-django-plain",          color: "#092E20" },
      { name: "PHP",         icon: "devicon-php-plain",             color: "#777BB4" },
      { name: "SCSS",        icon: "devicon-sass-plain",            color: "#CC6699" },
      { name: "jQuery",      icon: "devicon-jquery-plain",          color: "#0769AD" },
    ],
  },
]

// ─── Один значок ─────────────────────────────────────────────────────────────
function StackIcon({ item, index }: { item: StackItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      title={item.name}
      className="group relative flex flex-col items-center gap-2 cursor-default"
    >
      <div
        className="flex items-center justify-center size-14 rounded-xl
          border border-border/40 bg-card
          transition-all duration-200
          group-hover:border-border group-hover:scale-110 group-hover:shadow-md"
        style={
          {
            "--brand": item.color,
          } as React.CSSProperties
        }
      >
        <i
          className={`${item.icon} colored text-3xl
            grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100
            transition-all duration-200`}
          aria-hidden="true"
        />
      </div>
      <span className="text-base text-muted-foreground/60 group-hover:text-muted-foreground transition-colors">
        {item.name}
      </span>
    </motion.div>
  )
}

// ─── Группа ───────────────────────────────────────────────────────────────────
function StackGroup({ category, groupIndex }: { category: StackCategory; groupIndex: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: groupIndex * 0.08 }}
      className="flex flex-col gap-4"
    >
      <p className="text-xs font-medium tracking-[0.15em] uppercase text-muted-foreground/50">
        {category.label}
      </p>
      <div className="flex flex-wrap gap-4">
        {category.items.map((item, i) => (
          <StackIcon key={item.name} item={item} index={i} />
        ))}
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
      <h2 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
      Stack
      </h2>
      <p className="mt-3 text-muted-foreground text-xl leading-relaxed max-w-md">
      Technologies & Tools
      </p>
    </motion.div>
  )
}

// ─── Главный экспорт ──────────────────────────────────────────────────────────
export function StackSection() {
  return (
    <>
      {/* Devicons CDN — подключаем один раз здесь */}
      {/* В реальном проекте лучше добавить в layout.tsx в <head> через next/head или metadata */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
      />

      <section id="about" className="py-24 px-6">
        <div className="max-w-2xl mx-auto">
          <SectionHeader />
          <div className="flex flex-col gap-12">
            {stack.map((category, index) => (
              <StackGroup key={category.id} category={category} groupIndex={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
