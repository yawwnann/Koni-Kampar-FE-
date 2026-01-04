import { MapPin, Phone, Mail, Info, Building2, ArrowRight } from "lucide-react";

const venues = [
  {
    name: "Stadion Tuanku Tambusai",
    type: "Stadion Atletik",
    addr: "Jl. Stadion, Bangkinang",
    image: "/image/Gallery/image1.png",
    map: "https://maps.google.com",
  },
  {
    name: "GOR Serbaguna Kampar",
    type: "Gelanggang Olahraga",
    addr: "Jl. Olahraga No. 12",
    image: "/image/Gallery/image2.png",
    map: "https://maps.google.com",
  },
  {
    name: "Kolam Renang Kampar",
    type: "Aquatic Center",
    addr: "Komplek Sport Center",
    image: "/image/Gallery/image3.png",
    map: "https://maps.google.com",
  },
  {
    name: "Lapangan Tenis Kampar",
    type: "Lapangan Tenis",
    addr: "Komplek Sport Center",
    image: "/image/Gallery/image4.png",
    map: "https://maps.google.com",
  },
  {
    name: "Lapangan Bulu Tangkis",
    type: "Gedung Badminton",
    addr: "Jl. Olahraga No. 15",
    image: "/image/Gallery/image1.png",
    map: "https://maps.google.com",
  },
  {
    name: "Gedung Silat Kampar",
    type: "Sasana Pencak Silat",
    addr: "Jl. Pahlawan No. 8",
    image: "/image/Gallery/image2.png",
    map: "https://maps.google.com",
  },
];

const contacts = [
  {
    name: "Administrasi Fasilitas",
    phone: "0812-3456-7890",
    email: "fasilitas@konikampar.id",
  },
  {
    name: "Koordinasi Venue",
    phone: "0813-9876-5432",
    email: "venue@konikampar.id",
  },
  {
    name: "Penjadwalan Event",
    phone: "0812-1111-2222",
    email: "event@konikampar.id",
  },
];

export default function Facilities() {
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
            <h2 className="mb-4 text-4xl font-extrabold text-gray-900">
              Sarana & Prasarana
            </h2>
            <p className="text-3xl font-bold text-red-600 mb-4">
              Fasilitas Olahraga KONI Kampar
            </p>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              Informasi lengkap fasilitas olahraga di bawah naungan KONI Kampar,
              termasuk daftar venue, prosedur peminjaman, dan detail lokasi.
            </p>
          </div>

          {/* Venue Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {venues.map((venue) => (
              <div
                key={venue.name}
                className="group rounded-2xl overflow-hidden bg-white shadow-lg transition duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={venue.image}
                    alt={venue.name}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="rounded-full bg-white/90 backdrop-blur px-3 py-1 text-xs font-semibold text-gray-700">
                      <Building2 className="inline h-3 w-3 mr-1" />
                      {venue.type}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="mb-2 text-lg font-bold text-gray-900 group-hover:text-red-600 transition">
                    {venue.name}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                    <MapPin className="h-4 w-4 text-red-500" />
                    {venue.addr}
                  </div>
                  <a
                    href={venue.map}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-red-600 hover:text-red-700 transition"
                  >
                    Lihat di Peta <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Prosedur Peminjaman */}
          <div className="mt-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900">
                Prosedur Peminjaman Fasilitas
              </h3>
              <p className="mt-2 text-gray-600">
                Ikuti langkah-langkah berikut untuk mengajukan peminjaman
                fasilitas
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {[
                {
                  step: 1,
                  title: "Ajukan Permohonan",
                  desc: "Kirim permohonan melalui email resmi KONI Kampar",
                },
                {
                  step: 2,
                  title: "Lampirkan Dokumen",
                  desc: "Sertakan surat permohonan dan jadwal kegiatan",
                },
                {
                  step: 3,
                  title: "Verifikasi",
                  desc: "Tim melakukan pengecekan ketersediaan",
                },
                {
                  step: 4,
                  title: "Konfirmasi",
                  desc: "Terima konfirmasi persetujuan dan ketentuan",
                },
                {
                  step: 5,
                  title: "Pelaksanaan",
                  desc: "Laksanakan kegiatan sesuai jadwal",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="relative rounded-xl bg-white border border-gray-200 p-5 shadow-sm text-center"
                >
                  <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-white font-bold">
                    {item.step}
                  </div>
                  <h4 className="font-semibold text-gray-900">{item.title}</h4>
                  <p className="mt-1 text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-3 rounded-xl bg-red-50 border border-red-100 p-4 text-sm text-gray-700">
              <Info className="h-5 w-5 text-red-500 shrink-0" />
              <p>
                Prioritas peminjaman diberikan untuk kegiatan resmi olahraga dan
                event pembinaan atlet daerah.
              </p>
            </div>
          </div>

          {/* Kontak Terkait Fasilitas */}
          <div className="mt-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900">
                Kontak Terkait Fasilitas
              </h3>
              <p className="mt-2 text-gray-600">
                Hubungi tim kami untuk informasi lebih lanjut
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {contacts.map((contact) => (
                <div
                  key={contact.name}
                  className="rounded-xl bg-white border border-gray-200 p-6 shadow-sm hover:shadow-md transition"
                >
                  <h4 className="font-semibold text-gray-900 text-lg">
                    {contact.name}
                  </h4>
                  <div className="mt-3 space-y-2">
                    <div className="flex items-center gap-3 text-gray-600">
                      <Phone className="h-4 w-4 text-red-500" />
                      <span>{contact.phone}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <Mail className="h-4 w-4 text-red-500" />
                      <span>{contact.email}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
