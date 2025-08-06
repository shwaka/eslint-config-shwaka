import { render, screen } from "@testing-library/react"
import { userEvent } from "@testing-library/user-event"
import { describe, test, expect } from "vitest"

import App from "./App"

describe("App", () => {
  test("default", () => {
    render(<App />)
    const button = screen.getByRole("button")
    expect(button).toContainHTML("count is 0")
  })

  test("click button", async () => {
    render(<App />)
    const button = screen.getByRole("button")
    const user = userEvent.setup()
    await user.click(button)
    expect(button).toContainHTML("count is 1")
  })
})
