import React from 'react';
import PlanList from './PlanList'
import TodoList from './TodoList'
import { fakeData } from './fakeData'

class App extends React.Component {
  constructor() {
    super();
    this.planClicked = this.planClicked.bind(this);
    this.todoClicked = this.todoClicked.bind(this);
    this.state = {
      schedule: [],
      currentPlan: null,
    };
  }

  componentDidMount() {
    this.setState(fakeData)
  }

  planClicked(e) {
    this.setState({ currentPlan: e.target.innerText })
  }

  todoClicked(e) {
    if (!e.target.className || e.target.className === 'yet') {
      e.target.className = 'done';
    } else {
      e.target.className = 'yet';
    }
  }

  render() {
    return (
      <div>
        <h1>{'< Reminder >'}</h1>
        <PlanList data={this.state} interaction={this.planClicked}/>
        <TodoList data={this.state} interaction={this.todoClicked} selected={this.state.currentPlan}/>
      </div>
    )
  }
}

export default App;