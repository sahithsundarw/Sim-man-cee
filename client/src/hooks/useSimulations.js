import { useEffect, useState } from "react"
import { SIMULATIONS } from "@/data/simulations"

// Existing API endpoint preserved from the original App.jsx.
// NOTE: the production default is plain http — an https-hosted build
// (e.g. GitHub Pages) cannot fetch it (mixed content), so in prod this
// hook effectively always serves the local data file until the API
// is available over https.
const API_URL =
  import.meta.env.VITE_API_URL || "http://api.sim-man-cee.com:5500/api/games"

/**
 * Returns the simulation catalog. The local data file renders immediately;
 * if the API responds, its live fields (name/category/image/description)
 * are overlaid onto the matching entries by apiId. Matching is done by
 * numeric id, never by name — server names contain typographic quirks
 * (curly apostrophe in "Baker's Corner") that make string matching fragile.
 */
export function useSimulations() {
  const [simulations, setSimulations] = useState(SIMULATIONS)
  const [apiStatus, setApiStatus] = useState("loading") // loading | live | offline

  useEffect(() => {
    let cancelled = false

    fetch(API_URL)
      .then((res) => res.json())
      .then((apiGames) => {
        if (cancelled || !Array.isArray(apiGames)) return
        setSimulations(
          SIMULATIONS.map((sim) => {
            const live = apiGames.find((g) => g.id === sim.apiId)
            if (!live) return sim
            return {
              ...sim,
              title: live.name ?? sim.title,
              category: live.category ?? sim.category,
              image: live.image ?? sim.image,
              shortDescription: live.description ?? sim.shortDescription,
            }
          })
        )
        setApiStatus("live")
      })
      .catch(() => {
        if (!cancelled) setApiStatus("offline")
      })

    return () => {
      cancelled = true
    }
  }, [])

  return { simulations, apiStatus }
}
