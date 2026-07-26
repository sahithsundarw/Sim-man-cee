import { fireEvent, render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { describe, expect, it, vi } from "vitest"

import SimulationsPage from "./SimulationsPage"
import { SIMULATIONS } from "@/data/simulations"

// Isolate from the network: the hook normally overlays live API data.
vi.mock("@/hooks/useSimulations", () => ({
  useSimulations: () => ({ simulations: SIMULATIONS }),
}))

function renderPage() {
  return render(
    <MemoryRouter>
      <SimulationsPage />
    </MemoryRouter>
  )
}

describe("SimulationsPage", () => {
  it("renders every simulation by default", () => {
    renderPage()
    for (const sim of SIMULATIONS) {
      expect(screen.getByText(sim.title)).toBeInTheDocument()
    }
  })

  it("filters by category token", () => {
    renderPage()
    fireEvent.click(screen.getByRole("tab", { name: "Finance" }))
    expect(screen.getByText("Financial Literacy")).toBeInTheDocument()
    expect(screen.getByText("Fake vs Fact: Buybacks")).toBeInTheDocument()
    expect(screen.queryByText("Clash of Taxis")).not.toBeInTheDocument()
  })

  it("filters by search query", () => {
    renderPage()
    fireEvent.change(screen.getByLabelText("Search simulations"), {
      target: { value: "baker" },
    })
    expect(screen.getByText("Baker's Corner")).toBeInTheDocument()
    expect(screen.queryByText("Clash of Taxis")).not.toBeInTheDocument()
  })

  it("shows an empty state when nothing matches", () => {
    renderPage()
    fireEvent.change(screen.getByLabelText("Search simulations"), {
      target: { value: "zzzz-no-match" },
    })
    expect(
      screen.getByText("No simulations match your search.")
    ).toBeInTheDocument()
  })
})
