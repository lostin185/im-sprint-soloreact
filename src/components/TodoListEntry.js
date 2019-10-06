import React from 'react';

const TodoListEntry = (props) => {
  return (
    <div className="frame">
      <div>
        {props.todos.scheduleName}
      </div>
      <div>
        add todo: <input/>
      </div>
      <div>
        {props.todos.todo.map(
          (item) => (<li key={item.todoKey}>{item.name}</li>)
        )}
      </div>
    </div>
  )
}

export default TodoListEntry;