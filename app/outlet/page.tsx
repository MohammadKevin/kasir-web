"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  ShoppingBag,
  Plus,
  History,
  LogOut,
  User,
  Camera,
  QrCode,
  Banknote,
  MapPin,
  Mail,
  Phone,
  Search,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

// Mock Data
const dataHarian = [
  { name: "08:00", sales: 200 },
  { name: "12:00", sales: 800 },
  { name: "16:00", sales: 1200 },
  { name: "20:00", sales: 500 },
];
const dataBulanan = [
  { name: "Minggu 1", sales: 4500 },
  { name: "Minggu 2", sales: 5200 },
  { name: "Minggu 3", sales: 3100 },
  { name: "Minggu 4", sales: 4800 },
];
const dataTahunan = [
  { name: "Jan", sales: 12000 },
  { name: "Feb", sales: 15000 },
  { name: "Mar", sales: 11000 },
  { name: "Apr", sales: 19000 },
  { name: "Mei", sales: 22000 },
];

export default function OutletDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [mounted, setMounted] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("cash");

  // --- PERBAIKAN: Tambahkan state untuk periode laporan ---
  const [reportPeriod, setReportPeriod] = useState("harian");

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#FFF5F7] flex font-sans text-pink-950">
      {/* --- SIDEBAR --- */}
      <aside className="w-64 bg-white border-r border-pink-100 flex flex-col p-6 fixed h-full justify-between z-50">
        <div>
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
              { id: "kasir", label: "Kasir (POS)", icon: ShoppingBag },
              { id: "produk", label: "Tambah Produk", icon: Plus },
              { id: "laporan", label: "Laporan", icon: History },
              { id: "profil", label: "Profil Outlet", icon: User },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl text-[11px] font-bold uppercase tracking-widest transition-all ${
                  activeTab === item.id
                    ? "bg-pink-600 text-white shadow-lg shadow-pink-200"
                    : "text-pink-400 hover:bg-pink-50"
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </button>
            ))}
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
        {/* 1. DASHBOARD OVERVIEW */}
        {activeTab === "dashboard" && (
          <div className="space-y-8 animate-in fade-in duration-500">
            <h1 className="text-3xl font-black">Overview Outlet</h1>
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-[2.5rem] border border-pink-100 shadow-sm">
                <p className="text-[10px] font-black text-pink-400 uppercase tracking-widest">
                  Sales Hari Ini
                </p>
                <h3 className="text-2xl font-bold">Rp 3.450.000</h3>
              </div>
              <div className="bg-[#2D1B1E] p-6 rounded-[2.5rem] text-white shadow-xl">
                <p className="text-[10px] font-black text-pink-300 uppercase tracking-widest">
                  Produk Terjual
                </p>
                <h3 className="text-2xl font-bold font-serif italic">
                  24 Items
                </h3>
              </div>
              <div className="bg-pink-50 p-6 rounded-[2.5rem] border border-pink-100">
                <p className="text-[10px] font-black text-pink-400 uppercase tracking-widest">
                  Stok Aktif
                </p>
                <h3 className="text-2xl font-bold">142 Pcs</h3>
              </div>
            </div>
            <div className="bg-white p-8 rounded-[3rem] border border-pink-100 h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={dataHarian}>
                  <XAxis dataKey="name" hide />
                  <Tooltip contentStyle={{ borderRadius: "15px" }} />
                  <Area
                    type="monotone"
                    dataKey="sales"
                    stroke="#db2777"
                    fill="#fbcfe8"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {/* 2. FITUR KASIR (POS) */}
        {activeTab === "kasir" && (
          <div className="grid grid-cols-3 gap-8 animate-in slide-in-from-right-4">
            <div className="col-span-2 space-y-6">
              <div className="relative">
                <Search className="absolute left-4 top-4 w-5 h-5 text-pink-300" />
                <input
                  type="text"
                  placeholder="Scan Barcode atau Cari Produk..."
                  className="w-full bg-white p-4 pl-12 rounded-2xl shadow-sm outline-none focus:ring-2 focus:ring-pink-500 font-bold"
                />
              </div>
              <div className="bg-white p-6 rounded-[2.5rem] h-[500px] border border-pink-100">
                <p className="text-center text-pink-300 mt-20 font-bold uppercase tracking-widest text-xs">
                  Daftar Belanja Kosong
                </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-[3rem] shadow-xl border border-pink-100 h-fit space-y-6">
              <h3 className="font-black uppercase text-xs tracking-widest">
                Metode Pembayaran
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setPaymentMethod("cash")}
                  className={`p-4 rounded-2xl border flex flex-col items-center gap-2 transition-all ${paymentMethod === "cash" ? "bg-pink-600 text-white" : "bg-pink-50 text-pink-400"}`}
                >
                  <Banknote />{" "}
                  <span className="text-[10px] font-bold uppercase">Cash</span>
                </button>
                <button
                  onClick={() => setPaymentMethod("qris")}
                  className={`p-4 rounded-2xl border flex flex-col items-center gap-2 transition-all ${paymentMethod === "qris" ? "bg-pink-600 text-white" : "bg-pink-50 text-pink-400"}`}
                >
                  <QrCode />{" "}
                  <span className="text-[10px] font-bold uppercase">QRIS</span>
                </button>
              </div>
              <div className="pt-6 border-t border-pink-50 space-y-2">
                <div className="flex justify-between font-bold text-sm">
                  <span>Total</span>
                  <span>Rp 0</span>
                </div>
                <button className="w-full bg-pink-600 text-white py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest">
                  Proses Transaksi
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 3. TAMBAH PRODUK */}
        {activeTab === "produk" && (
          <div className="max-w-2xl animate-in slide-in-from-bottom-4">
            <h1 className="text-3xl font-black mb-10">Input Produk Baru</h1>
            <form className="bg-white p-10 rounded-[3rem] border border-pink-100 shadow-sm space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase ml-2 text-pink-400">
                    Nama Produk
                  </label>
                  <input
                    type="text"
                    placeholder="Gamis Laila Silk"
                    className="w-full bg-pink-50/50 p-3.5 rounded-2xl outline-none focus:ring-2 focus:ring-pink-500 font-bold text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase ml-2 text-pink-400">
                    Ukuran
                  </label>
                  <select className="w-full bg-pink-50/50 p-3.5 rounded-2xl outline-none font-bold text-sm">
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                    <option>All Size</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase ml-2 text-pink-400">
                    Barcode
                  </label>
                  <div className="relative">
                    <QrCode className="absolute left-4 top-3.5 w-4 h-4 text-pink-300" />
                    <input
                      type="text"
                      placeholder="LAILA-001"
                      className="w-full bg-pink-50/50 pl-12 p-3.5 rounded-2xl outline-none font-bold text-sm"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase ml-2 text-pink-400">
                    Harga (Rp)
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-3.5 text-xs font-black text-pink-300">
                      Rp
                    </span>
                    <input
                      type="number"
                      placeholder="250.000"
                      className="w-full bg-pink-50/50 pl-12 p-3.5 rounded-2xl outline-none font-bold text-sm"
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase ml-2 text-pink-400">
                  Foto
                </label>
                <div className="w-full h-40 border-2 border-dashed border-pink-100 rounded-[2rem] flex flex-col items-center justify-center bg-pink-50/30 cursor-pointer hover:bg-pink-50 transition-all">
                  <Camera className="w-8 h-8 text-pink-200 mb-2" />
                  <span className="text-[10px] font-bold text-pink-400 uppercase">
                    Upload Foto
                  </span>
                </div>
              </div>
              <button
                type="button"
                className="w-full bg-pink-600 text-white p-4 rounded-2xl font-black uppercase text-[10px] tracking-widest"
              >
                Simpan ke Katalog
              </button>
            </form>
          </div>
        )}

        {/* 4. LAPORAN OUTLET */}
        {activeTab === "laporan" && (
          <div className="space-y-8 animate-in fade-in duration-500">
            <div className="flex justify-between items-end">
              <div>
                <h1 className="text-3xl font-black">Laporan Penjualan</h1>
                <p className="text-pink-400 text-xs font-bold uppercase tracking-widest mt-2">
                  Analisis Performa Outlet
                </p>
              </div>
              <div className="flex bg-white p-1.5 rounded-2xl border border-pink-100 shadow-sm">
                {["harian", "bulanan", "tahunan"].map((period) => (
                  <button
                    key={period}
                    onClick={() => setReportPeriod(period)}
                    className={`px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-tighter transition-all ${
                      reportPeriod === period
                        ? "bg-pink-600 text-white shadow-md"
                        : "text-pink-300 hover:text-pink-600"
                    }`}
                  >
                    {period}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-4 gap-6">
              {[
                {
                  label: "Total Omzet",
                  value: "Rp 142.5M",
                  color: "text-pink-600",
                },
                {
                  label: "Terjual",
                  value: "1.240 Pcs",
                  color: "text-pink-950",
                },
                { label: "Average", value: "Rp 115rb", color: "text-pink-950" },
                { label: "Growth", value: "+12.5%", color: "text-green-500" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-white p-5 rounded-[2rem] border border-pink-50 shadow-sm"
                >
                  <p className="text-[9px] font-black text-pink-300 uppercase mb-1">
                    {stat.label}
                  </p>
                  <p className={`text-lg font-black ${stat.color}`}>
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-8">
              <div className="col-span-2 bg-white p-8 rounded-[3rem] border border-pink-100">
                <div className="h-[350px]">
                  <ResponsiveContainer width="100%" height="100%">
                    {reportPeriod === "harian" ? (
                      <AreaChart data={dataHarian}>
                        <CartesianGrid
                          strokeDasharray="3 3"
                          vertical={false}
                          stroke="#FDF2F8"
                        />
                        <XAxis
                          dataKey="name"
                          tick={{
                            fontSize: 10,
                            fontWeight: 700,
                            fill: "#BE185D",
                          }}
                        />
                        <Tooltip />
                        <Area
                          type="monotone"
                          dataKey="sales"
                          stroke="#db2777"
                          fill="#FDF2F8"
                          strokeWidth={3}
                        />
                      </AreaChart>
                    ) : (
                      <BarChart
                        data={
                          reportPeriod === "bulanan" ? dataBulanan : dataTahunan
                        }
                      >
                        <CartesianGrid
                          strokeDasharray="3 3"
                          vertical={false}
                          stroke="#FDF2F8"
                        />
                        <XAxis
                          dataKey="name"
                          tick={{ fontSize: 10, fontWeight: 700 }}
                        />
                        <Tooltip cursor={{ fill: "#FFF1F2" }} />
                        <Bar
                          dataKey="sales"
                          fill="#db2777"
                          radius={[10, 10, 0, 0]}
                        />
                      </BarChart>
                    )}
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="bg-[#2D1B1E] p-8 rounded-[3rem] text-white shadow-2xl">
                <h3 className="font-black uppercase text-[11px] tracking-widest text-pink-300 mb-8">
                  Top Performa
                </h3>
                <div className="space-y-6">
                  {[
                    { name: "Kaftan Laila", sold: "450" },
                    { name: "Silk Scarf", sold: "320" },
                    { name: "Gamis Premium", sold: "210" },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between border-b border-white/10 pb-4"
                    >
                      <p className="text-xs font-bold">{item.name}</p>
                      <span className="text-[10px] font-black text-pink-400">
                        {item.sold} Pcs
                      </span>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-10 bg-white/10 border border-white/20 py-4 rounded-2xl text-[10px] font-black uppercase transition-all">
                  Download PDF
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 5. PROFIL OUTLET */}
        {activeTab === "profil" && (
          <div className="max-w-xl animate-in slide-in-from-top-4">
            <h1 className="text-3xl font-black mb-10">Profil Outlet</h1>
            <div className="bg-white p-10 rounded-[3rem] border border-pink-100 shadow-sm space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 bg-pink-600 rounded-[2rem] flex items-center justify-center text-white text-3xl font-black">
                  M
                </div>
                <div>
                  <h2 className="text-2xl font-black">Laila Malang</h2>
                  <p className="text-xs font-bold text-pink-400 uppercase">
                    Premium Boutique Branch
                  </p>
                </div>
              </div>
              <div className="space-y-4 pt-6">
                <div className="flex items-center gap-4 text-sm font-bold">
                  <Mail className="w-4 h-4 text-pink-600" /> malang@laila.com
                </div>
                <div className="flex items-center gap-4 text-sm font-bold">
                  <Phone className="w-4 h-4 text-pink-600" /> +62 812-3456-7890
                </div>
                <div className="flex items-center gap-4 text-sm font-bold">
                  <MapPin className="w-4 h-4 text-pink-600" /> Jl. Soekarno
                  Hatta No. 12, Malang
                </div>
              </div>
              <button className="w-full mt-6 bg-pink-50 text-pink-600 p-4 rounded-2xl font-black uppercase text-[10px]">
                Edit Informasi
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
