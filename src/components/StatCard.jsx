
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

export default function StatCard({
  title,
  value,
  change,
  positive = true,
  icon: Icon,
}) {
  return (
    <article className="stat-card">
      <div className="stat-card-top">
        <span className="stat-title">{title}</span>

        <div className="stat-icon">
          <Icon size={21} />
        </div>
      </div>

      <h3 className="stat-value">{value}</h3>

      <div className="stat-footer">
        <span
          className={`stat-change ${
            positive ? "positive" : "negative"
          }`}
        >
          {positive ? (
            <ArrowUpRight size={16} />
          ) : (
            <ArrowDownRight size={16} />
          )}

          {change}
        </span>

        <span className="stat-period">vs last month</span>
      </div>
    </article>
  );
}
