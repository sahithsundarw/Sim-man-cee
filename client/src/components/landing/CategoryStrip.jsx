import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { motion as Motion, useReducedMotion } from "motion/react"

import { CATEGORIES, CATEGORY_TABS, SIMULATIONS } from "@/data/simulations"

// Property color groups as clickable tiles — each links to the pre-filtered hub.
export default function CategoryStrip() {
  const reduceMotion = useReducedMotion()
  const categories = CATEGORY_TABS.filter((tab) => tab !== "All")

  const countFor = (category) =>
    SIMULATIONS.filter((sim) => sim.category === category).length

  return (
    <section className="border-t-2 border-ink bg-secondary/60">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <h2 className="font-display text-2xl uppercase tracking-tight">
            Browse the board
          </h2>
          <Link
            to="/simulations"
            className="inline-flex items-center gap-1.5 font-mono text-sm font-semibold text-ink underline underline-offset-4 hover:no-underline"
          >
            View all simulations
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((category, index) => {
            const colors = CATEGORIES[category]
            return (
              <Motion.div
                key={category}
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.45,
                  ease: [0.16, 1, 0.3, 1],
                  delay: reduceMotion ? 0 : index * 0.06,
                }}
              >
                <Link
                  to={`/simulations?category=${encodeURIComponent(category)}`}
                  className="block rounded-md border-2 border-ink px-4 py-6 shadow-punch-sm transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-punch motion-reduce:transition-none motion-reduce:hover:translate-x-0 motion-reduce:hover:translate-y-0"
                  style={{ background: colors?.band, color: colors?.bandText }}
                >
                  <p className="font-display text-sm uppercase leading-tight">
                    {category}
                  </p>
                  <p className="mt-2 font-mono text-xs font-semibold opacity-90">
                    {countFor(category)} {countFor(category) === 1 ? "sim" : "sims"}
                  </p>
                </Link>
              </Motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
