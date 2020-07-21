
import React, { useState } from "react";
import { RootState } from "../../redux/reducers";
import { loadGists } from "../../redux/actions"
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { Button } from "../shared/Button";
import { SearchInput, RecentSearchWrapper } from "./styles/GistsStyles";


const mapStateToProps = (state: RootState) => ({
  recentSearch: state.gists.recentSearch
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
      {
        loadGists
      },
      dispatch
  );

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

export const UnconnectedSearchForm: React.FC<Props> = ({
  loadGists,
  recentSearch
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [validationError, setValidationError] = useState('');

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (searchQuery === '') {
      setValidationError('Please enter username.')
    } else {
      loadGists(searchQuery);
    }
  };

  const getLatestSearchResults = (results: string[]) => Object.values(results).slice(0,3);

  return (
    <div className="disp-flex flex-column">

      <form onSubmit={onSubmit}>
        <SearchInput
          type="search"
          name="search"
          placeholder="Search gists by username"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Button type="submit" className="mar-lft--10 mar-btm--5" btnText="Search"/>
        {validationError && <p className="text-error">{validationError}</p> }
      </form>

      <RecentSearchWrapper>
        <div>
          {recentSearch && recentSearch.length > 0 &&
            <>
              <p className="text-gray">Your recent search</p>
              {getLatestSearchResults(recentSearch).map((searchResult:string, id: number) =>
                <Button
                  onClick={() => setSearchQuery(searchResult)}
                  btnText={searchResult}
                  size="SM"
                  color="darkslategray"
                  key={id}
                />
              )}
            </>
          }
        </div>
      </RecentSearchWrapper>
    </div>
  );
};

export const SearchForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedSearchForm);
