import React, { useState } from "react";
import "./App.css";
import NewCustomerInfo from "./newCustomer";
import ReturningCustomerInfo from "./ReturningCustomer";

function App() {
  const [isNewCustomer, setIsNewCustomer] = useState(true);

  const handleTypeChange = () => {
    setIsNewCustomer(!isNewCustomer);
  };
  return (
    <>
      <button onClick={handleTypeChange}>
        {isNewCustomer ? "Returning Customer" : "New Customer"}
      </button>
      {isNewCustomer ? <NewCustomerInfo /> : <ReturningCustomerInfo />}
    </>
  );
}

export default App;
