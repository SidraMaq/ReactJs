import React, { useState } from "react";
//Basic form that captures user input and displays it on the screen using the useState hook in React

function FormMsg() {
  // we call the useState hook with an initial state of an empty string ('').
  //This sets up a state variable called inputValue, and
  // a function called setInputValue that we can use to update the state variable.
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    /**updates the inputValue state variable whenever the user types something in the input field.
     *  This function is passed as a callback to the onChange event of the input field. */
    setInputValue(e.target.value);
  };
  return (
    /**we render a basic form that includes a label and an input field.
     * The value prop of the input field is set to the inputValue state variable,
     * and the onChange prop is set to the handleChange function we defined earlier. */
    <div>
      <h1>Basic Form Example</h1>
      <label>Enter your Name: </label>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <p>Your name is: {inputValue}</p>
    </div>
  );
}

export default FormMsg;
