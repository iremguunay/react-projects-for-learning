import { useState, useEffect } from "react";

function Counter() {
  const [number, setNumber] = useState(0);
  // const [name, setName] = useState("İrem");

  useEffect(() => {
    console.log("Component mount edildi!");

    // use interval to update the number every second
    const interval = setInterval(() => {
      setNumber((n) => n + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  // Need to add [] at the end of useEffect to prevent infinite loop
  useEffect(() => {
    console.log("number state güncellendi!");
  }, [number]);

  // useEffect(() => {
  //     console.log("name state güncellendi!");
  // }, [name]);

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Click</button>

      {/* <h1>{name}</h1>
            <button onClick={() => setName('Mete')}>Click</button> */}
    </div>
  );
}

export default Counter;
