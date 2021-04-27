import React, { useState } from 'react';
import { useStoreon } from 'storeon/react';

import Button from './../../components/Button';
import Filter from './../../components/Filter';
import FormAddTodo from './../../components/FormAddTodo';
import Nav from './../../components/Nav';
import Todos from './../../components/Todos';
import { filterTypes } from './../../constants/filterTypes';

const Todo = () => {
  const { dispatch, todos } = useStoreon('todos');
  const [filter, setFilter] = useState(filterTypes[0]);

  const deleteAllTodos = () => {
    dispatch('todos/deleteAllTodos');
  };

  const changeFilter = (value) => {
    setFilter(value);
  };

  return (
    <div className="container">
      <FormAddTodo />
      <Nav>
        <Filter selectedFilter={filter} changeFilter={changeFilter} />
      </Nav>
      <Todos todos={todos} selectedFilter={filter} />
      <Button buttonClassName="delete-button" value="Delete all" onClick={deleteAllTodos} type="submit" />
    </div>
  );
};

export default Todo;
