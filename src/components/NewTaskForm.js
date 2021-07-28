import React from "react";

function NewTaskForm({categories, onTaskFormSubmit, newTask, setNewTask, taskCat, setTaskCat}) {


  const optionElements = categories.map(category => {
    if (category !== "All")
    return (
        <option key = {category}>{category}</option>
    )
  })

  function onInputChange(e) {
    let input = e.target.value
    setNewTask(input)
  }

  function onCategoryChoice(e) {
    let category = e.target.value
    setTaskCat(category)
  }

  return (
    <form onSubmit = {onTaskFormSubmit} className="new-task-form">
      <label>
        Details
        <input onChange = {onInputChange}type="text" name="text" value = {newTask} />
      </label>
      <label>
        Category
        <select onChange = {onCategoryChoice} name="category" value = {taskCat}>
          {optionElements}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
