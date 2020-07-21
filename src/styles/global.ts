import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
    font-size: 14px;
    line-height: 1.3;
    color: #24292e;
    background-color: #fff;
    word-wrap: break-word;
  }

  * {
    box-sizing: border-box;
  }

  h1 {
    font-size: 26px;
    font-family: Arial, sans-serif;
  }

  p {
    font-size: 14px;
    margin-top: 0;
  }

  a {
    color: #24292e;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.3s ease-in;
    &:hover, &:active {
      color: #0366d6;
    }
  }

  input,
  select {
    &:focus {
      border-color: #0366d6;
      outline: none;
      box-shadow: inset 0 1px 2px rgba(27,31,35,.075), 0 0 0 0.2em rgba(3,102,214,.3);
    }
  }

  .disp-flex {
    display: flex;
  }

  .flex-row {
    flex-direction: row;
  }

  .flex-column {
    flex-direction: column;
  }

  .flex-align--center {
    align-items: center;
  }

  .flex-just--center {
    justify-content: center;
  }

  .flex-just--sb {
    justify-content: space-between;
  }

  .flex-1 {
    flex: 1;
  }

  .mar-no {
    margin: 0;
  }

  .mar-lft--5 {
    margin-left: 5px;
  }

  .mar-lft--10 {
    margin-left: 10px;
  }

  .mar-btm--5 {
    margin-bottom: 5px;
  }

  .mar-btm--10 {
    margin-bottom: 10px;
  }

  .mar-ver--10 {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .mar-ver--20 {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .text-gray {
    color: #586069;
  }

  .text-dark-gray {
    color: #24292e;
  }

  .text-error{
    color: #db7093;
  }

  .text-blue {
    color: #0366d6;
  }

  .text-xs {
    font-size: 10px;
  }

  .text-sm {
    font-size: 12px;
  }

  .pos-rel {
    position: relative;
  }

  .page-height {
    min-height: 100vh;
    width: 100%;
  }
`
