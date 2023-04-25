import { useState, useEffect } from 'react';
import { io } from "socket.io-client";


function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const socket = io();
    socket.on("connect", () => {
    console.log(socket.id); // x8WIv7-mJelg7on_ALbx
  });
    async function fetchUsers() {
      const response = await fetch('/api/v1');
      const data = await response.json();
      setUsers(data);
    }

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
