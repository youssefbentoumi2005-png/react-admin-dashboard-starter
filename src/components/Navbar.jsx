
import {
  Search,
  Sun,
  Moon,
  Bell,
  Menu,
} from "lucide-react";

export default function Navbar({ theme, onToggleTheme }) {
  return (
    <header className="navbar">
      <div className="navbar-heading">
        <button
          className="icon-button mobile-menu"
          type="button"
          aria-label="Menu"
        >
          <Menu size={20} />
        </button>

        <div>
          <h2>Dashboard</h2>
          <p>Welcome back, Admin!</p>
        </div>
      </div>

      <div className="navbar-actions">
        <label className="search-box">
          <Search size={18} />
          <input
            type="search"
            placeholder="Search anything..."
          />
          <span className="search-shortcut">/</span>
        </label>

        <button
          className="icon-button"
          type="button"
          onClick={onToggleTheme}
          aria-label="Toggle theme"
          title="Toggle light/dark mode"
        >
          {theme === "light" ? (
            <Moon size={20} />
          ) : (
            <Sun size={20} />
          )}
        </button>

        <button
          className="icon-button notification-button"
          type="button"
          aria-label="Notifications"
        >
          <Bell size={20} />
          <span className="notification-dot"></span>
        </button>
      </div>
    </header>
  );
}
