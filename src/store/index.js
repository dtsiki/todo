import { persistState } from '@storeon/localstorage';
import { createStoreon } from 'storeon';

const defaultTodos = [
  {
    id: 1,
    todo: 'Do something',
    isCompleted: false,
  },
  {
    id: 2,
    todo: 'Do something else',
    isCompleted: true,
  },
];

const todos = (store) => {
  store.on('@init', () => ({ todos: defaultTodos }));
  store.on('todos/setTodo', ({ todos }, obj) => {
    return {
      todos: {
        ...todos,
        todos: obj,
      },
    };
  });
};

export const store = createStoreon([todos, persistState(['todos'])]);
