"use client";

import Link from "next/link";
import { Heart, ShoppingCart, Trash2, Sparkles, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useStore } from "@/lib/store";
import Navbar from "@/app/components/Navbar";
import CartDrawer from "@/app/components/CartDrawer";

export default function WishlistPage() {
  const { wishlist, toggleWishlist, addToCart } = useStore();

  const handleMoveToCart = (product: (typeof wishlist)[0]) => {
    addToCart(product);
    toggleWishlist(product);
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 py-6 px-4 md:px-6 transition-colors">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Heart size={22} className="text-velina-rose fill-velina-rose" />
              <h1 className="text-xl md:text-2xl font-black text-zinc-900 dark:text-zinc-100">My Wishlist</h1>
              {wishlist.length > 0 && (
                <span className="bg-velina-rose text-white text-xs font-black px-2.5 py-1 rounded-full">{wishlist.length}</span>
              )}
            </div>

            {wishlist.length > 0 && (
              <button
                onClick={() => { wishlist.forEach((p) => addToCart(p)); wishlist.forEach((p) => toggleWishlist(p)); }}
                className="flex items-center gap-2 bg-zinc-900 dark:bg-zinc-800 text-white text-xs font-bold px-4 py-2.5 rounded-full hover:opacity-80 transition-opacity"
              >
                <ShoppingCart size={14} /> Add All to Cart
              </button>
            )}
          </div>

          {wishlist.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 gap-6 text-center">
              <div className="relative">
                <div className="w-32 h-32 rounded-full bg-velina-peach/30 dark:bg-velina-rose/10 flex items-center justify-center">
                  <Heart size={56} className="text-velina-rose/30" />
                </div>
                <div className="absolute -top-1 -right-1 w-10 h-10 rounded-full bg-velina-rose/10 flex items-center justify-center">
                  <Sparkles size={18} className="text-velina-rose/50" />
                </div>
              </div>
              <div>
                <p className="text-xl font-black text-zinc-800 dark:text-zinc-200 mb-2">Your wishlist is empty</p>
                <p className="text-sm text-zinc-400 dark:text-zinc-500 max-w-xs">Save your favourite products here and come back to them anytime.</p>
              </div>
              <Link href="/" className="flex items-center gap-2 bg-velina-rose text-white font-bold px-8 py-3 rounded-full text-sm hover:bg-velina-magenta transition-colors">
                Discover Products <ArrowRight size={16} />
              </Link>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                {wishlist.map((product) => (
                  <article key={product.id} className="bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group">
                    {/* Image */}
                    <div className="relative aspect-square overflow-hidden bg-zinc-50 dark:bg-zinc-800">
                      {product.discountPercent > 0 && (
                        <span className="absolute top-2.5 left-2.5 z-10 bg-velina-rose text-white text-[10px] font-black px-2 py-0.5 rounded-md">
                          {product.discountPercent}% OFF
                        </span>
                      )}
                      <Image src={product.image} alt={product.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                      <button
                        onClick={() => toggleWishlist(product)}
                        className="absolute top-2.5 right-2.5 z-10 w-8 h-8 rounded-full bg-white/90 dark:bg-zinc-900/90 flex items-center justify-center shadow-md text-velina-rose hover:bg-red-50 dark:hover:bg-red-950 transition-colors"
                        aria-label="Remove from wishlist"
                      >
                        <Heart size={14} className="fill-velina-rose" />
                      </button>
                    </div>

                    {/* Info */}
                    <div className="flex-1 flex flex-col p-3">
                      <p className="text-[10px] font-semibold text-velina-gold uppercase tracking-wider mb-0.5">{product.brand}</p>
                      <p className="text-xs font-semibold text-zinc-800 dark:text-zinc-200 line-clamp-2 leading-snug flex-1">{product.name}</p>

                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-sm font-black text-velina-rose">৳{product.salePrice.toLocaleString()}</span>
                        {product.isSale && (
                          <span className="text-[11px] text-zinc-400 dark:text-zinc-500 line-through">৳{product.originalPrice.toLocaleString()}</span>
                        )}
                      </div>

                      <div className="mt-3 flex gap-2">
                        <button
                          onClick={() => handleMoveToCart(product)}
                          className="flex-1 flex items-center justify-center gap-1.5 bg-zinc-900 dark:bg-zinc-700 text-white text-[11px] font-bold py-2 rounded-full hover:bg-velina-rose dark:hover:bg-velina-rose transition-colors"
                        >
                          <ShoppingCart size={12} /> Move to Cart
                        </button>
                        <button
                          onClick={() => toggleWishlist(product)}
                          className="w-8 h-8 flex items-center justify-center border border-zinc-200 dark:border-zinc-700 rounded-full text-zinc-400 hover:text-red-400 hover:border-red-200 dark:hover:border-red-800 transition-colors"
                        >
                          <Trash2 size={13} />
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Mobile sticky bottom bar */}
              <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-zinc-900 border-t border-zinc-100 dark:border-zinc-800 px-4 py-3 flex items-center gap-3 md:hidden z-40 shadow-lg">
                <div className="flex-1">
                  <p className="text-xs font-bold text-zinc-800 dark:text-zinc-200">{wishlist.length} saved item{wishlist.length !== 1 ? "s" : ""}</p>
                  <p className="text-[11px] text-zinc-400 dark:text-zinc-500">Total: ৳{wishlist.reduce((s, p) => s + p.salePrice, 0).toLocaleString()}</p>
                </div>
                <button
                  onClick={() => { wishlist.forEach((p) => addToCart(p)); wishlist.forEach((p) => toggleWishlist(p)); }}
                  className="flex items-center gap-2 bg-velina-rose text-white text-xs font-bold px-5 py-2.5 rounded-full hover:bg-velina-magenta transition-colors"
                >
                  <ShoppingCart size={14} /> Add All
                </button>
              </div>
              <div className="h-20 md:hidden" />
            </>
          )}
        </div>
      </div>

      <CartDrawer />
    </>
  );
}
