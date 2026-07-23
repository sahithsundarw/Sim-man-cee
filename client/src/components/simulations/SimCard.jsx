import { Link } from "react-router-dom"
import { Gamepad2 } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Rating from "@/components/Rating"
import SimIcon from "@/components/simulations/SimIcon"
import { CATEGORIES } from "@/data/simulations"
import { cn } from "@/lib/utils"

export default function SimCard({ simulation }) {
  const category = CATEGORIES[simulation.category]

  return (
    <Link
      to={`/simulations/${simulation.slug}`}
      className="group block rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <Card className="h-full gap-0 overflow-hidden py-0 transition-all duration-200 group-hover:-translate-y-1 group-hover:border-primary/40 group-hover:shadow-lg group-hover:shadow-primary/10 motion-reduce:transition-none motion-reduce:group-hover:translate-y-0">
        <div className="relative aspect-video overflow-hidden">
          <div className="h-full w-full transition-transform duration-300 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100">
            <SimIcon slug={simulation.slug} label={simulation.title} />
          </div>
          <Badge
            className={cn(
              "absolute left-3 top-3 rounded-full border-0 px-2.5",
              category?.chip
            )}
          >
            {simulation.category}
          </Badge>
        </div>

        <CardContent className="flex flex-1 flex-col gap-2 p-4">
          <h3 className="font-semibold leading-snug">{simulation.title}</h3>
          <p className="line-clamp-2 text-sm text-muted-foreground">
            {simulation.shortDescription}
          </p>
          <div className="mt-auto flex items-center justify-between pt-2 text-xs text-muted-foreground">
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
