import React from "react";

export default function TrustedBrands() {
  // Array contoh data logo (Ganti src gambar sesuai dengan aset logo komputer milikmu)
  const brands = [
    {
      name: "Intel",
      logo: "https://upload.wikimedia.org/wikipedia/commons/8/85/Intel_logo_2023.svg",
    },
    {
      name: "Logitech",
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/17/Logitech_logo.svg",
    },
    {
      name: "Asus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2e/ASUS_Logo.svg",
    },
    {
      name: "AMD",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/7c/AMD_Logo.svg",
    },
    {
      name: "Corsair",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Corsair_2020_logo.svg",
    },
    {
      name: "Nvidia",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a4/NVIDIA_logo.svg",
    },
    {
      name: "BeQuiet",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/46/Be-quiet%21_Logo.svg",
    },
  ];

  return (
    <div className="w-full py-12 flex flex-col items-center justify-center overflow-hidden pt-15 gap-8">
      {/* Judul Atas */}
      <h2 className="text-[#FBFBFB] text-sm md:text-base font-regular tracking-wider mb-4 ">
        Trusted Brands
      </h2>

      {/* CONTAINER UTAMA */}
      <div
        className="relative w-full max-w-5xl flex overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
        }}
      >
        {/* 💡 TRACK 1: Ditambahkan shrink-0 agar mempertahankan lebar aslinya */}
        <div className="flex space-x-12 md:space-x-18 items-center justify-start animate-infinite-scroll whitespace-nowrap pr-12 md:pr-20 shrink-0">
          {brands.map((brand, index) => (
            <img
              key={`brand-1-${index}`}
              src={brand.logo}
              alt={brand.name}
              className="h-3 md:h-5 w-auto object-contain brightness-0 invert opacity-40 hover:opacity-100 hover:filter-none transition-all duration-500 cursor-pointer"
            />
          ))}
        </div>

        {/* 💡 TRACK 2: Ditambahkan shrink-0 juga agar berbaris rapi di belakang Track 1 tanpa tabrakan */}
        <div
          className="flex space-x-12 md:space-x-20 items-center justify-start animate-infinite-scroll whitespace-nowrap shrink-0"
          aria-hidden="true"
        >
          {brands.map((brand, index) => (
            <img
              key={`brand-2-${index}`}
              src={brand.logo}
              alt={brand.name}
              className="h-3 md:h-5 w-auto object-contain brightness-0 invert opacity-40 hover:opacity-100 hover:filter-none transition-all duration-500 cursor-pointer"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
