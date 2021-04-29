import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useStoreon } from 'storeon/react';

import Filter from '../../components/todo/Filter';
import Button from './../../components/base/Button';
import Container from './../../components/base/Container';
import PopUp from './../../components/base/PopUp';
import FormAddTodo from './../../components/todo/FormAddTodo';
import Todos from './../../components/todo/Todos';
import { filterTypes } from './../../constants/filterTypes';

const Todo = () => {
  const { dispatch, todos } = useStoreon('todos');
  const [filter, setFilter] = useState(filterTypes[0]);
  const [isPopUpActive, showPopUp] = useState(false);

  const deleteAllTodos = () => {
    dispatch('todos/deleteAllTodos');
  };

  const changeFilter = (value) => {
    setFilter(value);
  };

  const toggleForm = () => {
    showPopUp(!isPopUpActive);
  };

  return (
    <Container isBlurred={isPopUpActive}>
      <PopUp isPopUpActive={isPopUpActive} closePopUp={toggleForm}>
        <FormAddTodo closeForm={toggleForm} />
      </PopUp>
      <Button
        icon={<FontAwesomeIcon icon={faPlus} />}
        buttonClassName="open-form"
        value="Open form add todo"
        onClick={toggleForm}
        type="submit"
        isValueVisuallyHidden
        tooltip="Add new to do"
        variant="open"
      />
      <Filter selectedFilter={filter} changeFilter={changeFilter} />
      <Todos todos={todos} selectedFilter={filter} />
      <Button
        icon={<FontAwesomeIcon icon={faTrash} />}
        buttonClassName="delete-button"
        value="Delete all"
        onClick={deleteAllTodos}
        type="submit"
        isValueVisuallyHidden
        tooltip="Delete all to do"
        variant="delete"
      />
    </Container>
  );
};

export default Todo;
