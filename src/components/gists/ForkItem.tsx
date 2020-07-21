import React from "react";
import { Image } from "../shared/Image";

interface Props {
  fork: Fork
};

export const ForkItem: React.FC<Props> = ({
    fork
}) => {
    return (
      <div>
          <a
            href={fork.html_url}
            key={fork.id}
            className="disp-flex"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              isCircle={true}
              imgUrl={fork.owner.avatar_url}
              imgAlt={fork.owner.login}
              height="20px"
            />
            <span>{fork.owner.login}</span>
          </a>
      </div>
    );
};

