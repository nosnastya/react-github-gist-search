import React from "react";
import { RootState } from "../../redux/reducers";
import { connect } from "react-redux";
import { GistItem } from "./GistItem";
import styles from "./UsersList.module.scss";

const mapStateToProps = (state: RootState) => ({
    results: state.gists.gists,
    isLoading: state.gists.isLoading,
    isResolved: state.gists.isResolved,
});

type Props = ReturnType<typeof mapStateToProps>;

const UnconnectedUsersList: React.FC<Props> = ({
  results,
  isLoading,
  isResolved
}) => {
  return (
    <div className="mar-top">
      { !isLoading && isResolved &&
        <div className={styles.cardsWrapper}>
          {results.length
            ? results.map((gist: Gist, id:number) =>
              <GistItem key={`${gist.id}-${id}`} item={gist} />
            )
            : <p className="mar-ver--20 mar-lft--10">No users match your search</p>
          }
        </div>
      }
      {isLoading &&
        <div className={styles.cardsWrapper}>
          {Array(12)
            .fill(12)
            .map((_, index) => (
              <span className={styles.placeholder} key={index}></span>
            ))
          }
        </div>
      }
    </div>
  );
};

export const UsersList = connect(
  mapStateToProps
)(UnconnectedUsersList);
