import { TrendingDown, TrendingUp, Minus } from "lucide-react";
import type { DashboardStat } from "../hooks/dashboard.data";

const accentMap = {
  rose: "from-velina-rose/20 to-velina-rose/5 border-velina-rose/20",
  gold: "from-velina-gold/20 to-velina-gold/5 border-velina-gold/30",
  magenta: "from-velina-magenta/15 to-velina-magenta/5 border-velina-magenta/20",
  neutral: "from-surface-2 to-surface border-border",
};

const iconAccent = {
  rose: "bg-velina-rose text-white shadow-velina-rose/30",
  gold: "bg-velina-gold text-white shadow-velina-gold/30",
  magenta: "bg-velina-magenta text-white shadow-velina-magenta/30",
  neutral: "bg-zinc-800 dark:bg-zinc-700 text-white",
};

type StatCardProps = {
  stat: DashboardStat;
};

export default function StatCard({ stat }: StatCardProps) {
  const TrendIcon =
    stat.trend === "up" ? TrendingUp : stat.trend === "down" ? TrendingDown : Minus;

  const trendColor =
    stat.trend === "up"
      ? "text-emerald-600 dark:text-emerald-400"
      : stat.trend === "down"
        ? "text-red-500"
        : "text-muted";

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border bg-gradient-to-br p-5 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 ${accentMap[stat.accent]}`}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[10px] font-black uppercase tracking-widest text-muted">
            {stat.label}
          </p>
          <p className="mt-2 text-2xl font-black text-foreground">{stat.value}</p>
          <div className={`mt-2 flex items-center gap-1 text-xs font-bold ${trendColor}`}>
            <TrendIcon size={14} />
            <span>{stat.change}</span>
            <span className="font-medium text-muted">vs last week</span>
          </div>
        </div>
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-xl shadow-md ${iconAccent[stat.accent]}`}
        >
          <span className="text-xs font-black">{stat.label.charAt(0)}</span>
        </div>
      </div>
    </div>
  );
}
