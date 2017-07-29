import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import AddTasks from './AddTasks';
import { addTask, deleteTask } from './ActionsCreator';
import ListTasks from './ListTasks';


class App extends Component {
  render() {
    const { dispatch, tasks } = this.props;

    let seconds = this.props.elapsed,
        message = `React has been successfully running for ${seconds} seconds.`;

    return (
      <main>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Initializing with React - TO DO</h2>
          </div>
          <p className="App-intro">
            { message }
          </p>
        </div>

        <AddTasks
          onAddTask={ text => dispatch(addTask(text)) } >
        </AddTasks>

        <ListTasks
          allTasks={ tasks }
          onDeleteItem={ id => dispatch(deleteTask(id))}></ListTasks>
      </main>
    );
  }
}

function list(state) {
    return {
      tasks : state
    }
}

App = connect(list)(App);
export default App;