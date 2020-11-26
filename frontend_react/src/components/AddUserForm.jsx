import React, { useState } from "react";
import axios from "axios";

function AddUserForm({ setUsers, users }) {
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
  });

  const submitNewUser = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/api/users", {
        user: newUser,
      })
      .then((res) => {
        setUsers([...users, res.data.data]);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="container mt-3">
      <form onSubmit={submitNewUser}>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="text"
            className="form-control"
            id="email"
            required
            onChange={(e) => {
              setNewUser({
                ...newUser,
                email: e.target.value,
              });
            }}
            value={newUser.email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            required
            className="form-control"
            id="name"
            value={newUser.name}
            onChange={(e) => {
              setNewUser({
                ...newUser,
                name: e.target.value,
              });
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input
            type="text"
            className="form-control"
            id="age"
            required
            value={newUser.age}
            onChange={(e) => {
              setNewUser({
                ...newUser,
                age: e.target.value,
              });
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            className="form-control"
            id="password"
            required
            value={newUser.password}
            onChange={(e) => {
              setNewUser({
                ...newUser,
                password: e.target.value,
              });
            }}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddUserForm;
