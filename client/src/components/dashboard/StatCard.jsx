import { ArrowDownRight, ArrowUpRight } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export default function StatCard({ icon: Icon, label, value, delta, up }) {
  return (
    <Card>
      <CardContent className="flex items-start justify-between p-5">
        <div>
          <p className="text-sm text-muted-foreground">{label}</p>
          <p className="mt-1 text-2xl font-bold tabular-nums">{value}</p>
          {delta && (
            <p
              className={cn(
                "mt-1 inline-flex items-center gap-0.5 text-xs font-medium",
                up ? "text-emerald-400" : "text-red-400"
              )}
            >
              {up ? (
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              ) : (
                <ArrowDownRight className="h-3.5 w-3.5" aria-hidden="true" />
              )}
              {delta}
            </p>
          )}
        </div>
        {Icon && (
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-primary">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </div>
        )}
      </CardContent>
    </Card>
  )
}
