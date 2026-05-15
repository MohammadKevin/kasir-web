"use client";

import React from "react";
import {
  FileText,
  Download,
  Calendar,
  TrendingUp,
  ShoppingBag,
  ArrowUpRight,
  ArrowDownRight,
  PieChart,
  ChevronRight,
  Printer,
} from "lucide-react";

export default function StoreReportsPage() {
  // Data ringkasan untuk periode saat ini
  const summaries = [
    {
      label: "Total Penjualan",
      value: "Rp 12.450.000",
      icon: ShoppingBag,
      color: "text-pink-600",
      bg: "bg-pink-50",
    },
    {
      label: "Total Transaksi",
      value: "48 Nota",
      icon: FileText,
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      label: "Produk Terjual",
      value: "112 Pcs",
      icon: TrendingUp,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
  ];

  const recentReports = [
    {
      id: "REP-2026-05-14",
      date: "14 Mei 2026",
      sales: "Rp 2.450.000",
      status: "Verified",
    },
    {
      id: "REP-2026-05-13",
      date: "13 Mei 2026",
      sales: "Rp 3.100.000",
      status: "Verified",
    },
    {
      id: "REP-2026-05-12",
      date: "12 Mei 2026",
      sales: "Rp 1.850.000",
      status: "Pending",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFF5F7] p-8 text-pink-950">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="text-4xl font-black tracking-tight flex items-center gap-4">
              <PieChart className="w-10 h-10 text-pink-600" />
              Store Reports
            </h1>
            <p className="text-pink-400 mt-1 font-medium text-sm">
              Laporan performa dan penutupan kasir cabang Batu.
            </p>
          </div>

          <div className="flex gap-3">
            <button className="bg-white text-pink-600 px-6 py-4 rounded-2xl font-black text-xs shadow-sm border border-pink-100 flex items-center gap-2 hover:bg-pink-50 transition-all">
              <Calendar className="w-4 h-4" /> Pilih Periode
            </button>
            <button className="bg-pink-600 text-white px-6 py-4 rounded-2xl font-black text-xs shadow-lg shadow-pink-200 flex items-center gap-2 hover:bg-pink-700 transition-all uppercase tracking-widest">
              <Download className="w-4 h-4" /> Export Laporan
            </button>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {summaries.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-[2.5rem] border border-pink-50 shadow-sm flex flex-col gap-4"
            >
              <div
                className={`w-12 h-12 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center`}
              >
                <item.icon className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] font-black text-pink-300 uppercase tracking-widest">
                  {item.label}
                </p>
                <h3 className="text-2xl font-black">{item.value}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Daily Reports List */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-[2.5rem] border border-pink-50 shadow-sm overflow-hidden">
              <div className="p-8 border-b border-pink-50 flex items-center justify-between">
                <h2 className="text-xl font-black">Laporan Harian (EOD)</h2>
                <span className="text-[10px] font-black uppercase text-pink-300">
                  Mei 2026
                </span>
              </div>
              <div className="p-4 space-y-2">
                {recentReports.map((report) => (
                  <div
                    key={report.id}
                    className="flex items-center justify-between p-5 bg-pink-50/20 rounded-3xl border border-pink-50 hover:bg-pink-50/50 transition-all group"
                  >
                    <div className="flex items-center gap-5">
                      <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-pink-400 group-hover:text-pink-600 shadow-sm transition-colors">
                        <Printer className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-black text-sm">{report.date}</p>
                        <p className="text-[10px] font-bold text-pink-300 uppercase tracking-tighter">
                          {report.id}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <p className="font-black text-sm">{report.sales}</p>
                        <span
                          className={`text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full ${
                            report.status === "Verified"
                              ? "bg-emerald-100 text-emerald-600"
                              : "bg-amber-100 text-amber-600"
                          }`}
                        >
                          {report.status}
                        </span>
                      </div>
                      <ChevronRight className="w-5 h-5 text-pink-200 group-hover:text-pink-500 group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Payment Method Breakdown */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-[2.5rem] border border-pink-50 shadow-sm space-y-6">
              <h2 className="text-lg font-black">Metode Pembayaran</h2>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-xs font-black uppercase mb-2">
                    <span className="text-pink-950">Cash / Tunai</span>
                    <span className="text-pink-400">70%</span>
                  </div>
                  <div className="w-full bg-pink-50 h-3 rounded-full overflow-hidden">
                    <div className="bg-pink-500 h-full w-[70%] rounded-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs font-black uppercase mb-2">
                    <span className="text-pink-950">Transfer / QRIS</span>
                    <span className="text-pink-400">30%</span>
                  </div>
                  <div className="w-full bg-pink-50 h-3 rounded-full overflow-hidden">
                    <div className="bg-blue-400 h-full w-[30%] rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-pink-50">
                <p className="text-[10px] text-pink-300 font-medium leading-relaxed italic">
                  *Data ini disinkronkan otomatis dari modul Cashier setiap
                  hari.
                </p>
              </div>
            </div>

            {/* Quick Action */}
            <div className="bg-gradient-to-br from-pink-600 to-pink-500 p-8 rounded-[2.5rem] text-white shadow-xl shadow-pink-100">
              <h4 className="font-black text-sm uppercase tracking-widest mb-2">
                Butuh Bantuan?
              </h4>
              <p className="text-pink-100 text-xs leading-relaxed mb-6">
                Jika ada selisih kas pada laporan, harap segera hubungi tim
                Finance pusat.
              </p>
              <button className="w-full bg-white/20 hover:bg-white/30 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all">
                Hubungi Finance
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
