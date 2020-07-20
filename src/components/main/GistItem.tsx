import React, { useEffect } from "react";
import styles from "./GistItem.module.scss";
import { ForkItem } from "./ForkItem";
import { Avatar } from "../shared/Avatar";
import { RootState } from "../../redux/reducers";
import { bindActionCreators, Dispatch } from "redux";
import { loadGistForks } from "../../redux/actions"
import { connect } from "react-redux";

type OwnProps = {
  gist: Gist;
};

const mapStateToProps = (state: RootState, ownProps: OwnProps) => ({
  gist: ownProps.gist
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
      {
        loadGistForks
      },
      dispatch
  );

  type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

const UnconnectedGistItem: React.FC<Props> = ({ gist, loadGistForks}) => {

  useEffect(() => {
    loadGistForks(gist.id)
    // eslint-disable-next-line
  }, [])

  return (
    <div
        className={`${styles.cardWrapper} disp-flex flex-column flex-just--sb`}
    >
      <div className={`disp-flex ${styles.cardImgWrapper}`}>
        <Avatar
          imgUrl={gist.owner.avatar_url}
          imgAlt={gist.owner.login}
        />
        <div className={`disp-flex flex-column ${styles.cardInfo}`}>
          {gist.description}
        </div>
      </div>
      <div className="disp-flex flex-align--center">
        { gist.files && Object.values(gist.files).map((file: FileType, id: number) =>
            <span
              key={id}
              className={`${styles.tag} mar-lft--5`}
            >
              {file.language}
            </span>
        )}
      </div>
      <div>
        {gist.forks && gist.forks.length > 0 &&
          <>
            Latest forks:
            {gist.forks.map(fork =>
              <ForkItem fork={fork} key={fork.id} />
            )}
          </>
        }
      </div>
    </div>
  );
};

export const GistItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedGistItem);
