import { useRef, useState } from "react";

function App() {
  const inputRef = useRef();
  const [submittedValue, setSubmittedValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedValue(inputRef.current.value);
  };

  return (
    <div className="form-box">
      <h2>Uncontrolled Form Example</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          ref={inputRef}
          placeholder="Enter your name"
        />

        <button type="submit">Submit</button>
      </form>

      <p>You submitted: {submittedValue}</p>
    </div>
  );
}

export default App;