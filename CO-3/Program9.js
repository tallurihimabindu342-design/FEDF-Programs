import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>Incrementing Counter</h1>

      <div className="counter-container">
        <h2>Counter: {count}</h2>

        <button onClick={increment}>
          Increase
        </button>
      </div>
    </>
  );
}

export default App;