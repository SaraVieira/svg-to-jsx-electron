import React, { useState, useEffect } from "react"
import { useDropzone } from "react-dropzone"
import svgr from "@svgr/core"
import Code from "../../components/Code"
import prettier from "prettier"
import svgo from "../../utils/svgo"
import {
  unstable_FormCheckbox as FormCheckbox,
  unstable_useFormState as useFormState,
  unstable_FormLabel as FormLabel,
  unstable_FormInput as FormInput
} from "reakit/Form"

import { StyledForm, DropzoneContainer, CodeWrapper } from "./elements"

export default () => {
  const [jsCode, setJSCode] = useState([])
  const [svgCode, setSVGCode] = useState([])

  const onSubmit = async (values, code) => {
    code.map(async c => {
      const svgoCode = await svgo(c.svg)
      const transformedCode = await svgr(svgoCode, values, {
        componentName: values.name
      })
      const prettierCode = prettier.format(transformedCode, {
        parser: "babel"
      })
      setJSCode(jsCode => jsCode.concat({ name: c.name, svg: prettierCode }))
    })
  }

  const form = useFormState({
    values: { native: false, name: "Icon", icon: false, jsx: false }
  })

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
      onSubmit(form.values, svgCode)
    }
  }, [svgCode])

  return (
    <>
      <StyledForm {...form}>
        <FormLabel {...form} name="name">
          Component Name
        </FormLabel>
        <FormInput {...form} name="name" placeholder="Icon" />
        <label>
          <FormCheckbox {...form} name="icon" value="icon" /> Hide Dimensions
        </label>
        <label>
          <FormCheckbox {...form} name="native" value="native" /> React Native
        </label>
        <label>
          <FormCheckbox {...form} name="jsx" value="jsx" /> Use JSX extension
        </label>
        <FormLabel {...form} name="svgCode">
          SVG File
        </FormLabel>
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
              <Code
                code={code.svg}
                filename={code.name}
                jsx={form.values.jsx}
              />
            </CodeWrapper>
          ))
        : null}
    </>
  )
}
