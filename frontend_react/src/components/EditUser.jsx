import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

function EditUser(props) {
  const [userData, setUserData] = useState({
    id: "",
    name: "",
    email: "",
    age: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/users/${props.match.params.id}`)
      .then((res) => {
        setUserData(res.data.data);
      });
  }, [props.match.params.id]);

  const handleChangedInfoSubmit = (e) => {
    e.preventDefault();
    axios
      .patch(`http://localhost:4000/api/users/${userData.id}`, {
        user: userData,
      })
      .then((res) => {
        setUserData(res.data.data);
        props.history.push("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container mt-5">
      {userData ? (
        <form onSubmit={handleChangedInfoSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="text"
              className="form-control"
              id="email"
              value={userData.email}
              onChange={(e) => {
                setUserData({ ...userData, email: e.target.value });
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={userData.name}
              onChange={(e) => {
                setUserData({ ...userData, name: e.target.value });
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              type="text"
              className="form-control"
              id="age"
              value={userData.age}
              onChange={(e) => {
                setUserData({ ...userData, age: e.target.value });
              }}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      ) : null}
    </div>
  );
}

export default withRouter(EditUser);
