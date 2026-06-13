import { useEffect } from "react";
import "./index.css";

function App() {

  useEffect(() => {
    document.title = "CodeTantra Edu";
  }, []);

  return (
    <div className="app-container">
      <h1>Welcome to CodeTantra Edu</h1>

      <p>
        This page sets the document title using
        the useEffect hook.
      </p>
    </div>
  );
}

export default App;