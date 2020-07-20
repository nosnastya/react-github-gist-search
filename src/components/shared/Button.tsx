import React from "react";
import styled from "styled-components";

type Props = {
  type?: string,
  btnText: string,
  className?: string
}

export const Button: React.FC<Props> = ({ type="button", className, btnText }) => {
  const StyledButton = styled.button.attrs(_ => ({
    type: type,
    className: className
  }))`
    color: #1074e7;
    background-color: white;
    border-color: rgba(16,116,231,.5);
    display: inline-block;
    padding: 10px 32px;
    font-size: 14px;
    white-space: nowrap;
    cursor: pointer;
    border-radius: 6px;
    transition: .2s;
    -webkit-appearance: none;
    &:hover, &:active {
      color: #0366d6;
      text-decoration: none;
      background-color: white;
      border-color: #1074e7;
    }
  `;


  return (
    <StyledButton>{btnText}</StyledButton>
  );
};
