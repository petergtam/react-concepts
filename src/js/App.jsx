import React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Functions from 'js/components/basics/functions';
import Classes from 'js/components/basics/classes';
import Page from 'js/Page';

function App() {
  return (
    <BrowserRouter basename="/">
      <Switch>
        <Route path="/functions">
          <Functions />
        </Route>
        <Route path="/classes">
          <Classes />
        </Route>
        <Route path="/">
          <Page />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default hot(module)(App);
