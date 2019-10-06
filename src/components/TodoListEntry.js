import React from 'react';

const TodoListEntry = (props) => {
  return (
    <div className="frame">
      {props.todos.scheduleName}
      <div>
        {props.todos.todo.map(
          (item) => (<li key={item.todoKey}>{item.name}</li>)
        )}
      </div>
    </div>
  )
}

export default TodoListEntry;