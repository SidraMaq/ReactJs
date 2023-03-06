import React, { useState } from "react";

function TodoList() {
  //initialize a state variables
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  const handleAddItem = () => {
    if (newItem.trim() !== "") {
      // The new item is an object with two properties: "text" and "completed".
      // The value of "text" is set to the value of "newItem", which is a variable holding the text of the new item that the user has entered.
      //The value of "completed" is set to "false" by default, indicating that the new item has not been completed yet.
      //The spread operator "..." is used to create a new array that includes all the existing items in "items" plus the new item.
      setItems([...items, { text: newItem, completed: false }]);
      setNewItem("");
    }
  };

  const handleDeleteItem = (index) => {
    //t creates a new array called newItems that is a copy of the existing array items.
    //The spread syntax ... is used to create a shallow copy of the array,
    //meaning that any changes made to the elements within newItems will not affect the original items array.
    const newItems = [...items];
    //it removes an element from the newItems array at a specified index.
    //The splice() method is used to remove one element at the specified index, indicated by the index variable,
    newItems.splice(index, 1);
    setItems(newItems);
  };

  const handleToggleCompleted = (index) => {
    const newItems = [...items];
    //it is accessing the completed property of an object at the specified index in the newItems array,
    // and using the!(not) operator to negate its current value(e.g.true becomes false and vice versa).
    //This is a common technique for toggling a boolean value in JavaScript.
    newItems[index].completed = !newItems[index].completed;
    setItems(newItems);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <span
              style={{
                textDecoration: item.completed ? "line-through" : "none",
              }}
              onClick={() => handleToggleCompleted(index)}
            >
              {item.text}
            </span>
            <button onClick={() => handleDeleteItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button onClick={handleAddItem}>Add</button>
      </div>
    </div>
  );
}

export default TodoList;
