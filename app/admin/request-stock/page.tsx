"use client";

import React, { useState } from "react";
import {
  Truck,
  Plus,
  Search,
  Package,
  History,
  Send,
  X,
  ChevronRight,
  AlertCircle,
} from "lucide-react";

interface RequestItem {
  id: string;
  name: string;
  quantity: number;
  reason: string;
}

interface RequestHistory {
  id: string;
  date: string;
  itemsCount: number;
  status: "Pending" | "Disetujui" | "Dikirim" | "Diterima";
}

export default function RequestStockPage() {
  const [requestList, setRequestList] = useState<RequestItem[]>([]);
  const [history] = useState<RequestHistory[]>([
    { id: "REQ-9901", date: "14 Mei 2024", itemsCount: 3, status: "Dikirim" },
    { id: "REQ-9852", date: "10 Mei 2024", itemsCount: 5, status: "Diterima" },
  ]);

  const addItem = () => {
    const newItem: RequestItem = {
      id: Math.random().toString(),
      name: "",
      quantity: 1,
      reason: "Stok Menipis",
    };
    setRequestList([...requestList, newItem]);
  };

  const removeItem = (id: string) => {
    setRequestList(requestList.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#FFF5F7] p-8 text-pink-950">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="text-4xl font-black tracking-tight flex items-center gap-4">
              <Truck className="w-10 h-10 text-pink-600" />
              Request Stock
            </h1>
            <p className="text-pink-400 mt-1 font-medium text-sm">
              Minta penambahan stok barang ke Gudang Pusat.
            </p>
          </div>

          <div className="bg-amber-100 px-6 py-4 rounded-2xl flex items-center gap-3 border border-amber-200">
            <AlertCircle className="w-5 h-5 text-amber-600" />
            <p className="text-xs font-bold text-amber-800">
              Pastikan stok fisik sudah dicek sebelum meminta.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form Request (Kiri) */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-[2.5rem] border border-pink-50 shadow-sm p-8">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-black">Daftar Permintaan</h2>
                <button
                  onClick={addItem}
                  className="bg-pink-50 text-pink-600 px-4 py-2 rounded-xl text-xs font-black flex items-center gap-2 hover:bg-pink-100 transition-all"
                >
                  <Plus className="w-4 h-4" /> Tambah Barang
                </button>
              </div>

              {requestList.length === 0 ? (
                <div className="py-20 text-center border-2 border-dashed border-pink-50 rounded-[2rem]">
                  <Package className="w-12 h-12 text-pink-100 mx-auto mb-4" />
                  <p className="text-pink-300 font-bold text-sm">
                    Belum ada barang yang dipilih.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {requestList.map((item) => (
                    <div
                      key={item.id}
                      className="grid grid-cols-12 gap-4 p-4 bg-pink-50/30 rounded-2xl border border-pink-50 items-center"
                    >
                      <div className="col-span-5">
                        <label className="text-[10px] font-black uppercase text-pink-300 mb-1 block">
                          Nama Produk
                        </label>
                        <select className="w-full bg-white border-none rounded-xl py-2 px-3 text-sm font-bold shadow-sm focus:ring-2 focus:ring-pink-500 outline-none">
                          <option>Pilih Produk...</option>
                          <option>Gamis Laila Premium</option>
                          <option>Pashmina Silk Soft Pink</option>
                        </select>
                      </div>
                      <div className="col-span-2">
                        <label className="text-[10px] font-black uppercase text-pink-300 mb-1 block">
                          Jumlah
                        </label>
                        <input
                          type="number"
                          className="w-full bg-white border-none rounded-xl py-2 px-3 text-sm font-bold shadow-sm focus:ring-2 focus:ring-pink-500 outline-none"
                          placeholder="0"
                        />
                      </div>
                      <div className="col-span-4">
                        <label className="text-[10px] font-black uppercase text-pink-300 mb-1 block">
                          Alasan
                        </label>
                        <input
                          type="text"
                          className="w-full bg-white border-none rounded-xl py-2 px-3 text-sm font-bold shadow-sm focus:ring-2 focus:ring-pink-500 outline-none"
                          placeholder="Contoh: Stok Habis"
                        />
                      </div>
                      <div className="col-span-1 pt-4">
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-rose-300 hover:text-rose-500"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  ))}

                  <div className="pt-6">
                    <button className="w-full bg-pink-600 text-white py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-lg shadow-pink-200 flex items-center justify-center gap-3 hover:bg-pink-700 transition-all">
                      <Send className="w-4 h-4" /> Kirim Request ke Pusat
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Riwayat Request (Kanan) */}
          <div className="space-y-6">
            <div className="bg-white rounded-[2.5rem] border border-pink-50 shadow-sm p-8">
              <h2 className="text-lg font-black mb-6 flex items-center gap-3">
                <History className="w-5 h-5 text-pink-400" />
                Riwayat Request
              </h2>
              <div className="space-y-4">
                {history.map((req) => (
                  <div key={req.id} className="group cursor-pointer">
                    <div className="flex items-center justify-between p-4 hover:bg-pink-50/50 rounded-2xl transition-all border border-transparent hover:border-pink-50">
                      <div>
                        <p className="font-black text-sm text-pink-950">
                          {req.id}
                        </p>
                        <p className="text-[10px] font-bold text-pink-300 uppercase">
                          {req.date} • {req.itemsCount} Item
                        </p>
                      </div>
                      <div className="text-right flex flex-col items-end gap-2">
                        <span
                          className={`px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest ${
                            req.status === "Diterima"
                              ? "bg-emerald-100 text-emerald-600"
                              : req.status === "Dikirim"
                                ? "bg-blue-100 text-blue-600"
                                : "bg-amber-100 text-amber-600"
                          }`}
                        >
                          {req.status}
                        </span>
                        <ChevronRight className="w-4 h-4 text-pink-200 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Note Panel */}
            <div className="bg-pink-600 rounded-[2.5rem] p-8 text-white shadow-xl shadow-pink-100">
              <h4 className="font-black text-sm uppercase tracking-widest mb-2">
                Penting
              </h4>
              <p className="text-pink-100 text-xs leading-relaxed font-medium">
                Setiap permintaan stok yang dikirim akan langsung muncul di
                dashboard **Super Admin**. Harap tunggu konfirmasi sebelum
                barang dikirim.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
