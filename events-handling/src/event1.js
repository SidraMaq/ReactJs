import React from "react";
//Example 2: Preventing Default Browser Behavior
function FormExample() {
  const handleSubmit = (event) => {
    event.preventDefault();
    //handle form submission logic
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
export default FormExample;
