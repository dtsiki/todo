import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
import { useStoreon } from 'storeon/react';

import Button from './../Button';
import Checkbox from './../Checkbox';

const Todo = ({ todo }) => {
  const { dispatch } = useStoreon('todos');

  const completeTodo = (todoId) => {
    dispatch('todos/completeTodo', todoId);
  };

  const deleteTodo = (todoId) => {
    dispatch('todos/deleteTodo', todoId);
  };

  return (
    <li key={`todo-${todo.id}`} className={`todo${todo.isCompleted ? ' todo--completed' : ''}`}>
      <Checkbox
        checkboxClassName="todo__checkbox"
        name={todo.id}
        value={todo.isCompleted}
        onChange={() => completeTodo(todo.id)}
      />
      <span className={`todo__title${todo.isCompleted ? ' todo__title--completed' : ''}`}>{todo.title}</span>
      <Button
        buttonClassName="todo__delete-button"
        isValueVisuallyHidden={true}
        icon={<FontAwesomeIcon icon={faTrash} />}
        value="Delete"
        onClick={() => deleteTodo(todo.id)}
      />
    </li>
  );
};

Todo.propTypes = {
  todo: PropTypes.object,
};

export default Todo;
