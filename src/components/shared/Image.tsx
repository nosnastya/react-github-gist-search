import React from "react";
import styled from "styled-components";

type Props = {
  width?: string;
  height?: string;
  imgUrl: string;
  imgAlt: string;
  isCircle?: boolean;
  className?: string;
};

export const Image: React.FC<Props> = ({ height="50", width, imgUrl, imgAlt, isCircle=false, className }) => {
  const StyledImage = styled.img`
    border-radius: ${isCircle ? "50%" : "0"};
    display: block;
    width: ${isCircle ? height : width}px
  `;

  return (
    <StyledImage
      height={height}
      src={imgUrl}
      alt={imgAlt}
      className={className}
    />
  );
};
