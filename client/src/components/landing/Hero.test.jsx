import { describe, expect, it } from "vitest"
import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"

import Hero from "./Hero"

function renderHero() {
  return render(
    <MemoryRouter>
      <Hero />
    </MemoryRouter>
  )
}

describe("Hero", () => {
  it("renders the three-line game-box headline", () => {
    renderHero()
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      /Business/
    )
    expect(screen.getByText("Simulations.")).toBeInTheDocument()
    expect(screen.getByText("Real Decisions.")).toBeInTheDocument()
  })

  it("has a primary CTA linking to the simulations hub", () => {
    renderHero()
    const cta = screen.getByRole("link", { name: /explore simulations/i })
    expect(cta).toHaveAttribute("href", "/simulations")
  })

  it("renders the landing stat labels", () => {
    renderHero()
    expect(screen.getByText("Simulations")).toBeInTheDocument()
    expect(screen.getByText("Active Players")).toBeInTheDocument()
    expect(screen.getByText("Satisfaction")).toBeInTheDocument()
  })
})
