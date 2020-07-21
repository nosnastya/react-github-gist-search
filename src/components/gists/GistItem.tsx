import React, { useEffect } from "react";
import { ForkItem } from "./ForkItem";
import { Image } from "../shared/Image";
import { RootState } from "../../redux/reducers";
import { bindActionCreators, Dispatch } from "redux";
import { loadGistForks } from "../../redux/actions"
import { connect } from "react-redux";
import { Tag } from "../shared/Tag";
import { CardsWrapper, CardInfo } from "./styles/GistsStyles";

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
    <CardsWrapper
        className="disp-flex flex-column flex-just--sb"
    >
      <div className="disp-flex flex-column">
        <Image
          isCircle={true}
          imgUrl={gist.owner.avatar_url}
          imgAlt={gist.owner.login}
        />
        <CardInfo className="disp-flex flex-column">
          {gist.description}
        </CardInfo>
      </div>
      <div className="disp-flex flex-align--center">
        {gist.files && Object.values(gist.files).map((file: FileType, id: number) =>
            <div
              key={id}
            >
              <Tag className="mar-lft--5" tagText={file.language}/>
            </div>
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
    </CardsWrapper>
  );
};

export const GistItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedGistItem);
