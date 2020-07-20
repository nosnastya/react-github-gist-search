import React from "react";
import { Nav } from "./components/main/Nav";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { GistsList } from "./components/main/GistsList";
import "./styles/styles.scss";

const App = () => {
  return (
    <div>
      <Nav />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={GistsList} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
