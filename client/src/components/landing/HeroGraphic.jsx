import { Link } from "react-router-dom"
import { motion as Motion, useReducedMotion } from "motion/react"

import SimIcon from "@/components/simulations/SimIcon"
import { CATEGORIES, getSimulationBySlug } from "@/data/simulations"

// The dealt hand: five real sims fanned like property cards, one per color
// group. Hover picks a card up and straightens it; click opens the sim.
const HAND = [
  { slug: "clash-of-taxis", rotate: -14, x: -150, y: 34 },
  { slug: "network-policy-lab", rotate: -7, x: -75, y: 10 },
  { slug: "financial-literacy", rotate: 0, x: 0, y: 0 },
  { slug: "bargaining-arena", rotate: 7, x: 75, y: 10 },
  { slug: "influence-welfare", rotate: 14, x: 150, y: 34 },
]

function HandCard({ sim, rotate, x, y, index, reduceMotion }) {
  const category = CATEGORIES[sim.category]
  const centerDistance = Math.abs(index - 2)

  return (
    <Motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 64, rotate: 0, x: 0 }}
      animate={{ opacity: 1, y, rotate, x }}
      whileHover={
        reduceMotion
          ? undefined
          : { y: y - 18, rotate: 0, scale: 1.05, zIndex: 10 }
      }
      transition={
        reduceMotion
          ? { duration: 0 }
          : {
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.25 + index * 0.1,
            }
      }
      style={{ zIndex: 3 - centerDistance }}
      className="absolute w-36 sm:w-44"
    >
      <Motion.div
        animate={reduceMotion ? undefined : { y: [0, -5, 0] }}
        transition={
          reduceMotion
            ? undefined
            : {
                duration: 4 + index * 0.6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1 + index * 0.35,
              }
        }
      >
        <Link
          to={`/simulations/${sim.slug}`}
          className="block overflow-hidden rounded-md border-2 border-ink bg-card shadow-punch outline-none transition-shadow hover:shadow-punch-lg focus-visible:ring-2 focus-visible:ring-ring"
        >
          <div
            className="border-b-2 border-ink px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide"
            style={{ background: category?.band, color: category?.bandText }}
          >
            {sim.category}
          </div>
          <div className="aspect-video border-b-2 border-ink">
            <SimIcon slug={sim.slug} label={sim.title} />
          </div>
          <div className="px-3 py-2.5">
            <p className="text-sm font-semibold leading-snug">{sim.title}</p>
            <p className="mt-1 font-mono text-[11px] text-muted-foreground">
              {sim.plays.toLocaleString()} plays · {sim.rating.toFixed(1)}★
            </p>
          </div>
        </Link>
      </Motion.div>
    </Motion.div>
  )
}

export default function HeroGraphic() {
  const reduceMotion = useReducedMotion()

  return (
    <div className="relative flex h-[360px] w-full max-w-lg items-center justify-center sm:h-[420px]">
      {HAND.map((entry, index) => {
        const sim = getSimulationBySlug(entry.slug)
        if (!sim) return null
        return (
          <HandCard
            key={entry.slug}
            sim={sim}
            rotate={entry.rotate}
            x={entry.x}
            y={entry.y}
            index={index}
            reduceMotion={reduceMotion}
          />
        )
      })}
    </div>
  )
}
