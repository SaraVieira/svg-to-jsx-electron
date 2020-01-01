import { Tab } from "reakit/Tab";
import styled, { createGlobalStyle } from "styled-components";

export const Styles = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
    background-color: rgb(1, 22, 39);
    color: white;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  label {
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    text-transform: uppercase;
    white-space: nowrap;
    color: #888888;
    margin-bottom: 8px;
  }

  #root {
    max-width: 90%;
    position: relative;
    margin: auto;
    margin-top: 80px;
  }

  div[role="tabpanel"] {
    outline: none;
  }
`;

export const TabButton = styled(Tab)`
  padding: 8px 12px;
  background: transparent;
  color: #fff;
  border: 1px solid #444343;
  margin-right: 20px;
  font-size: 14px;
  transition: all 200ms ease;
  border-radius: 4px;

  &[aria-selected="true"] {
    background: #fff;
    color: rgb(1, 22, 39);
  }
  .titlebar {
    -webkit-user-select: none;
    -webkit-app-region: drag;
  }

  .titlebar-button {
    -webkit-app-region: no-drag;
  }
`;
