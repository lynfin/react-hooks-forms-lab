import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";

/*
Component Hierarchy (stateVars) (=>stateVar passed in as prop) (<=callback acts on stateVar)
  App (items, isDarkMode)
  ├───Header (=>isDarkMode, <=onDarkModeClick)
  └───ShoppingList (selectedCategory, searchString) (=>items) (<=onItemFormSubmit)
      ├───ItemForm (<=onItemFormSubmit)
      ├───Filter (=>searchString)(<=onCategoryChange, <=onSearchChange)
      └───Items
          ├───Item (isInCart) (=>items[0])
          ├───Item (isInCart) (=>items[1])
          └───Item (isInCart) (=>items[2])
  
*/

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  function handleItemFormSubmit(newItem) {
    setItems([...items,newItem])
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <ShoppingList items={items} onItemFormSubmit={handleItemFormSubmit}/>
    </div>
  );
}

export default App;
