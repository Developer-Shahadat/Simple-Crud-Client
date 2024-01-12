import { useState } from "react";
import { Link, NavLink, useLoaderData } from "react-router-dom";

const Users = () => {
  const userData = useLoaderData();
  const [users, setUsers] = useState(userData);
  const handleDeleteUSer = (_id) => {
    console.log("delete user", _id);
    fetch(`http://localhost:5000/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("User deleted successfully");
          const remaining = users.filter((user) => user._id !== _id);
          setUsers(remaining);
        }
      });
  };
  return (
    <div>
      <h1>Number Of User : {users.length}</h1>
      <div>
        {users.map((user) => (
          <p key={user._id}>
            {user.name} : {user.email}{" "}
            <Link to={`/update/${user._id}`}>
                <button>Update</button>
            </Link>
            <button onClick={() => handleDeleteUSer(user._id)}>Delete</button>
          </p>
        ))}
      </div>
      <NavLink to="/">Go Back</NavLink>
    </div>
  );
};

export default Users;
