import { Link } from "react-router-dom";
import { ChevronLeft, Building, Users } from "lucide-react";

const images = [
  "/image/Anggota/img1.png",
  "/image/Anggota/img2.png",
  "/image/Anggota/img3.png",
  "/image/Anggota/img4.png",
  "/image/Anggota/img5.png",
  "/image/Anggota/img6.png",
];

const structureData = {
  pelindung: [
    { name: "Bupati Kampar", position: "Pelindung", image: images[0] },
  ],
  penasihat: [
    { name: "Wakil Bupati Kampar", position: "Penasihat", image: images[1] },
    { name: "Ketua DPRD Kampar", position: "Penasihat", image: images[2] },
  ],
  pengurus: [
    { name: "H. Ahmad Syafri, S.H.", position: "Ketua Umum", image: images[0] },
    { name: "Drs. Budi Santoso", position: "Wakil Ketua I", image: images[1] },
    { name: "Ir. Candra Wijaya", position: "Wakil Ketua II", image: images[2] },
    {
      name: "Diana Permata, S.E.",
      position: "Sekretaris Umum",
      image: images[0],
    },
    {
      name: "Eko Prasetyo, M.M.",
      position: "Wakil Sekretaris",
      image: images[1],
    },
    {
      name: "Fitri Handayani, S.Ak.",
      position: "Bendahara Umum",
      image: images[2],
    },
    { name: "Gunawan Setiadi", position: "Wakil Bendahara", image: images[0] },
  ],
  bidang: [
    {
      name: "Hendra Kusuma",
      position: "Ketua Bidang Pembinaan",
      image: images[1],
    },
    {
      name: "Indah Lestari",
      position: "Ketua Bidang Organisasi",
      image: images[2],
    },
    { name: "Joko Widodo", position: "Ketua Bidang Humas", image: images[0] },
    { name: "Kartika Sari", position: "Ketua Bidang Sarana", image: images[1] },
    {
      name: "Lukman Hakim",
      position: "Ketua Bidang Prestasi",
      image: images[2],
    },
  ],
};

function PersonCard({ person, size = "normal" }) {
  const sizeClasses = {
    large: "w-32 h-32",
    normal: "w-24 h-24",
    small: "w-20 h-20",
  };

  return (
    <div className="flex flex-col items-center text-center">
      <div
        className={`${sizeClasses[size]} rounded-full overflow-hidden border-4 border-red-100 shadow-lg mb-3`}
      >
        <img
          src={person.image}
          alt={person.name}
          className="w-full h-full object-cover"
        />
      </div>
      <h4 className="font-semibold text-gray-900 text-sm">{person.name}</h4>
      <p className="text-xs text-red-600 font-medium">{person.position}</p>
    </div>
  );
}

export default function Structure() {
  return (
    <main>
      <section className="relative overflow-hidden bg-white py-12 sm:py-16 lg:py-20">
        {/* Background effect - blurred */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            src="/image/effect.png"
            alt="background effect"
            className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-full object-cover blur-3xl opacity-20 rotate-45"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link
            to="/anggota"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-red-600 transition mb-8"
          >
            <ChevronLeft className="h-5 w-5" />
            Kembali ke Anggota
          </Link>

          {/* Header */}
          <div className="mb-12 text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-red-600">
              <Building className="h-8 w-8" />
            </div>
            <h2 className="mb-4 text-4xl font-extrabold text-gray-900">
              Struktur Pengurus
            </h2>
            <p className="text-3xl font-bold text-red-600 mb-4">
              KONI Kabupaten Kampar
            </p>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              Struktur organisasi kepengurusan KONI Kampar periode 2023-2027
            </p>
          </div>

          {/* Organization Chart */}
          <div className="space-y-12">
            {/* Pelindung */}
            <div className="text-center">
              <div className="inline-block rounded-lg bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700 mb-6">
                PELINDUNG
              </div>
              <div className="flex justify-center">
                {structureData.pelindung.map((person) => (
                  <PersonCard key={person.name} person={person} size="large" />
                ))}
              </div>
              {/* Connector Line */}
              <div className="w-px h-8 bg-gray-300 mx-auto mt-4" />
            </div>

            {/* Penasihat */}
            <div className="text-center">
              <div className="inline-block rounded-lg bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700 mb-6">
                PENASIHAT
              </div>
              <div className="flex justify-center gap-12 flex-wrap">
                {structureData.penasihat.map((person) => (
                  <PersonCard key={person.name} person={person} size="normal" />
                ))}
              </div>
              {/* Connector Line */}
              <div className="w-px h-8 bg-gray-300 mx-auto mt-4" />
            </div>

            {/* Pengurus Inti */}
            <div className="text-center">
              <div className="inline-block rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white mb-6">
                PENGURUS INTI
              </div>
              <div className="rounded-2xl bg-white border border-gray-200 p-8 shadow-lg">
                <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {structureData.pengurus.map((person, index) => (
                    <PersonCard
                      key={person.name}
                      person={person}
                      size={index === 0 ? "large" : "normal"}
                    />
                  ))}
                </div>
              </div>
              {/* Connector Line */}
              <div className="w-px h-8 bg-gray-300 mx-auto mt-4" />
            </div>

            {/* Bidang-bidang */}
            <div className="text-center">
              <div className="inline-block rounded-lg bg-gray-800 px-4 py-2 text-sm font-semibold text-white mb-6">
                KETUA BIDANG
              </div>
              <div className="rounded-2xl bg-white border border-gray-200 p-8 shadow-lg">
                <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                  {structureData.bidang.map((person) => (
                    <PersonCard
                      key={person.name}
                      person={person}
                      size="small"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Info Box */}
          <div className="mt-12 rounded-xl bg-red-50 border border-red-100 p-6 text-center">
            <Users className="h-8 w-8 text-red-600 mx-auto mb-3" />
            <h4 className="font-semibold text-gray-900 mb-2">
              Ingin Mengenal Lebih Dekat?
            </h4>
            <p className="text-gray-600 mb-4">
              Lihat profil lengkap dan biodata masing-masing pengurus KONI
              Kampar
            </p>
            <Link
              to="/anggota/bio"
              className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-6 py-2.5 font-semibold text-white hover:bg-red-700 transition"
            >
              Lihat Bio Pengurus
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
