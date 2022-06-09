import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";

/*
Component Hierarchy (stateVars) (=>stateVar passed in as prop) (<=callback acts on stateVar)
  App (items, isDarkMode)
  ├───Header (=>isDarkMode, <=onDarkModeClick)
  └───ShoppingList (selectedCategory, searchString) (=>items)
      ├───ItemForm
      ├───Filter (<=onCategoryChange, <=onSearchChange)
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

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
