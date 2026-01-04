import { ArrowRight } from "lucide-react";

const sportsData = [
  {
    id: 1,
    name: "Sepak Bola",
    image: "/image/Beranda/sepak_bola.png",
  },
  {
    id: 2,
    name: "Atletik",
    image: "/image/Beranda/Atletik.png",
  },
  {
    id: 3,
    name: "Bulu Tangkis",
    image: "/image/Beranda/Bulu_tangkis.png",
  },
  {
    id: 4,
    name: "Pencak Silat",
    image: "/image/Beranda/Pencak_silat.png",
  },
];

export default function SportsSection() {
  return (
    <section className="relative bg-linear-to-br from-red-50 via-white to-red-50 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Cabang <span className="text-red-600">Olahraga</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Jelajahi cabang olahraga unggulan tempat para juara dilahirkan.
          </p>
        </div>

        {/* Sports Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-10">
          {sportsData.map((sport) => (
            <div
              key={sport.id}
              className="group rounded-3xl overflow-hidden  transition duration-300  hover:-translate-y-2"
            >
              <img
                src={sport.image}
                alt={sport.name}
                className="h-64 w-full object-cover"
              />
              <div className="bg-white p-4 text-center">
                <h3 className="text-lg font-bold text-gray-900">
                  {sport.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <a
            href="/cabang-olahraga"
            className="inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-3 text-white font-medium shadow-lg shadow-red-200 transition hover:bg-red-700"
          >
            Lihat Semua Cabor
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Subtle border */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-gray-200 to-transparent" />
    </section>
  );
}
