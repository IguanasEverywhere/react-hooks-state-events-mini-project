import React from "react";

function CategoryFilter({ categories, selectedCategory, setSelectedCategory}) {

  let catBtns = categories.map((category) => {
    const className = selectedCategory === category? 'selected': null;
    return <button
      className={className}
      key={category}
      onClick={() => setSelectedCategory(category)}>
      {category}
    </button>
  })
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {catBtns}
    </div>
  );
}

export default CategoryFilter;
