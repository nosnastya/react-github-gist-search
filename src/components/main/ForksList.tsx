import React, { useEffect } from "react";
import { bindActionCreators, Dispatch } from "redux";
import { requestGistForks } from "../../redux/actions"
import { RootState } from "../../redux/reducers";
import { connect } from 'react-redux'
import { Avatar } from "../ui/Avatar";

interface Props {
  forks: Fork[] | null
};


export const ForksList: React.FC<Props> = ({
    forks
}) => {



    return (
      <div>
        Latest forks:
        {forks && forks.map((fork:Fork) =>
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
        )}
      </div>
    );
};

