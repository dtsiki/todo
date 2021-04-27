import PropTypes from 'prop-types';
import React from 'react';

import './style.scss';

const Button = ({ buttonClassName, value, onClick, icon, isValueVisuallyHidden = false, type = 'submit' }) => {
  return (
    <button type={type} className={`button${buttonClassName ? ` ${buttonClassName}` : ''}`} onClick={onClick}>
      {icon && <span className="button__icon">{icon}</span>}
      {isValueVisuallyHidden ? <span className="button__label">{value}</span> : value}
    </button>
  );
};

Button.propTypes = {
  buttonClassName: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onClick: PropTypes.func,
  icon: PropTypes.object,
  isValueVisuallyHidden: PropTypes.bool,
  type: PropTypes.string,
};

export default Button;
