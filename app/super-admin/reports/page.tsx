"use client";

import React, { useState } from "react";
import {
  BarChart3,
  Calendar,
  ArrowUpRight,
  Filter,
  Download,
  TrendingUp,
  Store,
  ChevronRight,
  PieChart,
} from "lucide-react";

// Mock Data untuk Cabang
const outlets = [
  { id: "all", name: "Semua Cabang" },
  { id: 1, name: "Laila Collection Batu" },
  { id: 2, name: "Laila Collection Malang" },
  { id: 3, name: "Laila Collection Surabaya" },
];

// Mock Data Laporan
const reportData = {
  daily: [
    {
      date: "15 Mei 2026",
      day: "Jumat",
      total: "Rp 8.500.000",
      status: "Highest",
    },
    {
      date: "14 Mei 2026",
      day: "Kamis",
      total: "Rp 6.200.000",
      status: "Normal",
    },
    {
      date: "13 Mei 2026",
      day: "Rabu",
      total: "Rp 5.900.000",
      status: "Normal",
    },
  ],
  monthly: [
    { month: "Mei 2026", peakDate: "15 Mei (Jumat)", total: "Rp 145.000.000" },
    {
      month: "April 2026",
      peakDate: "12 April (Minggu)",
      total: "Rp 120.500.000",
    },
  ],
  yearly: [
    {
      year: "2026",
      peakMonth: "Mei",
      peakDate: "15 Mei",
      total: "Rp 650.000.000",
    },
    {
      year: "2025",
      peakMonth: "Desember",
      peakDate: "24 Des",
      total: "Rp 1.2M",
    },
  ],
};

export default function ReportsPage() {
  const [selectedOutlet, setSelectedOutlet] = useState("all");
  const [activeTab, setActiveTab] = useState("daily");

  return (
    <div className="min-h-screen bg-[#FFF5F7] p-8 text-pink-950">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <h1 className="text-4xl font-black tracking-tight">Sales Report</h1>
            <p className="text-pink-400 mt-2 text-sm font-medium">
              Analisa performa penjualan harian, bulanan, dan tahunan.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <div className="relative">
              <select
                value={selectedOutlet}
                onChange={(e) => setSelectedOutlet(e.target.value)}
                className="appearance-none bg-white border border-pink-100 px-6 py-4 pr-12 rounded-2xl font-bold text-sm text-pink-600 outline-none focus:ring-2 focus:ring-pink-500 shadow-sm"
              >
                {outlets.map((o) => (
                  <option key={o.id} value={o.id}>
                    {o.name}
                  </option>
                ))}
              </select>
              <Filter className="absolute right-4 top-4 w-5 h-5 text-pink-300 pointer-events-none" />
            </div>

            <button className="bg-pink-600 hover:bg-pink-700 transition-all text-white px-6 py-4 rounded-2xl flex items-center gap-3 font-black uppercase tracking-widest text-xs shadow-lg shadow-pink-200">
              <Download className="w-5 h-5" />
              Export PDF
            </button>
          </div>
        </div>

        {/* Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-[2rem] p-6 border border-pink-100 shadow-sm">
            <p className="text-xs uppercase tracking-widest text-pink-400 font-bold">
              Penjualan Tertinggi (Hari)
            </p>
            <div className="flex items-end justify-between mt-4">
              <div>
                <h2 className="text-2xl font-black">Rp 12.5M</h2>
                <p className="text-xs text-green-500 font-bold flex items-center gap-1 mt-1">
                  <TrendingUp className="w-3 h-3" /> 15 Mei 2026 (Jumat)
                </p>
              </div>
              <div className="p-3 bg-pink-50 rounded-xl">
                <Calendar className="text-pink-500 w-6 h-6" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[2rem] p-6 border border-pink-100 shadow-sm">
            <p className="text-xs uppercase tracking-widest text-pink-400 font-bold">
              Bulan Tersibuk
            </p>
            <div className="flex items-end justify-between mt-4">
              <div>
                <h2 className="text-2xl font-black">Mei 2026</h2>
                <p className="text-xs text-pink-400 font-bold mt-1">
                  Total: Rp 145.000.000
                </p>
              </div>
              <div className="p-3 bg-pink-50 rounded-xl">
                <PieChart className="text-pink-500 w-6 h-6" />
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-pink-600 to-pink-700 rounded-[2rem] p-6 text-white shadow-lg">
            <p className="text-xs uppercase tracking-widest text-pink-100 font-bold">
              Total Revenue (YTD)
            </p>
            <div className="flex items-end justify-between mt-4">
              <h2 className="text-3xl font-black">Rp 1.84M</h2>
              <BarChart3 className="w-8 h-8 opacity-50" />
            </div>
          </div>
        </div>

        {/* Main Report Table */}
        <div className="bg-white rounded-[2.5rem] border border-pink-100 shadow-sm overflow-hidden">
          {/* Tabs */}
          <div className="flex border-b border-pink-50 p-6 gap-2 overflow-x-auto">
            {["daily", "monthly", "yearly"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-xl text-sm font-black uppercase tracking-widest transition-all ${
                  activeTab === tab
                    ? "bg-pink-600 text-white shadow-md"
                    : "bg-pink-50 text-pink-400 hover:bg-pink-100"
                }`}
              >
                {tab === "daily"
                  ? "Harian"
                  : tab === "monthly"
                    ? "Bulanan"
                    : "Tahunan"}
              </button>
            ))}
          </div>

          <div className="p-6 overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-pink-400 text-xs uppercase tracking-[0.2em] font-black">
                  <th className="px-6 py-4">Keterangan Waktu</th>
                  <th className="px-6 py-4">Titik Penjualan Tertinggi</th>
                  <th className="px-6 py-4">Total Penjualan</th>
                  <th className="px-6 py-4 text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-pink-50">
                {activeTab === "daily" &&
                  reportData.daily.map((item, i) => (
                    <tr
                      key={i}
                      className="group hover:bg-pink-50/50 transition-all"
                    >
                      <td className="px-6 py-5">
                        <div className="font-black text-pink-950">
                          {item.date}
                        </div>
                        <div className="text-xs text-pink-400 font-medium">
                          {item.day}
                        </div>
                      </td>
                      <td className="px-6 py-5 italic text-pink-400 text-sm">
                        -
                      </td>
                      <td className="px-6 py-5 font-bold text-pink-600">
                        {item.total}
                      </td>
                      <td className="px-6 py-5 text-right">
                        <button className="p-2 hover:bg-white rounded-lg text-pink-300 hover:text-pink-600 transition-colors">
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  ))}

                {activeTab === "monthly" &&
                  reportData.monthly.map((item, i) => (
                    <tr
                      key={i}
                      className="group hover:bg-pink-50/50 transition-all"
                    >
                      <td className="px-6 py-5 font-black text-pink-950">
                        {item.month}
                      </td>
                      <td className="px-6 py-5">
                        <span className="bg-green-100 text-green-600 text-[10px] px-2 py-1 rounded-md font-black flex items-center gap-1 w-fit">
                          <ArrowUpRight className="w-3 h-3" /> {item.peakDate}
                        </span>
                      </td>
                      <td className="px-6 py-5 font-bold text-pink-600">
                        {item.total}
                      </td>
                      <td className="px-6 py-5 text-right">
                        <ChevronRight className="w-5 h-5 text-pink-300" />
                      </td>
                    </tr>
                  ))}

                {activeTab === "yearly" &&
                  reportData.yearly.map((item, i) => (
                    <tr
                      key={i}
                      className="group hover:bg-pink-50/50 transition-all"
                    >
                      <td className="px-6 py-5 font-black text-pink-950">
                        {item.year}
                      </td>
                      <td className="px-6 py-5">
                        <div className="text-xs font-bold text-pink-500">
                          Bulan: {item.peakMonth} ({item.peakDate})
                        </div>
                      </td>
                      <td className="px-6 py-5 font-bold text-pink-600">
                        {item.total}
                      </td>
                      <td className="px-6 py-5 text-right">
                        <ChevronRight className="w-5 h-5 text-pink-300" />
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Summary Info */}
        <div className="bg-pink-100/50 rounded-[2rem] p-8 flex flex-col md:flex-row items-center gap-6 justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-pink-600 shadow-sm">
              <Store className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-black">Konsolidasi Data Otomatis</h4>
              <p className="text-sm text-pink-500">
                Laporan di atas mencakup seluruh transaksi dari sistem POS
                pusat.
              </p>
            </div>
          </div>
          <button className="text-pink-600 font-bold hover:underline text-sm uppercase tracking-widest">
            Lihat Log Transaksi
          </button>
        </div>
      </div>
    </div>
  );
}
