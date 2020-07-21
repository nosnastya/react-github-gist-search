import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { GistsList } from "./routes/GistsList";
import { GlobalStyles } from "./styles/global";

const App = () => {
  return (
    <>
      <GlobalStyles/>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={GistsList} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
