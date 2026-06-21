"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight, Tag, Truck, Shield, ChevronRight } from "lucide-react";
import { useStore } from "@/lib/store";
import Navbar from "@/app/components/Navbar";
import CartDrawer from "@/app/components/CartDrawer";

export default function CartPage() {
  const { cart, removeFromCart, updateQty, cartTotal, cartCount, clearCart } = useStore();
  const shipping = cartTotal >= 999 ? 0 : 60;
  const grandTotal = cartTotal + shipping;

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 py-6 px-4 md:px-6 transition-colors">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-2 mb-6">
            <ShoppingBag size={22} className="text-velina-rose" />
            <h1 className="text-xl md:text-2xl font-black text-zinc-900 dark:text-zinc-100">My Cart</h1>
            {cartCount > 0 && (
              <span className="bg-velina-rose text-white text-xs font-black px-2.5 py-1 rounded-full">
                {cartCount} item{cartCount !== 1 ? "s" : ""}
              </span>
            )}
          </div>

          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 gap-5 text-center">
              <div className="w-28 h-28 rounded-full bg-velina-peach/30 dark:bg-velina-rose/10 flex items-center justify-center">
                <ShoppingBag size={52} className="text-velina-rose/40" />
              </div>
              <div>
                <p className="text-xl font-black text-zinc-800 dark:text-zinc-200 mb-1">Your bag is empty</p>
                <p className="text-sm text-zinc-400">Looks like you haven&apos;t added anything yet.</p>
              </div>
              <Link href="/" className="bg-velina-rose text-white font-bold px-8 py-3 rounded-full text-sm hover:bg-velina-magenta transition-colors">
                Start Shopping
              </Link>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Cart items */}
              <div className="flex-1 space-y-3">
                <div className="flex justify-end">
                  <button onClick={clearCart} className="text-xs text-zinc-400 hover:text-red-400 font-medium underline underline-offset-2 transition-colors">
                    Clear all
                  </button>
                </div>

                {cart.map(({ product, quantity }) => (
                  <div key={product.id} className="bg-white dark:bg-zinc-900 rounded-2xl p-4 flex gap-4 shadow-sm border border-zinc-100 dark:border-zinc-800 hover:border-zinc-200 dark:hover:border-zinc-700 transition-colors">
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-zinc-50 dark:bg-zinc-800 shrink-0">
                      <Image src={product.image} alt={product.name} fill className="object-cover" />
                      {product.discountPercent > 0 && (
                        <span className="absolute top-1 left-1 bg-velina-rose text-white text-[9px] font-black px-1.5 py-0.5 rounded-md">
                          {product.discountPercent}%
                        </span>
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] font-bold text-velina-gold uppercase tracking-wider">{product.brand}</p>
                      <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 line-clamp-2 leading-snug mt-0.5">{product.name}</p>

                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-zinc-200 dark:border-zinc-700 rounded-full overflow-hidden">
                          <button onClick={() => updateQty(product.id, quantity - 1)} className="w-8 h-8 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
                            <Minus size={13} />
                          </button>
                          <span className="w-8 text-center text-sm font-black text-zinc-800 dark:text-zinc-200">{quantity}</span>
                          <button onClick={() => updateQty(product.id, quantity + 1)} className="w-8 h-8 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
                            <Plus size={13} />
                          </button>
                        </div>
                        <div className="text-right">
                          <p className="text-base font-black text-velina-rose">৳{(product.salePrice * quantity).toLocaleString()}</p>
                          {quantity > 1 && <p className="text-[11px] text-zinc-400 dark:text-zinc-500">৳{product.salePrice.toLocaleString()} each</p>}
                        </div>
                      </div>
                    </div>

                    <button onClick={() => removeFromCart(product.id)} className="self-start p-1.5 text-zinc-300 dark:text-zinc-600 hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-950 rounded-lg transition-all">
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))}

                <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-velina-rose font-bold mt-2 hover:gap-2.5 transition-all">
                  <ChevronRight size={16} className="rotate-180" /> Continue Shopping
                </Link>
              </div>

              {/* Order summary */}
              <div className="w-full lg:w-80 shrink-0 space-y-4">
                {/* Promo code */}
                <div className="bg-white dark:bg-zinc-900 rounded-2xl p-4 border border-zinc-100 dark:border-zinc-800 shadow-sm">
                  <h3 className="text-sm font-black text-zinc-800 dark:text-zinc-200 mb-3 flex items-center gap-2">
                    <Tag size={15} className="text-velina-rose" /> Promo Code
                  </h3>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Enter code"
                      className="flex-1 border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 rounded-full px-4 py-2 text-sm outline-none focus:border-velina-rose transition-colors"
                    />
                    <button className="bg-zinc-900 dark:bg-zinc-700 text-white text-xs font-bold px-4 py-2 rounded-full hover:opacity-80 transition-opacity">Apply</button>
                  </div>
                </div>

                {/* Summary */}
                <div className="bg-white dark:bg-zinc-900 rounded-2xl p-5 border border-zinc-100 dark:border-zinc-800 shadow-sm">
                  <h3 className="text-sm font-black text-zinc-900 dark:text-zinc-100 mb-4">Order Summary</h3>
                  <div className="space-y-2.5 text-sm">
                    <div className="flex justify-between text-zinc-600 dark:text-zinc-400">
                      <span>Subtotal ({cartCount} item{cartCount !== 1 ? "s" : ""})</span>
                      <span className="font-semibold text-zinc-800 dark:text-zinc-200">৳{cartTotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-zinc-600 dark:text-zinc-400">
                      <span className="flex items-center gap-1"><Truck size={13} /> Shipping</span>
                      {shipping === 0 ? (
                        <span className="text-emerald-600 font-bold">FREE</span>
                      ) : (
                        <span className="font-semibold text-zinc-800 dark:text-zinc-200">৳{shipping}</span>
                      )}
                    </div>
                    {cartTotal < 999 && (
                      <p className="text-[11px] text-zinc-400 dark:text-zinc-500 bg-zinc-50 dark:bg-zinc-800 rounded-xl px-3 py-2">
                        Add ৳{(999 - cartTotal).toLocaleString()} more for free shipping 🚚
                      </p>
                    )}
                    <hr className="border-zinc-100 dark:border-zinc-800 my-1" />
                    <div className="flex justify-between text-zinc-900 dark:text-zinc-100 font-black text-base">
                      <span>Total</span>
                      <span className="text-velina-rose">৳{grandTotal.toLocaleString()}</span>
                    </div>
                  </div>

                  <button className="mt-5 w-full bg-velina-rose text-white font-bold py-3.5 rounded-full flex items-center justify-center gap-2 hover:bg-velina-magenta transition-colors text-sm shadow-sm shadow-velina-rose/30">
                    Proceed to Checkout <ArrowRight size={16} />
                  </button>
                  <p className="mt-3 text-center text-[11px] text-zinc-400 dark:text-zinc-500 flex items-center justify-center gap-1">
                    <Shield size={12} /> Secure & Encrypted Checkout
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <CartDrawer />
    </>
  );
}
