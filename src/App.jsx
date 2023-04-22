import { useState, useEffect } from 'react';

function App() {
  const [users, ,] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch('/api/v1');
      // const data = await response;
      console.log(response)
      // setUsers(data);
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
