/**
 * Custom illustrated thumbnails for the simulation cards and detail banners.
 * Boardwalk style: flat "printed" vector shapes with ink outlines on a light
 * tint of the simulation's category property color. No gradients, no glow —
 * the art should read like it was silkscreened onto a game board.
 *
 * Pure inline SVG — no image assets, no generation API, editable forever.
 */

const INK = "#1a1814"
const PAPER = "#fdfbf7"

// Per-sim palette: light category tint ground + two flat print colors.
const PALETTES = {
  "clash-of-taxis": { bg: "#fae4dc", a: "#e4572e", b: "#2d7dd2" },
  "network-policy-lab": { bg: "#def0ee", a: "#17a398", b: "#f2b705" },
  "influence-welfare": { bg: "#fbe2ee", a: "#e85d9a", b: "#2d7dd2" },
  "bargaining-arena": { bg: "#e3f0e5", a: "#2e933c", b: "#f2b705" },
  "service-optimizer": { bg: "#e0ebf8", a: "#2d7dd2", b: "#f2b705" },
  "financial-literacy": { bg: "#fcf1cf", a: "#f2b705", b: "#2e933c" },
  "bakers-corner": { bg: "#e0ebf8", a: "#f2b705", b: "#2d7dd2" },
  "fake-vs-fact-buybacks": { bg: "#fcf1cf", a: "#2d7dd2", b: "#e4572e" },
  default: { bg: "#f3efe6", a: "#e4572e", b: "#2d7dd2" },
}

/** Shared canvas: tinted ground + faint board rules. */
function Frame({ label, bg, children }) {
  return (
    <svg
      viewBox="0 0 480 270"
      role="img"
      aria-label={label}
      preserveAspectRatio="xMidYMid slice"
      className="h-full w-full"
    >
      <rect width="480" height="270" fill={bg} />
      {[68, 135, 202].map((y) => (
        <line key={y} x1="30" y1={y} x2="450" y2={y} stroke={INK} strokeOpacity="0.06" />
      ))}
      {children}
    </svg>
  )
}

/** Stylized side-view car used by Clash of Taxis. */
function Taxi({ color, x, y, flip = false }) {
  return (
    <g transform={`translate(${x} ${y})${flip ? " scale(-1 1)" : ""}`}>
      <path d="M-22 -4 Q-19 -23 -1 -23 L9 -23 Q24 -23 28 -4 Z" fill={color} stroke={INK} strokeWidth="3" />
      <rect x="-42" y="-5" width="84" height="26" rx="4" fill={color} stroke={INK} strokeWidth="3" />
      <rect x="-14" y="-18" width="21" height="11" rx="2" fill={PAPER} stroke={INK} strokeWidth="2.5" />
      <circle cx="-22" cy="23" r="8" fill={INK} stroke={PAPER} strokeWidth="2.5" />
      <circle cx="22" cy="23" r="8" fill={INK} stroke={PAPER} strokeWidth="2.5" />
    </g>
  )
}

/** Abstract head-and-shoulders silhouette used by Influence & Welfare. */
function Person({ color, cx }) {
  return (
    <g stroke={INK} strokeWidth="3">
      <circle cx={cx} cy="103" r="21" fill={color} />
      <path d={`M${cx - 44} 205 v-24 q0 -44 44 -44 q44 0 44 44 v24 Z`} fill={color} />
    </g>
  )
}

function ClashOfTaxisArt({ p }) {
  return (
    <>
      <path
        d="M55 155 L145 118 L240 138 L330 92 L425 68"
        fill="none"
        stroke={INK}
        strokeWidth="3"
        strokeLinecap="round"
      />
      {[
        [55, 155],
        [145, 118],
        [240, 138],
        [330, 92],
        [425, 68],
      ].map(([cx, cy]) => (
        <circle key={cx} cx={cx} cy={cy} r="5" fill={PAPER} stroke={INK} strokeWidth="2.5" />
      ))}
      <Taxi color={p.a} x={130} y={198} />
      <Taxi color={p.b} x={350} y={198} flip />
    </>
  )
}

function NetworkPolicyLabArt({ p }) {
  const nodes = [
    [95, 85, p.a],
    [65, 180, p.a],
    [175, 140, p.a],
    [150, 225, p.a],
    [245, 90, p.a],
    [255, 195, p.a],
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
          stroke={INK}
          strokeOpacity="0.35"
          strokeWidth="2"
        />
      ))}
      {nodes.map(([cx, cy, color]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="12" fill={color} stroke={INK} strokeWidth="2.5" />
      ))}
      <g>
        <path d="M330 65 h72 l20 20 v120 h-92 Z" fill={PAPER} stroke={INK} strokeWidth="3" />
        <path d="M402 65 v20 h20 Z" fill={p.a} stroke={INK} strokeWidth="2.5" />
      </g>
      {[100, 122, 144].map((y) => (
        <rect key={y} x="346" y={y} width="60" height="7" rx="3.5" fill={INK} opacity="0.25" />
      ))}
      <circle cx="360" cy="180" r="11" fill={p.b} stroke={INK} strokeWidth="2.5" />
    </>
  )
}

function InfluenceWelfareArt({ p }) {
  return (
    <>
      <Person color={p.a} cx={150} />
      <Person color={p.b} cx={330} />
      {/* interlocked link between them */}
      <g>
        <circle cx="223" cy="160" r="17" fill="none" stroke={INK} strokeWidth="5" />
        <circle cx="257" cy="160" r="17" fill="none" stroke={INK} strokeWidth="5" />
      </g>
      <path
        d="M170 78 Q240 30 310 78"
        fill="none"
        stroke={INK}
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="2 10"
      />
    </>
  )
}

function BargainingArenaArt({ p }) {
  return (
    <>
      <rect x="196" y="212" width="88" height="12" rx="4" fill={INK} />
      <rect x="233" y="100" width="14" height="116" rx="4" fill={INK} />
      <line x1="146" y1="116" x2="334" y2="82" stroke={INK} strokeWidth="7" strokeLinecap="round" />
      <circle cx="240" cy="99" r="9" fill={p.b} stroke={INK} strokeWidth="2.5" />
      {/* left pan — heavier */}
      <line x1="146" y1="116" x2="146" y2="158" stroke={INK} strokeWidth="2.5" />
      <path d="M112 158 A34 26 0 0 0 180 158 Z" fill={p.a} stroke={INK} strokeWidth="3" />
      {/* right pan — lighter */}
      <line x1="334" y1="82" x2="334" y2="124" stroke={INK} strokeWidth="2.5" />
      <path d="M300 124 A34 26 0 0 0 368 124 Z" fill={p.b} stroke={INK} strokeWidth="3" />
    </>
  )
}

function ServiceOptimizerArt({ p }) {
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
              rx="4"
              fill={isOn ? p.b : PAPER}
              stroke={INK}
              strokeWidth="2.5"
            />
          )
        })
      )}
      {/* gear dial */}
      <g transform="translate(330 140)">
        <g fill={p.a} stroke={INK} strokeWidth="2.5">
          {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
            <rect key={a} x="-8" y="-60" width="16" height="22" rx="4" transform={`rotate(${a})`} />
          ))}
        </g>
        <circle r="44" fill={PAPER} stroke={INK} strokeWidth="5" />
        <circle r="13" fill={p.b} stroke={INK} strokeWidth="3" />
      </g>
    </>
  )
}

function FinancialLiteracyArt({ p }) {
  return (
    <>
      {/* coin */}
      <g>
        <circle cx="150" cy="150" r="56" fill={p.a} stroke={INK} strokeWidth="3.5" />
        <circle cx="150" cy="150" r="42" fill="none" stroke={INK} strokeWidth="2.5" opacity="0.45" />
        <text
          x="150"
          y="169"
          textAnchor="middle"
          fontSize="52"
          fontWeight="700"
          fontFamily="ui-sans-serif, system-ui, sans-serif"
          fill={INK}
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
        <rect key={x} x={x} y={y} width="30" height={h} rx="4" fill={p.b} stroke={INK} strokeWidth="2.5" />
      ))}
      <path d="M262 158 L322 122 L372 92" fill="none" stroke={INK} strokeWidth="3.5" strokeLinecap="round" />
      <path d="M372 92 l-16 -1 m16 1 l-4 15" fill="none" stroke={INK} strokeWidth="3.5" strokeLinecap="round" />
      {/* lightbulb */}
      <g>
        <circle cx="394" cy="182" r="17" fill={PAPER} stroke={INK} strokeWidth="3.5" />
        <rect x="387" y="199" width="14" height="9" rx="3" fill={INK} />
      </g>
    </>
  )
}

function BakersCornerArt({ p }) {
  const loaf = (x, y, color) => (
    <g key={`${x}-${y}`}>
      <ellipse cx={x} cy={y} rx="27" ry="17" fill={color} stroke={INK} strokeWidth="2.5" />
      <path
        d={`M${x - 12} ${y - 8} q4 6 0 12 M${x} ${y - 10} q4 6 0 12 M${x + 12} ${y - 8} q4 6 0 12`}
        fill="none"
        stroke={INK}
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.55"
      />
    </g>
  )
  return (
    <>
      {/* shelf inventory */}
      <rect x="48" y="136" width="212" height="9" rx="4" fill={INK} opacity="0.8" />
      <rect x="48" y="214" width="212" height="9" rx="4" fill={INK} opacity="0.8" />
      {loaf(92, 120, p.a)}
      {loaf(156, 120, p.a)}
      {loaf(220, 120, p.b)}
      {loaf(120, 198, p.a)}
      {loaf(196, 198, p.b)}
      {/* oven */}
      <rect x="300" y="70" width="132" height="158" rx="4" fill={PAPER} stroke={INK} strokeWidth="3" />
      <rect x="322" y="84" width="88" height="8" rx="4" fill={INK} opacity="0.3" />
      <circle cx="366" cy="158" r="36" fill="none" stroke={INK} strokeWidth="4" />
      <circle cx="366" cy="158" r="22" fill={p.a} stroke={INK} strokeWidth="2.5" />
    </>
  )
}

function FakeVsFactBuybacksArt({ p }) {
  return (
    <>
      <rect x="30" y="40" width="210" height="190" fill={p.a} opacity="0.1" />
      <rect x="240" y="40" width="210" height="190" fill={p.b} opacity="0.1" />
      <line
        x1="240"
        y1="42"
        x2="240"
        y2="228"
        stroke={INK}
        strokeOpacity="0.4"
        strokeWidth="2"
        strokeDasharray="7 9"
      />
      {/* real: smooth climb */}
      <path
        d="M52 205 L110 172 L164 184 L232 118"
        fill="none"
        stroke={p.a}
        strokeWidth="4"
        strokeLinecap="round"
      />
      {[
        [52, 205],
        [110, 172],
        [164, 184],
        [232, 118],
      ].map(([cx, cy]) => (
        <circle key={cx} cx={cx} cy={cy} r="5" fill={PAPER} stroke={p.a} strokeWidth="2.5" />
      ))}
      {/* distorted: jagged spikes */}
      <path
        d="M250 195 L276 110 L300 190 L330 84 L358 168 L392 96 L426 140"
        fill="none"
        stroke={p.b}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* verdicts: solid check vs question */}
      <path
        d="M118 78 l10 11 l20 -22"
        fill="none"
        stroke={p.a}
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <text
        x="338"
        y="66"
        textAnchor="middle"
        fontSize="40"
        fontWeight="700"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
        fill={p.b}
      >
        ?
      </text>
    </>
  )
}

/** Generic fallback if a new slug ships without dedicated art. */
function DefaultArt({ p }) {
  return (
    <>
      {[
        [150, 180, 50, p.a],
        [220, 150, 80, p.b],
        [290, 120, 110, p.a],
      ].map(([x, y, h, color]) => (
        <rect key={x} x={x} y={y} width="34" height={h} rx="4" fill={color} stroke={INK} strokeWidth="2.5" />
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
  const palette = PALETTES[slug] ?? PALETTES.default
  return (
    <Frame label={label} bg={palette.bg}>
      <Art p={palette} />
    </Frame>
  )
}
