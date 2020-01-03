import React from "react"
import { render } from "react-dom"
import App from "./components/App"
import { config } from "./overmind"
import { createOvermind } from "overmind"
import { Provider } from "overmind-react"

const overmind = createOvermind(config)

// Since we are using HtmlWebpackPlugin WITHOUT a template, we should create our own root node in the body element before rendering into it
const root = document.createElement("div")

root.id = "root"
document.body.appendChild(root)

render(
  <Provider value={overmind}>
    <App />
  </Provider>,
  document.getElementById("root")
)
