import { describe, it, expect } from "vitest"
import { eslintConfigShwakaReact } from "./index"

describe("eslintConfigShwakaReact", () => {
  it("should be an object", () => {
    expect(typeof eslintConfigShwakaReact).toBe("object")
  })
})
