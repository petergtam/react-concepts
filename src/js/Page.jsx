import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory, useRouteMatch } from 'react-router-dom';

function Page(props) {
  const history = useHistory();
  const { path } = useRouteMatch();
  useEffect(() => {
    history.push(path);
  }, []);
  return (
    <div style={{ display: 'flex' }}>
      <ul>
        <li>
          React basics
          <ul>
            <li>
              <Link to="/functions">Function Component</Link>
            </li>
            <li>
              <Link to="/classes">Class Component</Link>
            </li>
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
      <div>{props.children}</div>
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.node,
};

export default Page;
