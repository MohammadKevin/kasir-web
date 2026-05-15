"use client";

import React from "react";
import { Mail, Lock, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function LailaPinkLogin() {
  return (
    <div className="min-h-screen bg-[#FFF5F7] text-[#4A1D24] font-sans flex items-center justify-center p-6 relative overflow-hidden">
      {/* --- BACKGROUND ELEMENTS --- */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-pink-300/20 rounded-full blur-[100px] -z-0" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-rose-200/30 rounded-full blur-[100px] -z-0" />

      {/* --- LOGIN CARD --- */}
      <div className="w-full max-w-[450px] relative z-10 animate-in fade-in zoom-in duration-700">
        {/* Logo & Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-[2rem] overflow-hidden shadow-2xl shadow-pink-200 mb-6 border-2 border-pink-100">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/laila.jpg"
              alt="Laila Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-3xl font-black tracking-tighter text-pink-950 uppercase italic">
            Laila <span className="text-pink-500 font-serif">Collection</span>
          </h1>
          <p className="text-pink-900/40 text-sm font-medium mt-2 tracking-wide">
            Silahkan masuk ke sistem butik Anda
          </p>
        </div>

        {/* Card Form */}
        <div className="bg-white/70 backdrop-blur-2xl border border-white rounded-[3.5rem] p-10 shadow-[0_20px_50px_rgba(244,114,182,0.1)]">
          <form className="space-y-6">
            {/* Email Input */}
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-pink-900/40 ml-4">
                Email Address
              </label>
              <div className="relative group">
                <div className="absolute left-5 top-1/2 -translate-y-1/2 text-pink-300 group-focus-within:text-pink-600 transition">
                  <Mail className="w-5 h-5" />
                </div>
                <input
                  type="email"
                  placeholder="admin@lailacollection.com"
                  className="w-full bg-white border border-pink-100 py-4 pl-14 pr-6 rounded-2xl focus:outline-none focus:ring-4 focus:ring-pink-100 focus:border-pink-300 transition-all text-sm font-medium placeholder:text-pink-200"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <div className="flex justify-between items-center ml-4">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-pink-900/40">
                  Password
                </label>
                <a
                  href="#"
                  className="text-[10px] font-bold text-pink-400 hover:text-pink-600 transition uppercase tracking-widest"
                >
                  Lupa?
                </a>
              </div>
              <div className="relative group">
                <div className="absolute left-5 top-1/2 -translate-y-1/2 text-pink-300 group-focus-within:text-pink-600 transition">
                  <Lock className="w-5 h-5" />
                </div>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full bg-white border border-pink-100 py-4 pl-14 pr-6 rounded-2xl focus:outline-none focus:ring-4 focus:ring-pink-100 focus:border-pink-300 transition-all text-sm font-medium placeholder:text-pink-200"
                />
              </div>
            </div>

            {/* Submit Button */}
            <Link href="/super-admin" className="w-full">
              <button className="w-full bg-pink-600 text-white py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-pink-200 hover:bg-pink-700 hover:-translate-y-1 active:scale-95 transition-all flex items-center justify-center gap-3 group mt-8">
                Masuk Sekarang
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </button>
            </Link>
          </form>
        </div>
      </div>

      {/* Decorative Floating Element */}
      <div className="absolute bottom-10 right-10 flex items-center gap-2 opacity-20">
        <Sparkles className="w-4 h-4 text-pink-600" />
        <span className="text-[10px] font-black uppercase tracking-[0.4em]">
          Laila Systems v1.2
        </span>
      </div>
    </div>
  );
}
