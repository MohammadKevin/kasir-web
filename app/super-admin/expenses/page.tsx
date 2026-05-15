"use client";

import React, { useState } from "react";
import {
  Receipt,
  Plus,
  Search,
  Filter,
  ArrowDownCircle,
  Calendar,
  MoreHorizontal,
  Download,
  Building2,
} from "lucide-react";

interface Expense {
  id: string;
  category: string;
  amount: number;
  date: string;
  outlet: string;
  description: string;
  status: "Approved" | "Pending";
}

const initialExpenses: Expense[] = [
  {
    id: "EXP-001",
    category: "Restock Barang",
    amount: 15000000,
    date: "2024-05-10",
    outlet: "Laila Batu",
    description: "Pembelian kain sutra dan pashmina",
    status: "Approved",
  },
  {
    id: "EXP-002",
    category: "Operasional",
    amount: 1200000,
    date: "2024-05-12",
    outlet: "Laila Malang",
    description: "Biaya listrik dan air",
    status: "Approved",
  },
  {
    id: "EXP-003",
    category: "Marketing",
    amount: 5000000,
    date: "2024-05-14",
    outlet: "Pusat",
    description: "Iklan Instagram Ads",
    status: "Pending",
  },
  {
    id: "EXP-004",
    category: "Gaji Karyawan",
    amount: 8500000,
    date: "2024-05-15",
    outlet: "Laila Surabaya",
    description: "Gaji staff outlet Mei",
    status: "Approved",
  },
];

export default function ExpensesPage() {
  const [expenses] = useState<Expense[]>(initialExpenses);
  const [searchTerm, setSearchTerm] = useState("");

  const totalExpense = expenses.reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <div className="min-h-screen bg-[#FFF5F7] p-8 text-pink-950">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="text-4xl font-black tracking-tight flex items-center gap-3">
              <Receipt className="w-10 h-10 text-pink-600" />
              Expenses
            </h1>
            <p className="text-pink-400 mt-1 font-medium text-sm">
              Monitor dan catat pengeluaran operasional Laila Collection.
            </p>
          </div>

          <div className="flex gap-3">
            <button className="bg-white text-pink-600 px-6 py-3 rounded-2xl font-bold text-xs shadow-sm border border-pink-100 flex items-center gap-2 hover:bg-pink-50 transition-all">
              <Download className="w-4 h-4" /> Export CSV
            </button>
            <button className="bg-pink-600 text-white px-6 py-3 rounded-2xl font-black text-xs shadow-lg shadow-pink-200 flex items-center gap-2 hover:bg-pink-700 transition-all uppercase tracking-widest">
              <Plus className="w-4 h-4" /> Tambah Pengeluaran
            </button>
          </div>
        </div>

        {/* Quick Summary Card */}
        <div className="bg-gradient-to-r from-pink-600 to-pink-500 rounded-[2.5rem] p-8 text-white flex flex-col md:flex-row justify-between items-center shadow-xl shadow-pink-100">
          <div className="space-y-1 text-center md:text-left">
            <p className="text-pink-100 text-xs font-black uppercase tracking-[0.2em]">
              Total Pengeluaran Bulan Ini
            </p>
            <h2 className="text-4xl font-black">
              Rp {totalExpense.toLocaleString()}
            </h2>
          </div>
          <div className="mt-6 md:mt-0 bg-white/20 p-4 rounded-2xl backdrop-blur-md flex items-center gap-4">
            <ArrowDownCircle className="w-8 h-8 text-pink-100" />
            <div className="text-sm">
              <p className="font-bold">4 Transaksi Terdaftar</p>
              <p className="text-pink-100 opacity-80 text-xs">Semua Cabang</p>
            </div>
          </div>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-4 w-5 h-5 text-pink-300" />
            <input
              type="text"
              placeholder="Cari deskripsi atau kategori..."
              className="w-full bg-white border-none rounded-2xl py-4 pl-12 pr-4 shadow-sm focus:ring-2 focus:ring-pink-500 outline-none font-semibold"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="bg-white px-6 py-4 rounded-2xl shadow-sm border border-pink-100 text-pink-400 flex items-center gap-2 font-bold hover:text-pink-600 transition-all">
            <Filter className="w-4 h-4" /> Filter Cabang
          </button>
        </div>

        {/* Expense Table */}
        <div className="bg-white rounded-[2.5rem] border border-pink-50 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-pink-50/50 text-[10px] font-black uppercase tracking-[0.2em] text-pink-400">
                <tr>
                  <th className="px-8 py-5">Tanggal & ID</th>
                  <th className="px-8 py-5">Kategori</th>
                  <th className="px-8 py-5">Cabang</th>
                  <th className="px-8 py-5">Deskripsi</th>
                  <th className="px-8 py-5">Jumlah</th>
                  <th className="px-8 py-5">Status</th>
                  <th className="px-8 py-5"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-pink-50">
                {expenses
                  .filter(
                    (exp) =>
                      exp.description
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) ||
                      exp.category
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()),
                  )
                  .map((exp) => (
                    <tr
                      key={exp.id}
                      className="hover:bg-pink-50/30 transition-colors"
                    >
                      <td className="px-8 py-6">
                        <div className="flex flex-col">
                          <span className="font-bold text-sm text-pink-950">
                            {exp.date}
                          </span>
                          <span className="text-[10px] text-pink-300 font-bold">
                            {exp.id}
                          </span>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <span className="bg-pink-50 text-pink-600 px-3 py-1 rounded-lg text-xs font-black uppercase tracking-wider">
                          {exp.category}
                        </span>
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-2 text-sm font-bold text-pink-800">
                          <Building2 className="w-4 h-4 text-pink-300" />
                          {exp.outlet}
                        </div>
                      </td>
                      <td className="px-8 py-6 text-sm font-medium text-pink-500 max-w-xs truncate">
                        {exp.description}
                      </td>
                      <td className="px-8 py-6 font-black text-sm text-pink-950">
                        Rp {exp.amount.toLocaleString()}
                      </td>
                      <td className="px-8 py-6">
                        <span
                          className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                            exp.status === "Approved"
                              ? "bg-emerald-100 text-emerald-600"
                              : "bg-amber-100 text-amber-600"
                          }`}
                        >
                          {exp.status}
                        </span>
                      </td>
                      <td className="px-8 py-6">
                        <button className="text-pink-200 hover:text-pink-600">
                          <MoreHorizontal className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>

          {/* Pagination Placeholder */}
          <div className="p-8 bg-pink-50/20 border-t border-pink-50 flex justify-between items-center">
            <p className="text-xs font-bold text-pink-300 uppercase">
              Menampilkan {expenses.length} data
            </p>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-white border border-pink-100 rounded-xl text-xs font-bold text-pink-300 hover:text-pink-600 transition-all">
                Previous
              </button>
              <button className="px-4 py-2 bg-pink-600 text-white rounded-xl text-xs font-bold shadow-md shadow-pink-100">
                1
              </button>
              <button className="px-4 py-2 bg-white border border-pink-100 rounded-xl text-xs font-bold text-pink-300 hover:text-pink-600 transition-all">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
