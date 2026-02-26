import { useState } from "react";
import "./index.css";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={theme}>
      <h1>Vite React Theme Change</h1>
      <button onClick={toggleTheme}>
        Change Theme
      </button>
    </div>
  );
}

export default App;
