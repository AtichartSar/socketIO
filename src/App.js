import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";
import User from "./components/User";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      const users = await axios.get(
        "https://randomuser.me/api/?page=1&results=10&nat=us"
      );
      setUsers(users.data.results);
    })();
    console.log('usereffect');
  }, []);

  return (
    <div>
      {console.log('render')}
      <h1>Users List</h1>
      <div>
        {users.map(user => (
          <User key={user.login.uuid} {...user} />
        ))}
      </div>
    </div>
  );
};

export default App;
