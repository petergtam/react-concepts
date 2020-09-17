import React from 'react';
import FunctionComponent from './FunctionComponent';
import SimpleFunctionComponent from './SimpleFunctionComponent';

export default function Basics() {
  return (
    <div>
      <SimpleFunctionComponent />
      <FunctionComponent description="Hi I'm a function component with a description prop" />
    </div>
  );
}
