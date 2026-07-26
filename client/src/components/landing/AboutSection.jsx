import { motion as Motion, useReducedMotion } from "motion/react"

import { ABOUT_TEXT, TAGLINE } from "@/data/founders"

// The game-box back: an ink field between two paper sections.
export default function AboutSection() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="about" className="border-y-2 border-ink bg-ink text-paper">
      <Motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6"
      >
        <h2 className="font-display text-3xl uppercase tracking-tight">
          About Us
        </h2>
        <p className="mt-3 text-sm font-semibold uppercase tracking-[0.25em] text-gold">
          {TAGLINE}
        </p>
        <p className="mt-6 leading-relaxed text-paper/75">{ABOUT_TEXT}</p>
      </Motion.div>
    </section>
  )
}
