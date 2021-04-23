import React from 'react';
import { useStoreon } from 'storeon/react';

const App = () => {
  const { dispatch, todos } = useStoreon('todos');

  return <div className="App">App</div>;
};

export default App;
