import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [filteredCategory, setFilteredCategory] = useState("All");

  const handleFilterChange = (event) => {
    setFilteredCategory(event.target.value);
  };

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilterChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {items
          .filter(
            (item) =>
              filteredCategory === "All" || item.category === filteredCategory
          )
          .map((item) => (
            <Item key={item.id} name={item.name} category={item.category} />
          ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
