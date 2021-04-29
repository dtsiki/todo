import { faStickyNote } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useStoreon } from 'storeon/react';

import Button from './../../base/Button';
import Form from './../../base/Form';
import Input from './../../base/Input';

import './style.scss';

const FormAddTodo = ({ closeForm }) => {
  const { dispatch } = useStoreon();
  const [newTodo, setNewTodo] = useState('');

  const addNewTodo = (e) => {
    e.preventDefault();
    if (!newTodo) return;
    dispatch('todos/addNewTodo', newTodo);
    setNewTodo('');
    closeForm();
  };

  const changeNewTodo = (e) => {
    setNewTodo(e.target.value);
  };

  return (
    <Form onSubmit={addNewTodo} formClassName="form-add-todo">
      <Input
        value={newTodo}
        onChange={changeNewTodo}
        type="search"
        name="search"
        id="addNewTodo"
        placeholder="Enter new to do"
        label="Add new to do"
        labelClassName="form-add-todo__title"
        icon={<FontAwesomeIcon icon={faStickyNote} />}
        isLabelVisuallyHidden
      />
      <Button buttonClassName="form-add-todo__button" value="Add new to do" onClick={addNewTodo} type="submit" />
    </Form>
  );
};

FormAddTodo.propTypes = {
  closeForm: PropTypes.func,
};

export default FormAddTodo;
