import { Link, useParams } from "react-router-dom"
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  Clock,
  Gamepad2,
  Gauge,
  Hourglass,
  Play,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Rating from "@/components/Rating"
import SimIcon from "@/components/simulations/SimIcon"
import { useSimulations } from "@/hooks/useSimulations"
import { CATEGORIES } from "@/data/simulations"
import { cn } from "@/lib/utils"

function QuickStat({ icon, label, children }) {
  const Icon = icon
  return (
    <Card className="shadow-punch-sm">
      <CardContent className="flex items-center gap-3 p-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border-2 border-ink bg-secondary text-ink">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
        <div>
          <p className="text-xs text-muted-foreground">{label}</p>
          <div className="font-mono text-sm font-semibold tabular-nums">{children}</div>
        </div>
      </CardContent>
    </Card>
  )
}

function ComingSoon({ label }) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-md border-2 border-dashed border-ink/40 py-16 text-center">
      <Hourglass className="h-8 w-8 text-muted-foreground/50" aria-hidden="true" />
      <p className="font-medium">{label} coming soon</p>
      <p className="max-w-sm text-sm text-muted-foreground">
        We're building this section. Check back after your next play session.
      </p>
    </div>
  )
}

export default function SimulationDetailPage() {
  const { slug } = useParams()
  const { simulations } = useSimulations()
  const simulation = simulations.find((s) => s.slug === slug)

  if (!simulation) {
    return (
      <div className="py-20 text-center">
        <h1 className="font-display text-3xl uppercase">Simulation not found</h1>
        <p className="mt-2 text-muted-foreground">
          No simulation exists at this address.
        </p>
        <Button asChild className="mt-6">
          <Link to="/simulations">
            <ArrowLeft />
            Back to Simulations
          </Link>
        </Button>
      </div>
    )
  }

  const category = CATEGORIES[simulation.category]

  return (
    <div>
      <Link
        to="/simulations"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Back to Simulations
      </Link>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <h1 className="font-display text-3xl uppercase tracking-tight">{simulation.title}</h1>
        <Badge className={cn("border-ink px-2.5", category?.chip)}>
          {simulation.category}
        </Badge>
      </div>
      <p className="mt-1.5 max-w-2xl text-muted-foreground">
        {simulation.shortDescription}
      </p>

      <div className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
        <QuickStat icon={Gamepad2} label="Total Plays">
          {simulation.plays.toLocaleString()}
        </QuickStat>
        <QuickStat icon={Gauge} label="Rating">
          <Rating value={simulation.rating} />
        </QuickStat>
        <QuickStat icon={Clock} label="Avg. Play Time">
          {simulation.avgPlayTime}
        </QuickStat>
        <QuickStat icon={Gauge} label="Difficulty">
          {simulation.difficulty}
        </QuickStat>
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        <Button variant="token" size="lg">
          <Play />
          Play Simulation
        </Button>
        <Button variant="outline" size="lg">
          <BookOpen />
          View Tutorial
        </Button>
      </div>

      <Tabs defaultValue="overview" className="mt-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="how-to-play">How to Play</TabsTrigger>
          <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-4 space-y-5">
          <div className="grid gap-6 lg:grid-cols-[3fr_2fr] lg:items-start">
            <div className="space-y-5">
              <div>
                <h2 className="text-xl font-semibold">About This Simulation</h2>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  {simulation.aboutDescription}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold">Key Mechanics</h3>
                <ul className="mt-2 grid gap-2">
                  {simulation.mechanics.map((mechanic) => (
                    <li key={mechanic} className="flex items-center gap-2.5 text-sm">
                      <CheckCircle2
                        className="h-4 w-4 shrink-0 text-ink"
                        aria-hidden="true"
                      />
                      {mechanic}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="aspect-video w-full overflow-hidden rounded-md border-2 border-ink shadow-punch">
              <SimIcon slug={simulation.slug} label={`${simulation.title} banner`} />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold">What You'll Learn</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {simulation.learnTags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="border-2 px-3 py-1"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="how-to-play" className="mt-6">
          <ComingSoon label="How to Play" />
        </TabsContent>
        <TabsContent value="leaderboard" className="mt-6">
          <ComingSoon label="Leaderboard" />
        </TabsContent>
        <TabsContent value="reviews" className="mt-6">
          <ComingSoon label="Reviews" />
        </TabsContent>
      </Tabs>
    </div>
  )
}
