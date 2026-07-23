import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

function ComingSoonLink({ label }) {
  return (
    <span
      className="hidden items-center gap-1.5 text-sm text-muted-foreground/60 cursor-default select-none md:inline-flex"
      title="Coming soon"
    >
      {label}
      <span className="rounded-full bg-secondary px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
        soon
      </span>
    </span>
  )
}

export default function PublicNavbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2.5">
          <img
            src={import.meta.env.BASE_URL + "logo.png"}
            alt="SimManCee logo"
            className="h-9 w-9 rounded-md object-contain"
          />
          <span className="text-lg font-bold tracking-tight text-gradient-accent">
            SimManCee
          </span>
        </Link>

        <div className="flex items-center gap-6">
          <Link
            to="/simulations"
            className="hidden text-sm text-foreground/80 transition-colors hover:text-foreground md:inline"
          >
            Simulations
          </Link>
          <ComingSoonLink label="Leaderboard" />
          <a
            href="#about"
            className="hidden text-sm text-foreground/80 transition-colors hover:text-foreground md:inline"
          >
            About Us
          </a>
          <ComingSoonLink label="Resources" />

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm">
              Log in
            </Button>
            <Button size="sm">Sign up</Button>
          </div>
        </div>
      </nav>
    </header>
  )
}
