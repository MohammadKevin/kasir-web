"use client";

import React, { useState } from "react";
import {
  Tag,
  Plus,
  Search,
  Folder,
  Layers,
  MoreHorizontal,
  Edit3,
  Trash2,
} from "lucide-react";

const initialCategories = [
  {
    id: 1,
    name: "Dress & Gamis",
    slug: "dress-gamis",
    totalProducts: 142,
    status: "Active",
  },
  {
    id: 2,
    name: "Hijab & Scarf",
    slug: "hijab-scarf",
    totalProducts: 185,
    status: "Active",
  },
  {
    id: 3,
    name: "Blouse & Tops",
    slug: "blouse-tops",
    totalProducts: 98,
    status: "Active",
  },
  {
    id: 4,
    name: "Bawahan & Skirts",
    slug: "bawahan-skirts",
    totalProducts: 64,
    status: "Active",
  },
  {
    id: 5,
    name: "Mukena & Perlengkapan Shalat",
    slug: "mukena-perlengkapan",
    totalProducts: 53,
    status: "Active",
  },
];

export default function CategoriesPage() {
  const [search, setSearch] = useState("");

  const filteredCategories = initialCategories.filter((category) =>
    category.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-[#F4FAFD] p-6 md:p-10 space-y-8 text-[#1F3D4F]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black tracking-tight">Categories</h1>
          <p className="text-[#81A6C6] mt-2 text-sm font-medium">
            Kelola kategori produk dan inventaris Laila Collection.
          </p>
        </div>

        <button className="bg-[#3B7597] hover:bg-[#2C5B77] transition-all text-white px-6 py-4 rounded-2xl flex items-center justify-center gap-3 font-black uppercase tracking-widest text-xs shadow-lg shadow-[#3B7597]/20 self-start sm:self-auto">
          <Plus className="w-5 h-5" />
          Tambah Kategori
        </button>
      </div>

      {/* Statistik Singkat & Fitur Cari */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-[2.5rem] border border-[#AACDDC] shadow-sm p-6 flex items-center">
          <div className="relative w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#81A6C6]" />
            <input
              type="text"
              placeholder="Cari kategori produk..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-[#F4FAFD] border-none rounded-2xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-[#3B7597] font-semibold text-sm"
            />
          </div>
        </div>

        <div className="bg-white rounded-[2.5rem] p-6 border border-[#AACDDC] shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#81A6C6] font-bold">
              Total Kategori Aktif
            </p>
            <h2 className="text-3xl font-black mt-2">
              {initialCategories.length}
            </h2>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-[#F4FAFD] flex items-center justify-center text-[#3B7597]">
            <Layers className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Grid List Kategori */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredCategories.map((category) => (
          <div
            key={category.id}
            className="bg-white rounded-[2.5rem] border border-[#AACDDC] shadow-sm p-6 flex flex-col justify-between hover:shadow-md transition-all group"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#F4FAFD] text-[#3B7597] flex items-center justify-center group-hover:bg-[#3B7597] group-hover:text-white transition-all">
                  <Tag className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-black text-lg text-[#1F3D4F]">
                    {category.name}
                  </h3>
                  <p className="text-xs text-[#81A6C6] mt-0.5 font-medium">
                    /{category.slug}
                  </p>
                </div>
              </div>

              <div className="relative">
                <button className="w-10 h-10 rounded-xl bg-[#F4FAFD] hover:bg-[#EAF5FA] transition-all flex items-center justify-center text-[#81A6C6] hover:text-[#1F3D4F]">
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-[#D9EAF2] flex items-center justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-[#81A6C6] font-bold">
                  Total Produk
                </p>
                <p className="text-lg font-black mt-0.5">
                  {category.totalProducts} Item
                </p>
              </div>

              <span className="bg-emerald-50 text-emerald-600 px-3 py-1.5 rounded-full text-[10px] uppercase tracking-widest font-black">
                {category.status}
              </span>
            </div>
          </div>
        ))}

        {filteredCategories.length === 0 && (
          <div className="col-span-full bg-white rounded-[2.5rem] border border-[#AACDDC] p-12 text-center text-[#81A6C6] font-medium">
            <Folder className="w-12 h-12 mx-auto mb-4 opacity-40" />
            Kategori yang kamu cari tidak ditemukan.
          </div>
        )}
      </div>
    </div>
  );
}
