import React from 'react';
import PlanList from './PlanList'
import TodoList from './TodoList'

class App extends React.Component {
  constructor() {
    super();
    this.planClicked = this.planClicked.bind(this);
    this.planInputChange = this.planInputChange.bind(this);
    this.todoInputChange = this.todoInputChange.bind(this);
    this.planInputSubmit = this.planInputSubmit.bind(this);
    this.todoInputSubmit = this.todoInputSubmit.bind(this);
    this.makeItDone = this.makeItDone.bind(this);
    this.state = {
      schedule: [],
      currentPlan: null,
      planInput: null,
      todoInput: null,
    };
  }

  planClicked(e) {
    this.setState({ currentPlan: e.target.innerText })
  }

  planInputChange(e) {
    this.setState({planInput: e.target.value});
  }

  todoInputChange(e) {
    this.setState({todoInput: e.target.value});
  }

  planInputSubmit(e) {
    let newObj = {}
    newObj.scheduleKey = new Date();
    newObj.scheduleName = this.state.planInput;
    newObj.done = false;
    newObj.todo = [];
    this.setState({schedule: [...this.state.schedule, newObj]})
    e.preventDefault();
  }

  todoInputSubmit(e) {
    let newSchedules = [];
    for (let i = 0; i < this.state.schedule.length; i++) {
      newSchedules.push(this.state.schedule[i]);
    }
    let newObj = {};
    newObj.todoKey = new Date();
    newObj.name = this.state.todoInput;
    newObj.done = false;
    for (let i = 0; i < this.state.schedule.length; i++) {
      if (newSchedules[i].scheduleName === this.state.currentPlan) {
        newSchedules[i].todo.push(newObj);
      }
    }
    this.setState({schedule: newSchedules})
    e.preventDefault();
  }

  makeItDone(e) {
    // console.log(e.target)
    //when click todo -> todo[i].done = true, line through
    let newSchedules = [];
    for (let i = 0; i < this.state.schedule.length; i++) {
      newSchedules.push(this.state.schedule[i]);
    }

    for (let i = 0; i < this.state.schedule.length; i++) {
      if (newSchedules[i].scheduleName === this.state.currentPlan) {
        for (let j = 0; j < newSchedules[i].todo.length; j++) {
          if (newSchedules[i].todo[j].name === e.target.innerText) {
            newSchedules[i].todo[j].done = !(newSchedules[i].todo[j].done)
          }
        }   
      }
    }

    this.setState({schedule: newSchedules})
  }

  render() {
    return (
      <div>
        <h1>{'< Reminder >'}</h1>
        <PlanList 
          data={this.state} 
          interaction={this.planClicked}
          planChange={this.planInputChange} 
          planSubmit={this.planInputSubmit} 
          planValue={this.planInput} />
        <TodoList 
          data={this.state} 
          selected={this.state.currentPlan}
          todoChange={this.todoInputChange}
          todoSubmit={this.todoInputSubmit}
          todoValue={this.todoInput}
          makeItDone={this.makeItDone}/>
      </div>
    )
  }
}

export default App;