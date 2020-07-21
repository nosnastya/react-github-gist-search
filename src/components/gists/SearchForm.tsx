
import React, { useState } from "react";
import { RootState } from "../../redux/reducers";
import { loadGists } from "../../redux/actions"
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { Button } from "../shared/Button";
import { SearchInput } from "./styles/GistsStyles";

type OwnProps = {
  setIsSearchToggled: any
};

const mapStateToProps = (state: RootState, ownProps: OwnProps) => ({
  isLoading: state.gists.isLoading,
  setIsSearchToggled: ownProps.setIsSearchToggled
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
  setIsSearchToggled
}) => {
    const [searchQuery, setSearchQuery] = useState('');

    const loadResults = (searchQuery: string)  => {
        if (searchQuery.length >= 1) {
          setIsSearchToggled(true)
            loadGists(searchQuery);
        }
    };

    const onSubmit = (e: React.SyntheticEvent) => {
      e.preventDefault();
      if (searchQuery === '') {
        setIsSearchToggled(false);
        } else {
          loadResults(searchQuery);
      }
    };

    // const onChange = (event: React.SyntheticEvent) => {
    //     // const
    //     //     target = event.target as HTMLTextAreaElement,
    //     //     searchString = target.value;

    //     // event.persist();

    //     setSearchQuery(searchString);
    // };

  return (
    <form onSubmit={onSubmit}>
      <SearchInput
        type="search"
        name="search"
        placeholder="Search gists by username"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Button type="submit" className="mar-lft--10" btnText="Search"/>
    </form>
  );
};

export const SearchForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(UnconnectedSearchForm);
