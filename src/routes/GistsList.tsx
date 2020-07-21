import React from "react";
import { RootState } from "../redux/reducers";
import { connect } from "react-redux";
import { GistItem } from "../components/gists/GistItem";
import { ErrorMessage } from "../components/shared/ErrorMessage";
import { Nav } from "../components/gists/Nav";
import { LayoutWrapper, Placeholder, CardsWrapper } from "../components/shared/styles/SharedStyles";

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
    <LayoutWrapper>
      <Nav />
      <div className="mar-top">
        {!isLoading && isResolved &&
          <CardsWrapper>
            {results && results.length &&
            results.map((gist: Gist, id:number) =>
                <GistItem key={`${gist.id}-${id}`} gist={gist} />
              )
            }
          </CardsWrapper>
        }
        {isLoading &&
          <CardsWrapper>
            {Array(12)
              .fill(12)
              .map((_, index) => (
                <Placeholder key={index} />
              ))
            }
          </CardsWrapper>
        }
        {!isLoading && error.length &&
          <ErrorMessage errorText={error}/>}
      </div>
    </LayoutWrapper>
  );
};

export const GistsList = connect(
  mapStateToProps
)(UnconnectedGistsList);
