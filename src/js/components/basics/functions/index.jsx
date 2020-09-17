import React from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import Page from 'js/Page';
import FunctionComponent from '../functions/FunctionComponent';
import SimpleFunctionComponent from '../functions/SimpleFunctionComponent';

export default function Functions() {
  const { url, path } = useRouteMatch();
  return (
    <Page>
      {`You can use either a simple function or a function with props to render your DOM.`}
      <ul>
        <li>
          <Link to={`${url}/simple`}>Simple function component</Link>
        </li>
        <li>
          <Link to={`${url}/props`}>Function component with props</Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${path}/simple`}>
          <SimpleFunctionComponent />
        </Route>
        <Route path={`${path}/props`}>
          <FunctionComponent description="Hi I'm a function component with a description prop" />
        </Route>
      </Switch>
    </Page>
  );
}
