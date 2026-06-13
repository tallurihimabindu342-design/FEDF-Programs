import React, { useState } from 'react';

function App() {
  const [color, setColor] = useState("blue");

  const changeColor = () => {
    setColor(color === "blue" ? "green" : "blue");
  };

  return (
    <>
      <h1>Color Changing App</h1>

      <div className="app-container">
        <div
          className="color-box"
          style={{ backgroundColor: color }}
        ></div>

        <button onClick={changeColor}>
          Change Color
        </button>
      </div>
    </>
  );
}

export default App;