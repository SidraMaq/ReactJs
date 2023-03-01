//Suppose we have an array of different objects that represents different users
const users = [
  { id: 1, name: "Jhon", age: 22 },
  { id: 2, name: "Mark", age: 55 },
  { id: 3, name: "Dan", age: 36 },
  { id: 4, name: "Danial", age: 28 },
  { id: 5, name: "Elsa", age: 33 },
];
//Now we want to filter this array for only those users who are age above 25

const filteredUsers = users.filter((user) => user.age > 25);

console.log(filteredUsers);

/**we passed a function to the filter method that
 * takes a single argument, user, which represents each individual object in the users array.
 * The function returns true for each object that meets the condition
 *  we specified (age > 25),
 * and false for each object that doesn't. */
