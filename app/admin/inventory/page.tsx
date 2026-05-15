"use client";

import React, { useState } from "react";
import { 
  Package, 
  Search, 
  Filter, 
  Plus, 
  ArrowDownLeft, 
  ArrowUpRight, 
  AlertTriangle,
  MoreVertical,
  ChevronRight
} from "lucide-react";

interface ProductStock {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  minStock: number;
  status: "Tersedia" | "Hampir Habis" | "Habis";
}

const initialInventory: ProductStock[] = [
  { id: "PROD-001", name: "Gamis Laila Premium L", category: "Gamis", price: 350000, stock: 2, minStock: 5, status: "Hampir Habis" },
  { id: "PROD-002", name: "Pashmina Silk Soft Pink", category: "Hijab", price: 85000, stock: 45, minStock: 10, status: "Tersedia" },
  { id: "PROD-003", name: "Tunik Floral Blue M", category: "Atasan", price: 175000, stock: 0, minStock: 5, status: "Habis" },
  { id: "PROD-004", name: "Mukena Travel Laila", category: "Mukena", price: 210000, stock: 12, minStock: 5, status: "Tersedia" },
];

export default function InventoryPage() {
  const [inventory] = useState<ProductStock[]>(initialInventory);

  return (
    <div className="min-h-screen bg-[#FFF5F7] p-8 text-pink-950">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="text-4xl font-black tracking-tight flex items-center gap-3">
              <Package className="w-10 h-10 text-pink-600" />
              Inventory
            </h1>
            <p className="text-pink-400 mt-1 font-medium text-sm">Kelola stok barang di cabang Laila Collection Batu.</p>
          </div>
          
          <div className="flex gap-3">
            <button className="bg-white text-pink-600 px-6 py-4 rounded-2xl font-bold text-xs shadow-sm border border-pink-100 flex items-center gap-2 hover:bg-pink-50 transition-all">
              <ArrowDownLeft className="w-4 h-4" /> Stock Opname
            </button>
            <button className="bg-pink-600 text-white px-6 py-4 rounded-2xl font-black text-xs shadow-lg shadow-pink-200 flex items-center gap-2 hover:bg-pink-700 transition-all uppercase tracking-widest">
              <Plus className="w-4 h-4" /> Request Stok ke Pusat
            </button>
          </div>
        </div>

        {/* Inventory Analytics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-[2.5rem] border border-pink-50 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-[10px] font-black text-pink-300 uppercase tracking-widest">Total Produk</p>
              <h3 className="text-3xl font-black">{inventory.length} Jenis</h3>
            </div>
            <div className="w-12 h-12 bg-pink-50 rounded-2xl flex items-center justify-center text-pink-500">
              <Package className="w-6 h-6" />
            </div>
          </div>
          <div className="bg-white p-6 rounded-[2.5rem] border border-pink-50 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-[10px] font-black text-pink-300 uppercase tracking-widest">Stok Kritis</p>
              <h3 className="text-3xl font-black text-rose-500">2 Produk</h3>
            </div>
            <div className="w-12 h-12 bg-rose-50 rounded-2xl flex items-center justify-center text-rose-500">
              <AlertTriangle className="w-6 h-6" />
            </div>
          </div>
          <div className="bg-white p-6 rounded-[2.5rem] border border-pink-50 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-[10px] font-black text-pink-300 uppercase tracking-widest">Barang Masuk (Bulan Ini)</p>
              <h3 className="text-3xl font-black text-emerald-500">+124 Pcs</h3>
            </div>
            <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-500">
              <ArrowUpRight className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Table & Controls */}
        <div className="bg-white rounded-[2.5rem] border border-pink-50 shadow-sm overflow-hidden">
          <div className="p-8 border-b border-pink-50 flex flex-col md:flex-row justify-between gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-3.5 w-4 h-4 text-pink-300" />
              <input 
                type="text" 
                placeholder="Cari nama barang atau SKU..."
                className="w-full bg-pink-50/50 border-none rounded-xl py-3 pl-11 pr-4 text-sm font-bold focus:ring-2 focus:ring-pink-500 outline-none"
              />
            </div>
            <button className="bg-white px-6 py-3 rounded-xl border border-pink-100 text-pink-400 flex items-center gap-2 font-bold text-sm hover:text-pink-600 transition-all">
              <Filter className="w-4 h-4" /> Filter Kategori
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-pink-50/30 text-[10px] font-black uppercase tracking-[0.2em] text-pink-400">
                <tr>
                  <th className="px-8 py-5">SKU & Nama Produk</th>
                  <th className="px-8 py-5">Kategori</th>
                  <th className="px-8 py-5">Harga Jual</th>
                  <th className="px-8 py-5 text-center">Stok Fisik</th>
                  <th className="px-8 py-5 text-center">Status</th>
                  <th className="px-8 py-5"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-pink-50">
                {inventory.map((item) => (
                  <tr key={item.id} className="hover:bg-pink-50/20 transition-colors">
                    <td className="px-8 py-6">
                      <div>
                        <p className="font-black text-sm text-pink-950">{item.name}</p>
                        <p className="text-[10px] font-bold text-pink-300 uppercase">{item.id}</p>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <span className="text-xs font-bold text-pink-600 bg-pink-50 px-3 py-1 rounded-lg">
                        {item.category}
                      </span>
                    </td>
                    <td className="px-8 py-6 font-bold text-sm">
                      Rp {item.price.toLocaleString()}
                    </td>
                    <td className="px-8 py-6 text-center">
                      <div className="flex flex-col items-center">
                        <span className={`text-lg font-black ${item.stock <= item.minStock ? 'text-rose-600' : 'text-pink-950'}`}>
                          {item.stock}
                        </span>
                        <span className="text-[10px] font-bold text-pink-300 uppercase tracking-tighter">Min: {item.minStock}</span>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-center">
                      <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${
                        item.status === 'Tersedia' ? 'bg-emerald-100 text-emerald-600' : 
                        item.status === 'Hampir Habis' ? 'bg-amber-100 text-amber-600' : 
                        'bg-rose-100 text-rose-600'
                      }`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="px-8 py-6 text-right">
                      <button className="p-2 hover:bg-pink-100 rounded-lg transition-all text-pink-300 hover:text-pink-600">
                        <MoreVertical className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Stock Movement Brief */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-[2.5rem] p-8 border border-pink-50 shadow-sm">
            <h4 className="text-sm font-black uppercase tracking-widest mb-6 flex items-center gap-2">
              <ArrowDownLeft className="w-4 h-4 text-emerald-500" /> Masuk Terakhir
            </h4>
            <div className="space-y-4">
              {[1, 2].map((i) => (
                <div key={i} className="flex justify-between items-center pb-4 border-b border-pink-50 last:border-0 last:pb-0">
                  <p className="text-sm font-bold">Pengiriman dari Gudang Pusat</p>
                  <div className="text-right">
                    <p className="text-xs font-black text-emerald-600">+24 Pcs</p>
                    <p className="text-[10px] text-pink-300 font-medium">12 Mei 2024</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white rounded-[2.5rem] p-8 border border-pink-50 shadow-sm">
            <h4 className="text-sm font-black uppercase tracking-widest mb-6 flex items-center gap-2">
              <ArrowUpRight className="w-4 h-4 text-rose-500" /> Keluar (Retur/Rusak)
            </h4>
            <div className="flex items-center justify-center h-24 bg-pink-50/50 rounded-2xl border border-dashed border-pink-100">
              <p className="text-xs font-bold text-pink-300">Tidak ada pergerakan stok keluar hari ini.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}