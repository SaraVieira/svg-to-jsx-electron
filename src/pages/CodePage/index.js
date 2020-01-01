import React, { useState } from "react"

import svgr from "@svgr/core"
import Code from "../../components/Code"
import prettier from "prettier"
import svgo from "../../utils/svgo"
import {
  unstable_FormCheckbox as FormCheckbox,
  unstable_useFormState as useFormState,
  unstable_FormLabel as FormLabel,
  unstable_FormInput as FormInput,
  unstable_FormMessage as FormMessage
} from "reakit/Form"
import { StyledForm, Submit } from "./elements"

export default () => {
  const [jsCode, setJSCode] = useState()
  const form = useFormState({
    values: {
      svgCode: "",
      native: false,
      name: "Icon",
      icon: false,
      jsx: false
    },
    onValidate: values => {
      if (!values.svgCode) {
        const errors = {
          svgCode: "You need to paste some SVG code"
        }
        throw errors
      }
    },
    onSubmit: async values => {
      const svgoCode = await svgo(values.svgCode)
      svgr(svgoCode, values, { componentName: values.name }).then(
        async code => {
          setJSCode(
            prettier.format(code, {
              parser: "babel"
            })
          )
        }
      )
    }
  })
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
          for saving
        </label>
        <FormLabel {...form} name="svgCode">
          SVG Code
        </FormLabel>
        <FormInput
          {...form}
          name="svgCode"
          placeholder="Please paste your svg code here"
          as="textarea"
        />
        <FormMessage {...form} name="svgCode" />
        <Submit {...form}>Submit</Submit>
      </StyledForm>
      {jsCode ? (
        <Code
          filename={form.values.name}
          jsx={form.values.jsx}
          code={jsCode}
        ></Code>
      ) : null}
    </>
  )
}
