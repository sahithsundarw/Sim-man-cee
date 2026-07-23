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
        <h1 className="text-3xl font-bold tracking-tight">
          Welcome back, {MOCK_USER.name}! 👋
        </h1>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-500/15 px-3 py-1.5 text-sm font-semibold text-orange-400">
          <Flame className="h-4 w-4" aria-hidden="true" />
          {MOCK_USER.streakDays} day streak
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
