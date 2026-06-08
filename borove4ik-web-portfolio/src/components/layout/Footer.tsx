export function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-border/40 py-12 px-6"
    >
      <div className="max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Denis Borovets. All rights reserved.
        </p>

        <div className="flex items-center gap-3">
          {[
            { label: "GitHub", href: "https://github.com/yourhandle" },
            { label: "LinkedIn", href: "https://linkedin.com/in/yourhandle" },
            { label: "Telegram", href: "https://t.me/yourhandle" },
            { label: "Email", href: "mailto:you@email.com" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
