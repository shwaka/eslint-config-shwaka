import { describe, it, expect } from "vitest"
import type { FlatConfig } from "@typescript-eslint/utils/ts-eslint"
import { eslintConfigShwakaBasic, eslintConfigShwakaReact, eslintConfigShwakaOnsave, eslintConfigShwakaStylistic } from "."

function getNames(configArray: FlatConfig.ConfigArray): (string | undefined)[] {
  return configArray.map((config) => config.name)
}

describe("eslintConfigShwakaBasic", () => {
  for (const name of [
    "shwaka/basic",
  ]) {
    it(`should contain ${name}`, () => {
      expect(getNames(eslintConfigShwakaBasic)).toContain(name)
    })
  }

  for (const name of [
    "shwaka/stylistic",
    "shwaka/import-order",
    "shwaka/react",
  ]) {
    it(`should contain ${name}`, () => {
      expect(getNames(eslintConfigShwakaBasic)).not.toContain(name)
    })
  }
})

describe("eslintConfigShwakaStylistic", () => {
  for (const name of [
    "shwaka/stylistic",
  ]) {
    it(`should contain ${name}`, () => {
      expect(getNames(eslintConfigShwakaStylistic)).toContain(name)
    })
  }

  for (const name of [
    "shwaka/basic",
    "shwaka/import-order",
    "shwaka/react",
  ]) {
    it(`should contain ${name}`, () => {
      expect(getNames(eslintConfigShwakaStylistic)).not.toContain(name)
    })
  }
})

describe("eslintConfigShwakaOnsave", () => {
  for (const name of [
    "shwaka/stylistic",
    "shwaka/import-order",
  ]) {
    it(`should contain ${name}`, () => {
      expect(getNames(eslintConfigShwakaOnsave)).toContain(name)
    })
  }

  for (const name of [
    "shwaka/basic",
    "shwaka/react",
  ]) {
    it(`should contain ${name}`, () => {
      expect(getNames(eslintConfigShwakaOnsave)).not.toContain(name)
    })
  }
})

describe("eslintConfigShwakaReact", () => {
  for (const name of [
    "shwaka/basic",
    "shwaka/stylistic",
    "shwaka/import-order",
    "shwaka/react",
  ]) {
    it(`should contain ${name}`, () => {
      expect(getNames(eslintConfigShwakaReact)).toContain(name)
    })
  }
})
