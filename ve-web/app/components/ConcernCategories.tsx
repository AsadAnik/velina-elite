"use client";

import React from "react";
import Image from "next/image";

export default function ConcernCategories() {
  const concerns = [
    {
      title: "OIL CONTROL",
      subtitle: "TREATMENT",
      src: "/banner_skincare.png",
      gradient: "from-amber-400 to-yellow-500",
    },
    {
      title: "PORE",
      subtitle: "CARE",
      src: "/banner_organic.png",
      gradient: "from-yellow-400 to-amber-500",
    },
    {
      title: "SPOT",
      subtitle: "TREATMENT",
      src: "/banner_skincare.png",
      gradient: "from-amber-400 to-yellow-500",
    },
    {
      title: "HAIR THINNING",
      subtitle: "SOLUTION",
      src: "/banner_organic.png",
      gradient: "from-yellow-400 to-amber-500",
    },
    {
      title: "SUN BURN",
      subtitle: "TREATMENT",
      src: "/banner_skincare.png",
      gradient: "from-amber-400 to-yellow-500",
    },
  ];

  return (
    <section className="py-12 bg-background w-full max-w-7xl mx-auto px-4 md:px-6">
      {/* Section Title */}
      <div className="text-center mb-8">
        <h2 className="text-xs font-black tracking-widest text-zinc-400 dark:text-zinc-500 uppercase">
          Targeted Treatment
        </h2>
        <h3 className="text-xl md:text-2xl font-black text-foreground mt-1 uppercase tracking-wider">
          Shop by Concern
        </h3>
        <div className="w-12 h-1 bg-velina-gold mx-auto mt-2 rounded-full"></div>
      </div>

      {/* Grid of Concern Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6 justify-center">
        {concerns.map((item, idx) => (
          <a
            key={idx}
            href="#"
            className="flex flex-col items-center group relative cursor-pointer"
          >
            {/* The Gold/Yellow container card */}
            <div className="w-full aspect-[4/5] rounded-3xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 flex flex-col justify-between overflow-hidden shadow-xs group-hover:shadow-md transition-all duration-300 transform group-hover:-translate-y-1.5">
              
              {/* Top half: Rounded model portrait */}
              <div className="w-full h-[65%] relative overflow-hidden bg-zinc-200">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Bottom half: Wavy gold/yellow concern banner banner */}
              <div className={`w-full h-[35%] bg-gradient-to-br ${item.gradient} flex flex-col justify-center items-center text-center p-3 relative`}>
                {/* Simulated wavy overlay separator */}
                <div className="absolute top-0 left-0 right-0 h-3 bg-transparent -mt-2">
                  <svg
                    viewBox="0 0 100 20"
                    preserveAspectRatio="none"
                    className="w-full h-full text-amber-400 fill-current"
                    style={{ transform: "rotate(180deg)" }}
                  >
                    <path d="M0,0 C30,20 70,20 100,0 L100,20 L0,20 Z" />
                  </svg>
                </div>

                <span className="text-white text-xs md:text-[13px] font-black tracking-wider leading-none drop-shadow-xs">
                  {item.title}
                </span>
                <span className="text-white text-[9px] md:text-[10px] font-bold opacity-90 tracking-widest mt-0.5 leading-none">
                  {item.subtitle}
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
