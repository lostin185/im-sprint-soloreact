import React from 'react';
import PlanList from './PlanList'
import TodoList from './TodoList'
import { fakeData } from './fakeData'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      schedule: [],
    };
  }

  componentDidMount() {
    this.setState(fakeData)
  }

  render() {
    return (
      <div>
        <h1>{'< Reminder >'}</h1>
        <PlanList schedule={this.state.schedule}/>
        <TodoList />
      </div>
    )
  }
}


export default App;