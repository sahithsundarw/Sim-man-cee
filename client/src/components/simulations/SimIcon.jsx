/**
 * Custom illustrated thumbnails for the simulation cards and detail banners.
 * One consistent style across all eight: flat geometric vector shapes on the
 * site's dark navy, limited to the purple / orange / blue gradient family,
 * with the same soft neon glow used by the landing hero graphic.
 *
 * Pure inline SVG — no image assets, no generation API, editable forever.
 */

const NAVY = "#0b0f1a"
const PANEL = "#161b29"
const CHIP = "#232a40"

/** Shared canvas: background, ambient glow, grid, and the gradient/filter defs. */
function Frame({ id, label, children }) {
  return (
    <svg
      viewBox="0 0 480 270"
      role="img"
      aria-label={label}
      preserveAspectRatio="xMidYMid slice"
      className="h-full w-full"
    >
      <defs>
        <linearGradient id={`${id}-purple`} x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
        <linearGradient id={`${id}-orange`} x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#f97316" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#f5a623" />
        </linearGradient>
        <linearGradient id={`${id}-blue`} x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#6d5ef5" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#38bdf8" />
        </linearGradient>
        <linearGradient id={`${id}-line`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="50%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#f5a623" />
        </linearGradient>
        <radialGradient id={`${id}-ambient`} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
        </radialGradient>
        <filter id={`${id}-glow-purple`} x="-60%" y="-60%" width="220%" height="220%">
          <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#8b5cf6" floodOpacity="0.55" />
        </filter>
        <filter id={`${id}-glow-orange`} x="-60%" y="-60%" width="220%" height="220%">
          <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#f5a623" floodOpacity="0.55" />
        </filter>
        <filter id={`${id}-glow-blue`} x="-60%" y="-60%" width="220%" height="220%">
          <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#6d5ef5" floodOpacity="0.55" />
        </filter>
      </defs>

      <rect width="480" height="270" fill={NAVY} />
      <ellipse cx="240" cy="135" rx="230" ry="125" fill={`url(#${id}-ambient)`} />
      {[68, 135, 202].map((y) => (
        <line key={y} x1="30" y1={y} x2="450" y2={y} stroke="rgba(255,255,255,0.04)" />
      ))}

      {children}
    </svg>
  )
}

/** Stylized side-view car used by Clash of Taxis. */
function Taxi({ id, color, x, y, flip = false }) {
  return (
    <g
      transform={`translate(${x} ${y})${flip ? " scale(-1 1)" : ""}`}
      filter={`url(#${id}-glow-${color})`}
    >
      <path d="M-22 -4 Q-19 -23 -1 -23 L9 -23 Q24 -23 28 -4 Z" fill={`url(#${id}-${color})`} />
      <rect x="-42" y="-5" width="84" height="26" rx="9" fill={`url(#${id}-${color})`} />
      <rect x="-14" y="-18" width="21" height="11" rx="3" fill={NAVY} opacity="0.6" />
      <circle cx="-22" cy="23" r="8" fill={NAVY} stroke="rgba(255,255,255,0.55)" strokeWidth="3" />
      <circle cx="22" cy="23" r="8" fill={NAVY} stroke="rgba(255,255,255,0.55)" strokeWidth="3" />
    </g>
  )
}

/** Abstract head-and-shoulders silhouette used by Influence & Welfare. */
function Person({ id, color, cx }) {
  return (
    <g filter={`url(#${id}-glow-${color})`}>
      <circle cx={cx} cy="103" r="21" fill={`url(#${id}-${color})`} />
      <path
        d={`M${cx - 44} 205 v-24 q0 -44 44 -44 q44 0 44 44 v24 Z`}
        fill={`url(#${id}-${color})`}
      />
    </g>
  )
}

function ClashOfTaxisArt({ id }) {
  return (
    <>
      <path
        d="M55 155 L145 118 L240 138 L330 92 L425 68"
        fill="none"
        stroke={`url(#${id}-line)`}
        strokeWidth="3"
        strokeLinecap="round"
        filter={`url(#${id}-glow-purple)`}
      />
      {[
        [55, 155],
        [145, 118],
        [240, 138],
        [330, 92],
        [425, 68],
      ].map(([cx, cy]) => (
        <circle key={cx} cx={cx} cy={cy} r="5" fill={NAVY} stroke={`url(#${id}-line)`} strokeWidth="2.5" />
      ))}
      <Taxi id={id} color="purple" x={130} y={198} />
      <Taxi id={id} color="orange" x={350} y={198} flip />
    </>
  )
}

function NetworkPolicyLabArt({ id }) {
  const nodes = [
    [95, 85, "blue"],
    [65, 180, "purple"],
    [175, 140, "purple"],
    [150, 225, "blue"],
    [245, 90, "blue"],
    [255, 195, "purple"],
  ]
  return (
    <>
      {[
        [95, 85, 175, 140],
        [65, 180, 175, 140],
        [175, 140, 150, 225],
        [175, 140, 245, 90],
        [175, 140, 255, 195],
        [245, 90, 255, 195],
        [255, 195, 330, 150],
      ].map(([x1, y1, x2, y2]) => (
        <line
          key={`${x1}-${y1}-${x2}-${y2}`}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="rgba(255,255,255,0.18)"
          strokeWidth="2"
        />
      ))}
      {nodes.map(([cx, cy, color]) => (
        <circle
          key={`${cx}-${cy}`}
          cx={cx}
          cy={cy}
          r="12"
          fill={`url(#${id}-${color})`}
          filter={`url(#${id}-glow-${color})`}
        />
      ))}
      <g filter={`url(#${id}-glow-purple)`}>
        <path d="M330 65 h72 l20 20 v120 h-92 Z" fill={PANEL} stroke={`url(#${id}-purple)`} strokeWidth="3" />
        <path d="M402 65 v20 h20 Z" fill={`url(#${id}-purple)`} />
      </g>
      {[100, 122, 144].map((y) => (
        <rect key={y} x="346" y={y} width="60" height="7" rx="3.5" fill="rgba(255,255,255,0.22)" />
      ))}
      <circle cx="360" cy="180" r="11" fill={`url(#${id}-orange)`} filter={`url(#${id}-glow-orange)`} />
    </>
  )
}

function InfluenceWelfareArt({ id }) {
  return (
    <>
      <Person id={id} color="purple" cx={150} />
      <Person id={id} color="orange" cx={330} />
      {/* interlocked link between them */}
      <g filter={`url(#${id}-glow-blue)`}>
        <circle cx="223" cy="160" r="17" fill="none" stroke={`url(#${id}-blue)`} strokeWidth="5" />
        <circle cx="257" cy="160" r="17" fill="none" stroke={`url(#${id}-blue)`} strokeWidth="5" />
      </g>
      <path
        d="M170 78 Q240 30 310 78"
        fill="none"
        stroke={`url(#${id}-line)`}
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="2 10"
      />
    </>
  )
}

function BargainingArenaArt({ id }) {
  return (
    <>
      <rect x="196" y="212" width="88" height="12" rx="6" fill={CHIP} />
      <rect x="233" y="100" width="14" height="116" rx="6" fill={CHIP} />
      <line
        x1="146"
        y1="116"
        x2="334"
        y2="82"
        stroke={`url(#${id}-blue)`}
        strokeWidth="7"
        strokeLinecap="round"
        filter={`url(#${id}-glow-blue)`}
      />
      <circle cx="240" cy="99" r="9" fill={`url(#${id}-blue)`} filter={`url(#${id}-glow-blue)`} />
      {/* left pan — heavier, purple */}
      <line x1="146" y1="116" x2="146" y2="158" stroke="rgba(255,255,255,0.35)" strokeWidth="2.5" />
      <path
        d="M112 158 A34 26 0 0 0 180 158 Z"
        fill={`url(#${id}-purple)`}
        filter={`url(#${id}-glow-purple)`}
      />
      {/* right pan — lighter, orange */}
      <line x1="334" y1="82" x2="334" y2="124" stroke="rgba(255,255,255,0.35)" strokeWidth="2.5" />
      <path
        d="M300 124 A34 26 0 0 0 368 124 Z"
        fill={`url(#${id}-orange)`}
        filter={`url(#${id}-glow-orange)`}
      />
    </>
  )
}

function ServiceOptimizerArt({ id }) {
  const occupied = new Set(["0-1", "1-0", "2-2"])
  return (
    <>
      {/* seating / queue grid */}
      {[0, 1, 2].map((row) =>
        [0, 1, 2, 3].map((col) => {
          const isOn = occupied.has(`${row}-${col}`)
          return (
            <rect
              key={`${row}-${col}`}
              x={62 + col * 40}
              y={72 + row * 44}
              width="28"
              height="30"
              rx="7"
              fill={isOn ? `url(#${id}-orange)` : CHIP}
              filter={isOn ? `url(#${id}-glow-orange)` : undefined}
            />
          )
        })
      )}
      {/* gear dial */}
      <g transform="translate(330 140)">
        <g fill={`url(#${id}-purple)`} filter={`url(#${id}-glow-purple)`}>
          {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
            <rect key={a} x="-8" y="-60" width="16" height="22" rx="5" transform={`rotate(${a})`} />
          ))}
        </g>
        <circle r="44" fill={PANEL} stroke={`url(#${id}-purple)`} strokeWidth="7" filter={`url(#${id}-glow-purple)`} />
        <circle r="13" fill="none" stroke={`url(#${id}-blue)`} strokeWidth="5" />
      </g>
    </>
  )
}

function FinancialLiteracyArt({ id }) {
  return (
    <>
      {/* coin */}
      <g filter={`url(#${id}-glow-orange)`}>
        <circle cx="150" cy="150" r="56" fill={`url(#${id}-orange)`} />
        <circle cx="150" cy="150" r="42" fill="none" stroke={NAVY} strokeWidth="3" opacity="0.45" />
        <text
          x="150"
          y="169"
          textAnchor="middle"
          fontSize="52"
          fontWeight="700"
          fontFamily="ui-sans-serif, system-ui, sans-serif"
          fill={NAVY}
        >
          $
        </text>
      </g>
      {/* growth bars + trend arrow */}
      {[
        [268, 190, 40],
        [312, 168, 62],
        [356, 142, 88],
      ].map(([x, y, h]) => (
        <rect key={x} x={x} y={y} width="30" height={h} rx="6" fill={`url(#${id}-blue)`} filter={`url(#${id}-glow-blue)`} />
      ))}
      <path
        d="M262 158 L322 122 L372 92"
        fill="none"
        stroke={`url(#${id}-purple)`}
        strokeWidth="3.5"
        strokeLinecap="round"
        filter={`url(#${id}-glow-purple)`}
      />
      <path d="M372 92 l-16 -1 m16 1 l-4 15" fill="none" stroke={`url(#${id}-purple)`} strokeWidth="3.5" strokeLinecap="round" />
      {/* lightbulb */}
      <g filter={`url(#${id}-glow-purple)`}>
        <circle cx="394" cy="182" r="17" fill="none" stroke={`url(#${id}-purple)`} strokeWidth="4" />
        <rect x="387" y="199" width="14" height="9" rx="3" fill={`url(#${id}-purple)`} />
      </g>
    </>
  )
}

function BakersCornerArt({ id }) {
  const loaf = (x, y, color) => (
    <g key={`${x}-${y}`} filter={`url(#${id}-glow-${color})`}>
      <ellipse cx={x} cy={y} rx="27" ry="17" fill={`url(#${id}-${color})`} />
      <path
        d={`M${x - 12} ${y - 8} q4 6 0 12 M${x} ${y - 10} q4 6 0 12 M${x + 12} ${y - 8} q4 6 0 12`}
        fill="none"
        stroke={NAVY}
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.5"
      />
    </g>
  )
  return (
    <>
      {/* shelf inventory */}
      <rect x="48" y="136" width="212" height="9" rx="4.5" fill={CHIP} />
      <rect x="48" y="214" width="212" height="9" rx="4.5" fill={CHIP} />
      {loaf(92, 120, "orange")}
      {loaf(156, 120, "orange")}
      {loaf(220, 120, "purple")}
      {loaf(120, 198, "orange")}
      {loaf(196, 198, "purple")}
      {/* oven */}
      <rect x="300" y="70" width="132" height="158" rx="14" fill={PANEL} stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
      <rect x="322" y="84" width="88" height="8" rx="4" fill={CHIP} />
      <circle cx="366" cy="158" r="36" fill="none" stroke={`url(#${id}-purple)`} strokeWidth="5" filter={`url(#${id}-glow-purple)`} />
      <circle cx="366" cy="158" r="22" fill={`url(#${id}-orange)`} filter={`url(#${id}-glow-orange)`} />
    </>
  )
}

function FakeVsFactBuybacksArt({ id }) {
  return (
    <>
      <rect x="30" y="40" width="210" height="190" fill="#6d5ef5" opacity="0.07" />
      <rect x="240" y="40" width="210" height="190" fill="#f5a623" opacity="0.07" />
      <line
        x1="240"
        y1="42"
        x2="240"
        y2="228"
        stroke="rgba(255,255,255,0.25)"
        strokeWidth="2"
        strokeDasharray="7 9"
      />
      {/* real: smooth climb */}
      <path
        d="M52 205 L110 172 L164 184 L232 118"
        fill="none"
        stroke={`url(#${id}-blue)`}
        strokeWidth="3.5"
        strokeLinecap="round"
        filter={`url(#${id}-glow-blue)`}
      />
      {[
        [52, 205],
        [110, 172],
        [164, 184],
        [232, 118],
      ].map(([cx, cy]) => (
        <circle key={cx} cx={cx} cy={cy} r="5" fill={NAVY} stroke={`url(#${id}-blue)`} strokeWidth="2.5" />
      ))}
      {/* distorted: jagged spikes */}
      <path
        d="M250 195 L276 110 L300 190 L330 84 L358 168 L392 96 L426 140"
        fill="none"
        stroke={`url(#${id}-orange)`}
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter={`url(#${id}-glow-orange)`}
      />
      {/* verdicts: solid check vs question */}
      <path
        d="M118 78 l10 11 l20 -22"
        fill="none"
        stroke={`url(#${id}-blue)`}
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter={`url(#${id}-glow-blue)`}
      />
      <text
        x="338"
        y="66"
        textAnchor="middle"
        fontSize="40"
        fontWeight="700"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
        fill={`url(#${id}-orange)`}
        filter={`url(#${id}-glow-orange)`}
      >
        ?
      </text>
    </>
  )
}

/** Generic fallback if a new slug ships without dedicated art. */
function DefaultArt({ id }) {
  return (
    <>
      {[
        [150, 180, 50, "purple"],
        [220, 150, 80, "orange"],
        [290, 120, 110, "blue"],
      ].map(([x, y, h, color]) => (
        <rect key={x} x={x} y={y} width="34" height={h} rx="7" fill={`url(#${id}-${color})`} filter={`url(#${id}-glow-${color})`} />
      ))}
    </>
  )
}

const ART_BY_SLUG = {
  "clash-of-taxis": ClashOfTaxisArt,
  "network-policy-lab": NetworkPolicyLabArt,
  "influence-welfare": InfluenceWelfareArt,
  "bargaining-arena": BargainingArenaArt,
  "service-optimizer": ServiceOptimizerArt,
  "financial-literacy": FinancialLiteracyArt,
  "bakers-corner": BakersCornerArt,
  "fake-vs-fact-buybacks": FakeVsFactBuybacksArt,
}

export default function SimIcon({ slug, label }) {
  const Art = ART_BY_SLUG[slug] ?? DefaultArt
  return (
    <Frame id={`sim-${slug}`} label={label}>
      <Art id={`sim-${slug}`} />
    </Frame>
  )
}
