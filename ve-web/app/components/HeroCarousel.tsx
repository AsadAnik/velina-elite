"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      type: "full-image-clean",
      src: "/1777982649615(1)(1).png",
    },
    {
      type: "concern-grid",
      title: "VELINA ELITE",
      subtitle: "SHOP BY CONCERN",
      bgClass: "bg-[#161412]",
      buttonText: "EXPLORE NOW",
      // Arched frames models
      arches: [
        {
          src: "/banner_skincare.png",
          label: "Skin Radiance",
        },
        {
          src: "/banner_organic.png",
          label: "Herbal Elixirs",
        },
        {
          src: "/banner_makeup.png",
          label: "Glam Cosmetics",
        },
        {
          src: "/banner_skincare.png",
          label: "Acne Spot Care",
        },
        {
          src: "/banner_organic.png",
          label: "Hair Strength",
        },
        {
          src: "/banner_makeup.png",
          label: "Lip Colors",
        },
      ],
    },
    {
      type: "full-image",
      title: "RADIANCE REVEALED",
      desc: "Experience the Ultimate Glow with Our Premium Organic Skincare.",
      src: "/banner_skincare.png",
      buttonText: "SHOP SKINCARE",
      align: "left",
    },
    {
      type: "full-image",
      title: "LUXURY MAKEUP DEALS",
      desc: "Up to 50% Off on Premium Lipsticks, Foundations, and Face Palettes.",
      src: "/banner_makeup.png",
      buttonText: "SHOP COSMETICS",
      align: "right",
    },
    {
      type: "full-image",
      title: "ORGANIC ESSENTIALS",
      desc: "Clean Beauty Elixirs, Camomile Droppers, and Night Repair Creams.",
      src: "/banner_organic.png",
      buttonText: "SHOP ORGANIC",
      align: "left",
    },
  ];

  // Auto-play feature
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative w-full overflow-hidden bg-zinc-50 h-[380px] md:h-[480px]">
      {/* Slider Wrapper */}
      <div
        className="w-full h-full flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div key={i} className="w-full h-full flex-shrink-0 relative">
            {/* Clean image slide with no text overlay */}
            {slide.type === "full-image-clean" && (
              <div className="w-full h-full relative cursor-pointer">
                <Image
                  src={slide.src || ""}
                  alt="Velina Elite Cover"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            )}

            {/* Slide 2: Concerns Arche Grid */}
            {slide.type === "concern-grid" && (
              <div className={`w-full h-full ${slide.bgClass} flex flex-col justify-center relative px-6 md:px-12`}>
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

                {/* Content Layout */}
                <div className="max-w-7xl mx-auto w-full h-full flex items-center justify-between gap-4 z-10 relative overflow-hidden">
                  {/* Left Arches (Desktop) */}
                  <div className="hidden lg:flex items-center gap-4 w-[35%] justify-end">
                    {slide.arches?.slice(0, 3).map((arch, idx) => (
                      <div
                        key={idx}
                        className="w-28 h-60 md:w-32 md:h-72 bg-white rounded-t-full border-4 border-white overflow-hidden shadow-lg transition-transform hover:-translate-y-2 duration-300 flex-shrink-0"
                      >
                        <div className="relative w-full h-full">
                          <Image
                            src={arch.src}
                            alt={arch.label}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                          <span className="absolute bottom-3 left-0 right-0 text-[10px] text-white font-black text-center uppercase tracking-wider">
                            {arch.label}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Middle Title and CTA */}
                  <div className="flex-1 text-center py-6 flex flex-col items-center justify-center min-w-[280px]">
                    <div className="border border-velina-gold/30 rounded-2xl px-6 py-8 backdrop-blur-xs bg-black/30">
                      <h2 className="text-velina-gold text-2xl md:text-4xl font-black tracking-widest leading-none drop-shadow-md">
                        {slide.title}
                      </h2>
                      <h3 className="text-white text-xl md:text-2xl font-bold tracking-wider mt-2.5 uppercase drop-shadow-md">
                        {slide.subtitle}
                      </h3>
                      <button className="mt-6 bg-velina-gold text-white hover:bg-opacity-90 hover:scale-105 active:scale-95 transition-all text-xs font-black tracking-widest px-8 py-3 rounded-full shadow-lg flex items-center gap-2">
                        {slide.buttonText}
                        <ChevronRight size={14} className="stroke-[3]" />
                      </button>
                    </div>
                  </div>

                  {/* Right Arches (Desktop) */}
                  <div className="hidden lg:flex items-center gap-4 w-[35%] justify-start">
                    {slide.arches?.slice(3, 6).map((arch, idx) => (
                      <div
                        key={idx}
                        className="w-28 h-60 md:w-32 md:h-72 bg-white rounded-t-full border-4 border-white overflow-hidden shadow-lg transition-transform hover:-translate-y-2 duration-300 flex-shrink-0"
                      >
                        <div className="relative w-full h-full">
                          <Image
                            src={arch.src}
                            alt={arch.label}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                          <span className="absolute bottom-3 left-0 right-0 text-[10px] text-white font-black text-center uppercase tracking-wider">
                            {arch.label}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mobile version of Arches (Swipeable List at bottom of mobile view) */}
                <div className="absolute bottom-4 left-0 right-0 lg:hidden flex gap-3 overflow-x-auto px-6 no-scrollbar z-10 justify-start sm:justify-center">
                  {slide.arches?.slice(0, 4).map((arch, idx) => (
                    <div
                      key={idx}
                      className="w-16 h-28 bg-white rounded-t-full border-2 border-white overflow-hidden shadow-md flex-shrink-0"
                    >
                      <div className="relative w-full h-full">
                        <Image
                          src={arch.src}
                          alt={arch.label}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/20"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Slides 2, 3, 4: Full Banners with local generated assets */}
            {slide.type === "full-image" && (
              <div className="w-full h-full relative">
                {/* Background image */}
                <Image
                  src={slide.src || ""}
                  alt={slide.title || ""}
                  fill
                  className="object-cover object-center"
                  priority
                />

                {/* Shadow overlays */}
                <div className={`absolute inset-0 bg-gradient-to-r ${slide.align === "left"
                    ? "from-black/70 via-black/40 to-transparent"
                    : "from-transparent via-black/40 to-black/70"
                  }`}></div>

                {/* Text overlays */}
                <div className={`absolute inset-0 max-w-7xl mx-auto px-8 md:px-16 flex flex-col justify-center z-10 ${slide.align === "left" ? "items-start text-left" : "items-end text-right ml-auto"
                  }`}>
                  <div className="max-w-md md:max-w-xl text-white">
                    <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight uppercase text-velina-peach drop-shadow-md">
                      {slide.title}
                    </h2>
                    <p className="mt-3 text-sm md:text-lg text-zinc-100 font-medium leading-relaxed drop-shadow-sm">
                      {slide.desc}
                    </p>
                    <button className="mt-6 bg-shajgoj-pink text-white hover:bg-shajgoj-magenta transition-all text-xs font-black tracking-widest px-8 py-3 rounded-full shadow-lg">
                      {slide.buttonText}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Manual Left/Right Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-xs transition-colors z-20 cursor-pointer hidden sm:block"
        aria-label="Previous Slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-xs transition-colors z-20 cursor-pointer hidden sm:block"
        aria-label="Next Slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${currentSlide === idx ? "bg-shajgoj-pink w-6" : "bg-white/60 hover:bg-white"
              }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
