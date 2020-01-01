import styled from "styled-components";
import { unstable_Form as Form } from "reakit/Form";

export const StyledForm = styled(Form)`
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
`;

export const DropzoneContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 2px;
  background-color: #444343;
  color: #bdbdbd;
  outline: none;
  transition: border 0.24s ease-in-out;
`;

export const CodeWrapper = styled.div`
  margin-top: 20px;
`;
