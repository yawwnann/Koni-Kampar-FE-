import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="relative bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Left - Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative overflow-hidden">
              <img
                src="/image/Beranda/Tentang_koni.png"
                alt="Tentang KONI"
                className="h-full w-full max-w-xl object-cover"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="lg:pl-12 ">
            <div className="mb-4">
              <span className="inline-block rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-600 ">
                📍 Sejak 1938
              </span>
            </div>
            <h2 className="mb-6 text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl ">
              Tentang <span className="text-red-600">KONI</span>
            </h2>
            <p className="mb-6 text-lg text-gray-600 leading-relaxed ">
              KONI Kabupaten Kampar telah menggelar Rapat Kerja (Rakerkab) untuk
              memfokuskan strategi demi meraih dua target utama: meraih "Kampar
              Emas" pada Porprov 2026 dan menyukseskan penyelenggaraan Porwil
              Sumatera XI.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <div className="text-4xl font-bold text-red-600">78</div>
                <p className="text-gray-600 text-sm mt-2">Cabang Olahraga</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-red-600">6</div>
                <p className="text-gray-600 text-sm mt-2">
                  Organisasi Fungsional
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="/tentang"
              className="inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-3 text-white font-medium shadow-lg shadow-red-200 transition hover:bg-red-700"
            >
              Pelajari Lebih Lanjut
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Subtle border */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-gray-200 to-transparent" />
    </section>
  );
}
