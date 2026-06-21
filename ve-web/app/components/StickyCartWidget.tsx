"use client";

import { ShoppingBag } from "lucide-react";
import { useStore } from "@/lib/store";

export default function StickyCartWidget() {
  const { openCartDrawer, cartCount, cartTotal } = useStore();

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden md:block">
      <button
        onClick={openCartDrawer}
        className="flex flex-col items-center justify-center bg-velina-rose hover:bg-velina-gold text-white py-3.5 px-3 rounded-l-2xl shadow-xl transition-all hover:pl-4 group cursor-pointer border-0 outline-none"
      >
        <ShoppingBag size={20} className="group-hover:scale-110 transition-transform" />
        <span className="text-[9px] font-black uppercase tracking-widest mt-2 border-t border-white/20 pt-1.5 leading-none">
          {cartCount} ITEM{cartCount !== 1 ? "S" : ""}
        </span>
        <span className="text-xs font-black mt-1 leading-none">৳{cartTotal.toLocaleString()}</span>
      </button>
    </div>
  );
}
