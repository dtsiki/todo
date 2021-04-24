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

const DEFAULT_TODO_ID = 0;

const todos = (store) => {
  store.on('@init', () => ({ id: DEFAULT_TODO_ID, todos: defaultTodos }));

  store.on('todos/addNewTodo', ({ todos, id }, newTodo) => {
    return {
      id: id + 1,
      todos: todos.concat([
        {
          id: id,
          title: newTodo,
          isCompleted: false,
        },
      ]),
    };
  });

  store.on('todos/deleteTodo', ({ todos }, todoId) => {
    var updatedTodos = todos.filter((todo) => {
      return todo.id !== todoId;
    });
    return {
      todos: updatedTodos,
    };
  });

  store.on('todos/deleteAllTodos', () => {
    return {
      id: DEFAULT_TODO_ID,
      todos: [],
    };
  });
};

export const store = createStoreon([todos, persistState(['todos'])]);
