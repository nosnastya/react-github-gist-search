import React from "react";
import { Nav } from "./components/main/Nav";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { UsersList } from "./components/main/UsersList";
import "./styles/styles.scss";

const App = () => {
  return (
    <div>
      <Nav />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={UsersList} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
