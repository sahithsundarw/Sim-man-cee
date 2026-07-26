import { SIMULATIONS } from "@/data/simulations"

/**
 * Stock-ticker band: sim stats scroll continuously on a gold field.
 * Track holds two identical halves so translateX(-50%) loops seamlessly.
 * Pauses on hover; static under prefers-reduced-motion.
 */
export default function TickerStrip() {
  const items = SIMULATIONS.map(
    (sim) =>
      `${sim.title.toUpperCase()} ▲ ${sim.plays.toLocaleString()} PLAYS ★ ${sim.rating.toFixed(1)}`
  )

  const half = (keyPrefix) => (
    <span className="flex shrink-0 items-center" aria-hidden={keyPrefix === "b"}>
      {items.map((item, i) => (
        <span key={`${keyPrefix}-${i}`} className="flex shrink-0 items-center">
          <span className="px-5">{item}</span>
          <span className="text-ink/50">●</span>
        </span>
      ))}
    </span>
  )

  return (
    <div className="group overflow-hidden border-y-2 border-ink bg-gold py-2.5">
      <div className="animate-marquee flex w-max group-hover:[animation-play-state:paused]">
        <div className="flex font-mono text-xs font-semibold tracking-wide text-ink">
          {half("a")}
          {half("b")}
        </div>
      </div>
    </div>
  )
}
