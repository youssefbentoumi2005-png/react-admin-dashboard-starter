
import {
  LayoutDashboard,
  Package,
  Users,
  ShoppingCart,
  Settings,
  ChartNoAxesCombined,
} from "lucide-react";

const menuItems = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Products", icon: Package },
  { label: "Customers", icon: Users },
  { label: "Orders", icon: ShoppingCart },
  { label: "Analytics", icon: ChartNoAxesCombined },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-logo">A</div>
        <span>AdminFlow</span>
      </div>

      <p className="menu-label">MENU</p>

      <nav className="sidebar-nav">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = item.label === "Dashboard";

          return (
            <button
              key={item.label}
              className={`nav-item ${isActive ? "active" : ""}`}
              type="button"
            >
              <Icon size={19} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="sidebar-bottom">
        <button className="nav-item" type="button">
          <Settings size={19} />
          <span>Settings</span>
        </button>

        <div className="profile">
          <div className="avatar">AD</div>
          <div>
            <strong>Admin User</strong>
            <small>Administrator</small>
          </div>
        </div>
      </div>
    </aside>
  );
}
