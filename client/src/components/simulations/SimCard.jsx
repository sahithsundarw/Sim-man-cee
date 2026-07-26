import { Link } from "react-router-dom"
import { Gamepad2 } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import Rating from "@/components/Rating"
import SimIcon from "@/components/simulations/SimIcon"
import { CATEGORIES } from "@/data/simulations"

// Property card: category color band on top, art plate, title, mono stat row.
export default function SimCard({ simulation }) {
  const category = CATEGORIES[simulation.category]

  return (
    <Link
      to={`/simulations/${simulation.slug}`}
      className="group block rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <Card className="h-full gap-0 overflow-hidden py-0 transition-all duration-200 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 group-hover:shadow-punch-lg motion-reduce:transition-none motion-reduce:group-hover:translate-x-0 motion-reduce:group-hover:translate-y-0">
        <div
          className="border-b-2 border-ink px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wide"
          style={{ background: category?.band, color: category?.bandText }}
        >
          {simulation.category}
        </div>

        <div className="relative aspect-video overflow-hidden border-b-2 border-ink">
          <div className="h-full w-full transition-transform duration-300 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100">
            <SimIcon slug={simulation.slug} label={simulation.title} />
          </div>
        </div>

        <CardContent className="flex flex-1 flex-col gap-2 p-4">
          <h3 className="font-semibold leading-snug">{simulation.title}</h3>
          <p className="line-clamp-2 text-sm text-muted-foreground">
            {simulation.shortDescription}
          </p>
          <div className="mt-auto flex items-center justify-between pt-2 font-mono text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Gamepad2 className="h-3.5 w-3.5" aria-hidden="true" />
              {simulation.plays.toLocaleString()} plays
            </span>
            <Rating value={simulation.rating} />
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
