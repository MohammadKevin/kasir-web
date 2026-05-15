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
  Calendar,
  Zap,
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
const outlets = [
  { id: "1", name: "Cabang Jakarta" },
  { id: "2", name: "Cabang Bandung" },
  { id: "3", name: "Cabang Surabaya" },
  { id: "4", name: "Cabang Malang" },
];

const dataPerCabang = [
  { name: "Jakarta", sales: 4000 },
  { name: "Bandung", sales: 3000 },
  { name: "Surabaya", sales: 2000 },
  { name: "Malang", sales: 2780 },
];

const dataHarian = [
  { name: "08:00", sales: 200, date: "Kamis, 14 Mei" },
  { name: "12:00", sales: 800, date: "Kamis, 14 Mei" },
  { name: "16:00", sales: 1200, date: "Kamis, 14 Mei" },
  { name: "20:00", sales: 900, date: "Kamis, 14 Mei" },
];

const dataBulanan = [
  { name: "Minggu 1", sales: 12000 },
  { name: "Minggu 2", sales: 15000 },
  { name: "Minggu 3", sales: 11000 },
  { name: "Minggu 4", sales: 19000 },
];

const dataTahunan = [
  { name: "Jan", sales: 45000 },
  { name: "Feb", sales: 52000 },
  { name: "Mar", sales: 48000 },
  { name: "Apr", sales: 61000 },
  { name: "Mei", sales: 55000 },
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
  const [selectedOutlet, setSelectedOutlet] = useState("all");
  const [timeFilter, setTimeFilter] = useState("harian");

  const selectedOutletName =
    outlets.find((o) => o.id === selectedOutlet)?.name || "Semua Cabang";

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  // --- LOGIKA TAMBAHAN: DETAIL INSIGHT ---
  const getInsightDetail = () => {
    if (timeFilter === "harian") {
      return {
        title: "Laporan Hari Ini",
        detail: "Kamis, 14 Mei 2026",
        peak: "Pukul 16:00 WIB",
        note: "Penjualan tertinggi tercatat pada sore hari.",
      };
    } else if (timeFilter === "bulanan") {
      return {
        title: "Laporan Bulanan",
        detail: "Mei 2026",
        peak: "Minggu ke-4",
        note: "Puncak transaksi terjadi pada periode akhir bulan (Gajian).",
      };
    } else {
      return {
        title: "Laporan Tahunan",
        detail: "Tahun Buku 2026",
        peak: "Bulan April",
        note: "April menjadi bulan terbaik sejauh ini berkat musim Ramadan.",
      };
    }
  };

  const insight = getInsightDetail();

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#FFF5F7] flex font-sans text-pink-950">
      {/* --- SIDEBAR --- */}
      <aside className="w-64 bg-white border-r border-pink-100 flex flex-col p-6 fixed h-full justify-between z-50">
        <div className="space-y-10">
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
        {/* --- TAB DASHBOARD --- */}
        {activeTab === "dashboard" && (
          <div className="space-y-8 animate-in fade-in duration-700">
            <header>
              <h1 className="text-3xl font-black tracking-tight">
                Ringkasan Bisnis
              </h1>
              <p className="text-pink-900/40 text-sm">
                Update terakhir: Kamis, 14 Mei 2026 - 23:45
              </p>
            </header>
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
            <div className="bg-white p-8 rounded-[3rem] border border-pink-100 shadow-sm">
              <h3 className="font-bold uppercase tracking-widest text-xs mb-8">
                Tren Penjualan Harian (Mei 2026)
              </h3>
              <div className="h-[300px] w-full">
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

        {/* --- TAB TAMBAH OUTLET --- */}
        {activeTab === "outlet" && (
          <div className="max-w-2xl animate-in slide-in-from-bottom-4 duration-500">
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

        {/* --- TAB LAPORAN --- */}
        {activeTab === "laporan" && (
          <div className="space-y-8 animate-in fade-in duration-500">
            <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h1 className="text-3xl font-black tracking-tight">
                  Konsolidasi Laporan
                </h1>
                <p className="text-pink-900/40 text-sm">
                  Pantau performa seluruh cabang dan detail tiap outlet.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase text-pink-500 tracking-widest">
                    Rentang Waktu
                  </label>
                  <div className="flex bg-white border border-pink-100 rounded-2xl p-1 shadow-sm">
                    {["harian", "bulanan", "tahunan"].map((filter) => (
                      <button
                        key={filter}
                        onClick={() => setTimeFilter(filter)}
                        className={`px-4 py-1.5 text-[10px] font-bold uppercase rounded-xl transition-all ${
                          timeFilter === filter
                            ? "bg-pink-600 text-white shadow-md"
                            : "text-pink-400 hover:text-pink-600"
                        }`}
                      >
                        {filter}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase text-pink-500 tracking-widest">
                    Pilih Outlet
                  </label>
                  <select
                    value={selectedOutlet}
                    onChange={(e) => setSelectedOutlet(e.target.value)}
                    className="bg-white border border-pink-100 rounded-2xl px-4 py-2.5 text-xs font-bold shadow-sm focus:ring-2 focus:ring-pink-500 outline-none cursor-pointer"
                  >
                    <option value="all">Semua Cabang (Pusat)</option>
                    {outlets.map((outlet) => (
                      <option key={outlet.id} value={outlet.id}>
                        {outlet.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </header>

            {/* --- PENAMBAHAN: DETAIL INSIGHT BOX --- */}
            <div className="bg-white p-6 rounded-[2.5rem] border border-pink-100 shadow-sm flex flex-col md:flex-row items-center gap-8 animate-in slide-in-from-top-2">
              <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center text-pink-600 shadow-inner">
                <Zap className="w-8 h-8 fill-pink-600" />
              </div>
              <div className="flex-1 text-center md:text-left space-y-1">
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <h2 className="text-xl font-black text-pink-900 uppercase italic">
                    {insight.title}
                  </h2>
                  <span className="bg-pink-600 text-white text-[8px] px-2 py-0.5 rounded-full font-bold uppercase tracking-widest">
                    Active
                  </span>
                </div>
                <p className="text-xs font-bold text-pink-400 flex items-center justify-center md:justify-start gap-1 uppercase">
                  <Calendar className="w-3 h-3" /> {insight.detail}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 w-full md:w-auto">
                <div className="bg-pink-50 p-4 rounded-3xl border border-pink-100">
                  <p className="text-[9px] font-black text-pink-400 uppercase tracking-widest">
                    Puncak Terbanyak
                  </p>
                  <p className="text-sm font-bold text-pink-900">
                    {insight.peak}
                  </p>
                </div>
                <div className="bg-pink-50 p-4 rounded-3xl border border-pink-100">
                  <p className="text-[9px] font-black text-pink-400 uppercase tracking-widest">
                    Insight Cepat
                  </p>
                  <p className="text-[10px] font-medium text-pink-800 leading-tight">
                    {insight.note}
                  </p>
                </div>
              </div>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-pink-600 to-pink-700 p-6 rounded-[2.5rem] text-white shadow-lg">
                <p className="text-[10px] font-bold uppercase opacity-80 mb-1">
                  Total Omzet ({timeFilter})
                </p>
                <h2 className="text-2xl font-black">Rp 1.420.500.000</h2>
                <div className="mt-4 text-[10px] bg-white/20 inline-block px-3 py-1 rounded-full">
                  ↑ 14% vs{" "}
                  {timeFilter === "harian"
                    ? "Kemarin"
                    : timeFilter === "bulanan"
                      ? "Bulan Lalu"
                      : "Tahun Lalu"}
                </div>
              </div>
              <div className="bg-white p-6 rounded-[2.5rem] border border-pink-100 shadow-sm">
                <p className="text-[10px] font-black text-pink-400 uppercase tracking-widest mb-1">
                  Rata-rata Transaksi
                </p>
                <h2 className="text-2xl font-black text-pink-950">
                  Rp 450.000
                </h2>
                <p className="text-[10px] text-pink-300 mt-4 font-bold uppercase">
                  Berdasarkan volume penjualan saat ini
                </p>
              </div>
              <div className="bg-white p-6 rounded-[2.5rem] border border-pink-100 shadow-sm">
                <p className="text-[10px] font-black text-pink-400 uppercase tracking-widest mb-1">
                  Total Produk Terjual
                </p>
                <h2 className="text-2xl font-black text-pink-950">3.241 Pcs</h2>
                <p className="text-[10px] text-green-500 mt-4 font-bold uppercase">
                  Stok Terkendali
                </p>
              </div>
            </div>

            {/* Grafik Utama */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="md:col-span-2 bg-white p-8 rounded-[3rem] border border-pink-100 shadow-sm">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h3 className="font-bold uppercase tracking-widest text-[10px]">
                      {selectedOutlet === "all"
                        ? "Perbandingan Performa Antar Cabang"
                        : `Tren Penjualan: ${selectedOutletName}`}
                    </h3>
                    <p className="text-[10px] text-pink-300 font-bold uppercase">
                      Periode: {timeFilter}
                    </p>
                  </div>
                  <span className="text-[10px] font-black bg-pink-50 text-pink-600 px-3 py-1 rounded-full uppercase">
                    Realtime
                  </span>
                </div>
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    {selectedOutlet === "all" ? (
                      <BarChart data={dataPerCabang}>
                        <XAxis
                          dataKey="name"
                          axisLine={false}
                          tickLine={false}
                          tick={{ fontSize: 10, fontWeight: "bold" }}
                        />
                        <Tooltip cursor={{ fill: "#FFF1F2" }} />
                        <Bar
                          dataKey="sales"
                          fill="#db2777"
                          radius={[10, 10, 0, 0]}
                        />
                      </BarChart>
                    ) : (
                      <AreaChart
                        data={
                          timeFilter === "harian"
                            ? dataHarian
                            : timeFilter === "bulanan"
                              ? dataBulanan
                              : dataTahunan
                        }
                      >
                        <XAxis
                          dataKey="name"
                          axisLine={false}
                          tickLine={false}
                          tick={{ fontSize: 10, fontWeight: "bold" }}
                        />
                        <Tooltip />
                        <Area
                          type="monotone"
                          dataKey="sales"
                          stroke="#db2777"
                          fill="#fbcfe8"
                          strokeWidth={3}
                        />
                      </AreaChart>
                    )}
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
