import logo from "./logo.svg";
import "./App.css";
import ClickExample from "./events";
import FormExample from "./event1";
import ButtonExample from "./event3";
import ToggleExample from "./event4";

function App() {
  return (
    <div>
      <ClickExample />
      <FormExample />
      <ButtonExample />
      <ToggleExample />
    </div>
  );
}

export default App;
