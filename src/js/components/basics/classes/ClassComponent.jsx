import React from 'react';
import PropTypes from 'prop-types';

export class ClassComponent extends React.Component {
  static propTypes = {
    description: PropTypes.string.isRequired,
  };
  render() {
    return <div>{this.props.description}</div>;
  }
}
