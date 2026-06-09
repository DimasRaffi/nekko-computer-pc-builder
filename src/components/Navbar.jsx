import { useState } from "react";

const navLinks = [
  { id: "Home", label: "Home" },
  { id: "Build PC", label: "Build PC" },
  { id: "Catalog", label: "Catalog" },
  { id: "About Us", label: "About Us" },
];

// activeLink dan setActiveLink diambil dari App.jsx lewat sini (Props)
function Navbar({ activeLink, setActiveLink }) {
  return (
    <div className="relative w-full px-4 pt-8">
      {/* NAVBAR CONTAINER: flex-row permanen agar bentuk kapsul horizontalnya terjaga di semua device */}
      <nav className="mx-auto flex flex-row items-center justify-between bg-[#1e1e1e] rounded-full px-4 py-2.5 sm:px-6 md:px-6 md:py-4 w-full max-w-[95%] sm:max-w-md md:max-w-3xl xl:max-w-4xl transition-all duration-300">
        {/* 1. NAMA BRAND (RESPONSIVE TEXT) */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setActiveLink("Home");
          }}
          className="flex items-center text-sm sm:text-base md:text-xl font-semibold tracking-tight text-white no-underline select-none"
        >
          {/* TAMPILAN DI HP: Hanya muncul di layar kecil, tersembunyi mulai dari md ke atas */}
          <span className="md:hidden">
            <span className="text-[#F99417] font-bold">N</span>
            <span className="text-[#FBFBFB] font-bold">C</span>
          </span>

          {/* TAMPILAN DI LAPTOP/TABLET: Tersembunyi di HP, baru muncul mulai dari md ke atas */}
          <span className="hidden md:inline">
            <span className="text-[#F99417] font-semibold">Nekko</span>
            &nbsp;Computer
          </span>
        </a>

        {/* 2. NAVIGATION LINKS: Ukuran text & gap mengecil di HP agar muat satu baris */}
        <ul className="flex items-center justify-center gap-2.5 sm:gap-4 md:gap-4 lg:gap-10 m-0 p-0 list-none">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveLink(link.id);
                }}
                className={`text-[11px] sm:text-sm md:text-base font-medium relative rounded-md no-underline block pb-1 transition-all duration-200
              after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#F5A623] after:transition-all after:duration-300
              ${
                activeLink === link.id
                  ? "text-[#F99417] after:w-full"
                  : "text-[#B4B4B3] hover:text-[#F99417] after:w-0 hover:after:w-full"
              }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* 3. CONTACT BUTTON: Ukuran padding & text menyesuaikan device agar hemat tempat */}
        {/* 3. CONTACT BUTTON */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setActiveLink("Contact Us");
          }}
          className={`group flex items-center gap-1.5 md:gap-2 border text-[10px] sm:text-xs md:text-sm font-medium px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 rounded-full transition-all duration-300 no-underline whitespace-nowrap
  ${
    activeLink === "Contact Us"
      ? "bg-[#F99417] border-[#F99417] text-white"
      : "bg-transparent border-gray-600 text-white hover:border-[#F99417] hover:bg-[#F99417]/10"
  }`}
        >
          <span>Contact Us</span>

          {/* 💡 PERBAIKAN DI SINI: Tambahkan 'hidden md:flex' agar panah hilang di HP, tapi muncul di tablet/PC */}
          <div className="relative w-3.5 h-3.5 md:w-4 md:h-4 overflow-hidden hidden md:flex items-center justify-center">
            <div className="flex flex-col absolute left-0 top-0 transition-transform duration-200 ease-in-out group-hover:-translate-y-1/2">
              {/* PANAH UTAMA */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-3.5 h-3.5 md:w-4 md:h-4 transition-colors duration-200 text-gray-400 group-hover:text-[#F99417]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>

              {/* PANAH CADANGAN */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className={`w-3.5 h-3.5 md:w-4 md:h-4 ${activeLink === "Contact Us" ? "text-white" : "text-[#F99417]"}`}
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
      </nav>
    </div>
  );
}

export default Navbar;
