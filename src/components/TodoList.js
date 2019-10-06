import React from 'react';
import TodoListEntry from './TodoListEntry'

const TodoList = (props) => {
  return (
    <div className="frame">
      <div>
        create new data:<input />
      </div>
      {props.data.schedule.map(
        (item) => (<TodoListEntry todos={item} key={item.scheduleKey}/>)
      )} 
    </div>
  )
}

export default TodoList;