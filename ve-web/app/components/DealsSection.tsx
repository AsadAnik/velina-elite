"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function DealsSection() {
  const deals = [
    {
      title: "MEGA OFFERS",
      subtitle: "UP TO 50% OFF",
      desc: "Top brands in skincare & hair treatments",
      buttonText: "SHOP DEALS",
      bgGradient: "from-blue-600 to-indigo-800",
      textColor: "text-white",
      image: "/banner_organic.png",
      tag: "50% OFF",
      tagBg: "bg-cyan-400 text-slate-900",
    },
    {
      title: "DAILY GLAM",
      subtitle: "STARTING FROM ৳99",
      desc: "Essential everyday beauty accessories",
      buttonText: "EXPLORE",
      bgGradient: "from-emerald-600 to-teal-800",
      textColor: "text-white",
      image: "/banner_makeup.png",
      tag: "FROM ৳99",
      tagBg: "bg-lime-300 text-teal-900",
    },
    {
      title: "EXCLUSIVE COMBO",
      subtitle: "BUY 2 GET ৳101 OFF",
      desc: "Handpicked premium skincare matchings",
      buttonText: "CLAIM OFFER",
      bgGradient: "from-pink-600 to-velina-rose",
      textColor: "text-white",
      image: "/banner_skincare.png",
      tag: "SAVE ৳101",
      tagBg: "bg-white text-velina-rose",
    },
    {
      title: "উৎসবের আনন্দ",
      subtitle: "১৬% পর্যন্ত ছাড়",
      desc: "Premium imported authentic brand deals",
      buttonText: "SHOP NOW",
      bgGradient: "from-amber-600 to-orange-800",
      textColor: "text-white",
      image: "/banner_skincare.png",
      tag: "১৬% ছাড়",
      tagBg: "bg-yellow-300 text-amber-900",
    },
  ];

  return (
    <section className="py-12 bg-zinc-50 dark:bg-zinc-900/40 w-full transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-[11px] font-black tracking-widest text-zinc-400 dark:text-zinc-500 uppercase">
            Special Selections
          </h2>
          <h3 className="text-xl md:text-2xl font-black text-zinc-900 dark:text-zinc-100 mt-1 uppercase tracking-wider">
            Deals You Cannot Miss
          </h3>
          <div className="w-16 h-1 bg-velina-gold mx-auto mt-2 rounded-full"></div>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {deals.map((deal, idx) => (
            <div
              key={idx}
              className={`rounded-3xl bg-gradient-to-br ${deal.bgGradient} overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group transform hover:-translate-y-1.5`}
            >
              {/* Card Image Header */}
              <div className="relative w-full h-44 bg-zinc-800 overflow-hidden">
                <Image
                  src={deal.image}
                  alt={deal.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
                <span className={`absolute top-4 left-4 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-xs ${deal.tagBg}`}>
                  {deal.tag}
                </span>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-[10px] font-extrabold tracking-widest text-white/70 uppercase">
                    {deal.title}
                  </h4>
                  <h5 className="text-xl font-black text-white mt-1 leading-none">
                    {deal.subtitle}
                  </h5>
                  <p className="text-xs text-white/80 mt-2 font-medium">
                    {deal.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10">
                  <button className="w-full bg-white text-zinc-900 group-hover:bg-velina-gold group-hover:text-white transition-all text-xs font-black tracking-widest py-3 rounded-full flex items-center justify-center gap-1.5 shadow-sm">
                    {deal.buttonText}
                    <ArrowRight size={14} className="stroke-[2.5]" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
