import type { TopProduct } from "../hooks/dashboard.data";

type TopProductsProps = {
  products: TopProduct[];
};

export default function TopProducts({ products }: TopProductsProps) {
  const maxSold = Math.max(...products.map((p) => p.sold));

  return (
    <div className="rounded-2xl border border-border bg-white dark:bg-zinc-900/50 p-5 shadow-sm">
      <div className="mb-4">
        <p className="text-[10px] font-black uppercase tracking-widest text-muted">
          Top Products
        </p>
        <h3 className="text-sm font-black text-foreground mt-0.5">Best sellers this week</h3>
      </div>
      <div className="space-y-4">
        {products.map((product, index) => (
          <div key={product.id} className="flex items-center gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-velina-rose/20 to-velina-gold/20 text-xs font-black text-velina-rose">
              {index + 1}
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-2">
                <p className="truncate text-sm font-bold text-foreground">{product.name}</p>
                <p className="shrink-0 text-xs font-bold text-velina-gold">{product.revenue}</p>
              </div>
              <div className="mt-1.5 flex items-center gap-2">
                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-surface-2">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-velina-rose to-velina-gold transition-all duration-500"
                    style={{ width: `${(product.sold / maxSold) * 100}%` }}
                  />
                </div>
                <span className="text-[10px] font-bold text-muted">{product.sold} sold</span>
              </div>
              <p className="mt-0.5 text-[10px] font-bold uppercase tracking-wider text-muted-subtle">
                {product.category}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
