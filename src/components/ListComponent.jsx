import React from "react";
const users = [
  { name: "John", age: 34 },
  { name: "Alice", age: 15 },
  { name: "Bob", age: 18 },
  { name: "Lara", age: 45 },
  { name: "Victor", age: 37 },
];
const ListComponent = () => {
  return (
    <>
      {users.map((user,index) => (
        <div key={index} >
          <h3>{user.name}</h3>
          <p>{user.age}</p>
        </div>
      ))}
    </>
  );
};
export default ListComponent;
