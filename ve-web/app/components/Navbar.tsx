"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Heart, User, ShoppingBag, Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { useStore } from "@/lib/store";
import { categories } from "@/lib/data";
import ThemeToggle from "./ThemeToggle";

const BRAND_LOGO = "/1776256116755-removebg-preview.png";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileOpenCat, setMobileOpenCat] = useState<string | null>(null);
  const dropdownTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { cartCount, openCartDrawer } = useStore();

  const promotionalBadges = [
    { name: "UNDERGARMENTS", href: "#", bg: "bg-blue-600 hover:bg-blue-700 text-white" },
    { name: "COMBO", href: "#", bg: "bg-pink-600 hover:bg-pink-700 text-white" },
    { name: "JEWELLERY", href: "#", bg: "bg-purple-600 hover:bg-purple-700 text-white" },
    { name: "CLEARANCE SALE", href: "#", bg: "bg-cyan-500 hover:bg-cyan-600 text-white" },
    { name: "MEN", href: "#", bg: "bg-emerald-800 hover:bg-emerald-900 text-white" },
  ];

  const handleMouseEnter = (slug: string) => {
    if (dropdownTimer.current) clearTimeout(dropdownTimer.current);
    setActiveDropdown(slug);
  };

  const handleMouseLeave = () => {
    dropdownTimer.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className="w-full bg-white dark:bg-zinc-950 shadow-sm dark:shadow-zinc-900 sticky top-0 z-50 transition-colors duration-300">
        {/* Top info strip */}
        <div className="bg-zinc-100 dark:bg-zinc-900 py-1.5 px-4 text-xs flex justify-between items-center border-b border-zinc-200 dark:border-zinc-800 transition-colors">
          <div className="text-zinc-500 dark:text-zinc-400 mx-auto sm:mx-0">
            Welcome to{" "}
            <span className="font-bold text-velina-gold">Velina Elite BD</span>{" "}
            — Premium Beauty Shopping Portal
          </div>
          <div className="hidden sm:block text-zinc-400 dark:text-zinc-500 font-medium">
            Hotline: +880 9612-444888
          </div>
        </div>

        {/* Main header row */}
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-[5px] flex items-center justify-between gap-3">
          {/* Hamburger (mobile) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-1 text-zinc-700 dark:text-zinc-300 md:hidden hover:text-velina-rose"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="relative block h-12 w-32 shrink-0 overflow-hidden sm:w-36 md:h-14 md:w-44 lg:w-48"
            >
              <Image
                src={BRAND_LOGO}
                alt="Velina Elite BD"
                fill
                sizes="(max-width: 768px) 144px, 192px"
                className="object-contain object-left origin-left scale-[1.75] md:scale-[2] dark:invert dark:brightness-95 pt-2"
                priority
              />
            </Link>
            <Link
              href="#"
              className="hidden md:inline-block text-xs font-bold text-zinc-800 dark:text-zinc-200 hover:text-velina-rose tracking-wider transition-colors ml-2 border-l border-zinc-200 dark:border-zinc-700 pl-4"
            >
              BRANDS
            </Link>
          </div>

          {/* Search (desktop) */}
          <div className="flex-1 max-w-xl hidden md:block">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products, brands, concerns..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 focus:border-velina-rose dark:focus:border-velina-rose focus:bg-white dark:focus:bg-zinc-800 rounded-full py-2.5 pl-5 pr-11 text-sm outline-none transition-all duration-200 text-zinc-800 dark:text-zinc-200 placeholder:text-zinc-400 dark:placeholder:text-zinc-500"
              />
              <button className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-zinc-400 hover:text-velina-rose transition-colors">
                <Search size={18} />
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Theme toggle */}
            <ThemeToggle />

            <Link
              href="/wishlist"
              className="hidden md:flex items-center gap-1.5 bg-[#1c223a] dark:bg-zinc-800 text-white hover:opacity-90 px-2.5 sm:px-4 py-2 rounded-full text-xs font-bold transition-all"
            >
              <Heart size={14} className="fill-white" />
              <span className="hidden sm:inline">WISHLIST</span>
            </Link>
            <Link
              href="/auth"
              className="hidden md:flex items-center gap-1 border border-zinc-200 dark:border-zinc-700 hover:border-zinc-300 dark:hover:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-800 px-2.5 sm:px-3.5 py-2 rounded-full text-xs font-bold text-zinc-700 dark:text-zinc-300 transition-all"
            >
              <User size={14} />
              <span className="hidden sm:inline">LOGIN</span>
            </Link>
            <button
              onClick={openCartDrawer}
              className="flex items-center gap-1.5 bg-velina-rose text-white hover:bg-velina-magenta px-2.5 sm:px-4 py-2 rounded-full text-xs font-bold shadow-sm transition-all"
            >
              <ShoppingBag size={14} />
              <span className="hidden sm:inline">BAG</span>
              <span className="bg-white text-velina-rose px-1.5 py-0.5 rounded-full text-[10px] font-black leading-none">
                {cartCount}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile search */}
        <div className="px-4 pb-3 md:hidden">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 focus:border-velina-rose rounded-full py-2 pl-4 pr-10 text-xs outline-none text-zinc-800 dark:text-zinc-200 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 transition-all"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-zinc-400">
              <Search size={16} />
            </button>
          </div>
        </div>

        {/* Desktop category bar */}
        <nav className="border-t border-zinc-100 dark:border-zinc-800 hidden md:block bg-white dark:bg-zinc-950 transition-colors">
          <div className="max-w-7xl mx-auto px-6 py-0 flex items-center justify-between flex-wrap gap-2 text-xs font-bold tracking-wider">
            <div className="flex items-center">
              {categories.map((cat) => (
                <div
                  key={cat.slug}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(cat.slug)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={`/category/${cat.slug}`}
                    className={`flex items-center gap-1 px-4 py-3 text-zinc-700 dark:text-zinc-300 hover:text-velina-rose transition-colors relative group ${activeDropdown === cat.slug ? "text-velina-rose" : ""
                      }`}
                  >
                    {cat.name}
                    <ChevronDown
                      size={12}
                      className={`transition-transform duration-200 ${activeDropdown === cat.slug ? "rotate-180" : ""
                        }`}
                    />
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-velina-rose transition-all group-hover:w-full" />
                  </Link>

                  {/* Mega dropdown */}
                  {activeDropdown === cat.slug && (
                    <div
                      className="absolute top-full left-0 mt-0 w-72 bg-white dark:bg-zinc-900 shadow-xl dark:shadow-zinc-950 border border-zinc-100 dark:border-zinc-800 rounded-b-2xl z-50 p-4"
                      onMouseEnter={() => handleMouseEnter(cat.slug)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <p className="text-[10px] font-black text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-3 px-1">
                        {cat.name} Categories
                      </p>
                      <div className="grid grid-cols-2 gap-0.5">
                        {cat.subcategories.map((sub) => (
                          <Link
                            key={sub.slug}
                            href={`/category/${cat.slug}/${sub.slug}`}
                            className="flex items-center justify-between px-3 py-2 rounded-xl hover:bg-velina-peach/30 dark:hover:bg-velina-rose/10 group/sub transition-colors"
                          >
                            <span className="text-xs text-zinc-700 dark:text-zinc-300 group-hover/sub:text-velina-rose font-medium transition-colors">
                              {sub.name}
                            </span>
                            <span className="text-[10px] text-zinc-400 dark:text-zinc-500 bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded-full ml-1 shrink-0">
                              {sub.count}
                            </span>
                          </Link>
                        ))}
                      </div>
                      <Link
                        href={`/category/${cat.slug}`}
                        className="mt-3 flex items-center gap-1 text-velina-rose text-xs font-bold px-3 hover:gap-2 transition-all"
                      >
                        View all {cat.name} <ChevronRight size={13} />
                      </Link>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Promo badges */}
            <div className="flex items-center gap-2">
              {promotionalBadges.map((badge, i) => (
                <Link
                  key={i}
                  href={badge.href}
                  className={`px-3 py-1.5 rounded-full text-[10px] tracking-widest font-black transition-all ${badge.bg}`}
                >
                  {badge.name}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile backdrop */}
      <div
        className={`fixed inset-0 bg-black/40 z-[55] md:hidden transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-4/5 max-w-xs bg-white dark:bg-zinc-950 z-[60] shadow-2xl flex flex-col transition-transform duration-300 ease-in-out md:hidden ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900">
          <Link href="/" className="relative block h-12 w-36 shrink-0 overflow-hidden">
            <Image
              src={BRAND_LOGO}
              alt="Velina Elite BD"
              fill
              sizes="144px"
              className="object-contain object-left origin-left scale-[1.75] dark:invert dark:brightness-95"
            />
          </Link>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800"
            >
              <X size={20} className="text-zinc-600 dark:text-zinc-400" />
            </button>
          </div>
        </div>

        {/* Drawer nav */}
        <div className="flex-1 overflow-y-auto py-2">
          {categories.map((cat) => (
            <div key={cat.slug} className="border-b border-zinc-50 dark:border-zinc-900">
              <button
                onClick={() =>
                  setMobileOpenCat(mobileOpenCat === cat.slug ? null : cat.slug)
                }
                className="w-full flex items-center justify-between px-5 py-3.5 text-sm font-bold text-zinc-800 dark:text-zinc-200 hover:text-velina-rose transition-colors"
              >
                {cat.name}
                <ChevronDown
                  size={16}
                  className={`text-zinc-400 transition-transform duration-200 ${mobileOpenCat === cat.slug ? "rotate-180" : ""
                    }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${mobileOpenCat === cat.slug ? "max-h-[400px]" : "max-h-0"
                  }`}
              >
                <div className="pb-2 px-4 grid grid-cols-2 gap-1">
                  {cat.subcategories.map((sub) => (
                    <Link
                      key={sub.slug}
                      href={`/category/${cat.slug}/${sub.slug}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center justify-between px-3 py-2 rounded-xl bg-zinc-50 dark:bg-zinc-900 hover:bg-velina-peach/30 dark:hover:bg-velina-rose/10 transition-colors"
                    >
                      <span className="text-xs text-zinc-700 dark:text-zinc-300 font-medium">
                        {sub.name}
                      </span>
                      <span className="text-[9px] text-zinc-400 shrink-0 ml-1">
                        {sub.count}
                      </span>
                    </Link>
                  ))}
                </div>
                <Link
                  href={`/category/${cat.slug}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mx-5 mb-3 flex items-center gap-1 text-velina-rose text-xs font-bold"
                >
                  View all <ChevronRight size={12} />
                </Link>
              </div>
            </div>
          ))}

          <div className="px-5 pt-4 pb-6">
            <p className="text-[10px] font-black text-zinc-400 dark:text-zinc-600 uppercase tracking-widest mb-3">
              Special Sections
            </p>
            <div className="flex flex-wrap gap-2">
              {promotionalBadges.map((badge, i) => (
                <Link
                  key={i}
                  href={badge.href}
                  className={`px-3 py-1.5 rounded-full text-[10px] tracking-widest font-black ${badge.bg}`}
                >
                  {badge.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Drawer footer */}
        <div className="px-5 py-4 border-t border-zinc-100 dark:border-zinc-800 flex gap-3">
          <Link
            href="/auth"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex-1 flex items-center justify-center gap-2 border border-zinc-200 dark:border-zinc-700 py-2.5 rounded-full text-xs font-bold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
          >
            <User size={14} /> Login
          </Link>
          <Link
            href="/wishlist"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex-1 flex items-center justify-center gap-2 bg-[#1c223a] dark:bg-zinc-800 text-white py-2.5 rounded-full text-xs font-bold"
          >
            <Heart size={14} /> Wishlist
          </Link>
        </div>
      </div>
    </>
  );
}
