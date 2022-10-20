import { useState } from "react";

function App() {
  const [name, setName] = useState("Irem");
  const [age, setAge] = useState(26);
  const [friends, setFriends] = useState(["Eda", "Ozge"]);
  const [address, setAddress] = useState({ title: "İstanbul", zip: 34123 });

  return (
    <div>
      <h1>Merhaba {name}</h1>
      <h2>{age}</h2>
      <button onClick={() => setName("Gunay")}>Change Name</button>
      <button onClick={() => setAge(20)}>Change Age</button>

      <hr />
      <br />
      <br />

      <h2>Friends</h2>

      {friends.map((friend, key) => (
        <div key={key}>{friend}</div>
      ))}

      <br />

      <button onClick={() => setFriends(friends.concat("Ayşe"))}>
        Add New Friend
      </button>

      <hr />
      <br />
      <br />

      <h2>Address</h2>
      <div>
        {address.title} {address.zip}
      </div>

      <br />

      <button
        onClick={() => setAddress({ ...address, title: "Ankara", zip: 44567 })}
      >
        Change Address
      </button>
    </div>
  );
}

export default App;
