import React, { useState } from "react";

const UserListCrud = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Bob" },
  ]);

  const [editingUser, setEditingUser] = useState(null);
  const [newUser, setNewUser] = useState({ id: "", name: "" });

  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
    setEditingUser(null);
  };

  const handleEditUser = (id) => {
    const user = users.find((user) => user.id === id);
    setEditingUser(user);
    setNewUser(user);
  };

  const handleNewUserChange = (event) => {
    const { name, value } = event.target;
    setNewUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddUser = (event) => {
    event.preventDefault();
    setUsers([...users, newUser]);
    setNewUser({ id: "", name: "" });
  };

  const handleUpdateUser = (event) => {
    event.preventDefault();
    setUsers(
      users.map((user) => (user.id === editingUser.id ? newUser : user))
    );
    setEditingUser(null);
  };

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {editingUser?.id === user.id ? (
              <form onSubmit={handleUpdateUser}>
                <input
                  type="text"
                  name="id"
                  value={newUser.id}
                  onChange={handleNewUserChange}
                />
                <input
                  type="text"
                  name="name"
                  value={newUser.name}
                  onChange={handleNewUserChange}
                />
                <button type="submit">Save</button>
                <button type="button" onClick={() => setEditingUser(null)}>
                  Cancel
                </button>
              </form>
            ) : (
              <>
                <span>{user.name}</span>
                <button onClick={() => handleDeleteUser(user.id)}>
                  Delete
                </button>
                <button onClick={() => handleEditUser(user.id)}>Edit</button>
              </>
            )}
          </li>
        ))}
      </ul>
      <form onSubmit={handleAddUser}>
        <input
          type="text"
          name="id"
          value={newUser.id}
          onChange={handleNewUserChange}
          placeholder="Enter user ID"
        />
        <input
          type="text"
          name="name"
          value={newUser.name}
          onChange={handleNewUserChange}
          placeholder="Enter user name"
        />
        <button type="submit">Add user</button>
      </form>
    </div>
  );
};

export default UserListCrud;
