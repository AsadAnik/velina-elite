"use client";

import { useTheme } from "@/app/providers";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="w-9 h-9" />;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle dark mode"
      className={`relative w-9 h-9 flex items-center justify-center rounded-full border transition-all duration-300 ${
        isDark
          ? "bg-zinc-800 border-zinc-700 text-amber-400 hover:bg-zinc-700"
          : "bg-zinc-100 border-zinc-200 text-zinc-600 hover:bg-zinc-200"
      }`}
    >
      <span
        className={`absolute transition-all duration-300 ${
          isDark ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-90 scale-50"
        }`}
      >
        <Moon size={16} />
      </span>
      <span
        className={`absolute transition-all duration-300 ${
          isDark ? "opacity-0 -rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"
        }`}
      >
        <Sun size={16} />
      </span>
    </button>
  );
}
