# DESIGN.md — "Boardwalk" visual world

Business board game world: the catalog is the board, sims are property cards, categories are property color groups, stats read like play money. Light, saturated, ink-outlined. Replaces the dark navy/indigo gradient theme (commit 043a25e), which is anti-reference.

## Color

| Role | Value | Notes |
|---|---|---|
| Ground (paper) | `#FDFBF7` | page background |
| Surface (card) | `#FFFFFF` | cards/panels on paper |
| Ink | `#1A1814` | text, borders, hard shadows |
| Muted ink | `#5C554B` | secondary text (≥4.5:1 on paper) |
| Gold (PLAY token) | `#F2B705` | primary CTA fill, ink text on it — NEVER gold text on light ground |

Category property colors (fields/bands/chips, never body text):

| Category | Value | Text on it |
|---|---|---|
| Strategy | `#C8431D` | white (AA at small sizes) |
| Economics | `#268033` | white (AA at small sizes) |
| Finance | `#F2B705` | ink |
| Operations | `#266FBE` | white (AA at small sizes) |
| Public Policy | `#17A398` | ink |
| OB/HR | `#E85D9A` | ink |

(Strategy/Economics/Operations were darkened from the original #E4572E/#2E933C/#2D7DD2 to clear 4.5:1 with white band text. SimIcon art may still use the brighter originals decoratively — art carries no text.)

Color strategy: Full palette — category colors own whole regions (card band headers, section fields, chips), not scattered accents. Destructive `#C1292E`.

## Type

- Display: **Archivo Black** — game-box lettering, uppercase allowed for headlines/wordmark.
- UI/body: **Archivo** (400/500/600/700).
- Data: **Martian Mono** — ALL numbers/stats/prices/ratings/counts. Monospace is for data only, never decoration.
- Display max 6rem, tracking floor -0.04em.

## Component grammar

- **Card = property card**: white surface, `2px solid ink` border, category color band header, `border-radius: 4px` max, hard offset shadow `4px 4px 0 ink` (no blur) — this is the world's native depth device; hover lifts card `-2px,-2px` and grows shadow to `6px 6px 0`.
- **Buttons**: ink slab (ink bg, paper text) default; gold token (gold bg, ink text, ink border + offset shadow) for primary CTA; outline (2px ink) secondary.
- **Chips/tags = game tokens**: pill-less — 4px radius, 2px ink border, category fill when active.
- **Inputs**: white, 2px ink border, no inner shadow; focus = ring in gold.
- **Never**: gradients (text or bg), glassmorphism/backdrop-blur decoration, radius >4px, gray secondary text on colored surfaces (tint from hue instead), gold as text on light ground.

## Motion

One grammar via `motion` v12: card pick-up (hover lift + shadow growth), landing scroll reveals (`whileInView`, once, exponential ease-out from visible-ish default), route-level fade. Always `prefers-reduced-motion` fallback.

## Layout

Board-grid: visible structure, generous separation between groups, tight within. Max content width `max-w-6xl` (inherited). More space above headings than below. Dense catalog passages earn quiet sections (about/founders).

## Charts (Recharts)

Use category property colors as series colors on white; grid lines `#E8E3D8`; labels Martian Mono.
