import React, { useState } from "react";
//Example 4: Managing Component Behavior with State

function ToggleExample() {
  const [isToggled, setIsToggled] = useState(false);

  const handleClick = () => {
    setIsToggled(!isToggled);
  };
  return (
    <>
      <button onClick={handleClick}>Toggle</button>
      {isToggled ? <p>The button is toggled on.</p> : null}
    </>
  );
}
export default ToggleExample;
