import React from "react";

import { Avatar } from "../shared/Avatar";

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
            <Avatar
              imgUrl={fork.owner.avatar_url}
              imgAlt={fork.owner.login}
              size="20px"
            />
            <span>{fork.owner.login}</span>
          </a>

      </div>
    );
};

