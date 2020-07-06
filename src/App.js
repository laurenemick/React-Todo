import React from 'react';
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import "./styles.css";

const tasks = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      tasks: tasks
    };
  }

  addTask = taskName => {
    const newTask = {
      task: taskName,
      id: new Date(),
      completed: false
    };
    this.setState({
      tasks: [...this.state.tasks, newTask]
    });
  };

  toggleTask = taskId => {
    this.setState({
      tasks: this.state.tasks.map(task => {
        if (task.id === taskId) {
          return {
            ...task,
            completed: !task.completed
          };
        } else {
          return task;
        }
      })
    });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>Welcome to your Todo App!</h2>
          <TodoForm addTask={this.addTask} />
        </div>
        <TodoList 
          toggleTask={this.toggleTask}
          tasks={this.state.tasks} 
        />
      </div>
    );
  }
}

export default App;
