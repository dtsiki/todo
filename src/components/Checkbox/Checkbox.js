import PropTypes from 'prop-types';
import React from 'react';

import './style.scss';

const Checkbox = ({ checkboxClassName, name, label, value, onChange, isLabelVisuallyHidden = true }) => {
  return (
    <div className={`checkbox ${checkboxClassName ? ` ${checkboxClassName}` : ''}`}>
      <input type="checkbox" name={name} className="checkbox__input" checked={value} onChange={onChange} />
      <label className={`checkbox__label${isLabelVisuallyHidden ? 'checkbox__label--hidden' : ''}`} htmlFor={name}>
        {label}
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.any,
  isLabelVisuallyHidden: PropTypes.bool,
  checkboxClassName: PropTypes.string,
};

export default Checkbox;
