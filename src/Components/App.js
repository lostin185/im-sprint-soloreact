import React from 'react';
import PlanList from './PlanList'
import TodoList from './TodoList'
// import { fakeData } from './fakeData'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      schedule: [],
    }
  }

  componentDidMount() {
    this.setState = {

      schedule: [
    
        {
          scheduledDate: "2019/08/23",
          scheduledTime: "1000 ~ 1300",
          createdDate: "2019/08/17",
          scheduleName: "pair programming",
          done: false,
          todo: [
            {
              name: "do navigator",
              done: true,
            },
            {
              name: "do driver",
              done: false,
            }
          ]
        },
    
        {
          scheduledDate: "2019/08/27",
          scheduledTime: "1800 ~ 1900",
          createdDate: "2019/08/15",
          scheduleName: "playing game",
          done: false,
          todo: [
            {
              name: "play tanker",
              done: false,
            },
            {
              name: "play dealer",
              done: true,
            },
            {
              name: "play suppoter",
              done: false,
            },
          ]
        },
    
      ]
    
    }
  }

  render() {
    return (
      <div>
        <h1>{'< Reminder >'}</h1>
        <PlanList schedule={this.state.schedule}/>
        <TodoList schedule={this.state.schedule}/>
      </div>
    )
  }
}


export default App;