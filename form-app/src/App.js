import React from "react";
//Example of Conditional Rendering in React
function App() {
  const userAge = 30;
  return (
    <div>
      {userAge >= 18 ? (
        <h1>Welcome to our site!</h1>
      ) : (
        <h1>You must be 18 or older to view this site.</h1>
      )}
    </div>
  );
}

export default App;
