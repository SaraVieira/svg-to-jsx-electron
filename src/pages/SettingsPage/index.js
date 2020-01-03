import React from "react"
import { Separator } from "reakit/Separator"
import { StyledForm } from "./elements"
import { useOvermind } from "../../overmind"
import Prettier from "./Prettier"

const CodePage = () => {
  const { actions, state } = useOvermind()
  return (
    <>
      <StyledForm>
        <h3>General Settings</h3>
        <label htmlFor="name">Component Name</label>
        <input
          value={state.name}
          onChange={e => actions.setName(e.target.value)}
          id="name"
          placeholder="Icon"
        />
        <label>
          <input
            onChange={e =>
              actions.toggle({ key: "icon", value: e.target.checked })
            }
            type="checkbox"
            name="icon"
            value="icon"
          />{" "}
          Hide Dimensions
        </label>
        <label>
          <input
            onChange={e =>
              actions.toggle({ key: "native", value: e.target.checked })
            }
            type="checkbox"
            name="native"
            value="native"
          />{" "}
          React Native
        </label>
        <label>
          <input
            onChange={e =>
              actions.toggle({ key: "jsx", value: e.target.checked })
            }
            type="checkbox"
            id="jsx"
            value="jsx"
          />{" "}
          Use JSX extension for saving
        </label>
        <Separator style={{ width: "100%" }} />
        <h3>Prettier Settings</h3>
        <Prettier />
      </StyledForm>
    </>
  )
}

export default CodePage
