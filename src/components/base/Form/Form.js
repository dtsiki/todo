import PropTypes from 'prop-types';
import React from 'react';

const Form = ({ formClassName, children, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className={formClassName}>
      {children}
    </form>
  );
};

Form.propTypes = {
  children: PropTypes.node,
  onSubmit: PropTypes.func,
  formClassName: PropTypes.string,
};

export default Form;
