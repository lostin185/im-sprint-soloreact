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
          <form onSubmit={props.todoSubmit}>
            <label>
              add new todo:
              <input type="text" value={props.todoValue} onChange={props.todoChange} />
            </label>
            <input type="submit" value="Add" />
          </form>

          { // JSX start
            props.data.schedule[i].todo.map(
              (item) => <li 
                key={item.todoKey}
                style={{textDecoration: item.done ? "line-through" : "none"}} // good. How to do it withoug arrow function?
              >{item.name}
              </li>
            )
          }
        </div>
      )
    }
  }
}

export default TodoList;