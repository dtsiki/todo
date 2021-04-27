import PropTypes from 'prop-types';
import React from 'react';

import './style.scss';

const Nav = ({ children }) => {
  return <nav className="nav">{children}</nav>;
};

Nav.propTypes = {
  children: PropTypes.node,
};

export default Nav;
