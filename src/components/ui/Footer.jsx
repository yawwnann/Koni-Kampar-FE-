import { Facebook, Instagram, Youtube } from "lucide-react";
import logo from "/image/logo.png";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Left - Logo & Description */}
          <div className="lg:col-span-1">
            <div className="mb-4 flex items-center gap-2">
              <img src={logo} alt="KONI Kampar Logo" />
            </div>
            <p className="text-sm leading-relaxed">
              KONI Kampar hadir sebagai wadah untuk menyalurkan energi, menempa
              mental juara, dan mengantarkan putra-putri terbaik kita ke podium
              tertinggi.
            </p>
          </div>

          {/* PROFIL KONI KAMPAR */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase text-gray-900 tracking-wide">
              Profil KONI Kampar
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/tentang"
                  className="text-sm hover:text-red-500 transition"
                >
                  Tentang Kami
                </a>
              </li>
              <li>
                <a
                  href="/tentang"
                  className="text-sm hover:text-red-500 transition"
                >
                  Visi & Misi
                </a>
              </li>
              <li>
                <a
                  href="/tentang"
                  className="text-sm hover:text-red-500 transition"
                >
                  Struktur Organisasi
                </a>
              </li>
            </ul>
          </div>

          {/* CABOR & EVENT */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase text-gray-900 tracking-wide">
              Cabor & Event
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm hover:text-red-500 transition">
                  Daftar Cabang Olahraga
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-red-500 transition">
                  Jadwal Pertandingan
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-red-500 transition">
                  Galeri Kegiatan
                </a>
              </li>
            </ul>
          </div>

          {/* INFORMASI */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase text-gray-900 tracking-wide">
              Informasi
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm hover:text-red-500 transition">
                  Hubungi Kami
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-red-500 transition">
                  Berita & Publikasi
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-red-500 transition">
                  Tautan Terkait
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-red-500 transition">
                  Kebijakan Privasi
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800" />

      {/* Bottom Footer */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm">
            © 2025 Koni Kampar Inc. All rights reserved.
          </p>

          {/* Social Media Icons */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="rounded-full bg-gray-200 p-2 hover:bg-red-600 transition"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="rounded-full bg-gray-200 p-2 hover:bg-red-600 transition"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="rounded-full bg-gray-200 p-2 hover:bg-red-600 transition"
            >
              <Youtube className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
