"use client";

import React, { useState } from "react";
import {
  ShoppingBag,
  Plus,
  Search,
  Truck,
  Package,
  ArrowRight,
  History,
  MoreVertical,
  ChevronRight,
} from "lucide-react";

interface PurchaseOrder {
  id: string;
  supplier: string;
  itemName: string;
  category: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  date: string;
  status: "Selesai" | "Dikirim" | "Draft";
}

const initialPurchases: PurchaseOrder[] = [
  {
    id: "PO-2024-001",
    supplier: "Grosir Tekstil Jaya",
    itemName: "Kain Silk Premium",
    category: "Bahan Salur",
    quantity: 50,
    unitPrice: 45000,
    totalPrice: 2250000,
    date: "2024-05-10",
    status: "Selesai",
  },
  {
    id: "PO-2024-002",
    supplier: "Konveksi Hijab Bandung",
    itemName: "Pashmina Instan",
    category: "Hijab",
    quantity: 200,
    unitPrice: 25000,
    totalPrice: 5000000,
    date: "2024-05-12",
    status: "Dikirim",
  },
];

export default function PurchasingPage() {
  const [purchases] = useState<PurchaseOrder[]>(initialPurchases);

  return (
    <div className="min-h-screen bg-[#FFF5F7] p-8 text-pink-950">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="text-4xl font-black tracking-tight flex items-center gap-3">
              <Truck className="w-10 h-10 text-pink-600" />
              Purchasing
            </h1>
            <p className="text-pink-400 mt-1 font-medium text-sm">
              Kelola pembelian stok barang (Kulakan) dari supplier.
            </p>
          </div>

          <button className="bg-pink-600 text-white px-8 py-4 rounded-2xl font-black text-xs shadow-lg shadow-pink-200 flex items-center gap-3 hover:bg-pink-700 transition-all uppercase tracking-[0.2em]">
            <Plus className="w-5 h-5" /> Buat Purchase Order
          </button>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-[2.5rem] border border-pink-50 shadow-sm flex items-center gap-5">
            <div className="w-14 h-14 bg-pink-100 rounded-2xl flex items-center justify-center text-pink-600">
              <Package className="w-7 h-7" />
            </div>
            <div>
              <p className="text-[10px] font-black text-pink-300 uppercase tracking-widest">
                Total Stok Masuk
              </p>
              <h3 className="text-2xl font-black">250 Pcs</h3>
            </div>
          </div>
          <div className="bg-white p-6 rounded-[2.5rem] border border-pink-50 shadow-sm flex items-center gap-5">
            <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-600">
              <ShoppingBag className="w-7 h-7" />
            </div>
            <div>
              <p className="text-[10px] font-black text-pink-300 uppercase tracking-widest">
                Total Modal Keluar
              </p>
              <h3 className="text-2xl font-black text-pink-600">
                Rp 7.250.000
              </h3>
            </div>
          </div>
          <div className="bg-white p-6 rounded-[2.5rem] border border-pink-50 shadow-sm flex items-center gap-5">
            <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600">
              <History className="w-7 h-7" />
            </div>
            <div>
              <p className="text-[10px] font-black text-pink-300 uppercase tracking-widest">
                PO Aktif
              </p>
              <h3 className="text-2xl font-black">1 Pengiriman</h3>
            </div>
          </div>
        </div>

        {/* Purchase List */}
        <div className="bg-white rounded-[2.5rem] border border-pink-50 shadow-sm overflow-hidden">
          <div className="p-8 border-b border-pink-50 flex flex-col md:flex-row justify-between gap-4">
            <h2 className="text-xl font-black">Riwayat Kulakan</h2>
            <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-3 w-4 h-4 text-pink-300" />
              <input
                type="text"
                placeholder="Cari supplier atau barang..."
                className="w-full bg-pink-50/50 border-none rounded-xl py-2.5 pl-11 pr-4 text-sm font-bold focus:ring-2 focus:ring-pink-500 outline-none transition-all"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-pink-50/30 text-[10px] font-black uppercase tracking-[0.2em] text-pink-400">
                <tr>
                  <th className="px-8 py-4">ID & Tanggal</th>
                  <th className="px-8 py-4">Supplier</th>
                  <th className="px-8 py-4">Barang</th>
                  <th className="px-8 py-4 text-center">Qty</th>
                  <th className="px-8 py-4 text-right">Harga Satuan</th>
                  <th className="px-8 py-4 text-right">Total Modal</th>
                  <th className="px-8 py-4 text-center">Status</th>
                  <th className="px-8 py-4"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-pink-50">
                {purchases.map((item) => (
                  <tr
                    key={item.id}
                    className="hover:bg-pink-50/30 transition-colors group"
                  >
                    <td className="px-8 py-6">
                      <div className="flex flex-col text-sm">
                        <span className="font-black text-pink-950">
                          {item.id}
                        </span>
                        <span className="text-pink-300 font-bold text-xs">
                          {item.date}
                        </span>
                      </div>
                    </td>
                    <td className="px-8 py-6 font-bold text-sm text-pink-600">
                      {item.supplier}
                    </td>
                    <td className="px-8 py-6 font-bold text-sm">
                      {item.itemName}
                    </td>
                    <td className="px-8 py-6 text-center font-black text-sm">
                      {item.quantity}
                    </td>
                    <td className="px-8 py-6 text-right font-medium text-sm">
                      Rp {item.unitPrice.toLocaleString()}
                    </td>
                    <td className="px-8 py-6 text-right font-black text-sm text-pink-900">
                      Rp {item.totalPrice.toLocaleString()}
                    </td>
                    <td className="px-8 py-6 text-center">
                      <span
                        className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm ${
                          item.status === "Selesai"
                            ? "bg-emerald-500 text-white"
                            : "bg-amber-400 text-white"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="px-8 py-6 text-right">
                      <button className="p-2 hover:bg-pink-100 rounded-lg transition-all text-pink-300 hover:text-pink-600">
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom Tip */}
        <div className="bg-pink-100 rounded-3xl p-6 flex items-center gap-4 text-pink-600">
          <div className="bg-white p-2 rounded-xl shadow-sm">
            <ArrowRight className="w-5 h-5" />
          </div>
          <p className="text-xs font-bold leading-relaxed">
            Catatan: Menyetujui Purchase Order dengan status &quot;Selesai&quot; akan
            secara otomatis menambahkan jumlah stok di database inventaris
            pusat.
          </p>
        </div>
      </div>
    </div>
  );
}
