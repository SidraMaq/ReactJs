import React, { useState } from "react";
const initialData = [
  { id: 1, name: "Jhon", age: 25 },
  { id: 2, name: "Mark", age: 28 },
  { id: 3, name: "Sidra", age: 32 },
  { id: 4, name: "Abrish", age: 2 },
];

const Users = () => {
  const [data, setData] = useState(initialData);
  const [filterValue, setFilterValue] = useState("");

  const filteredData = data.filter((user) => {
    const { name, age } = user;
    const nameMatch = name.toLowerCase().includes(filterValue.toLowerCase());
    const ageMatch = age.toString().includes(filterValue);
    return nameMatch || ageMatch;
  });

  const handleFilterChange = (e) => {
    setFilterValue(e.target.value);
  };
  return (
    <div>
      <input type="text" value={filterValue} onChange={handleFilterChange} />
      <ul>
        {filteredData.map((user) => (
          <li key={user.id}>
            {user.name}, {user.age}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;

/**
 * In this example, the variable filteredData is used to hold the data that
 * has been filtered using the filter method. The variable name clearly describes
 * what the data represents and how it was obtained. Additionally,
 * the variables nameMatch and
 * ageMatch are used to improve readability and make the code easier to understand.
 */
