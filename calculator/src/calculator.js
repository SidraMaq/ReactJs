import React, { useState } from "react";

function Calculator() {
  const [value, setValue] = useState("");
  const [operator, setOperator] = useState("");
  const [prevValue, setPrevValue] = useState("");

  //handle numbers
  const handleNumber = (e) => {
    setValue(value.concat(e.target.value));
  };

  //handle operator
  const handleOperator = (e) => {
    setPrevValue(value);
    setValue("");
    setOperator(e.target.value);
  };

  //handle calculate

  const handleCalculate = () => {
    switch (operator) {
      case "+":
        setValue((parseFloat(prevValue) + parseFloat(value)).toString());
        break;
      case "-":
        setValue((parseFloat(prevValue) - parseFloat(value)).toString());
        break;
      case "*":
        setValue((parseFloat(prevValue) * parseFloat(value)).toString());
        break;
      case "/":
        setValue((parseFloat(prevValue) / parseFloat(value)).toString());
        break;
      default:
        break;
    }
    setPrevValue("");
    setOperator("");
  };
  //handle clear button
  const handleClear = () => {
    setValue("");
    setPrevValue("");
    setOperator("");
  };
  return (
    <div className="calculator">
      <div className="display">{value || "0"}</div>
      <div className="buttons">
        <button className="clear" onClick={handleClear}>
          AC
        </button>
        <button className="operator" value="/" onClick={handleOperator}>
          /
        </button>
        <button className="operator" value="*" onClick={handleOperator}>
          x
        </button>
        <button className="number" value="7" onClick={handleNumber}>
          7
        </button>
        <button className="number" value="8" onClick={handleNumber}>
          8
        </button>
        <button className="number" value="9" onClick={handleNumber}>
          9
        </button>
        <button className="operator" value="-" onClick={handleOperator}>
          -
        </button>
        <button className="number" value="4" onClick={handleNumber}>
          4
        </button>
        <button className="number" value="5" onClick={handleNumber}>
          5
        </button>
        <button className="number" value="6" onClick={handleNumber}>
          6
        </button>
        <button className="operator" value="+" onClick={handleOperator}>
          +
        </button>
        <button className="number" value="1" onClick={handleNumber}>
          1
        </button>
        <button className="number" value="2" onClick={handleNumber}>
          2
        </button>
        <button className="number" value="3" onClick={handleNumber}>
          3
        </button>
        <button className="equal" onClick={handleCalculate}>
          =
        </button>
        <button className="number zero" value="0" onClick={handleNumber}>
          0
        </button>
        <button className="number" value="." onClick={handleNumber}>
          .
        </button>
      </div>
    </div>
  );
}

export default Calculator;
