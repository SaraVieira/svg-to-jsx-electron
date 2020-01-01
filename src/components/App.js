import React from "react"
import { useTabState, TabList, TabPanel } from "reakit/Tab"
import CodePage from "../pages/CodePage"
import FilePage from "../pages/FilePage"
import { Styles, TabButton } from "../utils/style"

const App = () => {
  const tab = useTabState({ selectedId: "code" })
  return (
    <>
      <TabList {...tab} aria-label="My tabs">
        <TabButton {...tab} stopId="code">
          Import SVG Code
        </TabButton>
        <TabButton {...tab} stopId="file">
          Import SVG File
        </TabButton>
      </TabList>
      <TabPanel {...tab} stopId="code">
        <CodePage />
      </TabPanel>
      <TabPanel {...tab} stopId="file">
        <FilePage />
      </TabPanel>
    </>
  )
}

const StyledApp = () => (
  <>
    <Styles />
    <App />
  </>
)

export default StyledApp
