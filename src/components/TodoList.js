import React from 'react';
import TodoListEntry from './TodoListEntry'

const TodoList = (props) => {
  return (
    <div className="frame">
      This is todo list.
      {props.data.schedule.map(
        (item) => (<TodoListEntry todos={item} key={item.scheduleKey}/>)
      )} 
    </div>
  )
}

export default TodoList;