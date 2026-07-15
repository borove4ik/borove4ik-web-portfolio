"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import emailjs from "@emailjs/browser"


const EMAILJS_SERVICE_ID = "service_kix7tiz"
const EMAILJS_TEMPLATE_ID = "template_flmnk9x"
const EMAILJS_PUBLIC_KEY = "HCAksCKjFwUFsMVIa"

const MAX_MESSAGE_LENGTH = 300

const LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/borove4ik",
    color: "#6e7681",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/borove4ik/",
    color: "#0A66C2",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: "Telegram",
    href: "https://t.me/borove4ik",
    color: "#26A5E4",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:dsborovets@gmail.com",
    color: "#EA4335",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
      </svg>
    ),
  },
]

// ─── Форма ────────────────────────────────────────────────────────────────────
function ContactForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [errorMsg, setErrorMsg] = useState("")
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

  const handleSubmit = async () => {
    if (!name || !email || !message) return
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setErrorMsg("Please enter a valid email address.")
      setTimeout(() => setErrorMsg(""), 3000)
      return
    }
  
    setErrorMsg("")
    setStatus("sending")
  
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { from_name: name, from_email: email, message },
        EMAILJS_PUBLIC_KEY
      )
      setStatus("success")
      setTimeout(() => setStatus("idle"), 3000)
      setName("")
      setEmail("")
      setMessage("")
    } catch {
      setStatus("error")
      setTimeout(() => setStatus("idle"), 3000)
    }
  }

  const inputClass = `w-full px-4 py-3 rounded-lg text-base
    bg-muted/30 border border-border/40 text-foreground
    placeholder:text-muted-foreground/40
    focus:outline-none focus:border-border focus:bg-muted/50
    transition-all duration-150`

  return (
    <div className="w-full flex flex-col gap-4">
      {/* Имя */}
      <div className="flex flex-col gap-1.5">
        <label className="text-lg font-medium text-muted-foreground">
          Name <span className="text-muted-foreground/50">*</span>
        </label>
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={inputClass}
        />
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1.5">
        <label className="text-lg font-medium text-muted-foreground">
          E-mail <span className="text-muted-foreground/50">*</span>
        </label>
        <input
          type="email"
          placeholder="Your e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClass}
        />
      </div>

      {/* Сообщение */}
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center justify-between">
          <label className="text-lg font-medium text-muted-foreground">
            Message <span className="text-muted-foreground/50">*</span>
          </label>
          <span className="text-base text-muted-foreground/40">
            {message.length} / {MAX_MESSAGE_LENGTH}
          </span>
        </div>
        <textarea
          placeholder="Your message"
          value={message}
          onChange={(e) => {
            if (e.target.value.length <= MAX_MESSAGE_LENGTH) {
              setMessage(e.target.value)
            }
          }}
          rows={5}
          className={`${inputClass} resize-none`}
        />
      </div>

      {/* Кнопка отправки */}
      <div className="flex justify-end">
        <button
          onClick={handleSubmit}
          disabled={status === "sending" || !name || !email || !message}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg
            bg-foreground text-background text-lg font-medium
            hover:opacity-90 active:scale-[0.98]
            disabled:opacity-40 disabled:cursor-not-allowed
            transition-all duration-150 cursor-pointer"
        >
          {status === "sending" ? (
            <>
              <svg className="animate-spin" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
              </svg>
              Sending...
            </>
          ) : (
            <>
              Send Message
            </>
          )}
        </button>
      </div>

      {/* Статус */}
      {errorMsg && (
        <p className="text-base text-red-500 text-center">{errorMsg}</p>
      )}
      {status === "success" && (
        <p className="text-base text-emerald-500 text-center">
          Message sent! I'll get back to you soon.
        </p>
      )}
      {status === "error" && !errorMsg && (
        <p className="text-base text-red-500 text-center">
          Something went wrong. Try again or reach out directly.
        </p>
     )}
    </div>
  )
}

// ─── Главный компонент ────────────────────────────────────────────────────────
export function ContactSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center gap-8"
        >
          {/* Заголовок */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
            Contact
            </h2>
            <p className="mt-3 text-muted-foreground text-lg leading-relaxed max-w-sm mx-auto">
            Whether it's a <span className="text-emerald-400">job opportunity</span>, a <span className="text-emerald-400">project</span>, or just a conversation — feel free to reach out.
            </p>
          </div>

          {/* Форма */}
          <div className="w-full text-left">
            <ContactForm />
          </div>

          {/* Иконки соцсетей */}
          <div className="flex items-center gap-3">
            {LINKS.map(({ label, href, color, icon }, i) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                whileHover={{ y: -3 }}
                style={{ "--brand-color": color } as React.CSSProperties}
                className="flex items-center justify-center size-12 rounded-xl
                  border border-border/40 text-muted-foreground
                  hover:border-border hover:bg-muted/30
                  hover:text-[var(--brand-color)]
                  transition-colors duration-200"
              >
                {icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}