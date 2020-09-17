import React from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import Page from 'js/Page';
import { SimpleClassComponent } from 'js/components/basics/classes/SimpleClassComponent';
import { ClassComponent } from 'js/components/basics/classes/ClassComponent';

export default function Classes() {
  const { url, path } = useRouteMatch();
  return (
    <Page>
      {`You can use either a simple function or a function with props to render your DOM.`}
      <ul>
        <li>
          <Link to={`${url}/simple`}>Simple class component</Link>
        </li>
        <li>
          <Link to={`${url}/props`}>Class component with props</Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${path}/simple`}>
          <SimpleClassComponent />
        </Route>
        <Route path={`${path}/props`}>
          <ClassComponent description="Hi I'm a class component with a description prop" />
        </Route>
      </Switch>
    </Page>
  );
}
