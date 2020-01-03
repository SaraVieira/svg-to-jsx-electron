import { createHook } from "overmind-react"
import { persistedState } from "./effects"
import debounce from "lodash.debounce"
import deepmerge from "deepmerge"
import svgr from "@svgr/core"
import svgo from "../utils/svgo"
import prettier from "prettier"

const onInitialize = ({ state, effects: { persistedState } }, overmind) => {
  const initialState = persistedState.get()

  deepmerge(state, initialState)

  state.prettier = initialState.prettier
  state.native = initialState.native
  state.name = initialState.name
  state.icon = initialState.icon
  state.jsx = initialState.jsx

  overmind.addFlushListener(() => {
    persistedState.set(state)
  })

  overmind.addFlushListener(
    debounce(() => {
      persistedState.set(state)
    }, 500)
  )
}

export const config = {
  onInitialize,
  state: {
    svgCode: "",
    native: false,
    name: "Icon",
    icon: false,
    jsx: false,
    jsCode: "",
    prettier: {
      parser: "babel",
      printWidth: 80,
      tabWidth: 2,
      useTabs: false,
      semi: true,
      singleQuote: false,
      quoteProps: "as-needed",
      jsxSingleQuote: false,
      trailingComma: "none",
      bracketSpacing: true,
      jsxBracketSameLine: false,
      arrowParens: "always"
    }
  },
  actions: {
    toggle({ state }, { key, value }) {
      state[key] = value
    },
    updatePrettier({ state }, { key, value }) {
      state.prettier[key] = value
    },
    setName({ state }, name) {
      state.name = name
    },
    setSvgCode({ state }, code) {
      state.svgCode = code
    },
    async submitFile({ state }) {
      const c = state.svgCode
      const svgoCode = await svgo(c.svg)
      const transformedCode = await svgr(svgoCode, state, {
        componentName: state.name
      })
      state.jsCode = prettier.format(transformedCode, state.prettier)
    },
    async submitForm({ state }) {
      const svgoCode = await svgo(state.svgCode.trim())
      const code = await svgr(svgoCode, state, {
        componentName: state.name
      })
      state.jsCode = prettier.format(code, state.prettier)
    }
  },
  effects: {
    persistedState
  }
}

export const useOvermind = createHook()
