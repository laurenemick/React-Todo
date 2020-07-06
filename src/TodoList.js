import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  return (
    <div className="task-list">
        {props.tasks.map(task => (
            <Todo toggleTask={props.toggleTask} key={task.id} task={task} />
        ))}
        <button className="clear-btn" onClick={props.clearCompleted}>
        Clear Completed
        </button>
    </div>
  );
};

export default TodoList;
