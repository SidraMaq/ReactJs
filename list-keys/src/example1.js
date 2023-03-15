import React from "react";

//using array  index as key
const items = ["item 1", "item 2", "item 3", "item 4"];

function ItemList() {
  return (
    <>
      <ul>
        {items.map((item, index) => {
          <li key={index}>{item}</li>;
        })}
      </ul>
    </>
  );
}
export default ItemList;
