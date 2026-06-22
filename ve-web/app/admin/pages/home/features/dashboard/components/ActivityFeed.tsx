import { MessageSquare, Package, ShoppingBag, Tag } from "lucide-react";
import type { ActivityItem } from "../hooks/dashboard.data";

const typeConfig = {
  order: { icon: ShoppingBag, color: "text-velina-rose bg-velina-rose/10" },
  product: { icon: Package, color: "text-velina-gold bg-velina-gold/10" },
  customer: { icon: MessageSquare, color: "text-emerald-600 bg-emerald-500/10" },
  promo: { icon: Tag, color: "text-purple-600 bg-purple-500/10" },
};

type ActivityFeedProps = {
  items: ActivityItem[];
};

export default function ActivityFeed({ items }: ActivityFeedProps) {
  return (
    <div className="rounded-2xl border border-border bg-white dark:bg-zinc-900/50 p-5 shadow-sm">
      <div className="mb-4">
        <p className="text-[10px] font-black uppercase tracking-widest text-muted">
          Activity
        </p>
        <h3 className="text-sm font-black text-foreground mt-0.5">Live store updates</h3>
      </div>
      <div className="space-y-3">
        {items.map((item) => {
          const config = typeConfig[item.type];
          const Icon = config.icon;
          return (
            <div key={item.id} className="flex items-start gap-3">
              <div
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${config.color}`}
              >
                <Icon size={14} />
              </div>
              <div className="min-w-0 flex-1 border-b border-border-subtle pb-3 last:border-0 last:pb-0">
                <p className="text-sm text-foreground leading-snug">{item.message}</p>
                <p className="mt-0.5 text-[10px] font-bold text-muted-subtle">{item.time}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
