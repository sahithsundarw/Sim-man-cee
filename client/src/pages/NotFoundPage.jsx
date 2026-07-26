import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export default function NotFoundPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-4 px-4 text-center">
      <p className="inline-block -rotate-2 rounded-md border-2 border-ink bg-gold px-4 py-1 font-display text-6xl text-ink shadow-punch">
        404
      </p>
      <h1 className="font-display text-2xl uppercase">Page not found</h1>
      <p className="max-w-sm text-muted-foreground">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Button asChild className="mt-2">
        <Link to="/">Back to Home</Link>
      </Button>
    </div>
  )
}
