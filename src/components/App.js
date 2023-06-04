import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [tasksToDisplay, setTasksToDisplay] = useState(TASKS);


  function handleDeleteClick(deletedTaskText) {
    setTasksToDisplay(tasksToDisplay.filter((task) => task.text !== deletedTaskText));
  }

  const filteredTasks = tasksToDisplay.filter((task) => selectedCategory === 'All' || task.category === selectedCategory);
  const nonAllCats = CATEGORIES.filter((category) => {
    return category !== 'All';
  });

  function onTaskFormSubmit(formData) {
    setTasksToDisplay([...tasksToDisplay, formData])
    console.log(tasksToDisplay)
    console.log(formData)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <NewTaskForm categories={nonAllCats} onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList handleDeleteClick={handleDeleteClick} tasks={filteredTasks}/>
    </div>
  );
}

export default App;
