import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { MOCK_WEEKLY_TREND } from "@/data/dashboardMock"

const chartConfig = {
  score: {
    label: "Score",
    color: "var(--chart-1)",
  },
}

export default function TrendChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Performance Trend</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-64 w-full font-mono">
          <LineChart data={MOCK_WEEKLY_TREND} margin={{ left: -20, right: 8 }}>
            <CartesianGrid vertical={false} strokeOpacity={0.15} />
            <XAxis dataKey="day" tickLine={false} axisLine={false} tickMargin={8} />
            <YAxis tickLine={false} axisLine={false} tickMargin={8} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Line
              dataKey="score"
              type="monotone"
              stroke="var(--color-score)"
              strokeWidth={2.5}
              dot={{ r: 3, fill: "var(--color-score)" }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
