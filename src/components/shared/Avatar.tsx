import React from "react";
import styled from "styled-components";

type Props = {
  size?: string;
  imgUrl: string;
  imgAlt: string;
};

export const Avatar: React.FC<Props> = ({ size="50px", imgUrl, imgAlt }) => {
  const AvatarImage = styled.img.attrs(_ => ({
    src: imgUrl,
    alt: imgAlt,
    size: size,
  }))`
    border-radius: 50%;
    display: block;
    margin-right: 10px;
    min-width: ${props => props.size};
    height: ${props => props.size};
    width: ${props => props.size};
  `;

  return (
    <AvatarImage size={size} src={imgUrl} alt={imgAlt}/>
  );
};
