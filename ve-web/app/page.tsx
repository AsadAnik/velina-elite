import React from "react";
import Navbar from "./components/Navbar";
import HeroCarousel from "./components/HeroCarousel";
import ConcernCategories from "./components/ConcernCategories";
import DealsSection from "./components/DealsSection";
import PromoBanners from "./components/PromoBanners";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import StickyCartWidget from "./components/StickyCartWidget";
import { ShieldCheck, Award, Sparkles, MessageSquare } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-sans selection:bg-velina-rose selection:text-white transition-colors duration-300">
      {/* 1. Header / Navigation */}
      <Navbar />

      {/* 2. Main Page Layout */}
      <main className="flex-grow">
        {/* Hero Slider Section */}
        <HeroCarousel />

        {/* Concern Categories Grid */}
        <ConcernCategories />

        {/* Deals You Cannot Miss */}
        <DealsSection />

        {/* Interactive Steppers and Banners */}
        <PromoBanners />

        {/* 3. Authenticity / Trust Ribbon (Dark Banner) */}
        <section className="bg-zinc-900 dark:bg-zinc-950 py-8 text-white w-full border-t border-zinc-800 dark:border-zinc-900/50 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {/* Authenticity Product */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 p-2">
              <div className="bg-velina-rose text-white p-3.5 rounded-full shadow-md animate-pulse">
                <ShieldCheck size={20} className="stroke-[2.5]" />
              </div>
              <div className="text-left">
                <h4 className="text-sm font-black leading-tight uppercase tracking-wider">100%</h4>
                <p className="text-[10px] font-bold text-pink-200 uppercase tracking-widest leading-none mt-0.5">
                  AUTHENTIC PRODUCTS
                </p>
              </div>
            </div>

            {/* 15000+ Beauty Products */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 p-2">
              <div className="bg-velina-rose text-white p-3.5 rounded-full shadow-md">
                <Sparkles size={20} className="stroke-[2.5]" />
              </div>
              <div className="text-left">
                <h4 className="text-sm font-black leading-tight uppercase tracking-wider">15000+</h4>
                <p className="text-[10px] font-bold text-pink-200 uppercase tracking-widest leading-none mt-0.5">
                  BEAUTY PRODUCTS
                </p>
              </div>
            </div>

            {/* 400+ Brands */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 p-2">
              <div className="bg-velina-rose text-white p-3.5 rounded-full shadow-md">
                <Award size={20} className="stroke-[2.5]" />
              </div>
              <div className="text-left">
                <h4 className="text-sm font-black leading-tight uppercase tracking-wider">400+</h4>
                <p className="text-[10px] font-bold text-pink-200 uppercase tracking-widest leading-none mt-0.5">
                  EXCLUSIVE BRANDS
                </p>
              </div>
            </div>

            {/* Consultation */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 p-2">
              <div className="bg-velina-rose text-white p-3.5 rounded-full shadow-md">
                <MessageSquare size={20} className="stroke-[2.5]" />
              </div>
              <div className="text-left">
                <h4 className="text-sm font-black leading-tight uppercase tracking-wider">FREE</h4>
                <p className="text-[10px] font-bold text-pink-200 uppercase tracking-widest leading-none mt-0.5">
                  BEAUTY CONSULTATION
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 4. Footer */}
      <Footer />

      {/* 5. Sticky Shopping Bag Widget (Hangs on the right side) */}
      <StickyCartWidget />
      <CartDrawer />
    </div>
  );
}
