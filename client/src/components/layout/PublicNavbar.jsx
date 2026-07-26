import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

function ComingSoonLink({ label }) {
  return (
    <span
      className="hidden items-center gap-1.5 text-sm font-medium text-foreground/80 cursor-default select-none md:inline-flex"
      title="Coming soon"
    >
      {label}
      <span className="rounded-sm bg-gold/40 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-ink">
        soon
      </span>
    </span>
  )
}

export default function PublicNavbar() {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-ink bg-background">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2.5">
          <img
            src={import.meta.env.BASE_URL + "logo.png"}
            alt="SimManCee logo"
            className="h-9 w-9 rounded-md object-contain"
          />
          <span className="font-display text-lg tracking-tight text-ink">
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
            <Button
              variant="ghost"
              size="sm"
              disabled
              title="Accounts coming soon"
              className="disabled:opacity-100 text-ink"
            >
              Log in
            </Button>
            <Button
              variant="token"
              size="sm"
              disabled
              title="Accounts coming soon"
              className="disabled:opacity-100"
            >
              Sign up
            </Button>
          </div>
        </div>
      </nav>
    </header>
  )
}
