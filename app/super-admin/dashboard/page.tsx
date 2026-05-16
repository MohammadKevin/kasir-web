"use client";

import React from "react";
import {
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  CreditCard,
  ChevronRight,
  Package,
  Users,
  DollarSign,
  Store,
  ShoppingBag,
  Receipt,
} from "lucide-react";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const salesChart = [
  { name: "Sen", sales: 4000 },
  { name: "Sel", sales: 7000 },
  { name: "Rab", sales: 5000 },
  { name: "Kam", sales: 9000 },
  { name: "Jum", sales: 12000 },
  { name: "Sab", sales: 15000 },
  { name: "Min", sales: 10000 },
];

const paymentStats = [
  { name: "Cash", value: 40 },
  { name: "QRIS", value: 30 },
  { name: "Debit", value: 20 },
  { name: "Transfer", value: 10 },
];

const outletPerformance = [
  {
    id: 1,
    name: "Laila Collection Batu",
    revenue: "Rp 28.000.000",
    transactions: 210,
  },
  {
    id: 2,
    name: "Laila Collection Malang",
    revenue: "Rp 21.500.000",
    transactions: 188,
  },
  {
    id: 3,
    name: "Laila Collection Surabaya",
    revenue: "Rp 19.200.000",
    transactions: 154,
  },
];

const recentTransactions = [
  {
    invoice: "INV-20260514-001",
    outlet: "Batu",
    payment: "QRIS",
    total: "Rp 450.000",
  },
  {
    invoice: "INV-20260514-002",
    outlet: "Malang",
    payment: "Cash",
    total: "Rp 230.000",
  },
  {
    invoice: "INV-20260514-003",
    outlet: "Surabaya",
    payment: "Debit",
    total: "Rp 720.000",
  },
];

const lowStockProducts = [
  {
    name: "Dress Premium",
    stock: 2,
  },
  {
    name: "Hijab Satin",
    stock: 3,
  },
  {
    name: "Blouse Wanita",
    stock: 1,
  },
];

const COLORS = ["#3B7597", "#81A6C6", "#AACDDC", "#1F3D4F"];

export default function SuperAdminDashboardPage() {
  return (
    <div className="min-h-screen bg-[#F4FAFD] p-6 md:p-10 space-y-8 text-[#1F3D4F]">
      <div>
        <h1 className="text-4xl font-black tracking-tight">
          Dashboard Overview
        </h1>

        <p className="text-[#81A6C6] mt-2 text-sm">
          Monitoring seluruh performa bisnis Laila Collection.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-[#3B7597] to-[#1F3D4F] text-white p-7 rounded-[2rem] shadow-xl shadow-[#81A6C6]/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-widest opacity-80 font-bold">
                Total Revenue
              </p>

              <h2 className="text-3xl font-black mt-3">Rp 125.5M</h2>
            </div>

            <DollarSign className="w-10 h-10 opacity-80" />
          </div>

          <div className="flex items-center gap-2 mt-6 text-sm font-bold text-[#AACDDC]">
            <TrendingUp className="w-4 h-4" />
            +12% bulan ini
          </div>
        </div>

        <div className="bg-white p-7 rounded-[2rem] border border-[#AACDDC] shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#81A6C6] font-bold">
                Net Profit
              </p>

              <h2 className="text-3xl font-black mt-3">Rp 38.2M</h2>
            </div>

            <TrendingUp className="w-10 h-10 text-emerald-500" />
          </div>

          <p className="text-sm font-bold text-emerald-500 mt-6">
            PROFIT STABLE
          </p>
        </div>

        <div className="bg-white p-7 rounded-[2rem] border border-[#AACDDC] shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#81A6C6] font-bold">
                Total Expense
              </p>

              <h2 className="text-3xl font-black mt-3">Rp 12.5M</h2>
            </div>

            <TrendingDown className="w-10 h-10 text-rose-500" />
          </div>

          <p className="text-sm font-bold text-rose-500 mt-6">
            OPERATIONAL + STOCK
          </p>
        </div>

        <div className="bg-[#1F3D4F] text-white p-7 rounded-[2rem] shadow-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#AACDDC] font-bold">
                Transactions
              </p>

              <h2 className="text-3xl font-black mt-3">1.284</h2>
            </div>

            <Receipt className="w-10 h-10 text-[#81A6C6]" />
          </div>

          <p className="text-sm font-bold text-[#AACDDC] mt-6">
            REALTIME ACTIVE
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        <div className="xl:col-span-2 bg-white p-8 rounded-[2.5rem] border border-[#AACDDC] shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-lg font-black">Sales Analytics</h2>

              <p className="text-sm text-[#81A6C6] mt-1">
                Revenue 7 hari terakhir
              </p>
            </div>

            <div className="bg-[#F4FAFD] text-[#3B7597] px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest">
              Live Data
            </div>
          </div>

          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={salesChart}>
                <defs>
                  <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3B7597" stopOpacity={0.4} />

                    <stop offset="95%" stopColor="#3B7597" stopOpacity={0} />
                  </linearGradient>
                </defs>

                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#D9EAF2"
                />

                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#81A6C6" }}
                />

                <Tooltip />

                <Area
                  type="monotone"
                  dataKey="sales"
                  stroke="#3B7597"
                  strokeWidth={4}
                  fill="url(#colorSales)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-8 rounded-[2.5rem] border border-[#AACDDC] shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-black">Payment Methods</h2>

              <p className="text-sm text-[#81A6C6] mt-1">
                Statistik pembayaran
              </p>
            </div>

            <CreditCard className="w-6 h-6 text-[#3B7597]" />
          </div>

          {/* PERBAIKAN UTAMA: Responsiveness PieChart Next.js */}
          <div className="h-[260px] w-full flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={paymentStats}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={4}
                  dataKey="value"
                >
                  {paymentStats.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-[2.5rem] border border-[#AACDDC] shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-lg font-black">Outlet Performance</h2>

              <p className="text-sm text-[#81A6C6] mt-1">
                Outlet terbaik bulan ini
              </p>
            </div>

            <Store className="w-6 h-6 text-[#3B7597]" />
          </div>

          <div className="space-y-5">
            {outletPerformance.map((outlet) => (
              <div
                key={outlet.id}
                className="flex items-center justify-between p-5 rounded-2xl border border-[#D9EAF2] hover:bg-[#F4FAFD] transition-all"
              >
                <div>
                  <h3 className="font-black text-sm">{outlet.name}</h3>

                  <p className="text-xs text-[#81A6C6] mt-1 uppercase tracking-widest font-bold">
                    {outlet.transactions} Transactions
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="font-black text-[#1F3D4F]">
                      {outlet.revenue}
                    </p>

                    <p className="text-xs text-emerald-500 font-bold mt-1">
                      PROFITABLE
                    </p>
                  </div>

                  <ChevronRight className="w-5 h-5 text-[#81A6C6]" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-white p-8 rounded-[2.5rem] border border-[#AACDDC] shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-lg font-black">Recent Transactions</h2>

                <p className="text-sm text-[#81A6C6] mt-1">Transaksi terbaru</p>
              </div>

              <Receipt className="w-6 h-6 text-[#3B7597]" />
            </div>

            <div className="space-y-4">
              {recentTransactions.map((transaction) => (
                <div
                  key={transaction.invoice}
                  className="flex items-center justify-between border border-[#D9EAF2] rounded-2xl p-4"
                >
                  <div>
                    <h3 className="font-black text-sm">
                      {transaction.invoice}
                    </h3>

                    <p className="text-xs text-[#81A6C6] uppercase font-bold mt-1">
                      {transaction.outlet} • {transaction.payment}
                    </p>
                  </div>

                  <p className="font-black text-[#1F3D4F]">
                    {transaction.total}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-[2.5rem] border border-[#AACDDC] shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-lg font-black">Low Stock Warning</h2>

                <p className="text-sm text-[#81A6C6] mt-1">
                  Produk hampir habis
                </p>
              </div>

              <AlertTriangle className="w-6 h-6 text-amber-500" />
            </div>

            <div className="space-y-4">
              {lowStockProducts.map((product) => (
                <div
                  key={product.name}
                  className="flex items-center justify-between bg-amber-50 border border-amber-100 rounded-2xl p-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
                      <Package className="w-5 h-5 text-amber-600" />
                    </div>

                    <div>
                      <h3 className="font-black text-sm">{product.name}</h3>

                      <p className="text-xs text-amber-600 font-bold mt-1 uppercase">
                        Restock Needed
                      </p>
                    </div>
                  </div>

                  <div className="bg-amber-200 text-amber-900 px-3 py-2 rounded-full text-xs font-black">
                    {product.stock} Left
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-[2rem] border border-[#AACDDC] p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#81A6C6] font-bold">
                Total Outlet
              </p>

              <h2 className="text-3xl font-black mt-3">12</h2>
            </div>

            <Store className="w-8 h-8 text-[#3B7597]" />
          </div>
        </div>

        <div className="bg-white rounded-[2rem] border border-[#AACDDC] p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#81A6C6] font-bold">
                Total Admin
              </p>

              <h2 className="text-3xl font-black mt-3">18</h2>
            </div>

            <Users className="w-8 h-8 text-[#3B7597]" />
          </div>
        </div>

        <div className="bg-white rounded-[2rem] border border-[#AACDDC] p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#81A6C6] font-bold">
                Total Products
              </p>

              <h2 className="text-3xl font-black mt-3">542</h2>
            </div>

            <ShoppingBag className="w-8 h-8 text-[#3B7597]" />
          </div>
        </div>

        <div className="bg-white rounded-[2rem] border border-[#AACDDC] p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#81A6C6] font-bold">
                Best Seller
              </p>

              <h2 className="text-lg font-black mt-3">Hijab Satin</h2>
            </div>

            <TrendingUp className="w-8 h-8 text-emerald-500" />
          </div>
        </div>
      </div>
    </div>
  );
}
