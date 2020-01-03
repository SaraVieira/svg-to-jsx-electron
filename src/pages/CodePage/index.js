import React from "react"

import Code from "../../components/Code"
import { StyledForm, Submit } from "./elements"
import { useOvermind } from "../../overmind"

const CodePage = () => {
  const { actions, state } = useOvermind()
  return (
    <>
      <StyledForm
        onSubmit={e => {
          e.preventDefault()
          actions.submitForm()
        }}
      >
        <label htmlFor="svgCode">SVG Code</label>
        <textarea
          value={state.svgCode}
          onChange={e => actions.setSvgCode(e.target.value)}
          required
          id="svgCode"
          placeholder="Please paste your svg code here"
        />
        <Submit>Submit</Submit>
      </StyledForm>
      {state.jsCode ? (
        <Code filename={state.name} jsx={state.jsx} code={state.jsCode}></Code>
      ) : null}
    </>
  )
}

export default CodePage
