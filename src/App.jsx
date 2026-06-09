import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import BuildPc from "./pages/BuildPc";
import Catalog from "./pages/Catalog";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";

function App() {
  // State ini yang menyimpan halaman mana yang sedang aktif saat ini
  const [activeLink, setActiveLink] = useState("Home");

  return (
    <div className="min-h-screen bg-[#111213] text-white">
      {/* 1. Kirim state ke Navbar agar tombolnya bisa mengubah nilai activeLink */}
      <Navbar activeLink={activeLink} setActiveLink={setActiveLink} />

      {/* 2. Logika Pengkondisian: Tampilkan halaman sesuai dengan menu yang diklik */}
      <main className="container">
        {activeLink === "Home" && <Home setActiveLink={setActiveLink} activeLink={activeLink} />}
        {activeLink === "Build PC" && <BuildPc />}
        {activeLink === "Catalog" && <Catalog />}
        {activeLink === "About Us" && <AboutUs />}
        {activeLink === "Contact Us" && <ContactUs />}
      </main>
    </div>
  );
}

export default App;