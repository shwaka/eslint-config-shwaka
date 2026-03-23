// @ts-check

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

          const value = ruleProperty.value

          if (
            value.type === "Literal" &&
            typeof value.value === "number" &&
            (value.value === 0 || value.value === 1 || value.value === 2)
          ) {
            const severity = value.value

            context.report({
              node: value,
              messageId: "unexpectedNumeric",
              data: { value: String(severity) },
              fix(fixer) {
                return fixer.replaceText(value, toSeverity(severity))
              },
            })
            continue
          }

          if (value.type === "ArrayExpression") {
            const first = value.elements[0]
            if (
              first !== null &&
              first !== undefined &&
              first.type === "Literal" &&
              typeof first.value === "number" &&
              (first.value === 0 || first.value === 1 || first.value === 2)
            ) {
              const severity = first.value

              context.report({
                node: first,
                messageId: "unexpectedNumeric",
                data: { value: String(severity) },
                fix(fixer) {
                  return fixer.replaceText(first, toSeverity(severity))
                },
              })
            }
          }
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
