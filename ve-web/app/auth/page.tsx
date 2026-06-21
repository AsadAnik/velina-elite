"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Eye, EyeOff, Mail, Lock, User, Phone, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

type Tab = "signin" | "register";

export default function AuthPage() {
  const [tab, setTab] = useState<Tab>("signin");
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left brand panel (desktop only) */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden flex-col items-center justify-center p-12 bg-gradient-to-br from-[#1c1420] via-[#2e1a2e] to-[#1c223a]">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-velina-rose/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-velina-gold/10 blur-3xl" />

        <div className="relative z-10 text-center">
          <Image
            src="/1776256116755.png"
            alt="Velina Elite"
            width={200}
            height={64}
            className="object-contain mx-auto [mix-blend-mode:screen] brightness-200"
          />
          <div className="mt-8 space-y-4">
            <h2 className="text-3xl font-black text-white leading-tight">
              Your Beauty,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-velina-gold to-velina-rose">Elevated.</span>
            </h2>
            <p className="text-zinc-400 text-sm max-w-xs mx-auto leading-relaxed">
              Join 500,000+ beauty lovers discovering authentic premium products at the best prices.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-4">
            {[{ label: "500K+", sub: "Happy Customers" }, { label: "10K+", sub: "Products" }, { label: "100%", sub: "Authentic" }].map((item) => (
              <div key={item.label} className="bg-white/5 backdrop-blur-sm rounded-2xl p-3 border border-white/10">
                <p className="text-velina-gold font-black text-lg">{item.label}</p>
                <p className="text-zinc-400 text-[10px] leading-tight mt-0.5">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right auth panel */}
      <div className="flex-1 flex items-center justify-center px-5 py-10 bg-gradient-to-br from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900 transition-colors">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="lg:hidden text-center mb-8">
            <Image
              src="/1776256116755.png"
              alt="Velina Elite"
              width={160}
              height={50}
              className="object-contain mx-auto [mix-blend-mode:multiply] dark:invert dark:[mix-blend-mode:normal]"
            />
          </div>

          {/* Card */}
          <div className="bg-white dark:bg-zinc-900 rounded-3xl shadow-xl dark:shadow-zinc-950 border border-zinc-100 dark:border-zinc-800 overflow-hidden">
            {/* Tabs */}
            <div className="flex border-b border-zinc-100 dark:border-zinc-800">
              {(["signin", "register"] as Tab[]).map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`flex-1 py-4 text-sm font-bold transition-all relative ${
                    tab === t ? "text-velina-rose" : "text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300"
                  }`}
                >
                  {t === "signin" ? "Sign In" : "Create Account"}
                  {tab === t && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-velina-rose rounded-full" />}
                </button>
              ))}
            </div>

            <div className="p-6 sm:p-8">
              {submitted && (
                <div className="mb-5 flex items-center gap-3 bg-emerald-50 dark:bg-emerald-950 border border-emerald-200 dark:border-emerald-800 rounded-2xl px-4 py-3">
                  <CheckCircle2 size={18} className="text-emerald-500 shrink-0" />
                  <p className="text-sm text-emerald-700 dark:text-emerald-400 font-medium">
                    {tab === "signin" ? "Welcome back! Signing you in..." : "Account created! Welcome to Velina Elite BD ✨"}
                  </p>
                </div>
              )}

              {tab === "signin" ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <h1 className="text-xl font-black text-zinc-900 dark:text-zinc-100">Welcome back 👋</h1>
                    <p className="text-sm text-zinc-400 dark:text-zinc-500 mt-1">Sign in to access your wishlist, orders and more.</p>
                  </div>

                  {[
                    { label: "Email", type: "email", icon: <Mail size={15} />, placeholder: "you@example.com" },
                  ].map((field) => (
                    <div key={field.label} className="space-y-1.5">
                      <label className="text-xs font-bold text-zinc-600 dark:text-zinc-400 uppercase tracking-wider">{field.label}</label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400">{field.icon}</span>
                        <input type={field.type} required placeholder={field.placeholder}
                          className="w-full pl-10 pr-4 py-3 border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 rounded-xl text-sm outline-none focus:border-velina-rose transition-colors" />
                      </div>
                    </div>
                  ))}

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-zinc-600 dark:text-zinc-400 uppercase tracking-wider">Password</label>
                    <div className="relative">
                      <Lock size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" />
                      <input type={showPass ? "text" : "password"} required placeholder="••••••••"
                        className="w-full pl-10 pr-11 py-3 border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 placeholder:text-zinc-400 rounded-xl text-sm outline-none focus:border-velina-rose transition-colors" />
                      <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300">
                        {showPass ? <EyeOff size={15} /> : <Eye size={15} />}
                      </button>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button type="button" className="text-xs text-velina-rose font-bold hover:underline">Forgot password?</button>
                  </div>

                  <button type="submit" className="w-full bg-velina-rose text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-velina-magenta transition-colors text-sm shadow-sm shadow-velina-rose/25">
                    Sign In <ArrowRight size={16} />
                  </button>

                  <div className="relative flex items-center gap-3 py-1">
                    <span className="flex-1 h-px bg-zinc-100 dark:bg-zinc-800" />
                    <span className="text-xs text-zinc-400 dark:text-zinc-500 font-medium">or continue with</span>
                    <span className="flex-1 h-px bg-zinc-100 dark:bg-zinc-800" />
                  </div>

                  <button type="button" className="w-full flex items-center justify-center gap-3 border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 py-3 rounded-xl text-sm font-medium hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors">
                    <svg viewBox="0 0 24 24" className="w-4 h-4">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    Continue with Google
                  </button>
                </form>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <h1 className="text-xl font-black text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                      <Sparkles size={20} className="text-velina-gold" /> Join Velina Elite
                    </h1>
                    <p className="text-sm text-zinc-400 dark:text-zinc-500 mt-1">Create your account and start shopping.</p>
                  </div>

                  {[
                    { label: "Full Name", type: "text", icon: <User size={15} />, placeholder: "Your full name" },
                    { label: "Email", type: "email", icon: <Mail size={15} />, placeholder: "you@example.com" },
                    { label: "Phone", type: "tel", icon: <Phone size={15} />, placeholder: "+880 ..." },
                  ].map((field) => (
                    <div key={field.label} className="space-y-1.5">
                      <label className="text-xs font-bold text-zinc-600 dark:text-zinc-400 uppercase tracking-wider">{field.label}</label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400">{field.icon}</span>
                        <input type={field.type} required={field.type !== "tel"} placeholder={field.placeholder}
                          className="w-full pl-10 pr-4 py-3 border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 rounded-xl text-sm outline-none focus:border-velina-rose transition-colors" />
                      </div>
                    </div>
                  ))}

                  {[
                    { label: "Password", show: showPass, toggle: () => setShowPass(!showPass), placeholder: "Min. 8 characters" },
                    { label: "Confirm Password", show: showConfirmPass, toggle: () => setShowConfirmPass(!showConfirmPass), placeholder: "Repeat your password" },
                  ].map((field) => (
                    <div key={field.label} className="space-y-1.5">
                      <label className="text-xs font-bold text-zinc-600 dark:text-zinc-400 uppercase tracking-wider">{field.label}</label>
                      <div className="relative">
                        <Lock size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" />
                        <input type={field.show ? "text" : "password"} required placeholder={field.placeholder}
                          className="w-full pl-10 pr-11 py-3 border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 placeholder:text-zinc-400 rounded-xl text-sm outline-none focus:border-velina-rose transition-colors" />
                        <button type="button" onClick={field.toggle} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300">
                          {field.show ? <EyeOff size={15} /> : <Eye size={15} />}
                        </button>
                      </div>
                    </div>
                  ))}

                  <p className="text-[11px] text-zinc-400 dark:text-zinc-500 leading-relaxed">
                    By creating an account you agree to our{" "}
                    <span className="text-velina-rose font-bold cursor-pointer">Terms of Service</span>{" "}
                    and <span className="text-velina-rose font-bold cursor-pointer">Privacy Policy</span>.
                  </p>

                  <button type="submit" className="w-full bg-gradient-to-r from-velina-rose to-velina-gold text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity text-sm shadow-sm">
                    Create Account <Sparkles size={15} />
                  </button>
                </form>
              )}
            </div>
          </div>

          <p className="text-center text-xs text-zinc-400 dark:text-zinc-500 mt-6">
            <Link href="/" className="hover:text-velina-rose transition-colors font-medium">← Back to Home</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
