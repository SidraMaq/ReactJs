import React, { useState } from "react";

//Example 1: Handling a Click Event
function ClickExample() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <p>You clicke {count} times</p>
      <button onClick={handleClick}>Click me</button>
    </>
  );
}
export default ClickExample;
