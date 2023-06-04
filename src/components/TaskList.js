import React from "react";
import Task from './Task';

function TaskList({ tasks, handleDeleteClick }) {

  const tasksToRender = tasks.map((task) => {
    return <Task
      key={task.text}
      text={task.text}
      category={task.category}
      onDeleteTask={handleDeleteClick}


    />
  })

  return (
    <div className="tasks">
      {tasksToRender}
    </div>
  );
}

export default TaskList;
