import { persistState } from '@storeon/localstorage';
import { createStoreon } from 'storeon';

const defaultTodos = [
  {
    title: `Don't worry`,
    isCompleted: true,
  },
  {
    title: 'Be happy',
    isCompleted: false,
  },
];

const todos = (store) => {
  store.on('@init', () => ({ todos: defaultTodos }));

  store.on('todos/addNewTodo', ({ todos }, newTodo) => {
    return {
      todos: todos.concat([
        {
          id: Date.now(),
          title: newTodo,
          isCompleted: false,
        },
      ]),
    };
  });

  store.on('todos/deleteTodo', ({ todos }, todoId) => {
    const updatedTodos = todos.filter((todo) => {
      return todo.id !== todoId;
    });
    return {
      todos: updatedTodos,
    };
  });

  store.on('todos/completeTodo', ({ todos }, todoId) => {
    const updatedTodos = todos.filter((todo) => {
      if (todo.id === todoId) todo.isCompleted = !todo.isCompleted;
      return todo;
    });
    return {
      todos: updatedTodos,
    };
  });

  store.on('todos/deleteAllTodos', () => {
    return {
      todos: [],
    };
  });
};

export const store = createStoreon([todos, persistState(['todos'])]);
