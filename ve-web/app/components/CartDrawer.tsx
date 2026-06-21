"use client";

import Image from "next/image";
import Link from "next/link";
import { X, Plus, Minus, ShoppingBag, ArrowRight, Trash2 } from "lucide-react";
import { useStore } from "@/lib/store";

export default function CartDrawer() {
  const {
    isCartDrawerOpen,
    closeCartDrawer,
    cart,
    removeFromCart,
    updateQty,
    cartTotal,
    cartCount,
  } = useStore();

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 z-[60] transition-opacity duration-300 ${
          isCartDrawerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeCartDrawer}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-white dark:bg-zinc-950 z-[70] shadow-2xl dark:shadow-zinc-950 flex flex-col transition-transform duration-300 ease-in-out ${
          isCartDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-zinc-100 dark:border-zinc-800">
          <div className="flex items-center gap-2">
            <ShoppingBag size={20} className="text-velina-rose" />
            <h2 className="font-bold text-zinc-900 dark:text-zinc-100 text-base">
              My Bag
              <span className="ml-2 bg-velina-rose text-white text-xs font-black px-2 py-0.5 rounded-full">
                {cartCount}
              </span>
            </h2>
          </div>
          <button
            onClick={closeCartDrawer}
            className="p-1.5 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-500 dark:text-zinc-400 transition-colors"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto py-3">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 px-6 text-center">
              <div className="w-20 h-20 rounded-full bg-velina-peach/40 dark:bg-velina-rose/10 flex items-center justify-center">
                <ShoppingBag size={36} className="text-velina-rose/60" />
              </div>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm">Your bag is empty</p>
              <button
                onClick={closeCartDrawer}
                className="text-velina-rose text-sm font-bold underline underline-offset-2"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="divide-y divide-zinc-100 dark:divide-zinc-800">
              {cart.map(({ product, quantity }) => (
                <li key={product.id} className="flex gap-3 px-4 py-3">
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-zinc-50 dark:bg-zinc-800 shrink-0">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-zinc-800 dark:text-zinc-200 line-clamp-2 leading-snug">
                      {product.name}
                    </p>
                    <p className="text-[11px] text-zinc-400 dark:text-zinc-500 mt-0.5">
                      {product.brand}
                    </p>

                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-zinc-200 dark:border-zinc-700 rounded-full overflow-hidden">
                        <button
                          onClick={() => updateQty(product.id, quantity - 1)}
                          className="px-2.5 py-1 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="px-2.5 text-xs font-bold text-zinc-800 dark:text-zinc-200">
                          {quantity}
                        </span>
                        <button
                          onClick={() => updateQty(product.id, quantity + 1)}
                          className="px-2.5 py-1 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <p className="text-sm font-black text-velina-rose">
                        ৳{(product.salePrice * quantity).toLocaleString()}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromCart(product.id)}
                    className="self-start p-1 text-zinc-300 dark:text-zinc-600 hover:text-red-400 transition-colors"
                  >
                    <Trash2 size={15} />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="border-t border-zinc-100 dark:border-zinc-800 px-5 py-4 space-y-3">
            {cartTotal < 999 && (
              <div className="bg-velina-peach/30 dark:bg-velina-rose/10 rounded-xl px-4 py-2.5 text-xs text-zinc-600 dark:text-zinc-400">
                Add{" "}
                <span className="font-bold text-velina-rose">
                  ৳{(999 - cartTotal).toLocaleString()}
                </span>{" "}
                more for <span className="font-bold">free shipping</span> 🚚
              </div>
            )}

            <div className="flex justify-between text-sm font-bold text-zinc-800 dark:text-zinc-200">
              <span>Subtotal ({cartCount} items)</span>
              <span>৳{cartTotal.toLocaleString()}</span>
            </div>

            <Link
              href="/cart"
              onClick={closeCartDrawer}
              className="block w-full text-center bg-zinc-900 dark:bg-zinc-700 text-white text-sm font-bold py-3 rounded-full hover:opacity-80 transition-opacity"
            >
              View Cart
            </Link>
            <button className="w-full flex items-center justify-center gap-2 bg-velina-rose text-white text-sm font-bold py-3 rounded-full hover:bg-velina-magenta transition-colors">
              Checkout
              <ArrowRight size={16} />
            </button>
          </div>
        )}
      </div>
    </>
  );
}
