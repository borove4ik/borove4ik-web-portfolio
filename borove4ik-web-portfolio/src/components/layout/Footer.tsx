

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border/40 py-10 px-6">
      <div className="max-w-2xl mx-auto flex flex-col sm:flex-row justify-center gap-4">
        <p className="text-xl text-muted-foreground">
          © {new Date().getFullYear()} Denis Borovets. All rights reserved.
        </p>
      </div>
    </footer>
  )
}