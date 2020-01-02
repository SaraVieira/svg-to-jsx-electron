import React from "react"
import app from "./app.png"
import logo from "./logo.png"
import "./App.css"

function getOS() {
  var userAgent = window.navigator.userAgent,
    platform = window.navigator.platform,
    macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"],
    windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"],
    iosPlatforms = ["iPhone", "iPad", "iPod"],
    os = null

  if (macosPlatforms.indexOf(platform) !== -1) {
    os = "mac"
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    os = "iOS"
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = "Windows"
  } else if (/Android/.test(userAgent)) {
    os = "Android"
  } else if (!os && /Linux/.test(platform)) {
    os = "linux"
  }

  return os
}

function App() {
  return (
    <main className="App">
      <div>
        <img src={logo} alt="logo" />
        <h1>SVG to JSX</h1>
        <h2>
          Get in SVG files or code and you get out JSX code ready for your React
          APP
        </h2>
        {getOS() === "mac" ? (
          <h3>Please control+click to able to open</h3>
        ) : null}
        {getOS() !== "mac" && getOS() !== "linux" ? (
          <h3>Only available on mac and linux :(</h3>
        ) : null}
        {getOS() === "mac" ? (
          <a
            href="https://github.com/SaraVieira/svg-to-jsx-electron/releases/download/v0.0.3/SVG.to.JSX-darwin-x64.zip"
            className="button"
          >
            Download
          </a>
        ) : null}
        {getOS() === "linux" ? (
          <a
            href="https://github.com/SaraVieira/svg-to-jsx-electron/releases/download/v0.0.3/SVG.to.JSX-linux-x64.zip"
            className="button"
          >
            Download
          </a>
        ) : null}
        <a
          href="https://github.com/SaraVieira/svg-to-jsx-electron/"
          className="button"
        >
          Github
        </a>
      </div>

      <img className="app-image" src={app} alt="app screen" />
    </main>
  )
}

export default App
