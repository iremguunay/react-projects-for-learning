import { useEffect, useState } from "react";

import axios from "axios";

function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // get data from API by using Fetch API
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => res.json())
  //     .then((data) => setUsers(data))
  //     .catch((e) => console.log(e))
  //     .finally(() => setIsLoading(false));
  // }, []);

  // get data from API by using Axios library
  useEffect(() => {
      axios('https://jsonplaceholder.typicode.com/users')
          .then(res => setUsers(res.data))
          .catch(e => console.log(e))
          .finally(() => setIsLoading(false))
  }, [])
  return (
    <div>
      <h1>Users</h1>
      {isLoading && <p>Loading...</p>}
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}

export default Users;
