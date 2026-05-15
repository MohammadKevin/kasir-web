"use client";

import React, { useState } from "react";

import {
  ShoppingBag,
  Plus,
  Search,
  Package,
  AlertTriangle,
  MoreHorizontal,
  ChevronRight,
  Store,
  Tag,
  Boxes,
} from "lucide-react";

const products = [
  {
    id: 1,
    name: "Hijab Satin Premium",
    category: "Hijab",
    stock: 24,
    price: "Rp 120.000",
    outlet: "Laila Collection Batu",
    status: "Available",
  },
  {
    id: 2,
    name: "Dress Premium Wanita",
    category: "Dress",
    stock: 2,
    price: "Rp 350.000",
    outlet: "Laila Collection Malang",
    status: "Low Stock",
  },
  {
    id: 3,
    name: "Blouse Elegant",
    category: "Blouse",
    stock: 0,
    price: "Rp 220.000",
    outlet: "Laila Collection Surabaya",
    status: "Out Stock",
  },
];

export default function ProductsPage() {
  const [search, setSearch] =
    useState("");

  const filteredProducts =
    products.filter((product) =>
      product.name
        .toLowerCase()
        .includes(search.toLowerCase()),
    );

  return (
    <div className="min-h-screen bg-[#FFF5F7] p-10 text-pink-950">
      <div className="space-y-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <h1 className="text-4xl font-black tracking-tight">
              Product Management
            </h1>

            <p className="text-pink-400 mt-2 text-sm">
              Kelola seluruh produk
              multi outlet.
            </p>
          </div>

          <button className="bg-pink-600 hover:bg-pink-700 transition-all text-white px-6 py-4 rounded-2xl flex items-center gap-3 font-black uppercase tracking-widest text-xs shadow-lg shadow-pink-200">
            <Plus className="w-5 h-5" />

            Tambah Product
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-[2rem] border border-pink-100 p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-widest text-pink-400 font-bold">
                  Total Products
                </p>

                <h2 className="text-4xl font-black mt-3">
                  542
                </h2>
              </div>

              <ShoppingBag className="w-10 h-10 text-pink-500" />
            </div>
          </div>

          <div className="bg-white rounded-[2rem] border border-pink-100 p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-widest text-pink-400 font-bold">
                  Categories
                </p>

                <h2 className="text-4xl font-black mt-3">
                  18
                </h2>
              </div>

              <Tag className="w-10 h-10 text-pink-500" />
            </div>
          </div>

          <div className="bg-white rounded-[2rem] border border-pink-100 p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-widest text-pink-400 font-bold">
                  Total Stock
                </p>

                <h2 className="text-4xl font-black mt-3">
                  1.248
                </h2>
              </div>

              <Boxes className="w-10 h-10 text-pink-500" />
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-[2rem] p-6 text-white shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-widest font-bold">
                  Low Stock
                </p>

                <h2 className="text-4xl font-black mt-3">
                  12
                </h2>
              </div>

              <AlertTriangle className="w-10 h-10 text-white" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[2.5rem] border border-pink-100 shadow-sm p-6 flex flex-col lg:flex-row gap-4 lg:items-center justify-between">
          <div className="relative w-full lg:max-w-md">
            <Search className="absolute left-4 top-4 w-5 h-5 text-pink-300" />

            <input
              type="text"
              placeholder="Cari product..."
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
              Available
            </button>

            <button className="px-5 py-3 rounded-2xl bg-white border border-pink-100 text-pink-400 font-bold text-sm">
              Low Stock
            </button>

            <button className="px-5 py-3 rounded-2xl bg-white border border-pink-100 text-pink-400 font-bold text-sm">
              Out Stock
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {filteredProducts.map(
            (product) => (
              <div
                key={product.id}
                className="bg-white rounded-[2.5rem] border border-pink-100 shadow-sm p-8 hover:shadow-xl transition-all"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-5">
                    <div className="w-20 h-20 rounded-2xl bg-pink-100 flex items-center justify-center text-pink-600">
                      <Package className="w-10 h-10" />
                    </div>

                    <div>
                      <div className="flex items-center gap-3">
                        <h2 className="text-xl font-black">
                          {product.name}
                        </h2>

                        <span
                          className={`px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-black ${
                            product.status ===
                            "Available"
                              ? "bg-green-100 text-green-600"
                              : product.status ===
                                  "Low Stock"
                                ? "bg-amber-100 text-amber-600"
                                : "bg-rose-100 text-rose-600"
                          }`}
                        >
                          {product.status}
                        </span>
                      </div>

                      <div className="space-y-2 mt-5 text-sm text-pink-500 font-medium">
                        <div className="flex items-center gap-3">
                          <Tag className="w-4 h-4" />

                          {product.category}
                        </div>

                        <div className="flex items-center gap-3">
                          <Boxes className="w-4 h-4" />

                          Stock: {product.stock}
                        </div>

                        <div className="flex items-center gap-3">
                          <Store className="w-4 h-4" />

                          {product.outlet}
                        </div>
                      </div>
                    </div>
                  </div>

                  <button className="w-12 h-12 rounded-2xl bg-pink-50 hover:bg-pink-100 transition-all flex items-center justify-center text-pink-500">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </div>

                <div className="mt-8 flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-pink-400 font-bold">
                      Price
                    </p>

                    <h3 className="text-3xl font-black mt-2">
                      {product.price}
                    </h3>
                  </div>

                  <button className="flex items-center gap-2 text-pink-500 hover:text-pink-700 font-bold transition-all">
                    Detail

                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
}