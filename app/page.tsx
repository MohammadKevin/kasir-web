"use client";

import React from "react";
import {
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Layers,
  Smartphone,
  Monitor,
  Tablet,
} from "lucide-react";
import Link from "next/link";

export default function LailaBlueLandingPage() {
  return (
    <div className="min-h-screen bg-[#F4FAFD] text-[#1F3D4F] font-sans selection:bg-[#AACDDC] overflow-x-hidden">
      <nav className="fixed top-0 w-full z-[100] px-6 py-5">
        <div className="max-w-7xl mx-auto bg-white/70 backdrop-blur-xl border border-[#AACDDC] rounded-full px-8 py-4 flex justify-between items-center shadow-sm">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg overflow-hidden shadow-md shadow-[#AACDDC]">
              <img
                src="/laila.jpg"
                alt="Laila Logo"
                className="w-full h-full object-cover"
              />
            </div>

            <span className="text-xl font-bold tracking-tighter text-[#1F3D4F]">
              Laila Collection
            </span>
          </div>

          <div className="hidden md:flex gap-10 text-[10px] font-bold uppercase tracking-widest text-[#81A6C6]">
            <a href="#ekosistem" className="hover:text-[#3B7597] transition">
              Ekosistem
            </a>

            <a href="#teknologi" className="hover:text-[#3B7597] transition">
              Teknologi
            </a>

            <a href="#partnership" className="hover:text-[#3B7597] transition">
              Partnership
            </a>
          </div>

          <Link href="/login">
            <button className="bg-[#3B7597] text-white px-6 py-2.5 rounded-full text-xs font-bold hover:bg-[#2F617D] transition shadow-lg shadow-[#AACDDC]/50 uppercase tracking-widest">
              LOGIN
            </button>
          </Link>
        </div>
      </nav>

      <section id="ekosistem" className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute top-20 right-[-5%] w-[600px] h-[600px] bg-[#81A6C6]/20 rounded-full blur-[120px] -z-10" />

        <div className="absolute bottom-0 left-[-5%] w-[400px] h-[400px] bg-[#AACDDC]/30 rounded-full blur-[100px] -z-10" />

        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white border border-[#AACDDC] px-4 py-2 rounded-full mb-8 animate-bounce">
            <Sparkles className="w-4 h-4 text-[#3B7597] fill-[#3B7597]" />

            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#3B7597]">
              Aesthetic Systems, Smart Results
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8 text-[#1F3D4F]">
            KELOLA BUTIK <br />

            <span className="text-[#3B7597] italic font-serif font-light">
              Lebih Cantik.
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-[#1F3D4F]/60 text-lg md:text-xl leading-relaxed mb-12">
            Dari stok hijab hingga gaun eksklusif, kelola semuanya dengan sistem
            kasir yang didesain selembut sutra. Diciptakan khusus untuk
            ekosistem Laila Collection.
          </p>
        </div>
      </section>

      <section
        id="teknologi"
        className="py-24 bg-white rounded-[4rem] md:rounded-[6rem] shadow-sm"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black tracking-tight mb-4 text-[#1F3D4F]">
              Teknologi
            </h2>

            <div className="h-1.5 w-20 bg-[#81A6C6] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-7 bg-[#F4FAFD] p-12 rounded-[4rem] flex flex-col justify-between group hover:bg-[#3B7597] transition-all duration-500 border border-[#AACDDC]">
              <Layers className="w-12 h-12 text-[#3B7597] group-hover:text-white mb-8" />

              <div>
                <h3 className="text-3xl font-bold mb-4 group-hover:text-white transition tracking-tight">
                  Varian Produk Tanpa Batas
                </h3>

                <p className="text-[#1F3D4F]/50 group-hover:text-[#F4FAFD] transition leading-relaxed">
                  Organisir ribuan koleksi Anda berdasarkan variasi ukuran dan
                  kategori model baju.
                </p>
              </div>
            </div>

            <div className="col-span-12 md:col-span-5 bg-[#1F3D4F] p-12 rounded-[4rem] flex flex-col justify-between text-white shadow-xl">
              <div className="flex items-center gap-4 mb-8 text-[#81A6C6]">
                <Monitor className="w-12 h-12" />
                <Tablet className="w-10 h-10" />
                <Smartphone className="w-8 h-8" />
              </div>

              <div>
                <h4 className="text-3xl font-bold mb-4 italic font-serif">
                  Laila Platform
                </h4>

                <p className="text-[#AACDDC]/60">
                  Pantau perkembangan butik setiap saat, langsung dari perangkat
                  Anda.
                </p>
              </div>
            </div>

            <div className="col-span-12 md:col-span-5 bg-[#F4FAFD] p-12 rounded-[4rem] flex flex-col justify-between border border-[#AACDDC]">
              <ShieldCheck className="w-12 h-12 text-[#3B7597] mb-8" />

              <div>
                <h4 className="text-2xl font-bold mb-4 text-[#1F3D4F] tracking-tight text-nowrap italic">
                  Privasi Data
                </h4>

                <p className="text-[#1F3D4F]/50 leading-relaxed text-sm">
                  Kami menjamin keamanan setiap detail transaksi Anda dengan
                  sistem enkripsi awan yang terlindungi.
                </p>
              </div>
            </div>

            <div className="col-span-12 md:col-span-7 bg-white border-2 border-[#AACDDC]/40 p-12 rounded-[4rem] flex flex-col justify-center shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  "Laporan Laba Rugi Otomatis",
                  "Integrasi QRIS & E-Wallet",
                  "Pembayaran Bisa Dibayar Langsung",
                  "Scan Barcode Kecepatan Tinggi",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 font-bold text-sm text-[#1F3D4F]/70 hover:text-[#3B7597] transition cursor-default"
                  >
                    <CheckCircle2 className="text-[#3B7597] w-5 h-5" />

                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer
        id="partnership"
        className="bg-[#1F3D4F] py-24 px-6 overflow-hidden relative rounded-t-[5rem] mt-20"
      >
        <div className="absolute top-10 left-10 text-[15vw] font-black text-[#81A6C6]/[0.03] select-none pointer-events-none italic font-serif">
          LAILA
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-12 gap-12 border-b border-white/5 pb-20">
            <div className="col-span-12 lg:col-span-5 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg overflow-hidden shadow-md">
                  <img
                    src="/laila.jpg"
                    alt="Laila Logo"
                    className="w-full h-full object-cover"
                  />
                </div>

                <h2 className="text-3xl font-bold tracking-tighter text-white uppercase italic">
                  Laila{" "}
                  <span className="text-[#81A6C6] font-serif">
                    Collection
                  </span>
                </h2>
              </div>

              <p className="text-[#AACDDC]/50 max-w-sm leading-relaxed text-sm">
                Partner pertumbuhan butik Anda sejak 2019. Memberikan solusi
                teknologi digital dengan karakter desain yang halus dan
                eksklusif.
              </p>

              <div className="flex flex-wrap gap-6 pt-4">
                {[
                  {
                    name: "Instagram",
                    url: "https://www.instagram.com/sahabatlaila?igsh=cmFtZW4wdTByYTA0",
                  },
                  {
                    name: "WhatsApp",
                    url: "https://wa.me/6281333087610",
                  },
                  {
                    name: "TikTok",
                    url: "https://www.tiktok.com/@lailaboutique.32?_r=1&_t=ZS-96MEQS5ogB3",
                  },
                  {
                    name: "Shopee",
                    url: "https://shopee.co.id/laila.boutique",
                  },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] font-bold uppercase tracking-widest text-[#81A6C6] hover:text-white transition"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="col-span-6 lg:col-span-2 space-y-6">
              <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em]">
                Sistem
              </h4>

              <ul className="space-y-4 text-[#AACDDC]/50 text-sm">
                <li>
                  <a href="#" className="hover:text-[#81A6C6] transition">
                    Kelola Stok
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-[#81A6C6] transition">
                    Input Penjualan
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-[#81A6C6] transition">
                    Laporan Keuangan
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-12 lg:col-span-5 bg-gradient-to-br from-[#3B7597] to-[#81A6C6] p-10 rounded-[3.5rem] text-white flex flex-col justify-between shadow-2xl shadow-[#3B7597]/40">
              <h4 className="text-2xl font-bold leading-tight">
                Konsultasi Gratis!
              </h4>

              <a
                href="https://wa.me/6281333087610"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <button className="mt-8 bg-white text-[#3B7597] px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-[#F4FAFD] transition-all transform active:scale-95 shadow-lg">
                  Hubungi Kami di WhatsApp
                </button>
              </a>
            </div>
          </div>

          <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-6 opacity-50">
            <p className="text-[10px] text-[#AACDDC] uppercase tracking-[0.5em] font-bold">
              Laila Collections @2026 Copyright
            </p>

            <span className="text-[9px] text-[#AACDDC] uppercase font-black tracking-widest italic">
              Malang, Indonesia
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}