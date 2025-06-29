import { describe, it, expect } from "vitest"
import type { FlatConfig } from "@typescript-eslint/utils/ts-eslint"
import { eslintConfigShwakaReact } from "./index"

function getNames(configArray: FlatConfig.ConfigArray): (string | undefined)[] {
  return configArray.map((config) => config.name)
}

describe("eslintConfigShwakaReact", () => {
  it("should contain shwaka/react", () => {
    expect(getNames(eslintConfigShwakaReact)).toContain("shwaka/react")
  })
})
