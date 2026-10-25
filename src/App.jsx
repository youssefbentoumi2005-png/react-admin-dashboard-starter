
import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";

export default function App() {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme((currentTheme) =>
      currentTheme === "light" ? "dark" : "light"
    );
  }

  return (
    <div className={`app-shell ${theme}`}>
      <Sidebar />

      <main className="main-content">
        <Navbar
          theme={theme}
          onToggleTheme={toggleTheme}
        />

        <Dashboard />
      </main>
    </div>
  );
}
