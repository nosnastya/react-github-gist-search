import React from "react";
import styled from "styled-components";

type Props = {
  width?: string;
  height?: string;
  imgUrl: string;
  isCircle?: boolean;
  className?: string;
};

export const Image: React.FC<Props> = ({ height="50", width, imgUrl, isCircle=false, className }) => {
  const StyledImage = styled.i`
    border-radius: ${isCircle ? "50%" : "0"};
    display: block;
    height: ${height}px;
    width: ${isCircle ? height : width}px;
    background: #eeeeee;
    background-image: url("${imgUrl}");
    background-size: cover;
  `;

  return (
    <StyledImage
      className={className}
    />
  );
};
