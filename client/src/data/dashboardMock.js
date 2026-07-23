/**
 * MOCK / PLACEHOLDER dashboard data — there is no user/auth system yet.
 * Shaped like the future API responses so swapping in real data is trivial:
 * replace these exports with fetch results of the same shape.
 */

export const MOCK_USER = {
  name: "Alex",
  level: 8,
  levelLabel: "Level 8 — Strategist",
  streakDays: 7,
  avatarInitials: "AX",
}

export const MOCK_STAT_CARDS = [
  { id: "played", label: "Simulations Played", value: 24, delta: "+2 this month", up: true, icon: "Gamepad2" },
  { id: "winrate", label: "Win Rate", value: "68%", delta: "+5% this month", up: true, icon: "Trophy" },
  { id: "score", label: "Total Score", value: "12,450", delta: "+840 this month", up: true, icon: "Target" },
  { id: "rank", label: "Rank", value: "#42", delta: "+3 places", up: true, icon: "Medal" },
]

export const MOCK_RECENT_ACTIVITY = [
  { id: 1, simulation: "Clash of Taxis", timeAgo: "2 hours ago", points: 320 },
  { id: 2, simulation: "Baker's Corner", timeAgo: "Yesterday", points: 210 },
  { id: 3, simulation: "Bargaining Arena", timeAgo: "2 days ago", points: 275 },
  { id: 4, simulation: "Financial Literacy", timeAgo: "4 days ago", points: 180 },
  { id: 5, simulation: "Service Optimizer", timeAgo: "6 days ago", points: 240 },
]

export const MOCK_WEEKLY_TREND = [
  { day: "Mon", score: 220 },
  { day: "Tue", score: 340 },
  { day: "Wed", score: 280 },
  { day: "Thu", score: 410 },
  { day: "Fri", score: 380 },
  { day: "Sat", score: 520 },
  { day: "Sun", score: 460 },
]
