import PropTypes from 'prop-types';
import React, { useMemo } from 'react';

import { filterTypes } from './../../constants/filterTypes';
import Todo from './Todo';

import './style.scss';

const Todos = ({ todos, selectedFilter = 'all' }) => {
  const todosItems = useMemo(() => {
    if (!todos?.length) return <li>Your to do list is empty :(</li>;
    return todos.map((todo) => {
      if (selectedFilter === filterTypes[0]) return <Todo todo={todo} key={todo.id} />;
      if (selectedFilter === filterTypes[2] && todo.isCompleted) return <Todo todo={todo} key={todo.id} />;
      if (selectedFilter === filterTypes[1] && !todo.isCompleted) return <Todo todo={todo} key={todo.id} />;
    });
  }, [todos, selectedFilter]);

  return <ul className="todos">{todosItems}</ul>;
};

Todos.propTypes = {
  todos: PropTypes.array,
  selectedFilter: PropTypes.string,
};

export default Todos;
