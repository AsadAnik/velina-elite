"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Plus, Percent, Check, HelpCircle } from "lucide-react";

export default function PromoBanners() {
  // Stepper State for Extra Discount Calculator
  const [selectedItems, setSelectedItems] = useState({
    facewash: false,
    moisturizer: false,
    sunscreen: false,
  });

  const toggleItem = (item: "facewash" | "moisturizer" | "sunscreen") => {
    setSelectedItems((prev) => ({
      ...prev,
      [item]: !prev[item],
    }));
  };

  const getDiscountPercent = () => {
    const count = Object.values(selectedItems).filter(Boolean).length;
    if (count === 1) return 5;
    if (count === 2) return 10;
    if (count === 3) return 20; // Extra bonus for all three!
    return 0;
  };

  const isAllSelected = selectedItems.facewash && selectedItems.moisturizer && selectedItems.sunscreen;

  return (
    <section className="py-12 bg-background w-full max-w-7xl mx-auto px-4 md:px-6 space-y-16 transition-colors duration-300">
      
      {/* 1. Large Brand Campaign Banner (Lux Bodywash style) */}
      <div className="w-full rounded-3xl overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-800 text-white relative shadow-md p-6 md:p-10 flex flex-col md:flex-row justify-between items-center gap-6 min-h-[160px]">
        {/* Decorative Circles */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-16 -mb-16 pointer-events-none"></div>

        {/* Left Side: Campaign Text */}
        <div className="z-10 text-center md:text-left flex-1">
          <div className="inline-block bg-amber-400 text-purple-950 font-black text-[10px] tracking-widest px-3 py-1 rounded-full uppercase mb-3">
            GIFT CAMPAIGN
          </div>
          <h3 className="text-2xl md:text-3xl font-black tracking-tight leading-tight uppercase">
            BUY 4 BODYWASH VARIANTS
          </h3>
          <h4 className="text-lg md:text-xl font-bold text-velina-peach tracking-wide uppercase mt-1">
            GET AN EXCLUSIVE TOTE BAG FREE!
          </h4>
          <p className="text-xs text-purple-200 mt-2 font-medium">
            Limited Edition Combo Campaign. Terms and conditions apply.
          </p>
        </div>

        {/* Right Side: Button */}
        <div className="z-10 flex-shrink-0">
          <button className="bg-white text-purple-900 hover:bg-velina-peach hover:text-purple-950 hover:scale-105 active:scale-95 transition-all text-xs font-black tracking-widest px-8 py-3.5 rounded-full shadow-lg">
            CLAIM FREE TOTE BAG
          </button>
        </div>
      </div>

      {/* 2. Interactive Extra Discount Multi-Step Calculator */}
      <div className="w-full rounded-3xl bg-gradient-to-r from-velina-rose to-velina-gold text-white p-6 md:p-8 shadow-md relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>
        
        {/* Banner Title */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start border-b border-white/20 pb-6 mb-6 gap-4 z-10 relative">
          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-black tracking-wider uppercase leading-none">
              VELINA COMBO BUILDER DEAL
            </h3>
            <p className="text-xs text-pink-100 font-medium tracking-wide mt-1.5 uppercase">
              Step by step purchase to unlock extra discounts automatically
            </p>
          </div>

          {/* Badge indicator */}
          <div className="bg-white/10 backdrop-blur-xs border border-white/30 rounded-xl px-4 py-2 text-center flex items-center gap-2">
            <Percent size={16} className="text-velina-peach" />
            <span className="text-xs font-black uppercase tracking-widest">
              STOCK LIMITED
            </span>
          </div>
        </div>

        {/* Interactive Steps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center z-10 relative">
          
          {/* Stepper Choices */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
            
            {/* Step 1: Facewash */}
            <button
              onClick={() => toggleItem("facewash")}
              className={`p-4 rounded-2xl border transition-all text-left flex flex-col justify-between h-36 relative ${
                selectedItems.facewash
                  ? "bg-white text-zinc-900 border-white shadow-lg"
                  : "bg-white/10 hover:bg-white/15 text-white border-white/20"
              }`}
            >
              <div className="flex justify-between items-start w-full">
                <span className={`text-[10px] font-black tracking-widest uppercase px-2 py-0.5 rounded-full ${
                  selectedItems.facewash ? "bg-pink-100 text-velina-rose" : "bg-white/20 text-white"
                }`}>
                  STEP 1
                </span>
                {selectedItems.facewash && (
                  <div className="bg-emerald-500 text-white rounded-full p-1">
                    <Check size={12} className="stroke-[3]" />
                  </div>
                )}
              </div>
              <div>
                <h4 className="text-sm font-black uppercase leading-none">Facewash</h4>
                <p className="text-[10px] opacity-80 mt-1 font-medium leading-none">Deep Cleansing Action</p>
              </div>
            </button>

            {/* Step 2: Moisturizer */}
            <button
              onClick={() => toggleItem("moisturizer")}
              className={`p-4 rounded-2xl border transition-all text-left flex flex-col justify-between h-36 relative ${
                selectedItems.moisturizer
                  ? "bg-white text-zinc-900 border-white shadow-lg"
                  : "bg-white/10 hover:bg-white/15 text-white border-white/20"
              }`}
            >
              <div className="flex justify-between items-start w-full">
                <span className={`text-[10px] font-black tracking-widest uppercase px-2 py-0.5 rounded-full ${
                  selectedItems.moisturizer ? "bg-pink-100 text-velina-rose" : "bg-white/20 text-white"
                }`}>
                  STEP 2
                </span>
                {selectedItems.moisturizer && (
                  <div className="bg-emerald-500 text-white rounded-full p-1">
                    <Check size={12} className="stroke-[3]" />
                  </div>
                )}
              </div>
              <div>
                <h4 className="text-sm font-black uppercase leading-none">Moisturizer</h4>
                <p className="text-[10px] opacity-80 mt-1 font-medium leading-none">Hydrate & Repair Skin</p>
              </div>
            </button>

            {/* Step 3: Sunscreen */}
            <button
              onClick={() => toggleItem("sunscreen")}
              className={`p-4 rounded-2xl border transition-all text-left flex flex-col justify-between h-36 relative ${
                selectedItems.sunscreen
                  ? "bg-white text-zinc-900 border-white shadow-lg"
                  : "bg-white/10 hover:bg-white/15 text-white border-white/20"
              }`}
            >
              <div className="flex justify-between items-start w-full">
                <span className={`text-[10px] font-black tracking-widest uppercase px-2 py-0.5 rounded-full ${
                  selectedItems.sunscreen ? "bg-pink-100 text-velina-rose" : "bg-white/20 text-white"
                }`}>
                  STEP 3
                </span>
                {selectedItems.sunscreen && (
                  <div className="bg-emerald-500 text-white rounded-full p-1">
                    <Check size={12} className="stroke-[3]" />
                  </div>
                )}
              </div>
              <div>
                <h4 className="text-sm font-black uppercase leading-none">Sunscreen</h4>
                <p className="text-[10px] opacity-80 mt-1 font-medium leading-none">UV Rays Protection</p>
              </div>
            </button>

          </div>

          {/* Calculator Output Display */}
          <div className="bg-black/15 border border-white/20 rounded-2xl p-6 text-center flex flex-col justify-between min-h-[144px]">
            <div>
              <span className="text-[10px] font-black tracking-widest text-zinc-200 block uppercase">
                YOUR COMBO REWARD
              </span>
              <div className="text-5xl font-black mt-2 text-velina-peach leading-none flex items-center justify-center gap-1">
                <span>{getDiscountPercent()}%</span>
                <span className="text-lg font-bold text-white uppercase">OFF</span>
              </div>
            </div>
            
            <button
              disabled={getDiscountPercent() === 0}
              className={`mt-4 w-full py-2.5 rounded-full text-xs font-black tracking-widest transition-all ${
                getDiscountPercent() > 0
                  ? "bg-white text-velina-rose hover:bg-zinc-50 active:scale-95 cursor-pointer shadow-md"
                  : "bg-white/10 text-white/40 cursor-not-allowed border border-white/10"
              }`}
            >
              {isAllSelected ? "ADD FULL SET TO BAG" : "ADD SELECTED TO BAG"}
            </button>
          </div>

        </div>
      </div>

      {/* 3. Limited Time Offers Grid (BOGO, COMBO, etc.) */}
      <div className="space-y-8">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-[11px] font-black tracking-widest text-zinc-400 dark:text-zinc-500 uppercase">
            Exclusive Benefits
          </h2>
          <h3 className="text-xl md:text-2xl font-black text-zinc-900 dark:text-zinc-100 mt-1 uppercase tracking-wider">
            Limited Time Offers
          </h3>
          <div className="w-16 h-1 bg-velina-gold mx-auto mt-2 rounded-full"></div>
        </div>

        {/* 4 Cards with Wavy layout background */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[
            {
              label: "DOUBLE THE FUN WITH",
              title: "BOGO",
              color: "from-purple-500 to-indigo-600",
              badge: "BUY 1 GET 1",
            },
            {
              label: "PERFECT MATCH",
              title: "COMBO",
              color: "from-pink-500 to-rose-600",
              badge: "SAVING BUNDLE",
            },
            {
              label: "EXCLUSIVE",
              title: "OFFERS",
              color: "from-violet-600 to-fuchsia-700",
              badge: "SPECIAL PRICE",
            },
            {
              label: "CLEARANCE",
              title: "SALE",
              color: "from-rose-500 to-red-700",
              badge: "70% MAXIMUM",
            },
          ].map((item, idx) => (
            <a
              key={idx}
              href="#"
              className="group aspect-[3/4] relative rounded-3xl overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between p-5 text-white"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} z-0`}></div>
              
              {/* Wave Graphic overlay */}
              <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:12px_12px] z-0"></div>

              {/* Top Banner Tag */}
              <div className="z-10 self-start">
                <span className="text-[8px] md:text-[9px] font-black tracking-widest uppercase bg-white/20 border border-white/35 rounded-full px-2.5 py-0.5">
                  {item.badge}
                </span>
              </div>

              {/* Text Layout */}
              <div className="z-10 flex flex-col mt-auto">
                <span className="text-[10px] md:text-xs font-black tracking-widest opacity-80 uppercase leading-none">
                  {item.label}
                </span>
                <span className="text-4xl md:text-5xl font-black tracking-wider leading-none mt-1 group-hover:scale-105 transition-transform duration-300 origin-left">
                  {item.title}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

    </section>
  );
}
