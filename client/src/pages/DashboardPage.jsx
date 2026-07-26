import { Flame, Gamepad2, Medal, Target, Trophy } from "lucide-react"

import StatCard from "@/components/dashboard/StatCard"
import ActivityList from "@/components/dashboard/ActivityList"
import TrendChart from "@/components/dashboard/TrendChart"
import { MOCK_STAT_CARDS, MOCK_USER } from "@/data/dashboardMock"

const ICONS = { Gamepad2, Trophy, Target, Medal }

export default function DashboardPage() {
  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="font-display text-3xl tracking-tight">
            Welcome back, {MOCK_USER.name}!
          </h1>
          <span
            className="rounded-sm border-2 border-ink bg-secondary px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground"
            title="Placeholder data — no real telemetry yet"
          >
            sample data
          </span>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-md border-2 border-ink bg-gold px-3 py-1.5 text-sm font-semibold text-ink shadow-punch-sm">
          <Flame className="h-4 w-4" aria-hidden="true" />
          <span className="font-mono tabular-nums">{MOCK_USER.streakDays}</span> day streak
        </span>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {MOCK_STAT_CARDS.map((stat) => (
          <StatCard
            key={stat.id}
            icon={ICONS[stat.icon]}
            label={stat.label}
            value={stat.value}
            delta={stat.delta}
            up={stat.up}
          />
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <ActivityList />
        <TrendChart />
      </div>
    </div>
  )
}
