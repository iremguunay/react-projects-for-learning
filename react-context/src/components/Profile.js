import { useContext, useState } from "react";

import { useUser } from "../context/UserContext";

function Profile() {
  const { user, setUser } = useUser();

  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setUser({
        id: 1,
        username: "johndoe",
        bio: "lorem ipsum doler",
      });
      setLoading(false);
    }, 1500);
  };

  const handleLogout = () => {
    setLoading(true);
    setTimeout(() => {
      setUser("Good Bye!");
    }, 1500);
  };

  return (
    <div>
      {!user && (
        <button onClick={handleLogin}>
          {loading ? "Loading..." : "Login"}
        </button>
      )}
      {user && (
        <button onClick={handleLogout}>
          {loading ? "Loading..." : "Logout"}
        </button>
      )}
      <br />
      <br />
      <code>{JSON.stringify(user)}</code>
    </div>
  );
}

export default Profile;
