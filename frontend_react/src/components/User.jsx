import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function User({ name, email, id, users, setUsers }) {
  const deleteUser = () => {
    axios
      .delete(`http://localhost:4000/api/users/${id}`)
      .then(() => {
        const newusers = users.filter((user) => user.id !== id);
        setUsers(newusers);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div
      className="card"
      style={{
        width: "40%",
      }}
    >
      <div className="card-body">
        <h2 className="card-title">{id}</h2>
        <h2>{name}</h2>
        <h2>{email}</h2>
        <div className="buttons">
          <Link to={`/${id}`} className="btn btn-primary">
            Edit
          </Link>
          <div onClick={deleteUser} className="btn btn-danger">
            Delete
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
