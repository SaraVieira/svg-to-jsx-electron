import React from "react"
import { prettierValues } from "../../utils/prettier"
import { useOvermind } from "../../overmind"

const Prettier = () => {
  const { actions, state } = useOvermind()
  return prettierValues.map(option => {
    if (option.type === "boolean") {
      return (
        <label>
          <input
            checked={state.prettier[option.key]}
            onChange={e =>
              actions.updatePrettier({
                key: option.key,
                value: e.target.checked
              })
            }
            type="checkbox"
          />{" "}
          {option.key}
        </label>
      )
    }

    if (option.type === "select") {
      return (
        <label>
          <span style={{ marginRight: 10 }}>{option.key}</span>
          <select
            value={state.prettier[option.key]}
            onChange={e =>
              actions.updatePrettier({
                key: option.key,
                value: e.target.checked
              })
            }
          >
            {option.values.map(value => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </label>
      )
    }

    if (option.type === "number") {
      return (
        <label>
          <span style={{ marginRight: 10 }}>{option.key}</span>
          <input
            type="number"
            onChange={e =>
              actions.updatePrettier({
                key: option.key,
                value: parseInt(e.target.value, 10)
              })
            }
            value={state.prettier[option.key]}
          />
        </label>
      )
    }
  })
}

export default Prettier
