/**
 * Winding board-game track behind the hero: a dashed ink path that slowly
 * crawls, with colored "spaces" (property squares) placed along it.
 * Pure decoration — hidden from AT, never intercepts the pointer.
 */

const SPACES = [
  { x: 118, y: 468, c: "var(--cat-strategy)", r: -8 },
  { x: 260, y: 388, c: "var(--cat-operations)", r: 5 },
  { x: 428, y: 452, c: "var(--cat-finance)", r: -4 },
  { x: 610, y: 358, c: "var(--cat-economics)", r: 9 },
  { x: 802, y: 430, c: "var(--cat-policy)", r: -6 },
  { x: 986, y: 330, c: "var(--cat-obhr)", r: 4 },
  { x: 1180, y: 402, c: "var(--cat-strategy)", r: -7 },
  { x: 1352, y: 310, c: "var(--cat-finance)", r: 6 },
]

export default function BoardPath() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 640"
      preserveAspectRatio="xMidYMax slice"
      className="pointer-events-none absolute inset-0 h-full w-full"
    >
      <path
        d="M-40 500 C 160 560, 300 330, 470 430 S 760 480, 900 360 S 1180 460, 1320 320 S 1480 300, 1520 340"
        fill="none"
        stroke="var(--ink)"
        strokeOpacity="0.14"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="4 14"
        className="animate-dash-crawl"
      />
      {SPACES.map(({ x, y, c, r }) => (
        <rect
          key={`${x}-${y}`}
          x={-9}
          y={-9}
          width="18"
          height="18"
          rx="3"
          fill={c}
          fillOpacity="0.5"
          stroke="var(--ink)"
          strokeOpacity="0.35"
          strokeWidth="1.5"
          transform={`translate(${x} ${y}) rotate(${r})`}
        />
      ))}
    </svg>
  )
}
