import { Gamepad2 } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MOCK_RECENT_ACTIVITY } from "@/data/dashboardMock"

export default function ActivityList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent className="space-y-1">
        {MOCK_RECENT_ACTIVITY.map((entry) => (
          <div
            key={entry.id}
            className="flex items-center justify-between rounded-lg px-3 py-2.5 transition-colors hover:bg-secondary/60"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-md border-2 border-ink bg-secondary text-ink">
                <Gamepad2 className="h-4 w-4" aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-medium">{entry.simulation}</p>
                <p className="text-xs text-muted-foreground">{entry.timeAgo}</p>
              </div>
            </div>
            <span className="font-mono text-sm font-semibold text-[#1f7a2e] tabular-nums">
              +{entry.points} pts
            </span>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
