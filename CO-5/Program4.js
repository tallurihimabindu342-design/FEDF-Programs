import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  return (
    <div className="form-container">
      <form>
        <h2>Enter Your Name</h2>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Type your name"
        />

        <button type="submit">Submit</button>
      </form>

      <p>You typed: {name}</p>
    </div>
  );
}

export default App;