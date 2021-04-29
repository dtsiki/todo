import PropTypes from 'prop-types';
import React, { useState } from 'react';

import './style.scss';

const Button = ({
  buttonClassName,
  value,
  onClick,
  icon,
  isValueVisuallyHidden = false,
  type = 'submit',
  tooltip,
  variant,
}) => {
  const [isTooltipActive, setShowTooltip] = useState(false);

  return (
    <button
      type={type}
      className={`button${buttonClassName ? ` ${buttonClassName}` : ''}${variant ? ` button--${variant}` : ''}`}
      onClick={onClick}
      onMouseOver={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {icon && <span className="button__icon">{icon}</span>}
      {isValueVisuallyHidden ? <span className="button__label">{value}</span> : value}
      {isTooltipActive && tooltip && <div className="button__tooltip">{tooltip}</div>}
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
  tooltip: PropTypes.string,
  variant: PropTypes.string,
};

export default Button;
