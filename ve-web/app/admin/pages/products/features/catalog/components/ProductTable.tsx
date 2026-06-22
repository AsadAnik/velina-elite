import { Edit, MoreHorizontal, Trash2 } from "lucide-react";
import type { AdminProduct } from "../hooks/products.data";

const statusStyles = {
  active: "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400",
  "low-stock": "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-400",
  "out-of-stock": "bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-400",
};

const statusLabels = {
  active: "Active",
  "low-stock": "Low Stock",
  "out-of-stock": "Out of Stock",
};

type ProductTableProps = {
  products: AdminProduct[];
};

export default function ProductTable({ products }: ProductTableProps) {
  if (products.length === 0) {
    return (
      <div className="rounded-2xl border border-border bg-white dark:bg-zinc-900/50 p-12 text-center shadow-sm">
        <p className="text-sm font-bold text-muted">No products match your filters.</p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-border bg-white dark:bg-zinc-900/50 shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-surface/50">
              {["Product", "Category", "Brand", "Price", "Stock", "Status", ""].map((col) => (
                <th
                  key={col || "actions"}
                  className="px-5 py-3 text-left text-[10px] font-black uppercase tracking-widest text-muted-subtle"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr
                key={product.id}
                className="border-b border-border-subtle last:border-0 hover:bg-surface/60 transition-colors"
              >
                <td className="px-5 py-4">
                  <div>
                    <p className="font-bold text-foreground">{product.name}</p>
                    <p className="text-[10px] font-bold text-muted-subtle mt-0.5">{product.id}</p>
                  </div>
                </td>
                <td className="px-5 py-4 text-muted">{product.category}</td>
                <td className="px-5 py-4 font-medium text-foreground">{product.brand}</td>
                <td className="px-5 py-4 font-bold text-velina-rose">{product.price}</td>
                <td className="px-5 py-4 font-medium">{product.stock}</td>
                <td className="px-5 py-4">
                  <span
                    className={`inline-flex rounded-full px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider ${statusStyles[product.status]}`}
                  >
                    {statusLabels[product.status]}
                  </span>
                </td>
                <td className="px-5 py-4">
                  <div className="flex items-center gap-1">
                    <button
                      aria-label="Edit product"
                      className="rounded-lg p-1.5 text-muted hover:bg-surface-2 hover:text-velina-rose transition-colors"
                    >
                      <Edit size={14} />
                    </button>
                    <button
                      aria-label="Delete product"
                      className="rounded-lg p-1.5 text-muted hover:bg-red-50 hover:text-red-500 dark:hover:bg-red-950 transition-colors"
                    >
                      <Trash2 size={14} />
                    </button>
                    <button
                      aria-label="More options"
                      className="rounded-lg p-1.5 text-muted hover:bg-surface-2 transition-colors"
                    >
                      <MoreHorizontal size={14} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
