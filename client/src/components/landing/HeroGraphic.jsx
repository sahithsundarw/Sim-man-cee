/**
 * Abstract hero illustration — growth bars, trend line, and decision nodes.
 * Pure SVG so it stays crisp, weightless, and token-colored.
 * Bars and line carry a soft neon edge glow (SVG drop-shadow filters).
 */
export default function HeroGraphic() {
  return (
    <svg
      viewBox="0 0 480 360"
      role="img"
      aria-label="Abstract illustration of growth charts and decision paths"
      className="h-auto w-full max-w-md"
    >
      <defs>
        <linearGradient id="hg-bar" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#6d5ef5" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#6d5ef5" />
        </linearGradient>
        <linearGradient id="hg-bar-orange" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#f5a623" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#f5a623" />
        </linearGradient>
        <linearGradient id="hg-line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="50%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#f5a623" />
        </linearGradient>
        <filter id="hg-glow-purple" x="-60%" y="-60%" width="220%" height="220%">
          <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#8b5cf6" floodOpacity="0.55" />
        </filter>
        <filter id="hg-glow-orange" x="-60%" y="-60%" width="220%" height="220%">
          <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#f5a623" floodOpacity="0.55" />
        </filter>
        <filter id="hg-glow-line" x="-40%" y="-40%" width="180%" height="180%">
          <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#a855f7" floodOpacity="0.7" />
        </filter>
      </defs>

      {/* panel */}
      <rect x="40" y="40" width="400" height="280" rx="16" fill="#161b29" stroke="rgba(255,255,255,0.08)" />

      {/* grid lines */}
      {[100, 150, 200, 250].map((y) => (
        <line key={y} x1="70" y1={y} x2="410" y2={y} stroke="rgba(255,255,255,0.05)" />
      ))}

      {/* bars */}
      <g filter="url(#hg-glow-purple)">
        <rect x="90" y="220" width="36" height="70" rx="6" fill="url(#hg-bar)" />
        <rect x="150" y="185" width="36" height="105" rx="6" fill="url(#hg-bar)" />
        <rect x="270" y="150" width="36" height="140" rx="6" fill="url(#hg-bar)" />
      </g>
      <g filter="url(#hg-glow-orange)">
        <rect x="210" y="205" width="36" height="85" rx="6" fill="url(#hg-bar-orange)" />
        <rect x="330" y="115" width="36" height="175" rx="6" fill="url(#hg-bar-orange)" />
      </g>

      {/* trend line */}
      <path
        d="M90 210 L168 165 L228 185 L288 125 L368 85"
        fill="none"
        stroke="url(#hg-line)"
        strokeWidth="3"
        strokeLinecap="round"
        filter="url(#hg-glow-line)"
      />

      {/* decision nodes on the line */}
      {[
        [90, 210],
        [168, 165],
        [228, 185],
        [288, 125],
        [368, 85],
      ].map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="6" fill="#0b0f1a" stroke="url(#hg-line)" strokeWidth="2.5" filter="url(#hg-glow-line)" />
      ))}

      {/* floating chips */}
      <g>
        <rect x="310" y="52" width="104" height="26" rx="13" fill="#232a40" />
        <circle cx="326" cy="65" r="5" fill="#34d399" />
        <rect x="338" y="61" width="60" height="8" rx="4" fill="rgba(255,255,255,0.25)" />
      </g>
      <g>
        <rect x="62" y="60" width="88" height="26" rx="13" fill="#232a40" />
        <circle cx="78" cy="73" r="5" fill="#f5a623" />
        <rect x="90" y="69" width="46" height="8" rx="4" fill="rgba(255,255,255,0.25)" />
      </g>
    </svg>
  )
}
