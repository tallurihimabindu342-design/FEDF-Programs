import { useContext } from "react";
import ThemeContext from "./ThemeContext";

export default function ThemedPage() {
  let theme;

  theme = useContext(ThemeContext);

  return (
    <div
      className={`page ${theme?.backgroundClass || ""} ${
        theme?.textClass || ""
      }`}
    >
      <h1>This is Themed Page</h1>
      <p>
        The background and text color will change based on the theme.
      </p>
    </div>
  );
}