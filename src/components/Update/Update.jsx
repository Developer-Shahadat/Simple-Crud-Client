import { useLoaderData } from "react-router-dom";

const Update = () => {
  const loaderUser = useLoaderData();
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
    console.log(user);
    fetch(`http://localhost:5000/users/${loaderUser._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("User update Successfully");
        }
      });
  };
  return (
    <div>
      <h2>Update Information of : {loaderUser.name}</h2>
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          name="name"
          defaultValue={loaderUser?.name}
          placeholder="enter your name"
          id=""
        />
        <br />
        <input
          type="email"
          name="email"
          defaultValue={loaderUser?.email}
          placeholder="'enter your email"
          id=""
        />
        <br />
        <input type="submit" value="Update" />
      </form>
    </div>
  );
};

export default Update;
