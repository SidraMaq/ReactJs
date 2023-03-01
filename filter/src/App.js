import React, { useState } from "react";

function App() {
  const [items, setItems] = useState([
    { id: 1, name: "item 1" },
    { id: 2, name: "item 2" },
    { id: 3, name: "item 3" },
  ]);

  const handleDeleteItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          <span>{item.name}</span>
          <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default App;

/**
 * In this example, the handleDeleteItem function uses the filter() method
 *  to filter out the item with the matching id and then updates the items state using
 *  the setItems function. The setItems function is called with a function that 
 * takes the previous state (prevItems) as an argument and returns a new state with the item
 *  removed, rather than directly mutating the state. 
 * This ensures that the state is updated correctly and avoids any unexpected behavior.
 */