"use client";

import React, { useState } from "react";

import {
  Mail,
  Lock,
  ArrowRight,
  Sparkles,
  Loader2,
} from "lucide-react";

import { useRouter } from "next/navigation";

export default function LailaPinkLogin() {
  const router = useRouter();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const handleLogin = async (
    e: React.FormEvent,
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      setError("");

      await new Promise((resolve) =>
        setTimeout(resolve, 1200),
      );

      const users = [
        {
          email:
            "adminlailaps@gmail.com",
          password: "123",
          role: "SUPER_ADMIN",
          redirect:
            "/super-admin/",
        },
        {
          email:
            "adminbatu@gmail.com",
          password: "123",
          role: "ADMIN",
          redirect: "/admin",
        },
      ];

      const user = users.find(
        (u) =>
          u.email === email &&
          u.password === password,
      );

      if (!user) {
        setError(
          "Email atau password salah",
        );

        return;
      }

      localStorage.setItem(
        "token",
        "dummy-token",
      );

      localStorage.setItem(
        "user",
        JSON.stringify({
          email: user.email,
          role: user.role,
        }),
      );

      router.push(user.redirect);
    } catch {
      setError("Terjadi kesalahan");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF5F7] text-[#4A1D24] font-sans flex items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-pink-300/20 rounded-full blur-[100px] -z-0" />

      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-rose-200/30 rounded-full blur-[100px] -z-0" />

      <div className="w-full max-w-[450px] relative z-10 animate-in fade-in zoom-in duration-700">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-[2rem] overflow-hidden shadow-2xl shadow-pink-200 mb-6 border-2 border-pink-100">
            <img
              src="/laila.jpg"
              alt="Laila Logo"
              className="w-full h-full object-cover"
            />
          </div>

          <h1 className="text-3xl font-black tracking-tighter text-pink-950 uppercase italic">
            Laila{" "}
            <span className="text-pink-500 font-serif">
              Collection
            </span>
          </h1>

          <p className="text-pink-900/40 text-sm font-medium mt-2 tracking-wide">
            Silahkan masuk ke sistem butik
            Anda
          </p>
        </div>

        <div className="bg-white/70 backdrop-blur-2xl border border-white rounded-[3.5rem] p-10 shadow-[0_20px_50px_rgba(244,114,182,0.1)]">
          <form
            onSubmit={handleLogin}
            className="space-y-6"
          >
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-pink-900/40 ml-4">
                Email Address
              </label>

              <div className="relative">
                <div className="absolute left-5 top-1/2 -translate-y-1/2 text-pink-300">
                  <Mail className="w-5 h-5" />
                </div>

                <input
                  type="email"
                  placeholder="admin@lailacollection.com"
                  value={email}
                  onChange={(e) =>
                    setEmail(
                      e.target.value,
                    )
                  }
                  required
                  className="w-full bg-white border border-pink-100 py-4 pl-14 pr-6 rounded-2xl focus:outline-none focus:ring-4 focus:ring-pink-100 focus:border-pink-300 transition-all text-sm font-medium placeholder:text-pink-200"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center ml-4">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-pink-900/40">
                  Password
                </label>

                <button
                  type="button"
                  className="text-[10px] font-bold text-pink-400 hover:text-pink-600 transition uppercase tracking-widest"
                >
                  Lupa?
                </button>
              </div>

              <div className="relative">
                <div className="absolute left-5 top-1/2 -translate-y-1/2 text-pink-300">
                  <Lock className="w-5 h-5" />
                </div>

                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) =>
                    setPassword(
                      e.target.value,
                    )
                  }
                  required
                  className="w-full bg-white border border-pink-100 py-4 pl-14 pr-6 rounded-2xl focus:outline-none focus:ring-4 focus:ring-pink-100 focus:border-pink-300 transition-all text-sm font-medium placeholder:text-pink-200"
                />
              </div>
            </div>

            {error && (
              <div className="bg-rose-100 border border-rose-200 text-rose-600 text-sm rounded-2xl px-5 py-4 font-semibold">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-pink-600 disabled:opacity-70 text-white py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-pink-200 hover:bg-pink-700 hover:-translate-y-1 active:scale-95 transition-all flex items-center justify-center gap-3 group mt-8"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Loading...
                </>
              ) : (
                <>
                  Masuk Sekarang

                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                </>
              )}
            </button>
          </form>

          <div className="mt-8 bg-pink-50 rounded-2xl p-5 border border-pink-100 text-xs space-y-2">
            <p className="font-black uppercase tracking-widest text-pink-500">
              Dummy Account
            </p>

            <div>
              <p className="font-bold">
                SUPER ADMIN
              </p>

              <p>
                adminlailaps@gmail.com
              </p>

              <p>Password: 123</p>
            </div>

            <div>
              <p className="font-bold">
                ADMIN OUTLET
              </p>

              <p>
                adminbatu@gmail.com
              </p>

              <p>Password: 123</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 right-10 flex items-center gap-2 opacity-20">
        <Sparkles className="w-4 h-4 text-pink-600" />

        <span className="text-[10px] font-black uppercase tracking-[0.4em]">
          Laila Systems v1.2
        </span>
      </div>
    </div>
  );
}