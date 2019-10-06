import React from 'react';
import TodoListEntry from './TodoListEntry'

const TodoList = () => {
  return (
    <div className="frame">
      <div>
        This is todo list.
      </div>
      <div>
        create new data:<input />
      </div>
      <TodoListEntry />
    </div>
  )
}

export default TodoList;