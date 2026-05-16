"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Store,
  Plus,
  Search,
  MapPin,
  Phone,
  Mail,
  MoreHorizontal,
  TrendingUp,
  Users,
  CreditCard,
  ChevronRight,
} from "lucide-react";

const outlets = [
  {
    id: 1,
    name: "Laila Collection Batu",
    address: "Jl. Abdul Gani Atas No. 24",
    phone: "081234567890",
    email: "batu@laila.com",
    revenue: "Rp 28.500.000",
    admins: 3,
    status: "Active",
  },
  {
    id: 2,
    name: "Laila Collection Malang",
    address: "Jl. Soekarno Hatta",
    phone: "081234567891",
    email: "malang@laila.com",
    revenue: "Rp 21.000.000",
    admins: 2,
    status: "Active",
  },
  {
    id: 3,
    name: "Laila Collection Surabaya",
    address: "Tunjungan Plaza",
    phone: "081234567892",
    email: "surabaya@laila.com",
    revenue: "Rp 34.700.000",
    admins: 4,
    status: "Busy",
  },
];

export default function OutletsPage() {
  const [search, setSearch] = useState("");

  const filteredOutlets = outlets.filter((outlet) =>
    outlet.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-[#FFF5F7] p-8 text-pink-950">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <h1 className="text-4xl font-black tracking-tight">
              Outlet Management
            </h1>

            <p className="text-pink-400 mt-2 text-sm font-medium">
              Kelola seluruh cabang dan performa bisnis outlet.
            </p>
          </div>

          <button className="bg-pink-600 hover:bg-pink-700 transition-all text-white px-6 py-4 rounded-2xl flex items-center gap-3 font-black uppercase tracking-widest text-xs shadow-lg shadow-pink-200">
            <Plus className="w-5 h-5" />
            Tambah Outlet
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-[2rem] p-6 border border-pink-100 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-widest text-pink-400 font-bold">
                  Total Outlet
                </p>

                <h2 className="text-4xl font-black mt-3">12</h2>
              </div>

              <Store className="w-10 h-10 text-pink-500" />
            </div>
          </div>

          <div className="bg-white rounded-[2rem] p-6 border border-pink-100 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-widest text-pink-400 font-bold">
                  Total Revenue
                </p>

                <h2 className="text-3xl font-black mt-3">Rp 125M</h2>
              </div>

              <TrendingUp className="w-10 h-10 text-green-500" />
            </div>
          </div>

          <div className="bg-white rounded-[2rem] p-6 border border-pink-100 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-widest text-pink-400 font-bold">
                  Total Admin
                </p>

                <h2 className="text-4xl font-black mt-3">18</h2>
              </div>

              <Users className="w-10 h-10 text-pink-500" />
            </div>
          </div>

          <div className="bg-gradient-to-br from-pink-600 to-pink-700 rounded-[2rem] p-6 text-white shadow-lg shadow-pink-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-widest text-pink-100 font-bold">
                  Payment Active
                </p>

                <h2 className="text-4xl font-black mt-3">QRIS</h2>
              </div>

              <CreditCard className="w-10 h-10 text-white" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[2.5rem] border border-pink-100 shadow-sm p-6 flex flex-col lg:flex-row gap-4 lg:items-center justify-between">
          <div className="relative w-full lg:max-w-md">
            <Search className="absolute left-4 top-4 w-5 h-5 text-pink-300" />

            <input
              type="text"
              placeholder="Cari outlet..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-pink-50 border-none rounded-2xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-pink-500 font-semibold"
            />
          </div>

          <div className="flex items-center gap-3">
            <button className="px-5 py-3 rounded-2xl bg-pink-50 text-pink-600 font-bold text-sm hover:bg-pink-100 transition-all">
              Semua
            </button>

            <button className="px-5 py-3 rounded-2xl bg-white border border-pink-100 text-pink-400 font-bold text-sm hover:bg-pink-50 transition-all">
              Active
            </button>

            <button className="px-5 py-3 rounded-2xl bg-white border border-pink-100 text-pink-400 font-bold text-sm hover:bg-pink-50 transition-all">
              Busy
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {filteredOutlets.map((outlet) => (
            <div
              key={outlet.id}
              className="bg-white rounded-[2.5rem] border border-pink-100 shadow-sm p-8 hover:shadow-xl transition-all"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-5">
                  <div className="w-16 h-16 rounded-2xl bg-pink-100 flex items-center justify-center text-pink-600 shadow-inner">
                    <Store className="w-8 h-8" />
                  </div>

                  <div>
                    <div className="flex items-center gap-3">
                      <h2 className="text-xl font-black">{outlet.name}</h2>

                      <span
                        className={`px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-black ${
                          outlet.status === "Active"
                            ? "bg-green-100 text-green-600"
                            : "bg-amber-100 text-amber-600"
                        }`}
                      >
                        {outlet.status}
                      </span>
                    </div>

                    <div className="space-y-2 mt-5 text-sm text-pink-500 font-medium">
                      <div className="flex items-center gap-3">
                        <MapPin className="w-4 h-4" />
                        {outlet.address}
                      </div>

                      <div className="flex items-center gap-3">
                        <Phone className="w-4 h-4" />
                        {outlet.phone}
                      </div>

                      <div className="flex items-center gap-3">
                        <Mail className="w-4 h-4" />
                        {outlet.email}
                      </div>
                    </div>
                  </div>
                </div>

                <button className="w-12 h-12 rounded-2xl bg-pink-50 hover:bg-pink-100 transition-all flex items-center justify-center text-pink-500">
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-5 mt-8">
                <div className="bg-pink-50 rounded-2xl p-5 border border-pink-100">
                  <p className="text-xs uppercase tracking-widest text-pink-400 font-black">
                    Revenue
                  </p>

                  <h3 className="text-2xl font-black mt-3 text-pink-950">
                    {outlet.revenue}
                  </h3>
                </div>

                <div className="bg-pink-50 rounded-2xl p-5 border border-pink-100">
                  <p className="text-xs uppercase tracking-widest text-pink-400 font-black">
                    Admin Outlet
                  </p>

                  <h3 className="text-2xl font-black mt-3 text-pink-950">
                    {outlet.admins}
                  </h3>
                </div>
              </div>

              <div className="flex items-center justify-between mt-8">
                <Link href="/admin/dashboard" className="block w-full mt-8">
                  <button className="bg-pink-600 hover:bg-pink-700 transition-all text-white px-6 py-4 rounded-2xl text-xs uppercase tracking-widest font-black shadow-lg shadow-pink-200">
                    Kelola Outlet
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
