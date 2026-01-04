import { Link } from "react-router-dom";
import { useState } from "react";
import { Users, Trophy, Medal } from "lucide-react";
import {
  GiSoccerBall,
  GiBasketballBall,
  GiVolleyballBall,
  GiShuttlecock,
  GiBoxingGlove,
  GiRunningShoe,
  GiSwimfins,
  GiArcheryTarget,
  GiTennisRacket,
  GiKimono,
} from "react-icons/gi";
import { BiCycling } from "react-icons/bi";
import { MdSportsMartialArts } from "react-icons/md";

// Sports data
const sportsData = [
  {
    id: 1,
    name: "Sepak Bola",
    icon: GiSoccerBall,
    category: "Permainan",
    athletes: 45,
    achievements: 12,
    color: "bg-red-600",
    description: "Olahraga tim yang paling populer di dunia",
  },
  {
    id: 2,
    name: "Bola Basket",
    icon: GiBasketballBall,
    category: "Permainan",
    athletes: 24,
    achievements: 8,
    color: "bg-red-600",
    description:
      "Olahraga bola berkelompok yang dimainkan di lapangan tertutup",
  },
  {
    id: 3,
    name: "Bola Voli",
    icon: GiVolleyballBall,
    category: "Permainan",
    athletes: 30,
    achievements: 15,
    color: "bg-red-600",
    description: "Olahraga permainan yang dimainkan oleh dua tim",
  },
  {
    id: 4,
    name: "Bulu Tangkis",
    icon: GiShuttlecock,
    category: "Raket",
    athletes: 20,
    achievements: 25,
    color: "bg-red-600",
    description:
      "Olahraga raket yang dimainkan oleh dua orang atau dua pasangan",
  },
  {
    id: 5,
    name: "Tinju",
    icon: GiBoxingGlove,
    category: "Bela Diri",
    athletes: 15,
    achievements: 10,
    color: "bg-red-600",
    description: "Olahraga bela diri yang menggunakan pukulan tangan",
  },
  {
    id: 6,
    name: "Atletik",
    icon: GiRunningShoe,
    category: "Individu",
    athletes: 35,
    achievements: 20,
    color: "bg-red-600",
    description:
      "Kumpulan cabang olahraga yang meliputi lari, lompat, dan lempar",
  },
  {
    id: 7,
    name: "Renang",
    icon: GiSwimfins,
    category: "Air",
    athletes: 18,
    achievements: 14,
    color: "bg-red-600",
    description: "Olahraga yang dilakukan di dalam air",
  },
  {
    id: 8,
    name: "Panahan",
    icon: GiArcheryTarget,
    category: "Ketepatan",
    athletes: 12,
    achievements: 8,
    color: "bg-red-600",
    description: "Seni atau olahraga menembakkan anak panah",
  },
  {
    id: 9,
    name: "Tenis Lapangan",
    icon: GiTennisRacket,
    category: "Raket",
    athletes: 16,
    achievements: 6,
    color: "bg-red-600",
    description:
      "Olahraga raket yang dapat dimainkan secara individu atau ganda",
  },
  {
    id: 10,
    name: "Pencak Silat",
    icon: GiKimono,
    category: "Bela Diri",
    athletes: 22,
    achievements: 18,
    color: "bg-red-600",
    description: "Seni bela diri tradisional Indonesia",
  },
  {
    id: 11,
    name: "Balap Sepeda",
    icon: BiCycling,
    category: "Balap",
    athletes: 14,
    achievements: 5,
    color: "bg-red-600",
    description: "Olahraga balap menggunakan sepeda",
  },
  {
    id: 12,
    name: "Karate",
    icon: MdSportsMartialArts,
    category: "Bela Diri",
    athletes: 20,
    achievements: 16,
    color: "bg-red-600",
    description: "Seni bela diri asal Jepang yang fokus pada serangan tangan",
  },
];

// Categories for filter
const categories = [
  { label: "Semua", value: "all" },
  { label: "Permainan", value: "Permainan" },
  { label: "Raket", value: "Raket" },
  { label: "Bela Diri", value: "Bela Diri" },
  { label: "Individu", value: "Individu" },
  { label: "Air", value: "Air" },
  { label: "Ketepatan", value: "Ketepatan" },
  { label: "Balap", value: "Balap" },
];

export default function SportBranchGrid() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredSports =
    activeFilter === "all"
      ? sportsData
      : sportsData.filter((sport) => sport.category === activeFilter);

  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-16 lg:py-20">
      {/* Background effect - blurred */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          src="/image/effect.png"
          alt="background effect"
          className="absolute top-1/2 right-0 -translate-y-1/2 w-full h-full object-cover blur-3xl opacity-20 -rotate-45"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-extrabold text-gray-900">
            Cabang Olahraga –
          </h2>
          <p className="text-3xl font-bold text-red-600 mb-4">
            KONI Kabupaten Kampar
          </p>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            KONI Kampar membina berbagai cabang olahraga untuk mengembangkan
            potensi atlet-atlet terbaik dari Kabupaten Kampar menuju prestasi
            nasional dan internasional.
          </p>
        </div>

        {/* Stats Summary */}
        <div className="mb-12 grid gap-6 sm:grid-cols-3">
          <div className="rounded-2xl bg-linear-to-br from-red-500 to-red-600 p-6 text-center text-white shadow-lg">
            <Trophy className="mx-auto mb-2 h-10 w-10" />
            <p className="text-4xl font-extrabold">{sportsData.length}</p>
            <p className="text-red-100">Cabang Olahraga</p>
          </div>
          <div className="rounded-2xl bg-linear-to-br from-blue-500 to-blue-600 p-6 text-center text-white shadow-lg">
            <Users className="mx-auto mb-2 h-10 w-10" />
            <p className="text-4xl font-extrabold">
              {sportsData.reduce((acc, sport) => acc + sport.athletes, 0)}
            </p>
            <p className="text-blue-100">Total Atlet</p>
          </div>
          <div className="rounded-2xl bg-linear-to-br from-yellow-500 to-yellow-600 p-6 text-center text-white shadow-lg">
            <Medal className="mx-auto mb-2 h-10 w-10" />
            <p className="text-4xl font-extrabold">
              {sportsData.reduce((acc, sport) => acc + sport.achievements, 0)}
            </p>
            <p className="text-yellow-100">Total Prestasi</p>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveFilter(cat.value)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                activeFilter === cat.value
                  ? "bg-red-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Sports Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredSports.map((sport) => {
            const IconComponent = sport.icon;
            return (
              <Link
                to={`/cabor/${sport.id}`}
                key={sport.id}
                className="group rounded-2xl overflow-hidden bg-white shadow-lg transition duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                {/* Icon Header */}
                <div
                  className={`${sport.color} flex h-32 items-center justify-center`}
                >
                  <IconComponent className="h-16 w-16 text-white transition duration-300 group-hover:scale-110" />
                </div>

                {/* Content */}
                <div className="p-5">
                  {/* Category Badge */}
                  <span className="mb-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600">
                    {sport.category}
                  </span>

                  {/* Name */}
                  <h3 className="mb-2 text-lg font-bold text-gray-900 group-hover:text-red-600 transition">
                    {sport.name}
                  </h3>

                  {/* Description */}
                  <p className="mb-4 text-sm text-gray-600 line-clamp-2">
                    {sport.description}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-between border-t border-gray-100 pt-3">
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <Users className="h-4 w-4 text-blue-500" />
                      <span>{sport.athletes} Atlet</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <Trophy className="h-4 w-4 text-yellow-500" />
                      <span>{sport.achievements} Prestasi</span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* CTA Box */}
        <div className="mt-12 rounded-2xl bg-linear-to-r from-red-600 to-red-700 p-8 text-center text-white shadow-xl">
          <Trophy className="mx-auto mb-4 h-12 w-12" />
          <h3 className="mb-2 text-2xl font-bold">
            Ingin Bergabung dengan Cabang Olahraga?
          </h3>
          <p className="mx-auto max-w-2xl text-red-100 mb-6">
            Bergabunglah dengan salah satu cabang olahraga binaan KONI Kampar
            dan kembangkan potensi olahragamu bersama kami!
          </p>
          <Link
            to="/kontak"
            className="inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold text-red-600 transition hover:bg-red-50"
          >
            Hubungi Kami
          </Link>
        </div>
      </div>
    </section>
  );
}
