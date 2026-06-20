"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Search, Heart, User, ShoppingBag, Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { name: "Makeup", href: "#" },
    { name: "Skin", href: "#" },
    { name: "Hair", href: "#" },
    { name: "Personal care", href: "#" },
    { name: "Mom & Baby", href: "#" },
    { name: "Fragrance", href: "#" },
  ];

  const promotionalBadges = [
    { name: "UNDERGARMENTS", href: "#", bg: "bg-blue-600 hover:bg-blue-700 text-white" },
    { name: "COMBO", href: "#", bg: "bg-pink-600 hover:bg-pink-700 text-white" },
    { name: "JEWELLERY", href: "#", bg: "bg-purple-600 hover:bg-purple-700 text-white" },
    { name: "CLEARANCE SALE", href: "#", bg: "bg-cyan-500 hover:bg-cyan-600 text-white" },
    { name: "MEN", href: "#", bg: "bg-emerald-800 hover:bg-emerald-900 text-white" },
  ];

  return (
    <header className="w-full bg-white shadow-xs sticky top-0 z-50">
      {/* Brand Info Banner */}
      <div className="bg-zinc-100 py-1.5 px-4 text-xs flex justify-between items-center border-b border-zinc-200">
        <div className="text-zinc-500 mx-auto sm:mx-0">
          Welcome to <span className="font-bold text-velina-gold">Velina Elite BD</span> - Premium Beauty Shopping Portal
        </div>
        <div className="hidden sm:block text-zinc-400 font-medium">
          Hotline: +880 9612-444888
        </div>
      </div>

      {/* Main Top Header */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between gap-4">
        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-1 text-zinc-700 md:hidden hover:text-shajgoj-pink"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Brand Logo */}
        <div className="flex items-center gap-4">
          <a href="#" className="relative w-36 h-12 flex items-center">
            <Image
              src="/1776256116755.png"
              alt="Velina Elite"
              width={140}
              height={44}
              className="object-contain"
              priority
            />
          </a>

          {/* Brands link next to logo */}
          <a
            href="#"
            className="hidden md:inline-block text-xs font-bold text-zinc-800 hover:text-shajgoj-pink tracking-wider transition-colors ml-2 border-l border-zinc-200 pl-4"
          >
            BRANDS
          </a>
        </div>

        {/* Search Bar - Center */}
        <div className="flex-1 max-w-xl hidden md:block">
          <div className="relative group">
            <input
              type="text"
              placeholder="Search products, brands, concerns (e.g. AXIS-Y)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-50 border border-zinc-200 focus:border-shajgoj-pink focus:bg-white rounded-full py-2.5 pl-5 pr-11 text-sm outline-none transition-all duration-200"
            />
            <button className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-zinc-400 hover:text-shajgoj-pink transition-colors">
              <Search size={18} />
            </button>
          </div>
        </div>

        {/* Actions Bar - Right */}
        <div className="flex items-center gap-3">
          {/* Wishlist */}
          <a
            href="#"
            className="flex items-center gap-2 bg-[#1c223a] text-white hover:bg-opacity-90 px-4 py-2 rounded-full text-xs font-bold transition-all"
          >
            <Heart size={14} className="fill-white" />
            <span className="hidden sm:inline">WISHLIST</span>
          </a>

          {/* Login */}
          <a
            href="#"
            className="flex items-center gap-1.5 border border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50 px-3.5 py-2 rounded-full text-xs font-bold text-zinc-700 transition-all"
          >
            <User size={14} />
            <span className="hidden sm:inline">LOGIN</span>
          </a>

          {/* Shopping Bag */}
          <a
            href="#"
            className="flex items-center gap-2 bg-shajgoj-pink text-white hover:bg-shajgoj-magenta px-4 py-2 rounded-full text-xs font-bold shadow-sm transition-all"
          >
            <ShoppingBag size={14} />
            <span>BAG</span>
            <span className="bg-white text-shajgoj-pink px-2 py-0.5 rounded-full text-[10px] font-black leading-none">
              0
            </span>
          </a>
        </div>
      </div>

      {/* Mobile Search Bar - Shows only on mobile under the header */}
      <div className="px-4 pb-3 md:hidden">
        <div className="relative">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-zinc-50 border border-zinc-200 focus:border-shajgoj-pink focus:bg-white rounded-full py-2 pl-4 pr-10 text-xs outline-none transition-all"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-zinc-400">
            <Search size={16} />
          </button>
        </div>
      </div>

      {/* Secondary Navigation (Category Bar) - Desktop */}
      <nav className="border-t border-zinc-100 hidden md:block bg-white">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between flex-wrap gap-2 text-xs font-bold tracking-wider">
          <div className="flex items-center gap-6 text-zinc-700">
            {categories.map((cat, i) => (
              <a
                key={i}
                href={cat.href}
                className="hover:text-shajgoj-pink transition-colors relative py-1.5 group"
              >
                {cat.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-shajgoj-pink transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {promotionalBadges.map((badge, i) => (
              <a
                key={i}
                href={badge.href}
                className={`px-3 py-1.5 rounded-full text-[10px] tracking-widest font-black transition-all ${badge.bg}`}
              >
                {badge.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div
          className={`w-72 bg-white h-full flex flex-col justify-between shadow-xl transform transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            {/* Drawer Header */}
            <div className="flex justify-between items-center px-5 py-4 border-b border-zinc-100">
              <span className="font-black text-xl tracking-widest">MENU</span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-1 text-zinc-500 hover:text-black"
              >
                <X size={20} />
              </button>
            </div>

            {/* Menu Items */}
            <div className="py-4">
              <div className="px-5 pb-3">
                <span className="text-[10px] font-bold text-zinc-400 tracking-widest block uppercase mb-2">
                  Shop Categories
                </span>
                <div className="flex flex-col gap-3 font-semibold text-sm text-zinc-700">
                  {categories.map((cat, i) => (
                    <a
                      key={i}
                      href={cat.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="py-1 hover:text-shajgoj-pink transition-colors flex justify-between items-center"
                    >
                      {cat.name}
                      <ArrowRight size={14} className="text-zinc-300" />
                    </a>
                  ))}
                </div>
              </div>

              <hr className="border-zinc-100 my-2" />

              <div className="px-5 pt-3">
                <span className="text-[10px] font-bold text-zinc-400 tracking-widest block uppercase mb-2">
                  Special Categories
                </span>
                <div className="flex flex-wrap gap-2">
                  {promotionalBadges.map((badge, i) => (
                    <a
                      key={i}
                      href={badge.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`px-3 py-2 rounded-lg text-[9px] tracking-wider font-extrabold shadow-xs ${badge.bg}`}
                    >
                      {badge.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Drawer Footer */}
          <div className="p-5 border-t border-zinc-100 bg-zinc-50 text-xs text-zinc-500">
            <div className="flex justify-between mb-2">
              <span>Customer Support:</span>
              <span className="font-bold text-zinc-700">+880 9612-444888</span>
            </div>
            <div>
              <span>Experience authentic beauty and luxury cosmetics online at Velina Elite BD.</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
