"use client";

import React from "react";
import { ArrowUp } from "lucide-react";

// Inline SVG components to ensure dependency compatibility
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { icon: <FacebookIcon />, href: "#" },
    { icon: <TwitterIcon />, href: "#" },
    { icon: <YoutubeIcon />, href: "#" },
    { icon: <InstagramIcon />, href: "#" },
  ];

  return (
    <footer className="bg-shajgoj-dark text-slate-300 pt-16 pb-8 border-t border-zinc-800 w-full relative">
      {/* 5-Column Grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-2 md:grid-cols-5 gap-8 border-b border-zinc-800 pb-12">
        {/* Column 1: Brand & Socials */}
        <div className="col-span-2 md:col-span-1 space-y-6">
          <a href="#" className="flex flex-col">
            <span className="text-2xl font-black tracking-widest text-white">VELINA ELITE</span>
            <span className="text-[8px] text-zinc-500 font-bold tracking-widest -mt-1 uppercase">
              BD BEAUTY PORTAL
            </span>
          </a>
          <ul className="space-y-2 text-xs font-semibold">
            <li><a href="#" className="hover:text-white transition-colors">OUR STORY</a></li>
            <li><a href="#" className="hover:text-white transition-colors">VELINA MAGAZINE</a></li>
            <li><a href="#" className="hover:text-white transition-colors">JOIN OUR TEAM</a></li>
            <li><a href="#" className="hover:text-white transition-colors">AUTHENTICITY</a></li>
          </ul>
          <div className="space-y-2.5">
            <h4 className="text-[10px] font-black tracking-widest uppercase text-zinc-500">SHARE YOUR LOVE</h4>
            <div className="flex gap-2">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="p-2 bg-zinc-800 hover:bg-shajgoj-pink text-white rounded-full transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Column 2: Top Categories */}
        <div className="space-y-4">
          <h4 className="text-xs font-black tracking-widest uppercase text-pink-500">TOP CATEGORIES</h4>
          <ul className="space-y-2 text-xs font-semibold text-zinc-400">
            <li><a href="#" className="hover:text-white transition-colors">MAKEUP</a></li>
            <li><a href="#" className="hover:text-white transition-colors">SKIN</a></li>
            <li><a href="#" className="hover:text-white transition-colors">EYE CARE</a></li>
            <li><a href="#" className="hover:text-white transition-colors">HAIR</a></li>
            <li><a href="#" className="hover:text-white transition-colors">PERSONAL CARE</a></li>
            <li><a href="#" className="hover:text-white transition-colors">NATURAL</a></li>
            <li><a href="#" className="hover:text-white transition-colors">MOM & BABY</a></li>
          </ul>
        </div>

        {/* Column 3: Quick Links */}
        <div className="space-y-4">
          <h4 className="text-xs font-black tracking-widest uppercase text-pink-500">QUICK LINKS</h4>
          <ul className="space-y-2 text-xs font-semibold text-zinc-400">
            <li><a href="#" className="hover:text-white transition-colors">OFFERS</a></li>
            <li><a href="#" className="hover:text-white transition-colors">MENS PRODUCTS</a></li>
            <li><a href="#" className="hover:text-white transition-colors">SKIN CONCERNS</a></li>
            <li><a href="#" className="hover:text-white transition-colors">NEW ARRIVAL</a></li>
            <li><a href="#" className="hover:text-white transition-colors">MAKEUP</a></li>
          </ul>
        </div>

        {/* Column 4: All About Beauty */}
        <div className="space-y-4">
          <h4 className="text-xs font-black tracking-widest uppercase text-pink-500">ALL ABOUT BEAUTY</h4>
          <ul className="space-y-2 text-xs font-semibold text-zinc-400">
            <li><a href="#" className="hover:text-white transition-colors">KNOW YOUR ROUTINE</a></li>
            <li><a href="#" className="hover:text-white transition-colors">HAIR CARE 101</a></li>
            <li><a href="#" className="hover:text-white transition-colors">SKIN CARE 101</a></li>
            <li><a href="#" className="hover:text-white transition-colors">MAKEUP 101</a></li>
          </ul>
        </div>

        {/* Column 5: Help & Payments */}
        <div className="col-span-2 md:col-span-1 space-y-6">
          <div className="space-y-4">
            <h4 className="text-xs font-black tracking-widest uppercase text-pink-500">HELP</h4>
            <ul className="grid grid-cols-2 md:grid-cols-1 gap-2 text-xs font-semibold text-zinc-400">
              <li><a href="#" className="hover:text-white transition-colors">CONTACT US</a></li>
              <li><a href="#" className="hover:text-white transition-colors">POINTS</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQS</a></li>
              <li><a href="#" className="hover:text-white transition-colors">SHIPPING & DELIVERY</a></li>
              <li><a href="#" className="hover:text-white transition-colors">TERMS & CONDITIONS</a></li>
              <li><a href="#" className="hover:text-white transition-colors">REFUND & RETURN POLICY</a></li>
              <li><a href="#" className="hover:text-white transition-colors">TRADE LICENSE</a></li>
              <li><a href="#" className="hover:text-white transition-colors">PRIVACY POLICY</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Payment Channels Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 flex flex-col sm:flex-row justify-between items-center gap-4 border-b border-zinc-800">
        <div className="text-xs font-black tracking-widest text-zinc-500 uppercase">
          PAYMENTS ACCEPTED
        </div>
        {/* Payment Mock Logos */}
        <div className="flex flex-wrap gap-2.5 items-center justify-center">
          {["bKash", "Visa", "Mastercard", "AMEX"].map((pay, i) => (
            <span
              key={i}
              className="text-[10px] font-black uppercase tracking-wider text-slate-300 border border-zinc-700 rounded bg-zinc-800/50 px-3.5 py-1.5 shadow-xs"
            >
              {pay}
            </span>
          ))}
        </div>
      </div>

      {/* Legal & Scroll-to-top */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Footer Legal Categories */}
        <div className="flex flex-wrap gap-4 text-[10px] font-extrabold tracking-wider text-zinc-500 justify-center">
          <a href="#" className="hover:text-white transition-colors">AUTHENTICITY</a>
          <span>•</span>
          <a href="#" className="hover:text-white transition-colors">TERMS & CONDITIONS</a>
          <span>•</span>
          <a href="#" className="hover:text-white transition-colors">PRIVACY POLICY</a>
          <span>•</span>
          <a href="#" className="hover:text-white transition-colors">REFUND & RETURN POLICY</a>
          <span>•</span>
          <a href="#" className="hover:text-white transition-colors">FAQS</a>
        </div>

        {/* Copyright */}
        <div className="text-[11px] text-zinc-500 font-medium text-center md:text-right">
          Copyright © 2026 Velina Elite BD. All Rights Reserved.
        </div>
      </div>

      {/* Sticky Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute right-6 bottom-8 p-3 rounded-xl bg-shajgoj-pink text-white hover:bg-shajgoj-magenta transition-colors cursor-pointer shadow-lg z-10"
        aria-label="Scroll to Top"
      >
        <ArrowUp size={16} className="stroke-[3]" />
      </button>
    </footer>
  );
}
