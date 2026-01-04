import { ArrowRight, Circle } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Left content */}
          <div>
            <h1 className="text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl">
              Semangat <span className="text-red-600">Juara</span>
              <br />
              dari Jantung Riau,
              <br />
              Kampar Bisa!
            </h1>
            <p className="mt-6 max-w-xl text-gray-600">
              Dari setiap sudut Kabupaten Kampar, lahir semangat tak pernah
              padam. KONI Kampar hadir sebagai wadah untuk menyalurkan energi,
              menempa mental juara, dan mengantarkan putra-putri terbaik kita ke
              podium tertinggi. Mari bersama, kita buktikan bahwa Kampar adalah
              lumbung atlet berprestasi!
            </p>
            <div className="mt-8">
              <a
                href="#event"
                className="inline-flex items-center gap-2 rounded-full bg-red-600 px-5 py-3 text-white shadow-lg shadow-red-200 transition hover:bg-red-700"
              >
                <span className="relative flex h-2 w-2 items-center justify-center">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-60"></span>
                  <Circle className="h-2 w-2 fill-white text-white" />
                </span>
                Lihat Event
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative">
            {/* Main image with rounded mask */}
            <div className="relative z-10 ml-auto w-full max-w-135rounded-[48px] rounded-tl-none  p-1">
              <img
                src="/image/Beranda/beranda_image.png"
                alt="Olahraga Kampar"
                className="h-full w-full rounded-[44px] rounded-tl-none object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Subtle top and bottom borders to match navbar style */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-gray-200 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-gray-200 to-transparent" />
    </section>
  );
}
