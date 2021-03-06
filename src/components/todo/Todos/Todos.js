import { faSadTear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React, { useMemo } from 'react';

import { filterTypes } from './../../../constants/filterTypes';
import Todo from './Todo';

import './style.scss';

const Todos = ({ todos, selectedFilter = filterTypes[0] }) => {
  const todosItems = useMemo(() => {
    if (!todos?.length)
      return (
        <li className="todo-message">
          Your to do list is empty <FontAwesomeIcon icon={faSadTear} />
        </li>
      );
    return todos
      .filter((todo) => {
        if (selectedFilter.isCompleted !== null) {
          return todo.isCompleted === selectedFilter.isCompleted;
        }
        return todo;
      })
      .map((todo) => <Todo todo={todo} key={todo.id} />);
  }, [todos, selectedFilter]);

  return <ul className="todos">{todosItems}</ul>;
};

Todos.propTypes = {
  todos: PropTypes.array,
  selectedFilter: PropTypes.object,
};

export default Todos;
