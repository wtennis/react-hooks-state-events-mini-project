import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";


function App() {
  const [taskArray, taskArraySetter] = useState(TASKS)
  const [selected, selectedSetter] = useState("All")
  const [newTask, setNewTask] = useState("")
  const [taskCat, setTaskCat] = useState("Code")

  function handleDelete(e) {
    let taskToDelete = e.target.id
    const newTaskArray = taskArray.filter(task => 
      task.text !== taskToDelete)
      taskArraySetter(newTaskArray)
  }

  function addTask(e) {
    e.preventDefault();
    console.log('addTask fired')
    console.log(
      'new task : ' +
      newTask +
      ', new task category: ' +
      taskCat
      )
      const taskToAdd = 
          {
            task: newTask,
          category: taskCat
        } 
        console.log(taskToAdd)
        
        taskArraySetter([
          ...taskArray,
          taskToAdd
        ])
      console.log(taskArray)
      }

  
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
            selected = {selected} 
            selectedSetter = {selectedSetter} 
            // taskArray = {taskArray} 
            // taskArraySetter = {taskArraySetter}
            categories = {CATEGORIES}
            />
      <NewTaskForm 
        categories = {CATEGORIES}
        onTaskFormSubmit = {addTask}
        newTask = {newTask}
        setNewTask = {setNewTask}
        taskCat = {taskCat}
        setTaskCat = {setTaskCat}
      />
      <TaskList 
            taskArray = {taskArray} 
            selected = {selected} 
            handleDelete = {handleDelete}
            addTask = {addTask}
      />
    </div>
  );
}

export default App;
