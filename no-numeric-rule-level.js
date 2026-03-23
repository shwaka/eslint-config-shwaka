// @ts-check

/**
 * @param {unknown} value
 * @returns {value is 0 | 1 | 2}
 */
function isNumericSeverity(value) {
  return value === 0 || value === 1 || value === 2
}

/**
 * @param {0 | 1 | 2} value
 * @returns {string}
 */
function toSeverity(value) {
  switch (value) {
    case 0:
      return "\"off\""
    case 1:
      return "\"warn\""
    case 2:
      return "\"error\""
  }
}

/**
 * @param {import("estree").Property["value"]} value
 * @returns {{ node: import("estree").Literal, severity: 0 | 1 | 2 } | null}
 */
function getNumericSeverityTarget(value) {
  if (value.type === "Literal" && isNumericSeverity(value.value)) {
    return {
      node: value,
      severity: value.value,
    }
  }

  if (value.type === "ArrayExpression") {
    const first = value.elements[0]
    if (
      first !== null &&
      first !== undefined &&
      first.type === "Literal" &&
      isNumericSeverity(first.value)
    ) {
      return {
        node: first,
        severity: first.value,
      }
    }
  }

  return null
}

/**
 * @param {import("eslint").Rule.RuleContext} context
 * @param {import("estree").Literal} node
 * @param {0 | 1 | 2} severity
 * @returns {void}
 */
function reportNumericSeverity(context, node, severity) {
  context.report({
    node,
    messageId: "unexpectedNumeric",
    data: { value: String(severity) },
    fix(fixer) {
      return fixer.replaceText(node, toSeverity(severity))
    },
  })
}

/** @type {import("eslint").Rule.RuleModule} */
export const noNumericRuleLevel = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Disallow numeric ESLint rule levels in config files",
    },
    fixable: "code",
    schema: [],
    messages: {
      unexpectedNumeric:
        "Use string severity (\"off\", \"warn\", \"error\") instead of numeric severity ({{value}}).",
    },
  },
  create(context) {
    return {
      Property(node) {
        if (node.type !== "Property") {
          return
        }
        if (node.key.type !== "Identifier" || node.key.name !== "rules") {
          return
        }
        if (node.value.type !== "ObjectExpression") {
          return
        }

        for (const ruleProperty of node.value.properties) {
          if (ruleProperty.type !== "Property") {
            continue
          }

          const target = getNumericSeverityTarget(ruleProperty.value)
          if (target === null) {
            continue
          }

          reportNumericSeverity(context, target.node, target.severity)
        }
      },
    }
  },
}

/** @type {import("eslint").Linter.Config} */
export const noNumericRuleLevelConfig = {
  plugins: {
    local: {
      rules: {
        "no-numeric-rule-level": noNumericRuleLevel,
      },
    },
  },
  rules: {
    "local/no-numeric-rule-level": "error",
  },
}
