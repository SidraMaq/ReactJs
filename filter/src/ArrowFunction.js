/**here's an example of using arrow functions
 * for concise code when using the filter() method in a React component: */
import React, { useState } from "react";

const UserList = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Bob" },
    { id: 4, name: "Alice" },
  ]);

  const handleFilter = (event) => {
    const searchTerm = event.target.value;
    setUsers((prevUsers) =>
      prevUsers.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };

  return (
    <div>
      <input type="text" onChange={handleFilter} />
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
