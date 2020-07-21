import React from "react";
import styled from "styled-components";

type Props = {
  tagText: string;
  className?: string;
};

export const Tag: React.FC<Props> = ({ tagText, className }) => {
  const StyledTag = styled.div.attrs(_ => ({
    className: className
    }))`
    display: inline-block;
    padding: 6px 12px;
    white-space: nowrap;
    background-color: #fffbdd;
    border-radius: 3px;
  `;

  return (
    <StyledTag>{tagText}</StyledTag>
  );
};
