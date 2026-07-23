import { Link } from "react-router-dom"
import { Gamepad2, Play, ThumbsUp, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { NumberTicker } from "@/components/ui/number-ticker"
import { Spotlight } from "@/components/ui/spotlight"
import { LANDING_STATS } from "@/data/landingStats"
import HeroGraphic from "./HeroGraphic"

const STAT_ICONS = { Gamepad2, Users, ThumbsUp }

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="#8b5cf6" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-2">
        <div>
          <h1 className="text-5xl font-extrabold leading-[1.08] tracking-tight sm:text-[3.5rem]">
            <span className="block text-foreground">Business</span>
            <span className="block text-gradient-purple">Simulations.</span>
            <span className="block text-gradient-orange">Real Decisions.</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg text-muted-foreground">
            Learn strategy, finance, operations, and public policy by doing —
            interactive simulations where every decision plays out in a living
            market, not a textbook.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <Link to="/simulations">Explore Simulations</Link>
            </Button>
            <Button variant="outline" size="lg">
              <Play />
              Watch Demo
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-10 gap-y-5">
            {LANDING_STATS.map((stat) => {
              const Icon = STAT_ICONS[stat.icon]
              return (
                <div key={stat.id} className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xl font-bold leading-tight tabular-nums">
                      <NumberTicker value={stat.value} />
                      {stat.suffix}
                    </p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          {/* Ambient glow behind the hero graphic */}
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -z-10 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/35 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute right-0 top-1/4 -z-10 h-64 w-64 rounded-full bg-orange-500/25 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-8 -z-10 h-48 w-48 rounded-full bg-indigo-500/30 blur-3xl"
          />
          <HeroGraphic />
        </div>
      </div>
    </section>
  )
}
