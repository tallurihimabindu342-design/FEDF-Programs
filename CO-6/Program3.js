import React, { useState, useMemo } from "react";

function UseMemoDemo() {
  const [count, setCount] = useState(0);

  const square = useMemo(() => {
    return count * count;
  }, [count]);

  return (
    <div>
      <h2>Count: {count}</h2>
      <h3>Square: {square}</h3>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default UseMemoDemo;