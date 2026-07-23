import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export default function NotFoundPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-4 px-4 text-center">
      <p className="text-6xl font-extrabold text-gradient-accent">404</p>
      <h1 className="text-2xl font-bold">Page not found</h1>
      <p className="max-w-sm text-muted-foreground">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Button asChild className="mt-2">
        <Link to="/">Back to Home</Link>
      </Button>
    </div>
  )
}
