"use client";

import React, { useState } from "react";

import {
  Users,
  Plus,
  Search,
  Mail,
  ShieldCheck,
  Store,
  MoreHorizontal,
  ChevronRight,
  UserCheck,
} from "lucide-react";

const admins = [
  {
    id: 1,
    name: "Kevin",
    email: "kevin@laila.com",
    role: "SUPER_ADMIN",
    outlet: "All Outlet",
    status: "Active",
  },
  {
    id: 2,
    name: "Danendra",
    email: "danendra@laila.com",
    role: "ADMIN",
    outlet: "Laila Collection Batu",
    status: "Active",
  },
  {
    id: 3,
    name: "Rizky",
    email: "rizky@laila.com",
    role: "ADMIN",
    outlet: "Laila Collection Malang",
    status: "Offline",
  },
];

export default function AdminsPage() {
  const [search, setSearch] =
    useState("");

  const filteredAdmins =
    admins.filter((admin) =>
      admin.name
        .toLowerCase()
        .includes(search.toLowerCase()),
    );

  return (
    <div className="min-h-screen bg-[#FFF5F7] p-10 text-pink-950">
      <div className="space-y-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <h1 className="text-4xl font-black tracking-tight">
              Admin Management
            </h1>

            <p className="text-pink-400 mt-2 text-sm">
              Kelola seluruh admin outlet
              dan akses sistem.
            </p>
          </div>

          <button className="bg-pink-600 hover:bg-pink-700 transition-all text-white px-6 py-4 rounded-2xl flex items-center gap-3 font-black uppercase tracking-widest text-xs shadow-lg shadow-pink-200">
            <Plus className="w-5 h-5" />

            Tambah Admin
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-[2rem] border border-pink-100 p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-widest text-pink-400 font-bold">
                  Total Admin
                </p>

                <h2 className="text-4xl font-black mt-3">
                  18
                </h2>
              </div>

              <Users className="w-10 h-10 text-pink-500" />
            </div>
          </div>

          <div className="bg-white rounded-[2rem] border border-pink-100 p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-widest text-pink-400 font-bold">
                  Super Admin
                </p>

                <h2 className="text-4xl font-black mt-3">
                  1
                </h2>
              </div>

              <ShieldCheck className="w-10 h-10 text-green-500" />
            </div>
          </div>

          <div className="bg-white rounded-[2rem] border border-pink-100 p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-widest text-pink-400 font-bold">
                  Outlet Admin
                </p>

                <h2 className="text-4xl font-black mt-3">
                  17
                </h2>
              </div>

              <Store className="w-10 h-10 text-pink-500" />
            </div>
          </div>

          <div className="bg-gradient-to-br from-pink-600 to-pink-700 rounded-[2rem] p-6 text-white shadow-lg shadow-pink-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-widest text-pink-100 font-bold">
                  Active Admin
                </p>

                <h2 className="text-4xl font-black mt-3">
                  15
                </h2>
              </div>

              <UserCheck className="w-10 h-10 text-white" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[2.5rem] border border-pink-100 shadow-sm p-6 flex flex-col lg:flex-row gap-4 lg:items-center justify-between">
          <div className="relative w-full lg:max-w-md">
            <Search className="absolute left-4 top-4 w-5 h-5 text-pink-300" />

            <input
              type="text"
              placeholder="Cari admin..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="w-full bg-pink-50 rounded-2xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-pink-500 font-semibold"
            />
          </div>

          <div className="flex items-center gap-3">
            <button className="px-5 py-3 rounded-2xl bg-pink-50 text-pink-600 font-bold text-sm">
              Semua
            </button>

            <button className="px-5 py-3 rounded-2xl bg-white border border-pink-100 text-pink-400 font-bold text-sm">
              Active
            </button>

            <button className="px-5 py-3 rounded-2xl bg-white border border-pink-100 text-pink-400 font-bold text-sm">
              Offline
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {filteredAdmins.map((admin) => (
            <div
              key={admin.id}
              className="bg-white rounded-[2.5rem] border border-pink-100 shadow-sm p-8 hover:shadow-xl transition-all"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-5">
                  <div className="w-16 h-16 rounded-2xl bg-pink-100 flex items-center justify-center text-pink-600">
                    <Users className="w-8 h-8" />
                  </div>

                  <div>
                    <div className="flex items-center gap-3">
                      <h2 className="text-xl font-black">
                        {admin.name}
                      </h2>

                      <span
                        className={`px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-black ${
                          admin.status ===
                          "Active"
                            ? "bg-green-100 text-green-600"
                            : "bg-gray-100 text-gray-500"
                        }`}
                      >
                        {admin.status}
                      </span>
                    </div>

                    <div className="space-y-2 mt-5 text-sm text-pink-500 font-medium">
                      <div className="flex items-center gap-3">
                        <Mail className="w-4 h-4" />

                        {admin.email}
                      </div>

                      <div className="flex items-center gap-3">
                        <ShieldCheck className="w-4 h-4" />

                        {admin.role}
                      </div>

                      <div className="flex items-center gap-3">
                        <Store className="w-4 h-4" />

                        {admin.outlet}
                      </div>
                    </div>
                  </div>
                </div>

                <button className="w-12 h-12 rounded-2xl bg-pink-50 hover:bg-pink-100 transition-all flex items-center justify-center text-pink-500">
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </div>

              <div className="flex items-center justify-between mt-8">
                <button className="bg-pink-600 hover:bg-pink-700 transition-all text-white px-6 py-4 rounded-2xl text-xs uppercase tracking-widest font-black shadow-lg shadow-pink-200">
                  Kelola Admin
                </button>

                <button className="flex items-center gap-2 text-pink-500 hover:text-pink-700 font-bold transition-all">
                  Detail

                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}