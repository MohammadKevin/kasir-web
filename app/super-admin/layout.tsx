"use client";

import React from "react";

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
} from "lucide-react";

import { usePathname } from "next/navigation";

const menus = [
    {
        label: "Dashboard",
        icon: LayoutDashboard,
        href: "/super-admin/dashboard",
    },
    {
        label: "Outlets",
        icon: Store,
        href: "/super-admin/Outlets",
    },
    {
        label: "Admins",
        icon: Users,
        href: "/super-admin/admins",
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

    return (
        <div className="min-h-screen bg-[#FFF5F7] flex text-pink-950">
            <aside className="w-72 bg-white border-r border-pink-100 fixed h-full flex flex-col justify-between p-6 z-50">
                <div>
                    <div className="flex items-center gap-3 mb-10">
                        <div className="w-12 h-12 rounded-2xl bg-pink-600 text-white flex items-center justify-center font-black text-lg shadow-lg">
                            L
                        </div>

                        <div>
                            <h1 className="font-black text-lg leading-none">
                                Laila Collection
                            </h1>

                            <p className="text-xs text-pink-400 uppercase tracking-widest mt-1">
                                Super Admin
                            </p>
                        </div>
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
                                        className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl text-sm font-bold transition-all ${isActive
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

            <main className="flex-1 ml-72">
                {children}
            </main>
        </div>
    );
}