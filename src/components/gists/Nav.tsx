
import React from "react";
import { SearchForm } from "./SearchForm";
import { NavWrapper } from "./styles/GistsStyles";
import { Logo } from '../shared/images/Icons';

export const Nav: React.FC = () => {

  return (
    <NavWrapper>
      <div className="search">
        <div className="disp-flex flex-align--center mar-ver--20">
          <Logo/>
          <div className="mar-lft--10">
              <h1 className="mar-no text-dark-gray">Github Searcher</h1>
              <p className="text-gray mar-no">Search gists below</p>
          </div>
        </div>
        <SearchForm/>
      </div>
    </NavWrapper>
  );
};
