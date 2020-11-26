import React, { useState, useEffect } from "react";
import axios from "axios";
import User from "./User";
import AddUserForm from "./AddUserForm";
function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/users")
      .then((res) => {
        setUsers(res.data.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <AddUserForm setUsers={setUsers} users={users} />
      {users.length > 0
        ? users.map((user) => (
            <div className="" key={user.id}>
              <User
                name={user.name}
                email={user.email}
                id={user.id}
                setUsers={setUsers}
                users={users}
              />
            </div>
          ))
        : null}
    </div>
  );
}

export default Users;
