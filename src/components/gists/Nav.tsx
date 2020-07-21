
import React, { useState } from "react";
import { SearchForm } from "./SearchForm";
import { NavWrapper } from "./styles/GistsStyles";
import { Logo } from '../shared/Logo';

export const Nav: React.FC = () => {
    const [isSearchToggled, setIsSearchToggled] = useState(false);

    return (
        <NavWrapper className={isSearchToggled ? 'pinned' : 'centered'}>
            <div className="search">
                <div className="disp-flex flex-align--center mar-ver--20">
                  <Logo/>
                  <div className="mar-lft--10">
                      <h1 className="mar-no text-dark-gray">Github Searcher</h1>
                      <p className="text-gray mar-no">Search gists below</p>
                  </div>
                </div>
                <div className="disp-flex">
                  <SearchForm setIsSearchToggled={setIsSearchToggled}/>
                </div>
            </div>
        </NavWrapper>
    );
};
