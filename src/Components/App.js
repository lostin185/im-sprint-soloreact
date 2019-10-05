import React from 'react';
import DataList from './DataList'
import TodoList from './TodoList'

const App = () => {
  return(
    <div>
      <h1>{'< Reminder >'}</h1>
      <DataList />
      <TodoList />
    </div>
  )
}

export default App;