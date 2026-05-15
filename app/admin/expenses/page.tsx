"use client";

import React, { useState } from "react";
import { 
  Wallet, 
  Plus, 
  Search, 
  Receipt, 
  ArrowDownCircle, 
  Calendar, 
  Filter,
  MoreVertical,
  Trash2,
  FileText
} from "lucide-react";

interface Expense {
  id: string;
  date: string;
  category: string;
  note: string;
  amount: number;
}

const initialExpenses: Expense[] = [
  { id: "EXP-001", date: "2026-05-14", category: "Operasional", note: "Beli Air Galon (2)", amount: 40000 },
  { id: "EXP-002", date: "2026-05-13", category: "Kebersihan", note: "Beli Sapu & Sabun Pel", amount: 65000 },
  { id: "EXP-003", date: "2026-05-12", category: "Listrik", note: "Token Listrik Mingguan", amount: 150000 },
];

export default function LocalExpensesPage() {
  const [expenses] = useState<Expense[]>(initialExpenses);

  return (
    <div className="min-h-screen bg-[#FFF5F7] p-8 text-pink-950">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="text-4xl font-black tracking-tight flex items-center gap-4">
              <Wallet className="w-10 h-10 text-pink-600" />
              Local Expenses
            </h1>
            <p className="text-pink-400 mt-1 font-medium text-sm">Catat pengeluaran harian cabang Laila Collection.</p>
          </div>
          
          <button className="bg-pink-600 text-white px-8 py-4 rounded-2xl font-black text-xs shadow-lg shadow-pink-200 flex items-center gap-3 hover:bg-pink-700 transition-all uppercase tracking-[0.2em]">
            <Plus className="w-5 h-5" /> Catat Pengeluaran
          </button>
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-[2.5rem] border border-pink-50 shadow-sm">
            <p className="text-[10px] font-black text-pink-300 uppercase tracking-widest mb-2">Total Pengeluaran Bulan Ini</p>
            <h3 className="text-3xl font-black text-pink-600">Rp 255.000</h3>
          </div>
          <div className="bg-white p-6 rounded-[2.5rem] border border-pink-50 shadow-sm">
            <p className="text-[10px] font-black text-pink-300 uppercase tracking-widest mb-2">Sisa Petikas (Cash on Hand)</p>
            <h3 className="text-3xl font-black text-emerald-600">Rp 745.000</h3>
          </div>
          <div className="bg-white p-6 rounded-[2.5rem] border border-pink-50 shadow-sm flex items-center justify-center border-dashed border-2 border-pink-100">
            <button className="text-pink-400 font-bold text-xs hover:text-pink-600 flex items-center gap-2 transition-all">
              <FileText className="w-4 h-4" /> Download Laporan (PDF)
            </button>
          </div>
        </div>

        {/* Expense List Table */}
        <div className="bg-white rounded-[2.5rem] border border-pink-50 shadow-sm overflow-hidden">
          <div className="p-8 border-b border-pink-50 flex flex-col md:flex-row justify-between gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-3.5 w-4 h-4 text-pink-300" />
              <input 
                type="text" 
                placeholder="Cari catatan pengeluaran..."
                className="w-full bg-pink-50/50 border-none rounded-xl py-3 pl-11 pr-4 text-sm font-bold focus:ring-2 focus:ring-pink-500 outline-none"
              />
            </div>
            <div className="flex gap-2">
              <button className="bg-white px-6 py-3 rounded-xl border border-pink-100 text-pink-400 flex items-center gap-2 font-bold text-sm hover:text-pink-600 transition-all">
                <Calendar className="w-4 h-4" /> Semua Tanggal
              </button>
              <button className="bg-white px-4 py-3 rounded-xl border border-pink-100 text-pink-400 flex items-center gap-2 font-bold text-sm hover:text-pink-600 transition-all">
                <Filter className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-pink-50/30 text-[10px] font-black uppercase tracking-[0.2em] text-pink-400">
                <tr>
                  <th className="px-8 py-5">Tanggal</th>
                  <th className="px-8 py-5">Kategori</th>
                  <th className="px-8 py-5">Keterangan / Catatan</th>
                  <th className="px-8 py-5 text-right">Jumlah</th>
                  <th className="px-8 py-5"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-pink-50">
                {expenses.map((expense) => (
                  <tr key={expense.id} className="hover:bg-pink-50/20 transition-colors group">
                    <td className="px-8 py-6">
                      <p className="font-bold text-sm text-pink-950">{expense.date}</p>
                    </td>
                    <td className="px-8 py-6">
                      <span className="text-[10px] font-black uppercase tracking-widest bg-pink-100 text-pink-600 px-3 py-1 rounded-lg">
                        {expense.category}
                      </span>
                    </td>
                    <td className="px-8 py-6">
                      <p className="text-sm font-medium text-pink-500 italic">{expense.note}</p>
                    </td>
                    <td className="px-8 py-6 text-right">
                      <p className="font-black text-rose-500">- Rp {expense.amount.toLocaleString()}</p>
                    </td>
                    <td className="px-8 py-6 text-right">
                      <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 hover:bg-rose-50 rounded-lg text-rose-300 hover:text-rose-500">
                          <Trash2 className="w-4 h-4" />
                        </button>
                        <button className="p-2 hover:bg-pink-50 rounded-lg text-pink-300 hover:text-pink-600">
                          <MoreVertical className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Information Panel */}
        <div className="bg-amber-50 rounded-[2.5rem] p-8 border border-amber-100 flex items-start gap-5">
          <div className="bg-white p-3 rounded-2xl shadow-sm">
            <Receipt className="w-6 h-6 text-amber-500" />
          </div>
          <div>
            <h4 className="font-black text-amber-900 text-sm uppercase tracking-widest mb-1">Kebijakan Nota</h4>
            <p className="text-amber-800 text-xs leading-relaxed font-medium">
              Pastikan Anda menyimpan bukti fisik (nota/struk) untuk setiap pengeluaran di atas **Rp 50.000**. Super Admin akan melakukan verifikasi bukti fisik setiap akhir minggu.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}