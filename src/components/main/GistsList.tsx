import React from "react";
import { RootState } from "../../redux/reducers";
import { connect } from "react-redux";
import { GistItem } from "./GistItem";
import styles from "./GistsList.module.scss";
import { ErrorMessage } from "../shared/ErrorMessage";

const mapStateToProps = (state: RootState) => ({
    results: state.gists.gists,
    isLoading: state.gists.isLoading,
    isResolved: state.gists.isResolved,
    error: state.gists.error
});

type Props = ReturnType<typeof mapStateToProps>;

const UnconnectedGistsList: React.FC<Props> = ({
  results,
  isLoading,
  isResolved,
  error
}) => {
  return (
    <div className="mar-top">
      { !isLoading && isResolved &&
        <div className={styles.cardsWrapper}>
          {results && results.length
            ? results.map((gist: Gist, id:number) =>
              <GistItem key={`${gist.id}-${id}`} gist={gist} />
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
      {!isLoading && error.length > 0 &&
        <ErrorMessage errorText={error}/>}
    </div>
  );
};

export const GistsList = connect(
  mapStateToProps
)(UnconnectedGistsList);
