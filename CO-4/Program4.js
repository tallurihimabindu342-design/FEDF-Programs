import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ThemeContext from "./ThemeContext";
import Home from "./Home";
import ThemedPage from "./ThemedPage";
import "./index.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = {
    backgroundClass: darkMode ? "dark-theme" : "light-theme",
    textClass: darkMode ? "dark-text" : "light-text",
    toggleTheme: () => setDarkMode((prev) => !prev),
  };

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/themed">Themed Page</Link>
      </nav>

      <ThemeContext.Provider value={theme}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/themed" element={<ThemedPage />} />
        </Routes>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;