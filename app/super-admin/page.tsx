"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  Store,
  FileText,
  Plus,
  Mail,
  MapPin,
  Phone,
  TrendingUp,
  LogOut,
  ChevronRight,
  Link as LinkIcon,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

// --- DATA MOCK ---
const dataHarian = [
  { name: "08:00", sales: 200, date: "Kamis, 14 Mei" },
  { name: "12:00", sales: 800, date: "Kamis, 14 Mei" },
  { name: "16:00", sales: 1200, date: "Kamis, 14 Mei" },
  { name: "20:00", sales: 900, date: "Kamis, 14 Mei" },
];

const dataBulanan = [
  { name: "Min 1", detail: "Senin, 04 Mei 2026", sales: 4500 },
  { name: "Min 2", detail: "Kamis, 14 Mei 2026", sales: 5200 },
  { name: "Min 3", detail: "Sabtu, 23 Mei 2026", sales: 3100 },
  { name: "Min 4", detail: "Rabu, 27 Mei 2026", sales: 2800 },
];

const dataTahunan = [
  { name: "Mar", detail: "Rabu, 25 Maret 2026", sales: 48000 },
  { name: "Apr", detail: "Minggu, 12 April 2026", sales: 62000 },
  { name: "Mei", detail: "Kamis, 14 Mei 2026", sales: 55000 },
];

const daftarOutlet = [
  {
    id: 1,
    nama: "Laila Boutique Malang",
    lokasi: "Jl. Soekarno Hatta",
    sales: "Rp 12.5M",
    status: "Active",
  },
  {
    id: 2,
    nama: "Laila Gallery Surabaya",
    lokasi: "Tunjungan Plaza",
    sales: "Rp 18.2M",
    status: "Active",
  },
  {
    id: 3,
    nama: "Laila Store Jakarta",
    lokasi: "Senayan City",
    sales: "Rp 25.0M",
    status: "Busy",
  },
];

export default function SuperAdminDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [mounted, setMounted] = useState(false);

  // Mencegah error Recharts SSR
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#FFF5F7] flex font-sans text-pink-950">
      {/* --- SIDEBAR --- */}
      <aside className="w-64 bg-white border-r border-pink-100 flex flex-col p-6 fixed h-full justify-between z-50">
        {/* --- TOP SECTION: Logo & Navigasi --- */}
        <div className="space-y-10">
          {/* Logo Section */}
          <div className="flex items-center gap-3 px-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/laila.jpg"
              alt="Logo"
              className="w-10 h-10 rounded-xl object-cover shadow-sm border border-pink-50 flex-shrink-0"
            />
            <span className="font-black tracking-tighter text-lg uppercase text-pink-950 whitespace-nowrap">
              Laila Collection
            </span>
          </div>

          {/* Menu Navigasi */}
          <nav className="space-y-1.5">
            {[
              { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
              { id: "outlet", label: "Tambah Outlet", icon: Store },
              { id: "laporan", label: "Laporan", icon: FileText },
            ].map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl text-[11px] font-bold uppercase tracking-widest transition-all duration-300 ${
                    isActive
                      ? "bg-pink-600 text-white shadow-lg shadow-pink-200"
                      : "text-pink-400 hover:bg-pink-50 hover:text-pink-600"
                  }`}
                >
                  <item.icon
                    className={`w-4 h-4 ${isActive ? "animate-pulse" : ""}`}
                  />
                  <span className="whitespace-nowrap">{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* --- BOTTOM SECTION: Logout --- */}
        <div className="pt-6 border-t border-pink-50">
          <Link href="/login" className="block w-full no-underline">
            <button className="w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl text-[11px] font-bold uppercase tracking-widest text-rose-500 hover:bg-rose-50 transition-all duration-200 group">
              <LogOut className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="whitespace-nowrap">Logout</span>
            </button>
          </Link>
        </div>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <main className="flex-1 ml-64 p-10">
        {/* TAB DASHBOARD */}
        {activeTab === "dashboard" && (
          <div className="space-y-8 animate-in fade-in duration-700">
            <header className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-black tracking-tight">
                  Ringkasan Bisnis
                </h1>
                <p className="text-pink-900/40 text-sm">
                  Update terakhir: Kamis, 14 Mei 2026 - 23:45
                </p>
              </div>
              <div className="flex gap-2">
                <div className="bg-white p-2 rounded-full border border-pink-100 shadow-sm">
                  <Mail className="w-4 h-4 text-pink-400" />
                </div>
                <div className="bg-white p-2 rounded-full border border-pink-100 shadow-sm">
                  <Phone className="w-4 h-4 text-pink-400" />
                </div>
              </div>
            </header>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-[2.5rem] border border-pink-100 shadow-sm hover:scale-[1.02] transition-transform">
                <p className="text-[10px] font-black text-pink-400 uppercase tracking-widest mb-2">
                  Penjualan Terbanyak (Mei)
                </p>
                <h3 className="text-2xl font-bold italic">Kamis, 14 Mei</h3>
                <p className="text-xs text-green-500 mt-2 font-bold">
                  ↑ 12% dari target
                </p>
              </div>
              <div className="bg-[#2D1B1E] p-6 rounded-[2.5rem] text-white shadow-xl hover:scale-[1.02] transition-transform">
                <p className="text-[10px] font-black text-pink-300 uppercase tracking-widest mb-2">
                  Puncak Tahunan
                </p>
                <h3 className="text-2xl font-bold italic text-pink-100">
                  Minggu, 12 April
                </h3>
                <p className="text-xs text-pink-400 mt-2">
                  1.240 Transaksi Berhasil
                </p>
              </div>
              <div className="bg-pink-600 p-6 rounded-[2.5rem] text-white shadow-lg hover:scale-[1.02] transition-transform">
                <p className="text-[10px] font-black text-pink-200 uppercase tracking-widest mb-2">
                  Status Ekspansi
                </p>
                <h3 className="text-2xl font-bold italic">12 Cabang Aktif</h3>
                <div className="w-full bg-pink-400/30 h-1 rounded-full mt-4 overflow-hidden">
                  <div className="bg-white h-full w-[80%]"></div>
                </div>
              </div>
            </div>

            {/* Area Chart Dashboard */}
            <div className="bg-white p-8 rounded-[3rem] border border-pink-100 shadow-sm">
              <div className="flex justify-between items-center mb-8">
                <h3 className="font-bold uppercase tracking-widest text-xs">
                  Tren Penjualan Harian (Mei 2026)
                </h3>
                <span className="text-[10px] bg-pink-100 text-pink-600 px-3 py-1 rounded-full font-black">
                  LIVE
                </span>
              </div>
              <div className="h-[300px] w-full min-h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={dataHarian}>
                    <defs>
                      <linearGradient
                        id="colorSales"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="#db2777"
                          stopOpacity={0.3}
                        />
                        <stop
                          offset="95%"
                          stopColor="#db2777"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      vertical={false}
                      stroke="#FCE7F3"
                    />
                    <XAxis
                      dataKey="name"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 10 }}
                    />
                    <Tooltip
                      labelFormatter={(v, p) => p[0]?.payload?.date || v}
                      contentStyle={{
                        borderRadius: "15px",
                        border: "none",
                        boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)",
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="sales"
                      stroke="#db2777"
                      strokeWidth={3}
                      fill="url(#colorSales)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* List Outlet - Fitur Tambahan */}
            <div className="bg-white p-8 rounded-[3rem] border border-pink-100 shadow-sm">
              <h3 className="font-bold uppercase tracking-widest text-xs mb-6">
                Performa Outlet Teratas
              </h3>
              <div className="space-y-4">
                {daftarOutlet.map((outlet) => (
                  <div
                    key={outlet.id}
                    className="flex items-center justify-between p-4 hover:bg-pink-50 rounded-2xl transition-colors border border-transparent hover:border-pink-100 group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-pink-100 rounded-xl flex items-center justify-center text-pink-600 font-bold">
                        {outlet.id}
                      </div>
                      <div>
                        <p className="font-bold text-sm">{outlet.nama}</p>
                        <p className="text-[10px] text-pink-400 uppercase font-medium">
                          {outlet.lokasi}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-8">
                      <div className="text-right">
                        <p className="font-black text-sm text-pink-900">
                          {outlet.sales}
                        </p>
                        <p className="text-[10px] text-green-500 font-bold uppercase tracking-tighter">
                          Gross Profit
                        </p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-pink-200 group-hover:text-pink-600 transition-colors" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB TAMBAH OUTLET */}
        {activeTab === "outlet" && (
          <div className="max-w-2xl animate-in slide-in-from-bottom-4 duration-500">
            {/* Form Anda sudah sempurna, tetap pertahankan rows={3} untuk menghindari merah */}
            <header className="mb-10">
              <h1 className="text-3xl font-black tracking-tight">
                Tambah Outlet Baru
              </h1>
              <p className="text-pink-900/40 text-sm">
                Daftarkan cabang baru ke dalam ekosistem Laila.
              </p>
            </header>
            <form className="space-y-6 bg-white p-10 rounded-[3rem] border border-pink-100 shadow-sm">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] ml-2 text-pink-400">
                  Nama Outlet
                </label>
                <div className="relative">
                  <Store className="absolute left-4 top-3.5 w-4 h-4 text-pink-300" />
                  <input
                    type="text"
                    placeholder="Contoh: Laila Boutique Malang"
                    className="w-full bg-pink-50/50 border-none rounded-2xl py-3.5 pl-12 pr-4 focus:ring-2 focus:ring-pink-500 transition-all outline-none text-sm font-bold"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] ml-2 text-pink-400">
                    Email Outlet
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-3.5 w-4 h-4 text-pink-300" />
                    <input
                      type="email"
                      placeholder="outlet@laila.com"
                      className="w-full bg-pink-50/50 border-none rounded-2xl py-3.5 pl-12 pr-4 focus:ring-2 focus:ring-pink-500 outline-none text-sm font-bold"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] ml-2 text-pink-400">
                    Nomor HP
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-3.5 w-4 h-4 text-pink-300" />
                    <input
                      type="text"
                      placeholder="0812..."
                      className="w-full bg-pink-50/50 border-none rounded-2xl py-3.5 pl-12 pr-4 focus:ring-2 focus:ring-pink-500 outline-none text-sm font-bold"
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] ml-2 text-pink-400">
                  Alamat Lengkap
                </label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-3.5 w-4 h-4 text-pink-300" />
                  <textarea
                    rows={3}
                    placeholder="Masukkan alamat lengkap outlet..."
                    className="w-full bg-pink-50/50 border-none rounded-2xl py-3.5 pl-12 pr-4 focus:ring-2 focus:ring-pink-500 outline-none text-sm font-bold"
                  />
                </div>
              </div>
              <button
                type="button"
                className="w-full bg-pink-600 text-white font-black text-[10px] uppercase tracking-[0.3em] py-4 rounded-2xl hover:bg-pink-700 transition-all shadow-lg shadow-pink-100 flex items-center justify-center gap-2"
              >
                <Plus className="w-4 h-4" /> Simpan Outlet Baru
              </button>
            </form>
          </div>
        )}

        {/* TAB LAPORAN */}
        {activeTab === "laporan" && (
          <div className="space-y-8 animate-in fade-in duration-500">
            <header>
              <h1 className="text-3xl font-black tracking-tight">
                Arsip Laporan
              </h1>
              <p className="text-pink-900/40 text-sm">
                Analisis detail harian, bulanan, dan tahunan.
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Grafik Harian */}
              <div className="md:col-span-2 bg-white p-8 rounded-[3rem] border border-pink-100 shadow-sm">
                <h3 className="font-bold uppercase tracking-widest text-[10px] mb-6">
                  Grafik Harian
                </h3>
                <div className="h-[250px] w-full min-h-[250px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={dataHarian}>
                      <XAxis dataKey="name" hide />
                      <Tooltip />
                      <Area
                        type="monotone"
                        dataKey="sales"
                        stroke="#db2777"
                        fill="#fbcfe8"
                        strokeWidth={3}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Grafik Bulanan */}
              <div className="bg-white p-8 rounded-[3rem] border border-pink-100 shadow-sm">
                <h3 className="font-bold uppercase tracking-widest text-[10px] mb-2 text-pink-900">
                  Laporan Bulanan (Mei)
                </h3>
                <p className="text-[10px] text-pink-400 mb-6 font-bold uppercase">
                  Rekor: Kamis, 14 Mei
                </p>
                <div className="h-[200px] w-full min-h-[200px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={dataBulanan}>
                      <XAxis
                        dataKey="name"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 10 }}
                      />
                      <Tooltip
                        labelFormatter={(v, p) => p[0]?.payload?.detail || v}
                        cursor={{ fill: "#FFF1F2" }}
                      />
                      <Bar
                        dataKey="sales"
                        fill="#db2777"
                        radius={[5, 5, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Grafik Tahunan */}
              <div className="bg-[#2D1B1E] p-8 rounded-[3rem] text-white shadow-xl">
                <h3 className="font-bold uppercase tracking-widest text-[10px] mb-2 text-pink-200">
                  Laporan Tahunan (2026)
                </h3>
                <p className="text-[10px] text-pink-400 mb-6 font-bold uppercase">
                  Rekor: April (Minggu, 12 Apr)
                </p>
                <div className="h-[200px] w-full min-h-[200px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={dataTahunan}>
                      <XAxis
                        dataKey="name"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 10, fill: "#fda4af" }}
                      />
                      <Tooltip
                        labelFormatter={(v, p) => p[0]?.payload?.detail || v}
                        contentStyle={{ color: "#000" }}
                      />
                      <Bar
                        dataKey="sales"
                        fill="#fb7185"
                        radius={[5, 5, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
