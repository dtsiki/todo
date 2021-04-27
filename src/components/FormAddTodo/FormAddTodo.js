import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useStoreon } from 'storeon/react';

import Button from './../../components/Button';
import Form from './../../components/Form';
import Input from './../../components/Input';

import './style.scss';

const FormAddTodo = () => {
  const { dispatch } = useStoreon();
  const [newTodo, setNewTodo] = useState('');

  const addNewTodo = (e) => {
    e.preventDefault();
    if (!newTodo) return;
    dispatch('todos/addNewTodo', newTodo);
    setNewTodo('');
  };

  const changeNewTodo = (e) => {
    setNewTodo(e.target.value);
  };

  return (
    <Form onSubmit={addNewTodo}>
      <Input
        value={newTodo}
        onChange={changeNewTodo}
        type="search"
        name="search"
        id="addNewTodo"
        placeholder="e.g: don't worry and be happy"
        label="Add new to do"
      />
      <Button
        buttonClassName="form-add-todo__button"
        isValueVisuallyHidden={true}
        icon={<FontAwesomeIcon icon={faPlus} />}
        value="Add"
        onClick={addNewTodo}
        type="submit"
      />
    </Form>
  );
};

export default FormAddTodo;
