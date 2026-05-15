"use client";

import React, { useState } from "react";
import {
  Store,
  MapPin,
  User,
  Phone,
  Clock,
  Users,
  TrendingUp,
  AlertCircle,
  Settings2,
  CalendarDays,
  ChevronRight,
} from "lucide-react";

export default function MyStorePage() {
  // Mock data khusus untuk outlet ini
  const [storeInfo] = useState({
    name: "Laila Collection Batu",
    code: "OUT-001",
    address: "Jl. Abdul Gani Atas No. 24, Ngaglik, Kec. Batu, Kota Batu",
    manager: "Siti Aminah",
    phone: "0812-3456-7001",
    openHours: "09:00 - 21:00",
    status: "Open",
    totalStaff: 4,
  });

  const staffToday = [
    { name: "Dinda Rahma", role: "Kasir", shift: "Pagi", status: "Active" },
    { name: "Maya Saputri", role: "SPG", shift: "Pagi", status: "Active" },
    {
      name: "Rully Kurniawan",
      role: "Warehouse",
      shift: "Full Day",
      status: "Break",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFF5F7] p-8 text-pink-950">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <div className="px-3 py-1 bg-emerald-100 text-emerald-600 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                {storeInfo.status}
              </div>
              <span className="text-pink-300 font-bold text-xs">
                ID: {storeInfo.code}
              </span>
            </div>
            <h1 className="text-4xl font-black tracking-tight">
              {storeInfo.name}
            </h1>
            <p className="text-pink-400 font-medium flex items-center gap-2">
              <MapPin className="w-4 h-4 text-pink-500" /> {storeInfo.address}
            </p>
          </div>

          <button className="bg-white text-pink-600 px-6 py-4 rounded-2xl font-black text-xs shadow-sm border border-pink-100 flex items-center gap-3 hover:bg-pink-50 transition-all">
            <Settings2 className="w-4 h-4" /> Pengaturan Toko
          </button>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-[2.5rem] border border-pink-50 shadow-sm flex flex-col gap-4">
            <Clock className="w-8 h-8 text-pink-500" />
            <div>
              <p className="text-[10px] font-black text-pink-300 uppercase tracking-widest">
                Jam Buka
              </p>
              <h3 className="text-xl font-black">{storeInfo.openHours}</h3>
            </div>
          </div>
          <div className="bg-white p-6 rounded-[2.5rem] border border-pink-50 shadow-sm flex flex-col gap-4">
            <User className="w-8 h-8 text-pink-500" />
            <div>
              <p className="text-[10px] font-black text-pink-300 uppercase tracking-widest">
                Kepala Toko
              </p>
              <h3 className="text-xl font-black">{storeInfo.manager}</h3>
            </div>
          </div>
          <div className="bg-white p-6 rounded-[2.5rem] border border-pink-50 shadow-sm flex flex-col gap-4">
            <Users className="w-8 h-8 text-pink-500" />
            <div>
              <p className="text-[10px] font-black text-pink-300 uppercase tracking-widest">
                Total Staff
              </p>
              <h3 className="text-xl font-black">
                {storeInfo.totalStaff} Orang
              </h3>
            </div>
          </div>
          <div className="bg-gradient-to-br from-pink-600 to-pink-500 p-6 rounded-[2.5rem] text-white shadow-xl shadow-pink-100 flex flex-col gap-4">
            <TrendingUp className="w-8 h-8 opacity-50" />
            <div>
              <p className="text-[10px] font-black text-pink-100 uppercase tracking-widest">
                Omzet Hari Ini
              </p>
              <h3 className="text-xl font-black text-white">Rp 3.820.000</h3>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Staff Information */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-[2.5rem] border border-pink-50 shadow-sm overflow-hidden">
              <div className="p-8 border-b border-pink-50 flex items-center justify-between">
                <h2 className="text-xl font-black">Staff yang Bertugas</h2>
                <button className="text-pink-500 font-bold text-xs hover:underline flex items-center gap-1">
                  Lihat Jadwal <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              <div className="p-4 space-y-2">
                {staffToday.map((staff, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-4 bg-pink-50/30 rounded-2xl border border-pink-50"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center font-black text-pink-600 border border-pink-100 shadow-sm">
                        {staff.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-black text-sm">{staff.name}</p>
                        <p className="text-xs text-pink-400 font-bold uppercase tracking-wider">
                          {staff.role} • {staff.shift}
                        </p>
                      </div>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${
                        staff.status === "Active"
                          ? "bg-emerald-100 text-emerald-600"
                          : "bg-amber-100 text-amber-600"
                      }`}
                    >
                      {staff.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Side Panels */}
          <div className="space-y-6">
            {/* Contact Card */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-pink-50 shadow-sm space-y-6">
              <h2 className="text-lg font-black">Kontak Toko</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-pink-50 rounded-xl flex items-center justify-center text-pink-500">
                    <Phone className="w-5 h-5" />
                  </div>
                  <p className="font-bold text-sm">{storeInfo.phone}</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-pink-50 rounded-xl flex items-center justify-center text-pink-500">
                    <CalendarDays className="w-5 h-5" />
                  </div>
                  <p className="font-bold text-sm text-pink-400">
                    Senin - Minggu
                  </p>
                </div>
              </div>
            </div>

            {/* Warning Inventory */}
            <div className="bg-amber-50 p-8 rounded-[2.5rem] border border-amber-100 relative overflow-hidden group">
              <AlertCircle className="w-12 h-12 text-amber-200 absolute -right-2 -bottom-2 group-hover:scale-110 transition-transform" />
              <div className="relative z-10 space-y-2">
                <h4 className="font-black text-amber-900 text-sm uppercase tracking-widest">
                  Butuh Perhatian
                </h4>
                <p className="text-amber-800 text-xs leading-relaxed font-medium">
                  Persediaan **Gamis Laila L** di cabang ini tersisa **2 pcs**.
                  Segera lakukan _Request Stock_ ke pusat.
                </p>
                <button className="mt-4 text-amber-900 font-black text-[10px] uppercase underline tracking-widest hover:text-amber-600">
                  Cek Inventaris
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
