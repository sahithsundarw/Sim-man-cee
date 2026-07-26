/**
 * Floating game pieces around the hero: a die, a gold coin, and a pawn.
 * Each bobs on its own cadence (CSS keyframes, reduced-motion safe).
 * Pure decoration — hidden from AT, never intercepts the pointer.
 */

function Die({ className, style }) {
  return (
    <svg viewBox="0 0 64 64" className={className} style={style} aria-hidden="true">
      <rect x="4" y="4" width="56" height="56" rx="8" fill="#ffffff" stroke="var(--ink)" strokeWidth="4" />
      {[
        [20, 20],
        [44, 20],
        [32, 32],
        [20, 44],
        [44, 44],
      ].map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="5" fill="var(--ink)" />
      ))}
    </svg>
  )
}

function Coin({ className, style }) {
  return (
    <svg viewBox="0 0 64 64" className={className} style={style} aria-hidden="true">
      <circle cx="32" cy="32" r="28" fill="var(--gold)" stroke="var(--ink)" strokeWidth="4" />
      <circle cx="32" cy="32" r="20" fill="none" stroke="var(--ink)" strokeWidth="2.5" opacity="0.4" />
      <text
        x="32"
        y="42"
        textAnchor="middle"
        fontSize="28"
        fontWeight="800"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
        fill="var(--ink)"
      >
        $
      </text>
    </svg>
  )
}

function Pawn({ className, style }) {
  return (
    <svg viewBox="0 0 64 64" className={className} style={style} aria-hidden="true">
      <path
        d="M32 8 a10 10 0 1 1 -0.01 0 M25 26 h14 l4 16 h-22 Z M16 48 h32 v8 h-32 Z"
        fill="var(--cat-obhr)"
        stroke="var(--ink)"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function FloatingTokens() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <Die
        className="animate-bob absolute left-[52%] top-[12%] hidden h-12 w-12 md:block"
        style={{ "--bob-tilt": "-12deg" }}
      />
      <Coin
        className="animate-bob-slow absolute right-[4%] top-[58%] hidden h-14 w-14 md:block"
        style={{ "--bob-tilt": "8deg", animationDelay: "0.8s" }}
      />
      <Pawn
        className="animate-bob absolute right-[38%] top-[74%] hidden h-11 w-11 lg:block"
        style={{ "--bob-tilt": "6deg", animationDelay: "1.6s" }}
      />
    </div>
  )
}
