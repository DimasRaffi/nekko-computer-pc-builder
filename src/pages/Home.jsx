import React from "react";
import { useState } from "react";
import { ReactTyped } from "react-typed";
import TrustedBrands from "../components/TrustedBrands";

export default function Home({ setActiveLink, activeLink }) {
  return (
    <div className="header justify-items-center py-14">
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
              strings={[
                "PC Builder",
                "Fotographer",
                "Editor",
                "Gamer",
              ]} // Kamu bisa ganti atau tambah daftar kata di dalam array ini sesuai kebutuhan!
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
        <div className="description flex flex-col items-center gap-4 py-2">
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
      <TrustedBrands /> {/* Memanggil komponen TrustedBrands di sini agar muncul di bawah deskripsi */ }
    </div>
  );
}
