import React from "react"
import app from "./app.png"
import logo from "./logo.png"
import "./App.css"

function App() {
  return (
    <main className="App">
      <div>
        <img src={logo} alt="logo" />
        <h1>SVG to JSX</h1>
        <h2>
          Get in SVG files and you can get out SVG code ready for your React APP
        </h2>
        {navigator.platform === "MacIntel" ? (
          <h3>Please control+click to able to open</h3>
        ) : (
          <h3>Only available on macosx :(</h3>
        )}
        {navigator.platform === "MacIntel" ? (
          <>
            <a
              href="https://github.com/SaraVieira/svg-to-jsx-electron/releases/download/v0.0.2/SVG.to.JSX.zip"
              className="button"
            >
              Download
            </a>
            <a
              href="https://github.com/SaraVieira/svg-to-jsx-electron"
              className="button github"
            >
              Github
            </a>
          </>
        ) : (
          <a
            href="https://github.com/SaraVieira/svg-to-jsx-electron/"
            className="button"
          >
            Github
          </a>
        )}
      </div>

      <img className="app-image" src={app} alt="app screen" />
    </main>
  )
}

export default App
