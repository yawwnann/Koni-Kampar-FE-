import { Link } from "react-router-dom";
import { Calendar, MapPin, Trophy, Users } from "lucide-react";

// Event data with placeholder images
const events = [
  {
    id: 1,
    name: "PON XXI",
    fullName: "Pekan Olahraga Nasional XXI",
    type: "Nasional",
    location: "Aceh - Sumatera Utara",
    date: "September 2024",
    status: "Selesai",
    description:
      "Pekan Olahraga Nasional ke-21 yang diselenggarakan di Provinsi Aceh dan Sumatera Utara.",
    participants: "6.500+ Atlet",
    sports: "40+ Cabor",
    placeholder: "https://placehold.co/600x400/dc2626/ffffff?text=PON+XXI",
  },
  {
    id: 2,
    name: "PORPROV Riau",
    fullName: "Pekan Olahraga Provinsi Riau",
    type: "Provinsi",
    location: "Pekanbaru, Riau",
    date: "November 2024",
    status: "Selesai",
    description:
      "Pekan Olahraga Provinsi Riau yang mempertemukan atlet-atlet terbaik dari seluruh kabupaten/kota di Riau.",
    participants: "3.000+ Atlet",
    sports: "35+ Cabor",
    placeholder: "https://placehold.co/600x400/b91c1c/ffffff?text=PORPROV+Riau",
  },
  {
    id: 3,
    name: "POPDA Kampar",
    fullName: "Pekan Olahraga Pelajar Daerah Kampar",
    type: "Daerah",
    location: "Bangkinang, Kampar",
    date: "Maret 2025",
    status: "Akan Datang",
    description:
      "Pekan Olahraga Pelajar Daerah yang mempertemukan pelajar-pelajar berbakat dari seluruh kecamatan di Kabupaten Kampar.",
    participants: "1.500+ Pelajar",
    sports: "25+ Cabor",
    placeholder: "https://placehold.co/600x400/ef4444/ffffff?text=POPDA+Kampar",
  },
  {
    id: 4,
    name: "SEA Games 2025",
    fullName: "Southeast Asian Games 2025",
    type: "Internasional",
    location: "Thailand",
    date: "Desember 2025",
    status: "Selesai",
    description:
      "Pesta olahraga negara-negara Asia Tenggara yang diselenggarakan di Thailand.",
    participants: "5.000+ Atlet",
    sports: "50+ Cabor",
    placeholder:
      "https://placehold.co/600x400/991b1b/ffffff?text=SEA+Games+2025",
  },
  {
    id: 5,
    name: "PORKAB Kampar",
    fullName: "Pekan Olahraga Kabupaten Kampar",
    type: "Kabupaten",
    location: "Bangkinang, Kampar",
    date: "Juni 2025",
    status: "Akan Datang",
    description:
      "Pekan Olahraga Kabupaten yang mempertemukan atlet-atlet terbaik dari seluruh kecamatan di Kabupaten Kampar.",
    participants: "2.000+ Atlet",
    sports: "30+ Cabor",
    placeholder:
      "https://placehold.co/600x400/dc2626/ffffff?text=PORKAB+Kampar",
  },
  {
    id: 6,
    name: "PON XXII",
    fullName: "Pekan Olahraga Nasional XXII",
    type: "Nasional",
    location: "Jawa Tengah - DIY",
    date: "2028",
    status: "Akan Datang",
    description:
      "Pekan Olahraga Nasional ke-22 yang akan diselenggarakan di Provinsi Jawa Tengah dan DIY.",
    participants: "7.000+ Atlet",
    sports: "45+ Cabor",
    placeholder: "https://placehold.co/600x400/b91c1c/ffffff?text=PON+XXII",
  },
];

// Event types for filter
const eventTypes = [
  { label: "Semua", value: "all" },
  { label: "Internasional", value: "Internasional" },
  { label: "Nasional", value: "Nasional" },
  { label: "Provinsi", value: "Provinsi" },
  { label: "Kabupaten", value: "Kabupaten" },
  { label: "Daerah", value: "Daerah" },
];

import { useState } from "react";

export default function EventGrid() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredEvents =
    activeFilter === "all"
      ? events
      : events.filter((event) => event.type === activeFilter);

  const getStatusColor = (status) => {
    switch (status) {
      case "Selesai":
        return "bg-green-100 text-green-700";
      case "Akan Datang":
        return "bg-yellow-100 text-yellow-700";
      case "Berlangsung":
        return "bg-blue-100 text-blue-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case "Internasional":
        return "bg-purple-100 text-purple-700";
      case "Nasional":
        return "bg-red-100 text-red-700";
      case "Provinsi":
        return "bg-blue-100 text-blue-700";
      case "Kabupaten":
        return "bg-orange-100 text-orange-700";
      case "Daerah":
        return "bg-teal-100 text-teal-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

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
            Event KONI Kampar –
          </h2>
          <p className="text-3xl font-bold text-red-600 mb-4">
            Agenda Olahraga Terkini
          </p>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            Temukan informasi lengkap mengenai event olahraga mulai dari tingkat
            daerah, provinsi, nasional hingga internasional yang diikuti oleh
            atlet-atlet Kabupaten Kampar.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {eventTypes.map((type) => (
            <button
              key={type.value}
              onClick={() => setActiveFilter(type.value)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                activeFilter === type.value
                  ? "bg-red-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {type.label}
            </button>
          ))}
        </div>

        {/* Event Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredEvents.map((event) => (
            <Link
              to={`/event/${event.id}`}
              key={event.id}
              className="group rounded-2xl overflow-hidden bg-white shadow-lg transition duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.placeholder}
                  alt={event.name}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
                {/* Status Badge */}
                <span
                  className={`absolute top-4 right-4 rounded-full px-3 py-1 text-xs font-semibold ${getStatusColor(
                    event.status
                  )}`}
                >
                  {event.status}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Type & Date */}
                <div className="mb-3 flex items-center gap-3 text-sm">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${getTypeColor(
                      event.type
                    )}`}
                  >
                    {event.type}
                  </span>
                  <span className="flex items-center gap-1 text-gray-500">
                    <Calendar className="h-3.5 w-3.5" />
                    {event.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mb-2 text-xl font-bold text-gray-900 group-hover:text-red-600 transition">
                  {event.name}
                </h3>
                <p className="mb-3 text-sm text-gray-500">{event.fullName}</p>

                {/* Location */}
                <p className="mb-4 flex items-center gap-2 text-sm text-gray-600">
                  <MapPin className="h-4 w-4 text-red-500" />
                  {event.location}
                </p>

                {/* Stats */}
                <div className="flex items-center gap-4 border-t border-gray-100 pt-4">
                  <div className="flex items-center gap-1.5 text-sm text-gray-600">
                    <Users className="h-4 w-4 text-red-500" />
                    {event.participants}
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-gray-600">
                    <Trophy className="h-4 w-4 text-red-500" />
                    {event.sports}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Info Box */}
        <div className="mt-12 rounded-2xl bg-linear-to-r from-red-600 to-red-700 p-8 text-center text-white shadow-xl">
          <Trophy className="mx-auto mb-4 h-12 w-12" />
          <h3 className="mb-2 text-2xl font-bold">
            Dukung Atlet Kampar di Setiap Event!
          </h3>
          <p className="mx-auto max-w-2xl text-red-100">
            Bersama KONI Kampar, kita wujudkan prestasi olahraga yang
            membanggakan. Mari dukung atlet-atlet terbaik Kampar dalam setiap
            kompetisi!
          </p>
        </div>
      </div>
    </section>
  );
}
