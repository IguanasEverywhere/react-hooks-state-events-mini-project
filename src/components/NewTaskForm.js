import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {

  const [formData, setFormData] = useState({
    text: '',
    category: 'Code',
  })

  const options = categories.map((category) => {
    return <option key={category}>{category}</option>
  })

  function handleSubmit(e) {
    e.preventDefault();
    onTaskFormSubmit(formData);
  }

  function handleDetailsChange(e) {
    setFormData({
      ...formData,
      text: e.target.value,
    })
  }

  function handleCatChange(e) {
    setFormData({
      ...formData,
      category: e.target.value,
    })
  }

  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input type="text" name="text" value={formData.text} onChange={handleDetailsChange}/>
      </label>
      <label>
        Category
        <select name="category" value={formData.category} onChange={handleCatChange}>
          {options}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
