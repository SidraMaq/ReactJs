//Using a combination of unique properties as key:

const items = [
  { id: 1, name: "item 1" },
  { id: 2, name: "item 2" },
  { id: 3, name: "item 3" },
];

function ItemList() {
  return (
    <ul>
      {items.map((item) => (
        <li key={`${item.id}-${item.name}`}>{item.name}</li>
      ))}
    </ul>
  );
}
