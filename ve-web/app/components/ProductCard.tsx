"use client";

import Image from "next/image";
import { Heart, Star, ShoppingCart } from "lucide-react";
import { useStore } from "@/lib/store";
import { Product } from "@/lib/data";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const { addToCart, toggleWishlist, isInWishlist } = useStore();
  const inWishlist = isInWishlist(product.id);

  return (
    <article className="group bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 shadow-sm hover:shadow-md dark:hover:shadow-zinc-950 transition-all duration-300 flex flex-col">
      {/* Image area */}
      <div className="relative aspect-square overflow-hidden bg-zinc-50 dark:bg-zinc-800">
        {product.discountPercent > 0 && (
          <span className="absolute top-2.5 left-2.5 z-10 bg-velina-rose text-white text-[10px] font-black px-2 py-0.5 rounded-md tracking-wide">
            {product.discountPercent}% OFF
          </span>
        )}
        {product.isNew && (
          <span className="absolute top-2.5 right-10 z-10 bg-emerald-500 text-white text-[10px] font-black px-2 py-0.5 rounded-md tracking-wide">
            NEW
          </span>
        )}
        {product.isBestSeller && (
          <span className="absolute top-2.5 right-2.5 z-10 bg-velina-gold text-white text-[10px] font-black px-2 py-0.5 rounded-md tracking-wide">
            ⭐ BEST
          </span>
        )}

        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Wishlist toggle */}
        <button
          onClick={() => toggleWishlist(product)}
          className={`absolute bottom-2.5 right-2.5 z-10 w-8 h-8 rounded-full flex items-center justify-center shadow-md transition-all duration-200 ${
            inWishlist
              ? "bg-velina-rose text-white scale-110"
              : "bg-white/90 dark:bg-zinc-900/90 text-zinc-400 hover:text-velina-rose"
          }`}
          aria-label={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart size={15} className={inWishlist ? "fill-white" : ""} />
        </button>
      </div>

      {/* Info */}
      <div className="flex-1 flex flex-col p-3">
        <p className="text-[10px] font-semibold text-velina-gold uppercase tracking-wider mb-0.5">
          {product.brand}
        </p>
        <p className="text-xs font-semibold text-zinc-800 dark:text-zinc-200 line-clamp-2 leading-snug flex-1">
          {product.name}
        </p>

        {/* Stars */}
        <div className="flex items-center gap-1 mt-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={11}
              className={
                i < product.rating
                  ? "fill-amber-400 text-amber-400"
                  : "text-zinc-200 dark:text-zinc-700 fill-zinc-200 dark:fill-zinc-700"
              }
            />
          ))}
          <span className="text-[10px] text-zinc-400 dark:text-zinc-500 ml-1">
            ({product.reviewCount})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mt-2">
          <span className="text-sm font-black text-velina-rose">
            ৳{product.salePrice.toLocaleString()}
          </span>
          {product.isSale && (
            <span className="text-[11px] text-zinc-400 dark:text-zinc-500 line-through">
              ৳{product.originalPrice.toLocaleString()}
            </span>
          )}
          {product.isSale && (
            <span className="text-[9px] font-black bg-velina-peach dark:bg-velina-rose/20 text-velina-rose px-1.5 py-0.5 rounded-full ml-auto">
              SALE
            </span>
          )}
        </div>

        {/* Add to Cart */}
        <button
          onClick={() => addToCart(product)}
          className="mt-3 flex items-center justify-center gap-2 bg-zinc-900 dark:bg-zinc-700 dark:hover:bg-velina-rose text-white text-xs font-bold py-2.5 rounded-full hover:bg-velina-rose transition-colors duration-200 w-full"
        >
          <ShoppingCart size={13} />
          ADD TO CART
        </button>
      </div>
    </article>
  );
}
