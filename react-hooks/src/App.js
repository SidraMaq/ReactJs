import React, { useState } from "react";
import "./App.css";

function App() {
  const [status, setStatus] = useState("Not Delivered");
  const [checked, setChecked] = useState(false);
  return (
    <div className="App">
      <input
        type="checkbox"
        value={checked}
        onChange={() => setChecked(!checked)}
      />
      <p>{checked ? "checked" : "Not checked"}</p>
    </div>
  );
}

export default App;
