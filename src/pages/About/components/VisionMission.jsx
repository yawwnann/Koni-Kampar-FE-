import { Target } from "lucide-react";

const misiItems = [
  {
    id: 1,
    text: "Meningkatkan kualitas pembinaan atlet nasional.",
  },
  {
    id: 2,
    text: "Menyelenggarakan kompetisi olahraga tingkat nasional & internasional.",
  },
  {
    id: 3,
    text: "Mendorong inovasi dan profesionalisme dalam dunia olahraga.",
  },
  {
    id: 4,
    text: "Memperkuat kolaborasi dengan sektor publik dan swasta.",
  },
];

export default function VisionMission() {
  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-16 lg:py-20">
      {/* Background effect - blurred and rotated */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          src="/image/effect.png"
          alt="background effect"
          className="absolute top-1/2 right-0 -translate-y-1/2 w-full h-full object-cover blur-3xl  -rotate-45"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h2 className="mb-12 text-4xl font-extrabold text-gray-900">
          Visi & Misi <span className="text-red-600">KONI</span>
        </h2>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Visi */}
          <div>
            <h3 className="mb-4 text-sm font-bold text-gray-600 tracking-widest uppercase">
              Visi KONI
            </h3>

            <div className="relative rounded-2xl bg-gray-100 p-12 overflow-hidden h-70 flex items-center justify-center">
              {" "}
              <p className="text-lg leading-relaxed text-gray-700 mb-8">
                Menjadikan Kabupaten Kampar sebagai lumbung atlet berkarakter,
                berdaya saing, dan bermental juara yang mampu mengharumkan nama
                daerah di kancah regional, nasional, dan internasional.
              </p>
              {/* Logo background - centered */}
              <div className="absolute inset-0 opacity-60 -right-95 -bottom-30 pointer-events-none -rotate-30 flex items-center justify-center">
                <img
                  src="/image/About/logo-abu.png"
                  alt="logo"
                  className="h-64 w-64 object-contain"
                />
              </div>
            </div>
          </div>

          {/* Misi */}
          <div className="grid gap-4">
            <h3 className="text-sm font-bold text-gray-600 tracking-widest uppercase">
              Misi KONI
            </h3>
            <div className="grid gap-4 grid-cols-1">
              {misiItems.map((item) => (
                <div
                  key={item.id}
                  className="rounded-xl bg-white/30 backdrop-blur-md border border-white/40 p-4 shadow-md hover:shadow-lg transition"
                >
                  <div className="flex gap-3">
                    <div className="shrink-0 mt-1">
                      <Target className="h-5 w-5 text-red-600" />
                    </div>
                    <p className="text-gray-700 leading-relaxed text-sm">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Subtle border */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-gray-200 to-transparent" />
    </section>
  );
}
