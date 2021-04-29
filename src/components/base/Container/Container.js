import PropTypes from 'prop-types';
import React from 'react';

import './style.scss';

const Container = ({ children, isBlurred }) => {
  return <div className={`container${isBlurred ? ` container--blurred` : ''}`}>{children}</div>;
};

Container.propTypes = {
  children: PropTypes.node,
  isBlurred: PropTypes.bool,
};

export default Container;
