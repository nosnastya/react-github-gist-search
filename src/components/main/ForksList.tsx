import React, { useEffect } from "react";
import styles from "./Card.module.scss";
import { bindActionCreators, Dispatch } from "redux";
import { requestGistForks } from "../../redux/actions"
import { RootState } from "../../redux/reducers";
import { connect } from 'react-redux'

interface OwnProps {
  id: string
};


const mapStateToProps = (state: RootState, ownProps: OwnProps) => ({
  id: ownProps.id,
  forks: state.forks.forks
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
      {
        requestGistForks
      },
      dispatch
  );

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;


const UnconnectedForksList: React.FC<Props> = ({
    id,
    forks,
    requestGistForks
}) => {
  const loadResults = ()  => {
    requestGistForks(id);
  };

  useEffect(() => {
      loadResults();
  },[]); // needed to run only once on component render

    return (
      <div>
      Forks:
      {forks.length && forks.map((fork: Fork) =>
        <p>{fork.user.login}</p>
      )}
    </div>
    );
};

export const ForksList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UnconnectedForksList);
