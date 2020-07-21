import React, { useEffect } from "react";
import { ForkItem } from "./ForkItem";
import { Image } from "../shared/Image";
import { RootState } from "../../redux/reducers";
import { bindActionCreators, Dispatch } from "redux";
import { loadGistForks } from "../../redux/actions"
import { connect } from "react-redux";
import { Tag } from "../shared/styles/SharedStyles";
import { CardsWrapper, CardInfo } from "./styles/GistsStyles";
import { ForkIcon, CommentIcon } from '../shared/images/Icons';

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
    <CardsWrapper className="disp-flex flex-column">
      <div className="disp-flex mar-btm--10 text-gray">
        <span className="disp-flex flex-align--center">
          <ForkIcon/>
          <span className="text-xs mar-lft--5">
            {gist.forks ? `${gist.forks.length} ${ gist.forks.length === 1 ? 'file': 'files'}` : '0 files'}
          </span>
        </span>
        <span className="disp-flex flex-align--center mar-lft--10">
          <CommentIcon/>
          <span className="text-xs mar-lft--5">
            {gist.comments} {gist.comments === 1 ? 'comment': 'comments'}
          </span>
        </span>
      </div>

      <div className="disp-flex flex-align--center mar-ver--10">
        <Image
          isCircle={true}
          imgUrl={gist.owner.avatar_url}
          imgAlt={gist.owner.login}
        />
        <CardInfo className="disp-flex flex-column mar-lft--10">
          <a className="text-blue disp-flex" href={gist.html_url}>
            {`${gist.owner.login}/`} <strong>{Object.keys(gist.files)[0]}</strong>
          </a>
          <span className="text-gray text-sm">{gist.description}</span>
        </CardInfo>
      </div>

      <div className="disp-flex flex-align--center mar-ver--10">
        {gist.files && Object.values(gist.files).map((file: FileType, id: number) =>
          <Tag key={id}>{file.language ? file.language : file.type}</Tag>
        )}
      </div>

      <div>
        {gist.forks && gist.forks.length > 0 &&
          <>
            <div className="text-gray mar-btm--10">Latest forks:</div>
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
