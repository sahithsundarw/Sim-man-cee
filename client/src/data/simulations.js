/**
 * Single source of truth for all simulation content.
 *
 * `apiId` maps each entry to the record served by GET /api/games (server/index.js).
 * Live API fields (name, category, image, description) are overlaid onto these
 * entries by useSimulations() when the API is reachable.
 *
 * plays / rating / avgPlayTime / difficulty / mechanics / learnTags are
 * MOCK PLACEHOLDER values — no real telemetry exists yet. Replace with real
 * API data when available.
 */

export const CATEGORIES = {
  Strategy: { chip: "bg-indigo-500 text-white", dot: "bg-indigo-500" },
  Finance: { chip: "bg-emerald-500 text-white", dot: "bg-emerald-500" },
  Operations: { chip: "bg-orange-500 text-white", dot: "bg-orange-500" },
  "Public Policy": { chip: "bg-sky-500 text-white", dot: "bg-sky-500" },
  "OB/HR": { chip: "bg-pink-500 text-white", dot: "bg-pink-500" },
  Economics: { chip: "bg-amber-500 text-black", dot: "bg-amber-500" },
}

export const CATEGORY_TABS = [
  "All",
  "Strategy",
  "Finance",
  "Operations",
  "Public Policy",
  "OB/HR",
  "Economics",
]

export const SIMULATIONS = [
  {
    apiId: 1,
    slug: "clash-of-taxis",
    title: "Clash of Taxis",
    category: "Strategy",
    shortDescription:
      "Indian online taxi market — price wars & demand-supply mismatch",
    aboutDescription:
      "Step into India's cut-throat ride-hailing market as the strategy head of a taxi aggregator. Set fares, deploy your fleet, and react to rivals in real time as demand surges and collapses across the city. Every pricing decision ripples through driver supply, customer loyalty, and your bottom line.",
    image: "games/clash-of-taxis.jpg",
    bannerImage: "games/clash-of-taxis.jpg",
    // MOCK STATS — replace with real telemetry
    plays: 1240,
    rating: 4.6,
    avgPlayTime: "25 min",
    difficulty: "Intermediate",
    mechanics: [
      "Dynamic pricing strategy",
      "Fleet management",
      "Real-time competition",
      "Market demand analysis",
    ],
    learnTags: [
      "Market Analysis",
      "Strategic Pricing",
      "Operations Management",
      "Competitive Strategy",
    ],
  },
  {
    apiId: 2,
    slug: "network-policy-lab",
    title: "Network Policy Lab",
    category: "Public Policy",
    shortDescription: "Structural social networks to implement public policies",
    aboutDescription:
      "Design and roll out a public policy through a realistic social network. Choose which community members to engage first, watch influence spread node by node, and learn why the structure of a network decides whether a policy takes hold or dies quietly.",
    image: "games/network-policy.jpg",
    bannerImage: "games/network-policy.jpg",
    // MOCK STATS — replace with real telemetry
    plays: 860,
    rating: 4.4,
    avgPlayTime: "30 min",
    difficulty: "Advanced",
    mechanics: [
      "Social network mapping",
      "Influence propagation",
      "Policy rollout sequencing",
      "Stakeholder targeting",
    ],
    learnTags: [
      "Network Thinking",
      "Policy Design",
      "Stakeholder Analysis",
      "Systems Thinking",
    ],
  },
  {
    apiId: 3,
    slug: "influence-welfare",
    title: "Influence & Welfare",
    category: "OB/HR",
    shortDescription: "Influential tactics for welfare of low-income employees",
    aboutDescription:
      "Play an HR leader championing welfare programs for low-income employees. Pick the right influence tactics for each stakeholder, build trust across the organisation, and see how persuasion choices change adoption, morale, and real employee outcomes.",
    image: "games/influence-welfare.jpg",
    bannerImage: "games/influence-welfare.jpg",
    // MOCK STATS — replace with real telemetry
    plays: 720,
    rating: 4.5,
    avgPlayTime: "20 min",
    difficulty: "Beginner",
    mechanics: [
      "Influence tactic selection",
      "Trust building",
      "Welfare program design",
      "Behavioral feedback loops",
    ],
    learnTags: [
      "Organizational Behavior",
      "Influence & Persuasion",
      "Employee Welfare",
      "Leadership",
    ],
  },
  {
    apiId: 4,
    slug: "bargaining-arena",
    title: "Bargaining Arena",
    category: "Economics",
    shortDescription: "Economic theories of bargaining in competitive rivalry",
    aboutDescription:
      "Negotiate head-to-head in a structured bargaining arena grounded in economic theory. Make offers, weigh your outside options, and discover how patience, information, and bargaining power decide who captures the surplus in competitive rivalry.",
    image: "games/bargaining-arena.jpg",
    bannerImage: "games/bargaining-arena.jpg",
    // MOCK STATS — replace with real telemetry
    plays: 980,
    rating: 4.7,
    avgPlayTime: "25 min",
    difficulty: "Intermediate",
    mechanics: [
      "Alternating-offer negotiation",
      "BATNA evaluation",
      "Payoff trade-offs",
      "Rivalry dynamics",
    ],
    learnTags: [
      "Game Theory",
      "Negotiation",
      "Bargaining Power",
      "Decision Making",
    ],
  },
  {
    apiId: 5,
    slug: "service-optimizer",
    title: "Service Optimizer",
    category: "Operations",
    shortDescription: "Balancing service quality and operational optimisation",
    aboutDescription:
      "Run a service operation where every rupee saved can cost you a customer. Allocate capacity, manage queues, and tune service levels while balancing operational cost against quality — and learn why the cheapest process is rarely the best one.",
    image: "games/service-optimizer.jpg",
    bannerImage: "games/service-optimizer.jpg",
    // MOCK STATS — replace with real telemetry
    plays: 640,
    rating: 4.3,
    avgPlayTime: "35 min",
    difficulty: "Intermediate",
    mechanics: [
      "Queue management",
      "Capacity allocation",
      "Service-level trade-offs",
      "Cost optimization",
    ],
    learnTags: [
      "Operations Management",
      "Service Design",
      "Resource Allocation",
      "Process Optimization",
    ],
  },
  {
    apiId: 6,
    slug: "financial-literacy",
    title: "Financial Literacy",
    category: "Finance",
    shortDescription: "Financial literacy training for geriatric citizens",
    aboutDescription:
      "A scenario-driven training simulation that teaches financial literacy to senior citizens. Navigate budgets, spot scams, and make savings and investment choices in everyday situations — building the confidence to protect and grow money in retirement.",
    image: "games/financial-literacy.jpg",
    bannerImage: "games/financial-literacy.jpg",
    // MOCK STATS — replace with real telemetry
    plays: 1510,
    rating: 4.8,
    avgPlayTime: "15 min",
    difficulty: "Beginner",
    mechanics: [
      "Budget planning",
      "Scam awareness scenarios",
      "Savings & investment choices",
      "Risk assessment",
    ],
    learnTags: [
      "Personal Finance",
      "Risk Awareness",
      "Financial Planning",
      "Consumer Protection",
    ],
  },
  {
    apiId: 7,
    slug: "bakers-corner",
    title: "Baker's Corner",
    category: "Operations",
    shortDescription: "Inventory optimization",
    aboutDescription:
      "Manage a neighbourhood bakery where yesterday's unsold bread is today's loss. Forecast demand, decide how much to bake, and fight waste as seasonality and randomness test your inventory instincts — the classic newsvendor problem, served fresh.",
    image: "games/bakers-corner.jpg",
    bannerImage: "games/bakers-corner.jpg",
    // MOCK STATS — replace with real telemetry
    plays: 1120,
    rating: 4.5,
    avgPlayTime: "20 min",
    difficulty: "Beginner",
    mechanics: [
      "Demand forecasting",
      "Perishable inventory control",
      "Order quantity decisions",
      "Waste minimization",
    ],
    learnTags: [
      "Inventory Management",
      "Forecasting",
      "Supply Chain",
      "Cost Control",
    ],
  },
  {
    apiId: 8,
    slug: "fake-vs-fact-buybacks",
    title: "Fake vs Fact: Buybacks",
    category: "Finance",
    shortDescription: "Reality of buybacks — separating myth from mechanism",
    aboutDescription:
      "Do share buybacks create value or just financial theatre? Take control of a company's capital allocation, run buybacks under different market conditions, and separate popular myth from financial mechanism using real valuation logic.",
    image: "games/buybacks.jpg",
    bannerImage: "games/buybacks.jpg",
    // MOCK STATS — replace with real telemetry
    plays: 540,
    rating: 4.2,
    avgPlayTime: "30 min",
    difficulty: "Advanced",
    mechanics: [
      "Buyback mechanics",
      "EPS vs value analysis",
      "Capital allocation choices",
      "Market signal reading",
    ],
    learnTags: [
      "Corporate Finance",
      "Capital Allocation",
      "Valuation",
      "Critical Thinking",
    ],
  },
]

export function getSimulationBySlug(slug) {
  return SIMULATIONS.find((s) => s.slug === slug)
}
