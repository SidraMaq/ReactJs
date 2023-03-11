import React from "react";

//Example 3: Stopping Event Bubbling
function ButtonExample() {
  const handleClick = (e) => {
    e.stopPropagation();
    console.log("Button Clicked");
  };

  const handleDivClick = () => {
    console.log("div clicked");
  };
  return (
    <>
      <div className="wrapper" onClick={handleDivClick}>
        <button onClick={handleClick}>Click me</button>
      </div>
    </>
  );
}

export default ButtonExample;
