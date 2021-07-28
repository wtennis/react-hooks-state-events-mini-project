import React from "react";
import Task from "./Task";

function TaskList({taskArray, selected, handleDelete}) {
  // console.log(tasks)
  // console.log(categories)

//State for array of tasks to be mapped and then rendered as displayedTasks 

  
  

  const displayedTasks = taskArray.map((task, index) => {
    if ((selected === "All") || (selected === task.category))
    return (
    <Task key = {index + 1} task = {task.text} category = {task.category} onDelete = {handleDelete}/>
  )}
  )
  

  return (
    <div className="tasks">
      {displayedTasks}
    </div>
  );
}

export default TaskList;
