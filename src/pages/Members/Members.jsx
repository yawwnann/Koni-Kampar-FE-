import { Link } from "react-router-dom";
import { Users, Building, UserCircle, ArrowRight } from "lucide-react";

const menuItems = [
  {
    title: "Struktur Pengurus",
    description:
      "Lihat struktur organisasi dan hierarki kepengurusan KONI Kampar",
    icon: Building,
    to: "/anggota/struktur",
    image: "/image/Anggota/img1.png",
  },
  {
    title: "Bio Pengurus",
    description:
      "Profil lengkap para pengurus KONI Kampar beserta latar belakang mereka",
    icon: UserCircle,
    to: "/anggota/bio",
    image: "/image/Anggota/img2.png",
  },
];

export default function Members() {
  return (
    <main>
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
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-red-600">
              <Users className="h-8 w-8" />
            </div>
            <h2 className="mb-4 text-4xl font-extrabold text-gray-900">
              Anggota KONI Kampar
            </h2>
            <p className="text-3xl font-bold text-red-600 mb-4">
              Kenali Pengurus Kami
            </p>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              Informasi lengkap mengenai struktur kepengurusan dan profil para
              pengurus KONI Kabupaten Kampar periode saat ini.
            </p>
          </div>

          {/* Menu Cards */}
          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            {menuItems.map((item) => (
              <Link
                key={item.title}
                to={item.to}
                className="group rounded-2xl overflow-hidden bg-white shadow-lg transition duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/90 backdrop-blur text-red-600">
                    <item.icon className="h-6 w-6" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold text-gray-900 group-hover:text-red-600 transition">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-red-600 group-hover:gap-3 transition-all">
                    Lihat Selengkapnya <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-16 grid gap-6 sm:grid-cols-3 max-w-3xl mx-auto">
            {[
              {
                label: "Total Pengurus",
                value: "25+",
                desc: "Aktif periode ini",
              },
              {
                label: "Cabang Olahraga",
                value: "30+",
                desc: "Di bawah naungan",
              },
              {
                label: "Tahun Berdiri",
                value: "1967",
                desc: "Melayani Kampar",
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl bg-white border border-gray-200 p-6 text-center shadow-sm"
              >
                <div className="text-3xl font-extrabold text-red-600">
                  {stat.value}
                </div>
                <div className="mt-1 font-semibold text-gray-900">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-500">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
