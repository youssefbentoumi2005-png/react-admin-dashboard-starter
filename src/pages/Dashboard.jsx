
import {
  DollarSign,
  ShoppingBag,
  Users,
  Package,
  Download,
} from "lucide-react";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import StatCard from "../components/StatCard";

const salesData = [
  { month: "Jan", sales: 3200 },
  { month: "Feb", sales: 4500 },
  { month: "Mar", sales: 3800 },
  { month: "Apr", sales: 5700 },
  { month: "May", sales: 4900 },
  { month: "Jun", sales: 7200 },
  { month: "Jul", sales: 6500 },
  { month: "Aug", sales: 8100 },
  { month: "Sep", sales: 6900 },
  { month: "Oct", sales: 9200 },
  { month: "Nov", sales: 8500 },
  { month: "Dec", sales: 10500 },
];

const recentOrders = [
  {
    id: "#ORD-1001",
    customer: "Sarah Johnson",
    product: "Wireless Headphones",
    amount: "$129.00",
    status: "Completed",
  },
  {
    id: "#ORD-1002",
    customer: "Michael Chen",
    product: "Smart Watch",
    amount: "$249.00",
    status: "Pending",
  },
  {
    id: "#ORD-1003",
    customer: "Emily Davis",
    product: "Laptop Stand",
    amount: "$59.00",
    status: "Completed",
  },
  {
    id: "#ORD-1004",
    customer: "James Wilson",
    product: "Keyboard",
    amount: "$89.00",
    status: "Cancelled",
  },
  {
    id: "#ORD-1005",
    customer: "Olivia Martin",
    product: "USB-C Hub",
    amount: "$45.00",
    status: "Pending",
  },
];

export default function Dashboard() {
  return (
    <div className="dashboard-content">
      <section className="page-intro">
        <div>
          <h1>Overview</h1>
          <p>Here is what's happening with your store today.</p>
        </div>

        <button className="primary-button" type="button">
          <Download size={17} />
          Export Report
        </button>
      </section>

      <section className="stats-grid">
        <StatCard
          title="Total Revenue"
          value="$48,295"
          change="12.8%"
          icon={DollarSign}
        />

        <StatCard
          title="Total Orders"
          value="1,284"
          change="8.2%"
          icon={ShoppingBag}
        />

        <StatCard
          title="Total Customers"
          value="8,549"
          change="5.4%"
          icon={Users}
        />

        <StatCard
          title="Total Products"
          value="356"
          change="2.1%"
          icon={Package}
        />
      </section>

      <section className="chart-card">
        <div className="section-heading">
          <div>
            <h2>Sales Overview</h2>
            <p>Monthly sales performance</p>
          </div>

          <span className="chart-period">This year</span>
        </div>

        <div className="chart-container">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={salesData}
              margin={{ top: 10, right: 10, left: -15, bottom: 0 }}
            >
              <defs>
                <linearGradient
                  id="salesGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="0%"
                    stopColor="#6366f1"
                    stopOpacity={0.25}
                  />
                  <stop
                    offset="100%"
                    stopColor="#6366f1"
                    stopOpacity={0.01}
                  />
                </linearGradient>
              </defs>

              <CartesianGrid
                stroke="var(--border-color)"
                strokeDasharray="4 4"
                vertical={false}
              />

              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "var(--muted-text)", fontSize: 12 }}
                dy={10}
              />

              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "var(--muted-text)", fontSize: 12 }}
                tickFormatter={(value) => `$${value / 1000}k`}
              />

              <Tooltip
                contentStyle={{
                  background: "var(--card-bg)",
                  border: "1px solid var(--border-color)",
                  borderRadius: "10px",
                  color: "var(--text-color)",
                }}
                formatter={(value) => [
                  `$${Number(value).toLocaleString()}`,
                  "Sales",
                ]}
              />

              <Area
                type="monotone"
                dataKey="sales"
                stroke="#6366f1"
                strokeWidth={3}
                fill="url(#salesGradient)"
                activeDot={{ r: 5 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </section>

      <section className="orders-card">
        <div className="section-heading">
          <div>
            <h2>Recent Orders</h2>
            <p>Latest transactions from your store</p>
          </div>

          <button className="text-button" type="button">
            View all
          </button>
        </div>

        <div className="table-wrapper">
          <table className="orders-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Product</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {recentOrders.map((order) => (
                <tr key={order.id}>
                  <td className="order-id">{order.id}</td>
                  <td>{order.customer}</td>
                  <td>{order.product}</td>
                  <td className="order-amount">{order.amount}</td>
                  <td>
                    <span
                      className={`status-badge ${order.status.toLowerCase()}`}
                    >
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
