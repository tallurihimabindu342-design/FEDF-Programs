import React, { useState } from "react";
import "./index.css";

function App() {
  const [text, setText] = useState("Click the button!");

  const handleClick = () => {
    setText("Hey, You clicked the button!");
  };

  return (
    <div className="container">
      <p id="result">{text}</p>

      <button onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
}

export default App;