import React from "react";

class TodoForm extends React.Component {

  render() {
    return (
        <form onSubmit={this.props.handleSubmit}>
            <input
                type="text"
                name="task"
                value={this.props.task}
                onChange={this.props.handleChanges}
            />
            <button>Add Task</button>
            <button className="clear-btn" onClick={this.props.clearCompleted}>
            Clear Completed
            </button>
        </form>
    );
  }
}

export default TodoForm;