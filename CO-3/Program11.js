import { useState } from "react";
import "./index.css";

export default function App() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  return (
    <div className="app-container">
      <h1>Count Value: {count}</h1>

      <button
        className="btn increase"
        onClick={increaseCount}
      >
        Increase
      </button>

      <button
        className="btn decrease"
        onClick={decreaseCount}
      >
        Decrease
      </button>
    </div>
  );
}