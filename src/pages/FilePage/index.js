import React, { useState, useEffect } from "react"
import { useDropzone } from "react-dropzone"
import svgr from "@svgr/core"
import Code from "../../components/Code"
import prettier from "prettier"
import svgo from "../../utils/svgo"
import { useOvermind } from "../../overmind"

import { StyledForm, DropzoneContainer, CodeWrapper } from "./elements"

export default () => {
  const { state } = useOvermind()

  const [jsCode, setJSCode] = useState([])
  const [svgCode, setSVGCode] = useState([])

  const onSubmit = async code => {
    code.map(async c => {
      const svgoCode = await svgo(c.svg)
      const transformedCode = await svgr(svgoCode, state, {
        componentName: state.name
      })
      const prettierCode = prettier.format(transformedCode, state.prettier)
      setJSCode(jsCode => jsCode.concat({ name: c.name, svg: prettierCode }))
    })
  }

  function setupReader(file) {
    // eslint-disable-next-line
    var reader = new FileReader()
    reader.onload = function() {
      const binaryStr = reader.result
      setSVGCode(svgCode => svgCode.concat({ svg: binaryStr, name: file.name }))
    }
    reader.readAsBinaryString(file)
  }

  const onDrop = acceptedFiles => {
    setSVGCode([])
    setJSCode([])
    for (var i = 0; i < acceptedFiles.length; i++) {
      setupReader(acceptedFiles[i])
    }
  }

  const {
    rejectedFiles,
    acceptedFiles,
    getRootProps,
    getInputProps,
    isDragActive
  } = useDropzone({
    onDrop,
    accept: "image/svg+xml"
  })

  useEffect(() => {
    if (svgCode.length === acceptedFiles.length) {
      onSubmit(svgCode)
    }
  }, [svgCode])

  return (
    <>
      <StyledForm>
        <DropzoneContainer {...getRootProps()}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the file here ...</p>
          ) : (
            <p>Drag and svg files here, or click to select files</p>
          )}
        </DropzoneContainer>
        {rejectedFiles &&
          rejectedFiles.map(file => (
            <li key={file.path}>{file.name} is not an svg file</li>
          ))}
      </StyledForm>
      {jsCode.length
        ? jsCode.map((code, i) => (
            <CodeWrapper key={i}>
              <label>{code.name}</label>
              <Code code={code.svg} filename={code.name} jsx={state.jsx} />
            </CodeWrapper>
          ))
        : null}
    </>
  )
}
