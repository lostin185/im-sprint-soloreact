import React from 'react';

const TodoList = (props) => {

  if (!props.selected) {
    return <div className="frame">Plan not selected</div>
  } 

  for (let i = 0; i < props.data.schedule.length; i++) {
    if (props.data.schedule[i].scheduleName === props.selected) {
      return (
        <div className="frame">
          <div>
            {'< '}{props.selected}{' >'}
          </div>
          <div>
            add new todo: <input /><button>add</button>
          </div>
          { // JSX start
            props.data.schedule[i].todo.map(
              (item) => <li key={item.todoKey} style={{cursor:"pointer"}} onClick={props.interaction}>{item.name}</li>
            )
          }
        </div>
      )
    }
  }
}

export default TodoList;