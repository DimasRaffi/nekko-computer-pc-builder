import React from "react";

// 💡 Perhatikan parameternya: sekarang menerima data 'product' hasil mapping
export default function ProductCard({ product }) {
  // Jika data product belum dimuat, tampilkan kosong agar tidak error
  if (!product) return null;

  return (
    /* CONTAINER UTAMA CARD */
    <div className="w-full max-w-[360px] bg-[#15181B] border-2 border-gray-800/40 rounded-3xl p-6 flex flex-col gap-5 shadow-xl transition-all duration-300 hover:border-[#F99417]/30 hover:translate-y-[-4px]">
      {/* BARIS ATAS: BADGE & TITIK TIGA */}
      <div className="flex items-center justify-between">
        {/* Badge dinamis mengambil dari data.js */}
        <span className="bg-[#F99417] text-[#0a0a0a] text-xs font-semibold px-2.5 py-1 rounded-md tracking-wider">
          {product.badge}
        </span>

        {/* Tombol Menu Titik Tiga */}
        <button className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-6 h-6"
          >
            <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s-.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s-.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
          </svg>
        </button>
      </div>

      {/* TEXT SECTION: JUDUL & DESKRIPSI */}
      <div className="flex flex-col gap-1.5">
        <h3 className="text-[#FBFBFB] text-3xl font-bold tracking-tight leading-tight">
          {product.title}
        </h3>
        <p className="text-gray-400 text-sm font-normal leading-relaxed">
          {product.description}
        </p>
      </div>

      {/* IMAGE SECTION: GAMBAR PRODUK */}
      <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-950">
        <img
          src={product.image} // 💡 Mengambil variabel image (CP1, CP2, dst) dari data.js
          alt={product.title}
          className="w-full h-full object-cover opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-500"
        />
      </div>
    </div>
  );
}
