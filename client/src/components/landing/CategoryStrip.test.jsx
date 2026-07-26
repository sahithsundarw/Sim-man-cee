import { describe, expect, it } from "vitest"
import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"

import CategoryStrip from "./CategoryStrip"
import { CATEGORY_TABS, SIMULATIONS } from "@/data/simulations"

describe("CategoryStrip", () => {
  it("renders one tile per category linking to the filtered hub", () => {
    render(
      <MemoryRouter>
        <CategoryStrip />
      </MemoryRouter>
    )
    for (const category of CATEGORY_TABS.filter((tab) => tab !== "All")) {
      const tile = screen.getByRole("link", {
        name: new RegExp(category.replace("/", "\\/"), "i"),
      })
      expect(tile).toHaveAttribute(
        "href",
        `/simulations?category=${encodeURIComponent(category)}`
      )
    }
  })

  it("shows real sim counts per category", () => {
    render(
      <MemoryRouter>
        <CategoryStrip />
      </MemoryRouter>
    )
    const financeCount = SIMULATIONS.filter(
      (sim) => sim.category === "Finance"
    ).length
    expect(
      screen.getAllByText(`${financeCount} sims`).length
    ).toBeGreaterThanOrEqual(1)
  })
})
