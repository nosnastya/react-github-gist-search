import React from "react";
import { Image } from "../shared/Image";
import styled from "styled-components";
interface Props {
  fork: Fork
};

export const ForkItem: React.FC<Props> = ({
    fork
}) => {
  const StyledLink = styled.a`
  &:h
  `;
    return (
      <div className="mar-btm--5">
          <StyledLink
            href={fork.html_url}
            key={fork.id}
            className="disp-flex flex-align--center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              isCircle={true}
              imgUrl={fork.owner.avatar_url}
              height="30"
            />
            <span className="mar-lft--5">{fork.owner.login}</span>
          </StyledLink>
      </div>
    );
};

