import React, { useMemo, useState } from 'react';
import { useStoreon } from 'storeon/react';

const Main = () => {
  const { dispatch, todos } = useStoreon('todos');
  const [newTodo, setNewTodo] = useState('');

  const changeNewTodo = (e) => {
    setNewTodo(e.target.value);
  };

  const addNewTodo = (e) => {
    e.preventDefault();
    if (!newTodo) return;
    dispatch('todos/addNewTodo', newTodo);
  };

  const deleteTodo = (todoId) => {
    dispatch('todos/deleteTodo', todoId);
  };

  const todosItems = useMemo(() => {
    if (!todos?.length) return <li>Your to do list is empty :(</li>;
    return todos.map((todo) => {
      return (
        <li key={`todo-${todo.id}`} className="">
          <span>{todo.title}</span>
          <span> ({todo.isCompleted ? 'completed' : 'active'})</span>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
      );
    });
  }, [todos]);

  return (
    <div className="App">
      <form onSubmit={addNewTodo}>
        <label htmlFor="addNewTodo">Add new to do</label>
        <input
          type="search"
          name="search"
          id="addNewTodo"
          placeholder="Example: Don't worry and be happy"
          value={newTodo}
          className=""
          onChange={changeNewTodo}
        />
        <button className="button" type="submit" onClick={addNewTodo}>
          Add
        </button>
      </form>
      <ul className="list">{todosItems}</ul>
    </div>
  );
};

export default Main;
