import React, { useState } from "react";

function TodoList() {
  const [item, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  const handleAddItem = () => {
    if (newItem.trim() !== "") {
      setItems([...item, { text: newItem, completed: false }]);
      setNewItem("");
    }
  };
  const handleDeleteItem = (index) => {
    const newItem = [...item];
    newItem.splice(index, 1);
    setItems(newItem);
  };
  const handleToggleCompleted = (index) => {
    const newItem = [...item];
    newItem[index].completed = !newItem[index].completed;
    setItems(newItem);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {item.map((item, index) => (
          <li key={index}>
            <span onClick={() => handleToggleCompleted}>{item.text}</span>
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
