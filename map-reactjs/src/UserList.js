import React, { useState } from "react";
const UserList = () => {
  //useState hook is used to manage the state of users array
  const [users, setUsers] = useState([
    //initialise the state with an array of user objects.
    { id: 1, name: "Jhon" },
    { id: 2, name: "Mark" },
    { id: 3, name: "Benson" },
    { id: 4, name: "Danial" },
  ]);
  return (
    <div>
      <h1>User List</h1>
      <ul>
        {/* we use map method to iterate over the user array */}
        {users.map((user) => (
          //use key prop to help React to identify each list item
          <li key={user.id}>
            {/* then rendered a list item for each user */}
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
