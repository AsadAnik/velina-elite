type ChartPoint = {
  day: string;
  value: number;
};

type RevenueChartProps = {
  data: ChartPoint[];
};

export default function RevenueChart({ data }: RevenueChartProps) {
  const max = Math.max(...data.map((d) => d.value));

  return (
    <div className="rounded-2xl border border-border bg-white dark:bg-zinc-900/50 p-5 shadow-sm">
      <div className="flex items-start justify-between mb-6">
        <div>
          <p className="text-[10px] font-black uppercase tracking-widest text-muted">
            Revenue Overview
          </p>
          <h3 className="text-sm font-black text-foreground mt-0.5">Weekly performance</h3>
        </div>
        <div className="text-right">
          <p className="text-lg font-black text-foreground">৳8,42,000</p>
          <p className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
            +14.3% this week
          </p>
        </div>
      </div>

      <div className="flex items-end justify-between gap-2 h-36">
        {data.map((point) => (
          <div key={point.day} className="flex flex-1 flex-col items-center gap-2">
            <div className="relative w-full flex items-end justify-center h-28">
              <div
                className="w-full max-w-[36px] rounded-t-lg bg-gradient-to-t from-velina-rose to-velina-gold/80 transition-all duration-500 hover:opacity-90"
                style={{ height: `${(point.value / max) * 100}%` }}
                title={`${point.day}: ${point.value}%`}
              />
            </div>
            <span className="text-[10px] font-bold text-muted-subtle">{point.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
