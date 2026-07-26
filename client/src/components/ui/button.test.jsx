import { describe, expect, it } from "vitest"
import { render, screen } from "@testing-library/react"

import { Button } from "./button"

describe("Button", () => {
  it("renders the ink-slab default variant", () => {
    render(<Button>Press</Button>)
    const button = screen.getByRole("button", { name: "Press" })
    expect(button.className).toContain("bg-ink")
    expect(button.className).toContain("border-ink")
  })

  it("renders the gold token variant with punch shadow", () => {
    render(<Button variant="token">Play</Button>)
    const button = screen.getByRole("button", { name: "Play" })
    expect(button.className).toContain("bg-gold")
    expect(button.className).toContain("shadow-punch")
  })

  it("renders the outline variant with an ink border", () => {
    render(<Button variant="outline">More</Button>)
    const button = screen.getByRole("button", { name: "More" })
    expect(button.className).toContain("border-ink")
    expect(button.className).toContain("bg-card")
  })

  it("respects disabled state", () => {
    render(<Button disabled>Nope</Button>)
    expect(screen.getByRole("button", { name: "Nope" })).toBeDisabled()
  })
})
