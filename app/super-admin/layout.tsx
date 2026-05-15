"use client";

import React, { useState } from "react";

import Link from "next/link";

import {
  LayoutDashboard,
  Store,
  ShoppingBag,
  Receipt,
  Wallet,
  FileText,
  Users,
  Settings,
  LogOut,
  PanelLeftClose,
  PanelLeftOpen,
  Tag,
} from "lucide-react";

import { usePathname } from "next/navigation";

const menus = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/super-admin",
  },
  {
    label: "Outlets",
    icon: Store,
    href: "/super-admin/outlets",
  },
  {
    label: "Admins",
    icon: Users,
    href: "/super-admin/admins",
  },
  {
    label: "Categories",
    icon: Tag,
    href: "/super-admin/categories",
  },
  {
    label: "Products",
    icon: ShoppingBag,
    href: "/super-admin/products",
  },
  {
    label: "Sales",
    icon: Receipt,
    href: "/super-admin/sales",
  },
  {
    label: "Expenses",
    icon: Wallet,
    href: "/super-admin/expenses",
  },
  {
    label: "Reports",
    icon: FileText,
    href: "/super-admin/reports",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/super-admin/settings",
  },
];

export default function SuperAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const [collapsed, setCollapsed] =
    useState(false);

  return (
    <div className="min-h-screen bg-[#F4FAFD] flex text-[#1F3D4F]">
      <aside
        className={`fixed left-0 top-0 h-screen bg-white border-r border-[#D9EAF2] z-50 transition-all duration-300 flex flex-col justify-between ${
          collapsed
            ? "w-24 p-4"
            : "w-72 p-6"
        }`}
      >
        <div>
          <div
            className={`flex items-center ${
              collapsed
                ? "justify-center"
                : "justify-between"
            } mb-10`}
          >
            {!collapsed && (
              <div className="flex items-center gap-3">
                <img
                  src="/laila.jpg"
                  alt="Logo"
                  className="w-11 h-11 rounded-2xl object-cover shadow-sm border border-[#D9EAF2] flex-shrink-0"
                />

                <div>
                  <h1 className="font-black text-lg leading-none">
                    Laila Collection
                  </h1>

                  <p className="text-xs text-[#81A6C6] uppercase tracking-widest mt-1 font-bold">
                    Super Admin
                  </p>
                </div>
              </div>
            )}

            <button
              onClick={() =>
                setCollapsed(!collapsed)
              }
              className="w-11 h-11 rounded-2xl bg-[#F4FAFD] hover:bg-[#D9EAF2] flex items-center justify-center transition-all text-[#3B7597]"
            >
              {collapsed ? (
                <PanelLeftOpen className="w-5 h-5" />
              ) : (
                <PanelLeftClose className="w-5 h-5" />
              )}
            </button>
          </div>

          <nav className="space-y-2">
            {menus.map((item) => {
              const isActive =
                pathname === item.href;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                >
                  <button
                    className={`w-full flex items-center ${
                      collapsed
                        ? "justify-center"
                        : "justify-start"
                    } gap-4 px-5 py-4 rounded-2xl text-sm font-bold transition-all ${
                      isActive
                        ? "bg-[#3B7597] text-white shadow-lg shadow-[#81A6C6]/30"
                        : "hover:bg-[#F4FAFD] hover:text-[#3B7597] text-[#1F3D4F]/70"
                    }`}
                  >
                    <item.icon className="w-5 h-5 flex-shrink-0" />

                    {!collapsed && (
                      <span>{item.label}</span>
                    )}
                  </button>
                </Link>
              );
            })}
          </nav>
        </div>

        <Link href="/login">
          <button
            className={`w-full rounded-2xl py-4 flex items-center ${
              collapsed
                ? "justify-center"
                : "justify-center gap-3"
            } font-bold transition-all bg-[#F4FAFD] hover:bg-[#D9EAF2] text-[#3B7597]`}
          >
            <LogOut className="w-5 h-5" />

            {!collapsed && (
              <span>Logout</span>
            )}
          </button>
        </Link>
      </aside>

      <main
        className={`flex-1 transition-all duration-300 ${
          collapsed
            ? "ml-24"
            : "ml-72"
        }`}
      >
        {children}
      </main>
    </div>
  );
}