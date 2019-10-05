import React from 'react';
import DataList from './DataList'
import TodoList from './TodoList'

const App = () => {
  return(
    <div>
      {'< Reminder >'}
      <DataList />
      <TodoList />
    </div>
  )
}

export default App;