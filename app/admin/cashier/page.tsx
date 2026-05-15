"use client";

import React, { useState } from "react";
import {
  Search,
  ShoppingCart,
  Trash2,
  Plus,
  Minus,
  User,
  CreditCard,
  Banknote,
  X,
  CheckCircle2,
  Receipt,
} from "lucide-react";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  stock: number;
}

interface CartItem extends Product {
  quantity: number;
}

const products: Product[] = [
  {
    id: "P1",
    name: "Gamis Laila Premium",
    price: 350000,
    stock: 12,
    image: "👗",
  },
  {
    id: "P2",
    name: "Pashmina Silk Pink",
    price: 85000,
    stock: 25,
    image: "🧣",
  },
  { id: "P3", name: "Tunik Floral Blue", price: 175000, stock: 8, image: "👚" },
  { id: "P4", name: "Mukena Travel", price: 210000, stock: 15, image: "🕋" },
  {
    id: "P5",
    name: "Hijab Instan Jersey",
    price: 55000,
    stock: 40,
    image: "🧕",
  },
  { id: "P6", name: "Bros Laila Gold", price: 25000, stock: 100, image: "✨" },
];

export default function CashierPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [search, setSearch] = useState("");
  const [customerName, setCustomerName] = useState("");

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      // Validasi stok
      if (existing && existing.quantity >= product.stock) {
        alert("Stok di toko tidak mencukupi!");
        return prev;
      }

      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateQty = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            // Validasi stok saat tambah via tombol plus
            if (newQty > item.stock) {
              alert("Batas stok tercapai!");
              return item;
            }
            return { ...item, quantity: newQty };
          }
          return item;
        })
        .filter((item) => item.quantity > 0),
    );
  };

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  return (
    <div className="h-screen bg-[#FFF5F7] flex flex-col md:flex-row overflow-hidden">
      {/* KIRI: Katalog Produk */}
      <div className="flex-1 flex flex-col p-6 space-y-6 overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-black text-pink-950 flex items-center gap-3">
              <Receipt className="w-8 h-8 text-pink-600" />
              Cashier
            </h1>
            <p className="text-pink-400 text-xs font-bold uppercase tracking-widest mt-1">
              Laila Collection Batu
            </p>
          </div>

          <div className="relative w-full lg:w-80">
            <Search className="absolute left-4 top-3.5 w-4 h-4 text-pink-300" />
            <input
              type="text"
              placeholder="Cari produk..."
              className="w-full bg-white border-none rounded-2xl py-3.5 pl-11 pr-4 shadow-sm focus:ring-2 focus:ring-pink-500 outline-none font-bold"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Grid Produk */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 overflow-y-auto pr-2 pb-6 custom-scrollbar">
          {products
            .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
            .map((product) => (
              <button
                key={product.id}
                onClick={() => addToCart(product)}
                disabled={product.stock === 0}
                className={`bg-white p-4 rounded-[2rem] border border-pink-50 shadow-sm hover:shadow-xl hover:border-pink-200 transition-all text-left flex flex-col group relative ${product.stock === 0 ? "opacity-50 grayscale cursor-not-allowed" : ""}`}
              >
                <div className="aspect-square bg-pink-50 rounded-2xl mb-4 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform">
                  {product.image}
                </div>
                <p className="font-black text-sm text-pink-950 line-clamp-1">
                  {product.name}
                </p>
                <p
                  className={`text-[10px] font-black uppercase mt-1 ${product.stock <= 5 ? "text-rose-500" : "text-pink-300"}`}
                >
                  Stok: {product.stock}
                </p>
                <p className="mt-4 font-black text-pink-600">
                  Rp {product.price.toLocaleString()}
                </p>

                {product.stock === 0 && (
                  <span className="absolute top-4 right-4 bg-rose-500 text-white text-[8px] font-black px-2 py-1 rounded-full uppercase">
                    Habis
                  </span>
                )}
              </button>
            ))}
        </div>
      </div>

      {/* KANAN: Checkout Section */}
      <aside className="w-full md:w-[420px] bg-white border-l border-pink-100 flex flex-col shadow-2xl z-10">
        {/* Header Keranjang */}
        <div className="p-6 border-b border-pink-50">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="bg-pink-600 p-2 rounded-xl text-white">
                <ShoppingCart className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-black text-pink-950">Keranjang</h2>
            </div>
            <button
              onClick={() => setCart([])}
              className="text-[10px] font-black text-rose-400 hover:text-rose-600 uppercase tracking-widest"
            >
              Kosongkan
            </button>
          </div>

          {/* Input Nama Pelanggan */}
          <div className="relative">
            <User className="absolute left-4 top-3 w-4 h-4 text-pink-300" />
            <input
              type="text"
              placeholder="Nama Pelanggan (Opsional)"
              className="w-full bg-pink-50/50 border-none rounded-xl py-3 pl-11 pr-4 text-xs font-bold focus:ring-2 focus:ring-pink-500 outline-none"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
            />
          </div>
        </div>

        {/* List Belanja */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center px-10">
              <div className="w-20 h-20 bg-pink-50 rounded-full flex items-center justify-center mb-4">
                <ShoppingCart className="w-8 h-8 text-pink-200" />
              </div>
              <p className="font-black text-pink-300 text-sm">
                Belum ada barang di keranjang
              </p>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 bg-pink-50/30 p-4 rounded-3xl border border-pink-50 group"
              >
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-xl shadow-sm border border-pink-100">
                  {item.image}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-black text-xs text-pink-950 truncate">
                    {item.name}
                  </p>
                  <p className="text-xs font-bold text-pink-600 mt-0.5">
                    Rp {item.price.toLocaleString()}
                  </p>
                </div>
                <div className="flex items-center gap-3 bg-white rounded-2xl p-1.5 shadow-sm border border-pink-100">
                  <button
                    onClick={() => updateQty(item.id, -1)}
                    className="p-1 hover:bg-pink-50 rounded-lg text-pink-400 hover:text-pink-600 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="text-xs font-black w-4 text-center">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQty(item.id, 1)}
                    className="p-1 hover:bg-pink-50 rounded-lg text-pink-400 hover:text-pink-600 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Summary & Payment */}
        <div className="p-8 bg-pink-50/50 space-y-6 border-t border-pink-100 rounded-t-[3rem]">
          <div className="space-y-3">
            <div className="flex justify-between text-xs font-bold text-pink-400 uppercase tracking-widest">
              <span>Subtotal</span>
              <span>Rp {subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-xs font-bold text-pink-400 uppercase tracking-widest">
              <span>Pajak (10%)</span>
              <span>Rp {tax.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-2xl font-black text-pink-950 pt-4 border-t-2 border-dashed border-pink-200">
              <span>Total</span>
              <span>Rp {total.toLocaleString()}</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex flex-col items-center justify-center gap-2 bg-white border-2 border-pink-100 text-pink-600 p-4 rounded-3xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-pink-100 transition-all">
              <Banknote className="w-5 h-5" /> Tunai
            </button>
            <button className="flex flex-col items-center justify-center gap-2 bg-pink-600 text-white p-4 rounded-3xl font-black text-[10px] uppercase tracking-[0.2em] shadow-xl shadow-pink-200 hover:bg-pink-700 transition-all">
              <CreditCard className="w-5 h-5" /> Non-Tunai
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
}
