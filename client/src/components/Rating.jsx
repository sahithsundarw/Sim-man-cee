import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Rating({ value, showValue = true, className }) {
  return (
    <span
      className={cn("inline-flex items-center gap-1", className)}
      aria-label={`Rated ${value} out of 5`}
    >
      <span className="flex" aria-hidden="true">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={cn(
              "h-3.5 w-3.5",
              star <= Math.round(value)
                ? "fill-amber-400 text-amber-400"
                : "text-muted-foreground/40"
            )}
          />
        ))}
      </span>
      {showValue && (
        <span className="text-xs font-medium text-muted-foreground tabular-nums">
          {value.toFixed(1)}
        </span>
      )}
    </span>
  )
}
