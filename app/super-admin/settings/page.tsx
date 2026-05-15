"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Settings,
  User,
  Mail,
  Lock,
  Phone,
  MapPin,
  Save,
  RefreshCcw,
  ShieldCheck,
  Building2,
} from "lucide-react";

export default function SettingsPage() {
  const [isResetting, setIsResetting] = useState(false);

  // Mock data alamat cabang
  const outletAddresses = [
    {
      id: 1,
      name: "Laila Collection Batu",
      address: "Jl. Abdul Gani Atas No. 24, Kota Batu",
    },
    {
      id: 2,
      name: "Laila Collection Malang",
      address: "Jl. Soekarno Hatta No. 12, Kota Malang",
    },
    {
      id: 3,
      name: "Laila Collection Surabaya",
      address: "Tunjungan Plaza 3, Lt. 2, Surabaya",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFF5F7] p-8 text-pink-950">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-black tracking-tight flex items-center gap-4">
            <Settings className="w-10 h-10 text-pink-600" />
            Settings
          </h1>
          <p className="text-pink-400 mt-2 text-sm font-medium">
            Kelola identitas bisnis, keamanan akun, dan lokasi cabang.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Profile & Security */}
          <div className="lg:col-span-2 space-y-6">
            {/* Business Profile Card */}
            <div className="bg-white rounded-[2.5rem] border border-pink-100 shadow-sm p-8">
              <h2 className="text-xl font-black mb-6 flex items-center gap-3">
                <Building2 className="w-6 h-6 text-pink-500" />
                Profil Bisnis
              </h2>

              <div className="space-y-5">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-pink-400 ml-1">
                    Nama Bisnis
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-4 w-5 h-5 text-pink-300" />
                    <input
                      type="text"
                      defaultValue="Laila Collection"
                      className="w-full bg-pink-50 border-none rounded-2xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-pink-500 font-bold"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-pink-400 ml-1">
                      Email Super Admin
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-4 w-5 h-5 text-pink-300" />
                      <input
                        type="email"
                        defaultValue="admin@laila.com"
                        className="w-full bg-pink-50 border-none rounded-2xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-pink-500 font-bold"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-pink-400 ml-1">
                      Nomor Telepon Pusat
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-4 w-5 h-5 text-pink-300" />
                      <input
                        type="text"
                        defaultValue="081234567890"
                        className="w-full bg-pink-50 border-none rounded-2xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-pink-500 font-bold"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <button className="mt-8 bg-pink-600 hover:bg-pink-700 transition-all text-white px-8 py-4 rounded-2xl flex items-center gap-3 font-black uppercase tracking-widest text-xs shadow-lg shadow-pink-200">
                <Save className="w-5 h-5" />
                Simpan Perubahan
              </button>
            </div>

            {/* Security Card */}
            <div className="bg-white rounded-[2.5rem] border border-pink-100 shadow-sm p-8">
              <h2 className="text-xl font-black mb-6 flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-pink-500" />
                Keamanan Akun
              </h2>

              <div className="p-6 bg-amber-50 rounded-[2rem] border border-amber-100 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-amber-500 shadow-sm">
                    <Lock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-black text-amber-900">
                      Reset Password
                    </h4>
                    <p className="text-xs text-amber-700 font-medium">
                      Ganti kata sandi secara berkala untuk keamanan.
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setIsResetting(true);
                    setTimeout(() => setIsResetting(false), 2000);
                  }}
                  className="bg-white hover:bg-amber-100 transition-all text-amber-700 px-6 py-3 rounded-xl flex items-center gap-2 font-black text-xs uppercase tracking-widest border border-amber-200"
                >
                  <RefreshCcw
                    className={`w-4 h-4 ${isResetting ? "animate-spin" : ""}`}
                  />
                  {isResetting ? "Mengirim Link..." : "Reset Sekarang"}
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Branch Addresses */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-pink-600 to-pink-700 rounded-[2.5rem] p-8 text-white shadow-xl shadow-pink-200">
              <h2 className="text-xl font-black mb-6 flex items-center gap-3">
                <MapPin className="w-6 h-6 text-pink-100" />
                Lokasi Cabang
              </h2>

              <div className="space-y-6">
                {outletAddresses.map((outlet) => (
                  <div
                    key={outlet.id}
                    className="border-b border-pink-500/30 pb-4 last:border-0 last:pb-0"
                  >
                    <h4 className="font-black text-sm uppercase tracking-wider">
                      {outlet.name}
                    </h4>
                    <p className="text-pink-100 text-xs mt-2 leading-relaxed opacity-90">
                      {outlet.address}
                    </p>
                  </div>
                ))}
              </div>

              <Link href="/super-admin/Outlets" className="block w-full mt-8">
                <button className="w-full bg-white/10 hover:bg-white/20 transition-all text-white py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] border border-white/20">
                  Kelola Semua Cabang
                </button>
              </Link>
            </div>

            {/* Quick Info Tip */}
            <div className="bg-pink-100 rounded-[2rem] p-6 text-pink-600">
              <p className="text-xs font-bold leading-relaxed">
                💡 Perubahan pada nama bisnis akan berpengaruh pada header
                laporan dan struk belanja pelanggan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
