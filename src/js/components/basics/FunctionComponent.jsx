import React from 'react';
import PropTypes from 'prop-types';

function FunctionComponent(props) {
  return <div>{props.description}</div>;
}

FunctionComponent.propTypes = {
  description: PropTypes.string.isRequired,
};

export default FunctionComponent;
