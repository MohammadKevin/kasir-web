"use client";

import React from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  Store,
  Wallet,
  FileText,
  LogOut,
  Package,
  ShoppingCart,
  Truck,
} from "lucide-react";
import { usePathname } from "next/navigation";

// Nama variabel didefinisikan di sini
const adminOutletMenus = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/admin/dashboard",
  },
  {
    label: "My Store",
    icon: Store,
    href: "/admin/my-outlet",
  },
  {
    label: "Inventory",
    icon: Package,
    href: "/admin/inventory",
  },
  {
    label: "Cashier",
    icon: ShoppingCart,
    href: "/admin/cashier",
  },
  {
    label: "Request Stock",
    icon: Truck,
    href: "/admin/request-stock",
  },
  {
    label: "Local Expenses",
    icon: Wallet,
    href: "/admin/expenses",
  },
  {
    label: "Store Reports",
    icon: FileText,
    href: "/admin/reports",
  },
];

export default function AdminOutletLayout({
  // Saya ganti namanya agar konsisten
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[#FFF5F7] flex text-pink-950">
      <aside className="w-72 bg-white border-r border-pink-100 fixed h-full flex flex-col justify-between p-6 z-50">
        <div>
          <div className="flex items-center gap-3 mb-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/laila.jpg"
              alt="Logo"
              className="w-10 h-10 rounded-xl object-cover shadow-sm border border-pink-50 flex-shrink-0"
            />

            <div>
              <h1 className="font-black text-lg leading-none">
                Laila Collection
              </h1>

              <p className="text-xs text-pink-400 uppercase tracking-widest mt-1">
                Admin Outlet {/* Diganti dari Super Admin agar tidak bingung */}
              </p>
            </div>
          </div>

          <nav className="space-y-2">
            {/* PERBAIKAN: Memanggil adminOutletMenus, bukan menus */}
            {adminOutletMenus.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link key={item.label} href={item.href}>
                  <button
                    className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl text-sm font-bold transition-all ${
                      isActive
                        ? "bg-pink-600 text-white shadow-lg shadow-pink-200"
                        : "hover:bg-pink-50 hover:text-pink-600"
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    {item.label}
                  </button>
                </Link>
              );
            })}
          </nav>
        </div>

        <Link href="/login">
          <button className="w-full bg-rose-50 hover:bg-rose-100 text-rose-500 rounded-2xl py-4 flex items-center justify-center gap-3 font-bold transition-all">
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </Link>
      </aside>

      <main className="flex-1 ml-72">{children}</main>
    </div>
  );
}
