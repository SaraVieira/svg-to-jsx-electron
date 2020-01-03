import styled from "styled-components"

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  textarea {
    min-height: 200px;
  }

  textarea,
  input,
  select {
    color: white;
    background: #444343;
    border: none;
    padding: 8px;
    margin-bottom: 10px;
  }
`
