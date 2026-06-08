"use client"

import { useRef } from "react"

const ITEMS = [
  "Building interfaces",
  "Attention to detail",
  "Fast & accessible",
  "Always learning",
  "Clean code",
  "Open to work",
]

const SEPARATOR = "✦"

const repeated = [...ITEMS, ...ITEMS]

export function Marquee() {
  const trackRef = useRef<HTMLDivElement>(null)

  const pause = () => {
    if (trackRef.current) trackRef.current.style.animationPlayState = "paused"
  }

  const resume = () => {
    if (trackRef.current) trackRef.current.style.animationPlayState = "running"
  }

  return (
    <div
      className="relative w-full overflow-hidden border-y border-border/40 py-4"
      onMouseEnter={pause}
      onMouseLeave={resume}
    >
      {/* Градиентные маски по краям */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10
        bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10
        bg-gradient-to-l from-background to-transparent" />

      {/* Бегущая строка */}
      <div ref={trackRef} className="flex w-max animate-marquee">
        {repeated.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-4 px-4 text-sm font-medium
              text-muted-foreground/50 hover:text-foreground
              whitespace-nowrap transition-colors duration-150 cursor-default
              hover:underline underline-offset-4 decoration-muted-foreground/30"
          >
            {item}
            <span className="text-muted-foreground/25 text-xs">{SEPARATOR}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
