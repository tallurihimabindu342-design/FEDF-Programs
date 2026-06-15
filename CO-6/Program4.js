import React, { useState, useCallback } from "react";

function UseCallbackDemo() {
  const [count, setCount] = useState(0);

  const showMessage = useCallback(() => {
    alert("Button Clicked");
  }, []);

  return (
    <div>
      <h2>{count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <button onClick={showMessage}>
        Show Message
      </button>
    </div>
  );
}

export default UseCallbackDemo;