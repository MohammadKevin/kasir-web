"use client";

import React from "react";
import Link from "next/link";
import { 
  Store, 
  MapPin, 
  User, 
  Phone, 
  Clock, 
  Calendar,
  AlertCircle,
  Package,
  TrendingUp,
  Settings2
} from "lucide-react";

export default function MyOutletPage() {
  // Data ini nantinya diambil berdasarkan login Admin Cabang tersebut
  const myOutlet = {
    name: "Laila Collection Batu",
    address: "Jl. Abdul Gani Atas No. 24, Kota Batu",
    manager: "Siti Aminah (You)",
    phone: "0812-3456-7001",
    status: "Aktif",
    openHours: "09:00 - 21:00",
    totalStaff: 4
  };

  return (
    <div className="min-h-screen bg-[#FFF5F7] p-8 text-pink-950">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Header - Identitas Cabang */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-emerald-500 w-3 h-3 rounded-full animate-pulse"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-600">Store Open</span>
            </div>
            <h1 className="text-4xl font-black tracking-tight">{myOutlet.name}</h1>
            <p className="text-pink-400 mt-1 font-medium flex items-center gap-2">
              <MapPin className="w-4 h-4" /> {myOutlet.address}
            </p>
          </div>
          
          <button className="bg-white text-pink-600 px-6 py-3 rounded-2xl font-black text-xs shadow-sm border border-pink-100 flex items-center gap-2 hover:bg-pink-50 transition-all">
            <Settings2 className="w-4 h-4" /> Edit Info Toko
          </button>
        </div>

        {/* Info Cards - Status Operasional */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-[2.5rem] border border-pink-50 shadow-sm space-y-3">
            <Clock className="w-6 h-6 text-pink-500" />
            <div>
              <p className="text-[10px] font-black text-pink-300 uppercase tracking-widest">Jam Operasional</p>
              <p className="font-black text-lg">{myOutlet.openHours}</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-[2.5rem] border border-pink-50 shadow-sm space-y-3">
            <User className="w-6 h-6 text-pink-500" />
            <div>
              <p className="text-[10px] font-black text-pink-300 uppercase tracking-widest">Person in Charge</p>
              <p className="font-black text-lg">{myOutlet.manager}</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-[2.5rem] border border-pink-50 shadow-sm space-y-3">
            <Phone className="w-6 h-6 text-pink-500" />
            <div>
              <p className="text-[10px] font-black text-pink-300 uppercase tracking-widest">Kontak Toko</p>
              <p className="font-black text-lg">{myOutlet.phone}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-[2.5rem] border border-pink-50 shadow-sm p-8">
              <h2 className="text-xl font-black mb-6">Staff Toko Hari Ini</h2>
              <div className="space-y-4">
                {['Dinda - Kasir', 'Maya - SPG', 'Rully - Warehouse'].map((staff, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-pink-50/50 rounded-2xl border border-pink-50">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center font-bold text-pink-600 text-xs border border-pink-100">
                        {staff.charAt(0)}
                      </div>
                      <span className="font-bold text-sm">{staff}</span>
                    </div>
                    <span className="text-[10px] font-black uppercase text-emerald-500">Present</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Side Performance */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-pink-600 to-pink-700 rounded-[2.5rem] p-8 text-white shadow-xl shadow-pink-200">
              <h2 className="text-xl font-black mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5" /> Sales Today
              </h2>
              <p className="text-3xl font-black">Rp 2.450.000</p>
              <p className="text-pink-200 text-xs mt-2 font-medium">12 Transaksi berhasil</p>
              
              <button className="w-full mt-8 bg-white text-pink-600 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all hover:bg-pink-50">
                Lihat Laporan Sales
              </button>
            </div>

            <div className="bg-amber-50 rounded-[2.5rem] p-8 border border-amber-100 flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-amber-500 shrink-0" />
              <div>
                <h4 className="font-black text-amber-900 text-xs uppercase tracking-widest mb-1 text-left">Stok Menipis</h4>
                <p className="text-amber-800 text-xs leading-relaxed font-medium text-left">
                  3 Produk (Gamis Laila L, Pashmina Pink) hampir habis di cabang ini.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}