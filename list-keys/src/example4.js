//Using a custom string key:

const items = ["item 1", "item 2", "item 3"];

function ItemList() {
  return (
    <ul>
      {items.map((item) => (
        <li key={`item-${item}`}>{item}</li>
      ))}
    </ul>
  );
}
