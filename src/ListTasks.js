import React, { Component } from 'react';

const styles = {
  buttonDelete: {
    color: 'red', fontSize: 13, cursor: 'pointer'
  } 
}

class ListTasks extends Component {
  render() {
  	const listItems = this.props.allTasks.map((task, index) =>
	    <h2 key={index}> 
        { task.name } - <span style={styles.buttonDelete} onClick={() => this.deleteItem(task)}> delete </span>
      </h2>
	  );

    return (
      <div>
        { listItems }
      </div>
    );
  }

  deleteItem = (item) => {
    this.props.onDeleteItem(item.id);
  }
}

export default ListTasks;