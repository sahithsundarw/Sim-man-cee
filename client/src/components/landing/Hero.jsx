import { Link } from "react-router-dom"
import { Gamepad2, Play, ThumbsUp, Users } from "lucide-react"
import { motion as Motion, useReducedMotion } from "motion/react"

import { Button } from "@/components/ui/button"
import { NumberTicker } from "@/components/ui/number-ticker"
import { LANDING_STATS } from "@/data/landingStats"
import BoardPath from "./BoardPath"
import FloatingTokens from "./FloatingTokens"
import HeroGraphic from "./HeroGraphic"

const STAT_ICONS = { Gamepad2, Users, ThumbsUp }

export default function Hero() {
  const reduceMotion = useReducedMotion()

  const enter = (delay) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1], delay },
        }

  return (
    <section className="relative overflow-hidden">
      <BoardPath />
      <FloatingTokens />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 md:py-24 lg:grid-cols-2">
        <div>
          <Motion.h1
            {...enter(0)}
            className="font-display text-4xl uppercase leading-[1.12] tracking-tight sm:text-5xl"
          >
            <span className="block text-ink">Business</span>
            <span className="mt-2 inline-block -rotate-1 rounded-md border-2 border-ink bg-cat-operations px-3 py-1 text-white shadow-punch">
              Simulations.
            </span>
            <span className="mt-3 block">
              <span className="inline-block rotate-1 rounded-md border-2 border-ink bg-gold px-3 py-1 text-ink shadow-punch">
                Real Decisions.
              </span>
            </span>
          </Motion.h1>

          <Motion.p
            {...enter(0.1)}
            className="mt-6 max-w-lg text-lg text-muted-foreground"
          >
            Learn strategy, finance, operations, and public policy by doing —
            interactive simulations where every decision plays out in a living
            market, not a textbook.
          </Motion.p>

          <Motion.div
            {...enter(0.2)}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Button asChild variant="token" size="lg">
              <Link to="/simulations">Explore Simulations</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              disabled
              title="Coming soon"
              className="disabled:opacity-100"
            >
              <Play />
              Watch Demo
              <span className="rounded-sm bg-gold/40 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-ink">
                soon
              </span>
            </Button>
          </Motion.div>

          <Motion.div
            {...enter(0.3)}
            className="mt-10 inline-flex flex-wrap divide-x-2 divide-ink rounded-md border-2 border-ink bg-card shadow-punch-sm"
          >
            {LANDING_STATS.map((stat) => {
              const Icon = STAT_ICONS[stat.icon]
              return (
                <div key={stat.id} className="flex items-center gap-3 px-5 py-3">
                  <Icon className="h-4 w-4 text-ink" aria-hidden="true" />
                  <div>
                    <p className="font-mono text-lg font-semibold leading-tight tabular-nums">
                      <NumberTicker value={stat.value} />
                      {stat.suffix}
                    </p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              )
            })}
          </Motion.div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <HeroGraphic />
        </div>
      </div>
    </section>
  )
}
