import styled from "styled-components"

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  textarea {
    min-height: 200px;
  }

  textarea,
  input {
    color: white;
    background: #444343;
    border: none;
    padding: 8px;
    margin-bottom: 20px;
  }
`

export const Submit = styled.button`
  padding: 8px 12px;
  background: transparent;
  color: #fff;
  border: 1px solid #444343;
  margin-right: 20px;
  font-size: 14px;
  transition: all 200ms ease;
  border-radius: 4px;
  width: 100%;
  text-transform: uppercase;
`
