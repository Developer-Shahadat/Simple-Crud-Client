import { NavLink, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  const handleAddUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const formUser = { name, email };
    console.log(formUser);

    // Server Site a data pathano er jonno
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("User Add SuccessFull");
          form.reset();
        }
      });
  };

  return (
    <>
      <NavLink to="/users">User List</NavLink>
      <Outlet></Outlet>

      <h1>Simple Crud Client</h1>

      <form onSubmit={handleAddUser}>
        <input type="text" name="name" id="" placeholder="enter your name" />
        <br />
        <input type="email" name="email" id="" placeholder="enter your email" />
        <br />
        <input type="submit" value="Add User" />
      </form>
    </>
  );
}

export default App;
