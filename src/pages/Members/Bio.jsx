import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronLeft,
  UserCircle,
  Mail,
  Phone,
  MapPin,
  Award,
  Briefcase,
} from "lucide-react";

const images = [
  "/image/Anggota/img1.png",
  "/image/Anggota/img2.png",
  "/image/Anggota/img3.png",
  "/image/Anggota/img4.png",
  "/image/Anggota/img5.png",
  "/image/Anggota/img6.png",
];

// Generate bio data with looping images
const generateBioData = () => {
  const names = [
    {
      name: "H. Ahmad Syafri, S.H.",
      position: "Ketua Umum",
      category: "pengurus",
    },
    {
      name: "Drs. Budi Santoso",
      position: "Wakil Ketua I",
      category: "pengurus",
    },
    {
      name: "Ir. Candra Wijaya",
      position: "Wakil Ketua II",
      category: "pengurus",
    },
    {
      name: "Diana Permata, S.E.",
      position: "Sekretaris Umum",
      category: "pengurus",
    },
    {
      name: "Eko Prasetyo, M.M.",
      position: "Wakil Sekretaris",
      category: "pengurus",
    },
    {
      name: "Fitri Handayani, S.Ak.",
      position: "Bendahara Umum",
      category: "pengurus",
    },
    {
      name: "Gunawan Setiadi",
      position: "Wakil Bendahara",
      category: "pengurus",
    },
    {
      name: "Hendra Kusuma",
      position: "Ketua Bidang Pembinaan",
      category: "bidang",
    },
    {
      name: "Indah Lestari",
      position: "Ketua Bidang Organisasi",
      category: "bidang",
    },
    { name: "Joko Widodo", position: "Ketua Bidang Humas", category: "bidang" },
    {
      name: "Kartika Sari",
      position: "Ketua Bidang Sarana",
      category: "bidang",
    },
    {
      name: "Lukman Hakim",
      position: "Ketua Bidang Prestasi",
      category: "bidang",
    },
  ];

  return names.map((person, index) => ({
    id: index + 1,
    ...person,
    image: images[index % images.length],
    email: `${person.name.split(" ")[0].toLowerCase()}@konikampar.id`,
    phone: `0812-${String(1000 + index).padStart(4, "0")}-${String(
      5000 + index * 111
    ).padStart(4, "0")}`,
    address: "Bangkinang, Kampar",
    experience: `${10 + (index % 5)} tahun di bidang olahraga`,
    achievements: [
      "Penghargaan Dedikasi Olahraga",
      "Medali Penghargaan KONI Riau",
      "Sertifikat Keahlian Manajemen Olahraga",
    ],
    bio: `Bergabung dengan KONI Kampar sejak tahun ${
      2010 + (index % 10)
    } dan telah berkontribusi dalam berbagai program pembinaan atlet dan pengembangan olahraga di Kabupaten Kampar. Memiliki dedikasi tinggi dalam memajukan prestasi olahraga daerah.`,
  }));
};

const bioData = generateBioData();

const categories = [
  { id: "semua", label: "Semua" },
  { id: "pengurus", label: "Pengurus Inti" },
  { id: "bidang", label: "Ketua Bidang" },
];

export default function Bio() {
  const [activeCategory, setActiveCategory] = useState("semua");
  const [selectedPerson, setSelectedPerson] = useState(null);

  const filteredData =
    activeCategory === "semua"
      ? bioData
      : bioData.filter((person) => person.category === activeCategory);

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
              <UserCircle className="h-8 w-8" />
            </div>
            <h2 className="mb-4 text-4xl font-extrabold text-gray-900">
              Bio Pengurus
            </h2>
            <p className="text-3xl font-bold text-red-600 mb-4">
              KONI Kabupaten Kampar
            </p>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              Profil lengkap para pengurus yang berdedikasi memajukan olahraga
              di Kabupaten Kampar
            </p>
          </div>

          {/* Category Tabs */}
          <div className="mb-8 flex justify-center gap-4 flex-wrap">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`rounded-full px-6 py-2.5 font-medium transition ${
                  activeCategory === category.id
                    ? "bg-red-600 text-white shadow-lg"
                    : "bg-white border border-gray-200 text-gray-700 hover:border-red-200 hover:text-red-600"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Bio Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredData.map((person, index) => (
              <div
                key={person.id}
                onClick={() => setSelectedPerson(person)}
                className="group cursor-pointer overflow-hidden transition duration-300 hover:-translate-y-2"
              >
                {/* Card Container */}
                <div className="relative rounded-3xl overflow-hidden shadow-lg">
                  {/* Image Section */}
                  <div className="relative bg-linear-to-br from-gray-50 to-gray-100 h-72">
                    <img
                      src={person.image}
                      alt={person.name}
                      className="w-full h-full object-contain transition duration-300 group-hover:scale-105"
                    />

                    {/* Logo Badge */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10">
                      <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center">
                        <img
                          src="/image/logo.png"
                          alt="KONI Logo"
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Red Info Section */}
                  <div className="relative bg-red-600 pt-8 pb-5 px-4">
                    {/* Decorative watermark bottom left */}
                    <div className="absolute left-2 bottom-2 opacity-15">
                      <img
                        src="/image/logo.png"
                        alt=""
                        className="w-16 h-16 object-contain"
                      />
                    </div>

                    <div className="relative z-10">
                      <p className="text-red-200 text-sm mb-1">
                        {2019 + (index % 5)} - Sekarang
                      </p>
                      <h3 className="text-white text-lg font-bold leading-tight mb-1">
                        {person.name}
                      </h3>
                      <p className="text-red-100 text-sm">{person.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detail Modal */}
      {selectedPerson && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setSelectedPerson(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative h-64 overflow-hidden rounded-t-2xl bg-gray-100">
              <img
                src={selectedPerson.image}
                alt={selectedPerson.name}
                className="h-full w-full object-contain"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
              <button
                onClick={() => setSelectedPerson(null)}
                className="absolute top-4 right-4 rounded-full bg-white/20 backdrop-blur p-2 text-white hover:bg-white/30 transition"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-block rounded-full bg-red-600 px-4 py-1.5 text-sm font-semibold text-white mb-3">
                  {selectedPerson.position}
                </span>
                <h3 className="text-2xl font-bold text-white">
                  {selectedPerson.name}
                </h3>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Contact Info */}
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="flex items-center gap-3 rounded-lg bg-gray-50 p-3">
                  <Mail className="h-5 w-5 text-red-500" />
                  <div>
                    <p className="text-xs text-gray-500">Email</p>
                    <p className="text-sm font-medium text-gray-900">
                      {selectedPerson.email}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-lg bg-gray-50 p-3">
                  <Phone className="h-5 w-5 text-red-500" />
                  <div>
                    <p className="text-xs text-gray-500">Telepon</p>
                    <p className="text-sm font-medium text-gray-900">
                      {selectedPerson.phone}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-lg bg-gray-50 p-3">
                  <MapPin className="h-5 w-5 text-red-500" />
                  <div>
                    <p className="text-xs text-gray-500">Lokasi</p>
                    <p className="text-sm font-medium text-gray-900">
                      {selectedPerson.address}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Tentang</h4>
                <p className="text-gray-600">{selectedPerson.bio}</p>
              </div>

              {/* Experience */}
              <div className="flex items-center gap-3 rounded-lg bg-red-50 p-4">
                <Briefcase className="h-6 w-6 text-red-500" />
                <div>
                  <p className="text-sm text-gray-500">Pengalaman</p>
                  <p className="font-semibold text-gray-900">
                    {selectedPerson.experience}
                  </p>
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Award className="h-5 w-5 text-red-500" />
                  Penghargaan & Sertifikasi
                </h4>
                <ul className="space-y-2">
                  {selectedPerson.achievements.map((achievement, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-gray-600"
                    >
                      <span className="h-2 w-2 rounded-full bg-red-500" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
