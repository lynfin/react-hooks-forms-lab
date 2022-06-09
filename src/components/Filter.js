import React from "react";

function Filter({ onCategoryChange, searchString, onSearchChange }) {
  return (
    <div className="Filter">
      <input onChange={onSearchChange} type="text" name="search" value={searchString} placeholder="Search..." />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
