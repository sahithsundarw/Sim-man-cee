import { motion as Motion, useReducedMotion } from "motion/react"

import { Card, CardContent } from "@/components/ui/card"
import { FOUNDERS } from "@/data/founders"

export default function FoundersSection() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="team" className="bg-secondary/50">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <h2 className="text-center font-display text-3xl uppercase tracking-tight">
        Founding Team
      </h2>

      <div className="mx-auto mt-10 grid max-w-3xl gap-8 sm:grid-cols-2">
        {FOUNDERS.map((founder, index) => (
          <Motion.div
            key={founder.id}
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1],
              delay: reduceMotion ? 0 : index * 0.1,
            }}
          >
            <Card className="h-full text-center">
              <CardContent className="pt-6">
                <img
                  src={import.meta.env.BASE_URL + founder.image}
                  alt={founder.name}
                  className="mx-auto h-28 w-28 rounded-md border-2 border-ink object-cover shadow-punch-sm"
                />
                <h3 className="mt-4 text-lg font-semibold">{founder.name}</h3>
                <p className="mt-1 inline-block rounded-sm bg-gold px-2 py-0.5 text-sm font-semibold text-ink">
                  {founder.role}
                </p>
                <ul className="mt-4 space-y-1.5 text-left text-sm text-muted-foreground">
                  {founder.details.map((detail) => (
                    <li key={detail} className="flex gap-2">
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-ink" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </Motion.div>
        ))}
        </div>
      </div>
    </section>
  )
}
