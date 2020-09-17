import React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Basics from 'js/components/basics';

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex' }}>
        <ul>
          <li>
            React basics
            <ul>
              <li>
                <Link to="/basics">Function Component</Link>
              </li>
              <li>Class Component</li>
              <li>States</li>
              <li>Lifecycle</li>
              <li>Handling Events</li>
              <li>Conditional Rendering</li>
              <li>List and Keys</li>
              <li>Forms</li>
              <li>Lifting State up</li>
              <li>Composition</li>
            </ul>
          </li>
          <li>
            Advanced
            <ul>
              <li>Context</li>
              <li>Fragments</li>
              <li>High-Order Components (HOC)</li>
              <li>Portals</li>
              <li>Render Props</li>
            </ul>
          </li>
          <li>Hooks</li>
        </ul>

        <Switch>
          <Route path="/basics" style={{ flex: '1 1 auto' }}>
            <Basics />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default hot(module)(App);
