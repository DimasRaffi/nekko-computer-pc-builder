import { useState, useEffect } from "react";

const navLinks = ["Home", "Build PC", "Catalog", "About"];

function Navbar() {
  const [activeLink, setActiveLink] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative w-full px-4 pt-6 ">
      <nav className="flex items-center justify-between max-w-4xl mx-auto rounded-full px-8 py-4 bg-[#1e1e1e]">
        {/* Nama Brand */}
        <a
          href="#"
          className="flex items-center text-lg font-semibold tracking-tight"
        >
          <span className="text-[#F99417] font-bold">Nekko</span>&nbsp;Computer
        </a>

        {/* Navigation Links */}
        <ul className="flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveLink(link);
                }}
                className={`text-base font-medium relative rounded-md no-underline block pb-1 transition-all duration-200
      /* Efek garis dasar */
                after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#F5A623] after:transition-all after:duration-300
      
      /* Logika Aktif vs Biasa */
                ${
                  activeLink === link
                    ? "text-[#F99417] after:w-full"
                    : "text-[#B4B4B3] hover:text-[#F99417] after:w-0 hover:after:w-full"
                }`}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Contact Button */}
        <a href="#" className="group flex items-center gap-2 bg-[#1e1e1e] hover:border-[#F99417] border border-gray-700 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-colors duration-300">
          <span>Contact Us</span>

          {/* Kotak pembungkus panah (wajib overflow-hidden) */}
          <div className="relative w-5 h-4 overflow-hidden">
            <div className="flex flex-col absolute left-0 top-0 transition-transform duration-200 ease-in-out group-hover:-translate-y-1/2">
              {/* Panah Utama (yang kelihatan di awal) */}

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-4 h-4 text-gray-400 group-hover:text-[#F99417]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>

              {/* Panah Cadangan (yang bakal scroll masuk dari bawah) */}

                <img src="./src/assets/arrow-right.png" alt="Arrow Right" className="w-5 h-5 text-gray-400 group-hover:text-[#F99417]"  >
              
              </img>

              {/* <svg
                xmlns="http://www.w3.org/000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-4 h-4 text-[#F99417]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg> */}

            </div>
          </div>
        </a>
      </nav>
    </div>
  );
}

export default Navbar;
