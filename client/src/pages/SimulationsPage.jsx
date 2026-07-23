import { useMemo, useState } from "react"
import { Search, SlidersHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import SimCard from "@/components/simulations/SimCard"
import { useSimulations } from "@/hooks/useSimulations"
import { CATEGORY_TABS } from "@/data/simulations"
import { cn } from "@/lib/utils"

export default function SimulationsPage() {
  const { simulations } = useSimulations()
  const [activeCategory, setActiveCategory] = useState("All")
  const [query, setQuery] = useState("")

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return simulations.filter((sim) => {
      const inCategory =
        activeCategory === "All" || sim.category === activeCategory
      const matchesQuery =
        !q ||
        sim.title.toLowerCase().includes(q) ||
        sim.shortDescription.toLowerCase().includes(q)
      return inCategory && matchesQuery
    })
  }, [simulations, activeCategory, query])

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Simulations</h1>
          <p className="mt-1 text-muted-foreground">
            Pick a simulation and put your decisions to the test.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <Input
              type="search"
              placeholder="Search simulations…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-9 sm:w-64"
              aria-label="Search simulations"
            />
          </div>
          <Button variant="outline" size="icon" aria-label="Filters">
            <SlidersHorizontal />
          </Button>
        </div>
      </div>

      <div
        className="mt-6 flex gap-2 overflow-x-auto pb-1"
        role="tablist"
        aria-label="Filter by category"
      >
        {CATEGORY_TABS.map((tab) => (
          <button
            key={tab}
            role="tab"
            aria-selected={activeCategory === tab}
            onClick={() => setActiveCategory(tab)}
            className={cn(
              "shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
              activeCategory === tab
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-muted-foreground hover:text-foreground"
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      {filtered.length > 0 ? (
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((sim) => (
            <SimCard key={sim.slug} simulation={sim} />
          ))}
        </div>
      ) : (
        <p className="mt-16 text-center text-muted-foreground">
          No simulations match your search.
        </p>
      )}
    </div>
  )
}
