import React from "react";
import { useState } from "react";
import { ReactTyped } from "react-typed";
import TrustedBrands from "../components/TrustedBrands";
import { productsData } from "../data.js";
import ProductCard from "../components/ProductCard.jsx";

export default function Home({ setActiveLink, activeLink }) {
  return (
    <div className="header justify-items-center py-14">
      {/* STATUS "Available Now" */}
      <div className="status flex w-full justify-center">
        {/* Pembungkus utama status (berbentuk pill/lonjong) */}
        <div className="flex items-center gap-2.5 bg-[#1a1a1a] border border-gray-800/40 px-4 py-1.5 rounded-full">
          {/* Lampu Indikator Bulat Oranye */}
          <span className="w-2.5 h-2.5 bg-[#F99417] rounded-full animate-pulse"></span>

          {/* Teks Status */}
          <p className="text-[#FBFBFB] text-sm font-medium tracking-wide">
            Available now
          </p>
        </div>
      </div>
      {/* JUDUL UTAMA */}
      <div className="container w-full justify-items-center text-center ">
        <div className="tagline py-2">
          <h1 className="xl:text-[96px] md:text-[66px] text-[32px] font-semibold leading-tight text-[#FBFBFB]">
            {/* Teks Tetap Atas */}
            <span className="text-[#F99417]">Nekko </span>Computer
            <br />
            {/* Teks Tetap Bawah */}
            <span className="text-[#F99417]">Professional </span>
            {/* ANIMASI KETIK TYPE.JS JALAN DI SINI */}
            <ReactTyped
              strings={["PC Builder", "Streamer", "Editor", "Gamer"]} // Kamu bisa ganti atau tambah daftar kata di dalam array ini sesuai kebutuhan!
              typeSpeed={80} // Kecepatan mengetik per huruf (semakin kecil semakin cepat)
              backSpeed={50} // Kecepatan menghapus huruf kembali
              backDelay={1500} // Durasi jeda tunggu (diam dulu) saat kata selesai diketik (1500ms = 1.5 detik)
              loop={true} // Membuat animasi berputar terus-menerus tanpa berhenti
              showCursor={true} // Menampilkan kursor garis tegak berkedip layaknya mengetik di terminal
              cursorChar="|" // Bentuk karakter kursor yang digunakan
              className="text-[#FBFBFB]" // Mengatur warna teks hasil ketikan agar senada menjadi putih solid
            />
          </h1>
        </div>
        <div className="description flex flex-col items-center gap-6 py-4">
          <p className="text-[#FBFBFB] xl:text-[18px] md:text-[16px] text-[10px] font-regular xl:max-w-4xl md:max-w-2xl max-w-xs">
            Our team provides professional PC building services to deliver high
            performance, reliable, and customized systems tailored to your
            needs.
          </p>
          <a
            href="/ContactUs"
            onClick={(e) => {
              e.preventDefault();
              setActiveLink("Contact Us");
            }}
            className={`group flex items-center gap-2 border text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-300 no-underline
        ${
          activeLink === "Contact Us"
            ? "bg-[#F99417] border-[#F99417] text-white"
            : "bg-transparent border-gray-600 text-white hover:border-[#F99417] hover:bg-[#F99417]/10"
        }`}
          >
            <span>Contact Us</span>

            {/* Kotak pembungkus panah (wajib overflow-hidden) */}
            {/* Kotak pembungkus panah */}
            <div className="relative w-4 h-4 overflow-hidden flex items-center justify-center">
              <div className="flex flex-col absolute left-0 top-0 transition-transform duration-200 ease-in-out group-hover:-translate-y-1/2">
                {/* 1. PANAH UTAMA (Menghadap serong kanan atas) */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className={`w-4 h-4 transition-colors duration-200 ${
                    /* Logika warna panah utama: 
           Jika aktif -> putih. Jika tidak -> abu-abu (dan jingga saat di-hover) */
                    activeLink === "Contact Us"
                      ? "text-white"
                      : "text-gray-400 group-hover:text-[#F99417]"
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>

                {/* 2. PANAH CADANGAN (Menggantikan PNG dengan SVG panah kanan agar bisa berubah warna) */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className={`w-4 h-4 ${
                    /* Logika warna panah cadangan yang meluncur dari bawah:
           Jika aktif -> putih (karena background jingga). Jika tidak -> jingga */
                    activeLink === "Contact Us"
                      ? "text-white"
                      : "text-[#F99417]"
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </div>
            </div>
          </a>
        </div>
      </div>
      {/* TRUSTED BRANDS */}
      <TrustedBrands />{" "}
      {/* Memanggil komponen TrustedBrands di sini agar muncul di bawah deskripsi */}
      {/* Why Us */}
      <div className="status flex w-full justify-center pt-20 gap-2.5">
        {/* Pembungkus utama status (berbentuk pill/lonjong) */}
        <div className="flex items-center gap-2.5 bg-[#1a1a1a] border border-gray-800/40 px-4 py-1.5 rounded-full">
          {/* Teks Status */}
          <p className="text-[#FBFBFB] text-sm font-medium tracking-wide">
            Why Us
          </p>
        </div>
      </div>
      <div className="container w-full justify-items-center text-center pt-6 ">
        <div className="container w-full justify-items-center text-center mx-auto px-4">
          <div className="tagline py-2 max-w-4xl mx-auto">
            {/* 💡 Perbaikan: Ukuran text dipindah langsung ke dalam tag h1 */}
            <h1 className="xl:text-[54px] md:text-[38px] text-[22px] font-bold leading-tight text-[#FBFBFB]">
              We Craft High Performance Custom PC Tailored to Your Needs
              {/* 💡 Baris Baru: Ditambahkan tag <br /> agar teks "With Expertise..." turun ke bawah dengan rapi */}
              <br />
              <span className="text-[#F99417]">
                With Expertise and Passion.
              </span>
            </h1>
          </div>
        </div>
        <div className="description flex flex-col items-center gap-4 py-2">
          <p className="text-[#FBFBFB] xl:text-[18px] md:text-[16px] text-[10px] font-regular xl:max-w-4xl md:max-w-2xl max-w-xs">
            Nekko Computer is your trusted partner in custom PC building.
            Managed by a skilled team with over 1 year of dedicated experience,
            we provide reliable, high-performance systems tailored to your
            needs.
          </p>
        </div>
      </div>
      <div className="min-h-screen py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col gap-8">
            {/* Baris 1: Diambil 3 produk pertama (indeks 0 sampai 2) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto w-full justify-items-center">
              {productsData.slice(0, 3).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Baris 2: Diambil 2 produk terakhir (indeks 3 sampai 5) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto w-full justify-items-center">
              {productsData.slice(3, 5).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Our Mission */}
      <div className="status flex w-full justify-center pt-10 gap-2.5">
        {/* Pembungkus utama status (berbentuk pill/lonjong) */}
        <div className="flex items-center gap-2.5 bg-[#1a1a1a] border border-gray-800/40 px-4 py-1.5 rounded-full">
          {/* Teks Status */}
          <p className="text-[#FBFBFB] text-sm font-medium tracking-wide">
            Our Mission
          </p>
        </div>
      </div>
      <div className="container w-full justify-items-center text-center pt-4 ">
        <div className="container w-full justify-items-center text-center mx-auto px-4">
          <div className="tagline py-2 max-w-4xl mx-auto">
            {/* 💡 Perbaikan: Ukuran text dipindah langsung ke dalam tag h1 */}
            <h1 className="xl:text-[44px] md:text-[38px] text-[22px] font-bold leading-tight text-[#FBFBFB]">
              To Deliver{" "}
              <span className="text-[#F99417]">High Performance</span>,{" "}
              <span className="text-[#F99417]">Reliable</span> , and{" "}
              <span className="text-[#F99417]">Customized PC</span> that Empower
              Every User From <span className="text-[#F99417]"> Gamers </span>{" "}
              to <span className="text-[#F99417]">Creators</span> With the
              Technology They need to Achieve More.
            </h1>
          </div>
        </div>
        <div className="description flex flex-col items-center gap-4 py-2">
          <p className="text-[#FBFBFB] xl:text-[18px] md:text-[16px] text-[10px] font-regular xl:max-w-4xl md:max-w-2xl max-w-xs">
            We believe every build tells a story. Our mission is to craft PC
            that combine power, precision, and style built to perform and made
            to last.
          </p>
        </div>
      </div>
      <div className="status flex w-full justify-center pt-20 gap-2.5">
        {/* Pembungkus utama status (berbentuk pill/lonjong) */}
        <div className="flex items-center gap-2.5 bg-[#1a1a1a] border border-gray-800/40 px-4 py-1.5 rounded-full">
          {/* Teks Status */}
          <p className="text-[#FBFBFB] text-sm font-medium tracking-wide">
            Work that Make Us Proud
          </p>
        </div>
      </div>
      <div className="container w-full justify-items-center text-center pt-2 ">
        <div className="container w-full justify-items-center text-center mx-auto px-4">
          <div className="tagline py-2 max-w-4xl mx-auto">
            {/* 💡 Perbaikan: Ukuran text dipindah langsung ke dalam tag h1 */}
            <h1 className="xl:text-[54px] md:text-[38px] text-[22px] font-bold leading-tight text-[#FBFBFB]">
              Recent Works, <span className="text-[#F99417]">Notable Impact</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
