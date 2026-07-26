import { describe, expect, it } from "vitest"
import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"

import SimCard from "./SimCard"
import { SIMULATIONS } from "@/data/simulations"

const sim = SIMULATIONS[0] // Clash of Taxis — Strategy

function renderCard(simulation = sim) {
  return render(
    <MemoryRouter>
      <SimCard simulation={simulation} />
    </MemoryRouter>
  )
}

describe("SimCard", () => {
  it("renders title, category band, and short description", () => {
    renderCard()
    expect(screen.getByText(sim.title)).toBeInTheDocument()
    expect(screen.getByText(sim.category)).toBeInTheDocument()
    expect(screen.getByText(sim.shortDescription)).toBeInTheDocument()
  })

  it("links to the simulation detail page", () => {
    renderCard()
    const link = screen.getByRole("link")
    expect(link).toHaveAttribute("href", `/simulations/${sim.slug}`)
  })

  it("shows plays count and rating", () => {
    renderCard()
    expect(
      screen.getByText(`${sim.plays.toLocaleString()} plays`)
    ).toBeInTheDocument()
    expect(
      screen.getByLabelText(`Rated ${sim.rating} out of 5`)
    ).toBeInTheDocument()
  })
})
