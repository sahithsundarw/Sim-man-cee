export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-1 px-4 py-8 text-center sm:px-6">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} SimManCee
        </p>
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground/60">
          Place to play monkey business
        </p>
      </div>
    </footer>
  )
}
