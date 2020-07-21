import React from "react";
import styled from "styled-components";
import { variables } from "../../styles/variables";

type ButtonSize = "SM" | "MD";

type Props = {
  type?: string,
  btnText: string,
  className?: string,
  onClick?: any,
  size?: ButtonSize,
  color?: string
}

export const Button: React.FC<Props> = ({ type="button", className, btnText, onClick, size="MD", color }) => {
  const StyledButton = styled.button`
    color: ${color ? color : variables.colorBlue};
    background-color: white;
    border-color: ${color ? color : variables.colorBlue};
    display: inline-block;
    padding: ${size === "MD" ? '10px 32px' : '2px 6px'};
    font-size: 14px;
    white-space: nowrap;
    cursor: pointer;
    border-radius: 6px;
    transition: .2s;
    -webkit-appearance: none;
    outline: none;
    border-width: 1px;
    box-shadow: none;
    &:hover, &:active {
      color: ${variables.colorLightBlue};
      text-decoration: none;
      background-color: white;
      border-color: ${variables.colorLightBlue};
    }
    & + button {
      margin-left: 5px;
    }
  `;


  return (
    <StyledButton onClick={onClick} className={className}>{btnText}</StyledButton>
  );
};
