import { ArrowRight } from "lucide-react";

export default function HeroAbout() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background effect - blurred and rotated */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          src="/image/effect.png"
          alt="background effect"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover blur-3xl opacity-20 rotate-45"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Left content */}
          <div>
            <span className="inline-block text-sm font-bold text-gray-600 tracking-widest mb-4">
              TENTANG KAMI
            </span>
            <h1 className="text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl">
              Mengobarkan Semangat
              <br />
              <span className="text-red-600">Juara</span> dari Jantung
              <br />
              <span className="text-red-600">Kampar</span>
            </h1>
            <p className="mt-6 max-w-xl text-gray-600 leading-relaxed">
              KONI Kabupaten Kampar berdedikasi membina dan mencetak atlet-atlet
              juara dari Negeri Semarak Mekah. Visi kami adalah menjadikan
              Kampar sebagai lumbung talenta berkualitas yang siap berprestasi
              di kancah regional hingga internasional.
            </p>
            <div className="mt-8">
              <a
                href="#event"
                className="inline-flex items-center gap-2 rounded-full bg-red-600 px-5 py-3 text-white shadow-lg shadow-red-200 transition hover:bg-red-700"
              >
                Lihat Event
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative">
            {/* Main image */}
            <div className="relative z-10 ml-auto w-full max-w-md rounded-[48px]overflow-hidden">
              <img
                src="/image/About/hero.png"
                alt="Tentang KONI Kampar"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Subtle top and bottom borders */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-gray-200 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-gray-200 to-transparent" />
    </section>
  );
}
