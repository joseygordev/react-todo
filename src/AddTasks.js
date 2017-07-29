import React, { Component } from 'react';

class AddTasks extends Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" ref="task" />
          <button onClick={(e) => this.fnAddTask(e)} type="button">Add</button>
        </form>
      </div>
    );
  }

  fnAddTask = (event) => {
    event.preventDefault();

    let task = this.refs.task.value || '';
    this.props.onAddTask(task);

    this.refs.task.value = "";
  }
}

export default AddTasks;