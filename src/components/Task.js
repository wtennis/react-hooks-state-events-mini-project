import React from "react";

function Task({task, category, onDelete}) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{task}</div>
      <button id = {task} onClick = {onDelete}className="delete">X</button>
    </div>
  );
}

export default Task;
