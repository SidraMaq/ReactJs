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
  //handleDeleteUser function, which updates the state by removing the user
  //with the specified ID from the users array.
  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };
  return (
    <div>
      <h1>User List</h1>
      <table>
        {/* we use map method to iterate over the user array */}
        {users.map((user) => (
          //use key prop to help React to identify each list item
          <tr key={user.id}>
            {/* then rendered a list item for each user */}
            <td> {user.name}</td>
            <td>
              <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default UserList;
