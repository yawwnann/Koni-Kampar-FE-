import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Trophy,
  Users,
  Clock,
  Medal,
  Target,
} from "lucide-react";

// Event data
const eventsData = {
  1: {
    id: 1,
    name: "PON XXI",
    fullName: "Pekan Olahraga Nasional XXI",
    type: "Nasional",
    location: "Aceh - Sumatera Utara",
    date: "September 2024",
    status: "Selesai",
    description:
      "Pekan Olahraga Nasional ke-21 yang diselenggarakan di Provinsi Aceh dan Sumatera Utara merupakan pesta olahraga terbesar di Indonesia yang mempertemukan atlet-atlet terbaik dari 38 provinsi.",
    participants: "6.500+ Atlet",
    sports: "40+ Cabor",
    placeholder: "https://placehold.co/800x400/dc2626/ffffff?text=PON+XXI",
    schedule: [
      {
        phase: "Upacara Pembukaan",
        date: "8 September 2024",
        time: "19:00 WIB",
      },
      {
        phase: "Pertandingan Babak Penyisihan",
        date: "9-15 September 2024",
        time: "08:00 - 20:00 WIB",
      },
      {
        phase: "Pertandingan Semifinal",
        date: "16-18 September 2024",
        time: "08:00 - 20:00 WIB",
      },
      {
        phase: "Pertandingan Final",
        date: "19-20 September 2024",
        time: "08:00 - 20:00 WIB",
      },
      {
        phase: "Upacara Penutupan",
        date: "20 September 2024",
        time: "19:00 WIB",
      },
    ],
    achievements: [
      { medal: "Emas", count: 5 },
      { medal: "Perak", count: 8 },
      { medal: "Perunggu", count: 12 },
    ],
  },
  2: {
    id: 2,
    name: "PORPROV Riau",
    fullName: "Pekan Olahraga Provinsi Riau",
    type: "Provinsi",
    location: "Pekanbaru, Riau",
    date: "November 2024",
    status: "Selesai",
    description:
      "Pekan Olahraga Provinsi Riau yang mempertemukan atlet-atlet terbaik dari seluruh kabupaten/kota di Riau untuk berkompetisi dan mengharumkan nama daerah masing-masing.",
    participants: "3.000+ Atlet",
    sports: "35+ Cabor",
    placeholder: "https://placehold.co/800x400/b91c1c/ffffff?text=PORPROV+Riau",
    schedule: [
      {
        phase: "Upacara Pembukaan",
        date: "1 November 2024",
        time: "19:00 WIB",
      },
      {
        phase: "Pertandingan Babak Penyisihan",
        date: "2-8 November 2024",
        time: "08:00 - 18:00 WIB",
      },
      {
        phase: "Pertandingan Semifinal",
        date: "9-10 November 2024",
        time: "08:00 - 18:00 WIB",
      },
      {
        phase: "Pertandingan Final",
        date: "11-12 November 2024",
        time: "08:00 - 18:00 WIB",
      },
      {
        phase: "Upacara Penutupan",
        date: "12 November 2024",
        time: "19:00 WIB",
      },
    ],
    achievements: [
      { medal: "Emas", count: 25 },
      { medal: "Perak", count: 30 },
      { medal: "Perunggu", count: 35 },
    ],
  },
  3: {
    id: 3,
    name: "POPDA Kampar",
    fullName: "Pekan Olahraga Pelajar Daerah Kampar",
    type: "Daerah",
    location: "Bangkinang, Kampar",
    date: "Maret 2025",
    status: "Akan Datang",
    description:
      "Pekan Olahraga Pelajar Daerah yang mempertemukan pelajar-pelajar berbakat dari seluruh kecamatan di Kabupaten Kampar untuk mencari bibit-bibit atlet potensial.",
    participants: "1.500+ Pelajar",
    sports: "25+ Cabor",
    placeholder: "https://placehold.co/800x400/ef4444/ffffff?text=POPDA+Kampar",
    schedule: [
      { phase: "Upacara Pembukaan", date: "1 Maret 2025", time: "08:00 WIB" },
      {
        phase: "Pertandingan Babak Penyisihan",
        date: "2-5 Maret 2025",
        time: "08:00 - 17:00 WIB",
      },
      {
        phase: "Pertandingan Semifinal",
        date: "6 Maret 2025",
        time: "08:00 - 17:00 WIB",
      },
      {
        phase: "Pertandingan Final",
        date: "7 Maret 2025",
        time: "08:00 - 17:00 WIB",
      },
      { phase: "Upacara Penutupan", date: "7 Maret 2025", time: "19:00 WIB" },
    ],
    achievements: [],
  },
  4: {
    id: 4,
    name: "SEA Games 2025",
    fullName: "Southeast Asian Games 2025",
    type: "Internasional",
    location: "Thailand",
    date: "Desember 2025",
    status: "Selesai",
    description:
      "Pesta olahraga negara-negara Asia Tenggara yang diselenggarakan di Thailand, mempertemukan atlet-atlet terbaik dari 11 negara ASEAN.",
    participants: "5.000+ Atlet",
    sports: "50+ Cabor",
    placeholder:
      "https://placehold.co/800x400/991b1b/ffffff?text=SEA+Games+2025",
    schedule: [
      {
        phase: "Upacara Pembukaan",
        date: "9 Desember 2025",
        time: "19:00 WIB",
      },
      {
        phase: "Pertandingan",
        date: "10-20 Desember 2025",
        time: "08:00 - 22:00 WIB",
      },
      {
        phase: "Upacara Penutupan",
        date: "20 Desember 2025",
        time: "19:00 WIB",
      },
    ],
    achievements: [
      { medal: "Emas", count: 2 },
      { medal: "Perak", count: 1 },
      { medal: "Perunggu", count: 3 },
    ],
  },
  5: {
    id: 5,
    name: "PORKAB Kampar",
    fullName: "Pekan Olahraga Kabupaten Kampar",
    type: "Kabupaten",
    location: "Bangkinang, Kampar",
    date: "Juni 2025",
    status: "Akan Datang",
    description:
      "Pekan Olahraga Kabupaten yang mempertemukan atlet-atlet terbaik dari seluruh kecamatan di Kabupaten Kampar untuk berkompetisi dan mempersiapkan diri menuju PORPROV.",
    participants: "2.000+ Atlet",
    sports: "30+ Cabor",
    placeholder:
      "https://placehold.co/800x400/dc2626/ffffff?text=PORKAB+Kampar",
    schedule: [
      { phase: "Upacara Pembukaan", date: "1 Juni 2025", time: "19:00 WIB" },
      {
        phase: "Pertandingan Babak Penyisihan",
        date: "2-7 Juni 2025",
        time: "08:00 - 17:00 WIB",
      },
      {
        phase: "Pertandingan Semifinal",
        date: "8-9 Juni 2025",
        time: "08:00 - 17:00 WIB",
      },
      {
        phase: "Pertandingan Final",
        date: "10 Juni 2025",
        time: "08:00 - 17:00 WIB",
      },
      { phase: "Upacara Penutupan", date: "10 Juni 2025", time: "19:00 WIB" },
    ],
    achievements: [],
  },
  6: {
    id: 6,
    name: "PON XXII",
    fullName: "Pekan Olahraga Nasional XXII",
    type: "Nasional",
    location: "Jawa Tengah - DIY",
    date: "2028",
    status: "Akan Datang",
    description:
      "Pekan Olahraga Nasional ke-22 yang akan diselenggarakan di Provinsi Jawa Tengah dan DIY, menjadi ajang pembuktian atlet-atlet terbaik Indonesia.",
    participants: "7.000+ Atlet",
    sports: "45+ Cabor",
    placeholder: "https://placehold.co/800x400/b91c1c/ffffff?text=PON+XXII",
    schedule: [
      { phase: "Upacara Pembukaan", date: "TBA", time: "TBA" },
      { phase: "Pertandingan", date: "TBA", time: "TBA" },
      { phase: "Upacara Penutupan", date: "TBA", time: "TBA" },
    ],
    achievements: [],
  },
};

// Other events for sidebar
const otherEvents = [
  {
    id: 2,
    name: "PORPROV Riau",
    date: "November 2024",
    placeholder: "https://placehold.co/100x100/b91c1c/ffffff?text=PORPROV",
  },
  {
    id: 3,
    name: "POPDA Kampar",
    date: "Maret 2025",
    placeholder: "https://placehold.co/100x100/ef4444/ffffff?text=POPDA",
  },
  {
    id: 5,
    name: "PORKAB Kampar",
    date: "Juni 2025",
    placeholder: "https://placehold.co/100x100/dc2626/ffffff?text=PORKAB",
  },
];

export default function EventDetail() {
  const { id } = useParams();
  const event = eventsData[id] || eventsData[1];

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

  const getMedalColor = (medal) => {
    switch (medal) {
      case "Emas":
        return "bg-yellow-400 text-yellow-900";
      case "Perak":
        return "bg-gray-300 text-gray-800";
      case "Perunggu":
        return "bg-orange-400 text-orange-900";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <main className="relative overflow-hidden bg-white py-12 sm:py-16 lg:py-20">
      {/* Background effect - blurred */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          src="/image/effect.png"
          alt="background effect"
          className="absolute top-1/2 right-0 -translate-y-1/2 w-full h-full object-cover blur-3xl opacity-10 -rotate-45"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          to="/event"
          className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 mb-8 transition"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Kembali ke Event</span>
        </Link>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header Image */}
            <div className="mb-8 rounded-2xl overflow-hidden shadow-lg">
              <img
                src={event.placeholder}
                alt={event.name}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Event Info */}
            <div className="mb-8">
              {/* Badges */}
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <span
                  className={`rounded-full px-4 py-1.5 text-sm font-semibold ${getTypeColor(
                    event.type
                  )}`}
                >
                  {event.type}
                </span>
                <span
                  className={`rounded-full px-4 py-1.5 text-sm font-semibold ${getStatusColor(
                    event.status
                  )}`}
                >
                  {event.status}
                </span>
              </div>

              {/* Title */}
              <h1 className="mb-2 text-4xl font-extrabold text-gray-900">
                {event.name}
              </h1>
              <p className="mb-4 text-xl text-gray-600">{event.fullName}</p>

              {/* Meta Info */}
              <div className="mb-6 flex flex-wrap gap-6 text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-red-500" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-red-500" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-red-500" />
                  <span>{event.participants}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-red-500" />
                  <span>{event.sports}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-lg text-gray-700 leading-relaxed">
                {event.description}
              </p>
            </div>

            {/* Schedule Section */}
            <div className="mb-8">
              <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-gray-900">
                <Clock className="h-6 w-6 text-red-500" />
                Jadwal Event
              </h2>
              <div className="space-y-4">
                {event.schedule.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-xl bg-gray-50 p-4 border-l-4 border-red-500"
                  >
                    <h3 className="font-bold text-gray-900">{item.phase}</h3>
                    <p className="text-sm text-gray-600">
                      {item.date} • {item.time}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements Section */}
            {event.achievements.length > 0 && (
              <div className="mb-8">
                <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-gray-900">
                  <Medal className="h-6 w-6 text-red-500" />
                  Prestasi KONI Kampar
                </h2>
                <div className="grid gap-4 sm:grid-cols-3">
                  {event.achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className={`rounded-xl p-6 text-center ${getMedalColor(
                        achievement.medal
                      )}`}
                    >
                      <Trophy className="mx-auto mb-2 h-8 w-8" />
                      <p className="text-3xl font-extrabold">
                        {achievement.count}
                      </p>
                      <p className="font-semibold">
                        Medali {achievement.medal}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Event Lainnya */}
            <div className="rounded-2xl bg-gray-50 p-6 shadow-lg">
              <h3 className="mb-6 flex items-center gap-2 text-xl font-bold text-gray-900">
                <Target className="h-5 w-5 text-red-500" />
                Event Lainnya
              </h3>
              <div className="space-y-4">
                {otherEvents
                  .filter((e) => e.id !== parseInt(id))
                  .map((item) => (
                    <Link
                      to={`/event/${item.id}`}
                      key={item.id}
                      className="flex items-center gap-4 rounded-xl bg-white p-3 shadow transition hover:shadow-md"
                    >
                      <img
                        src={item.placeholder}
                        alt={item.name}
                        className="h-16 w-16 rounded-lg object-cover"
                      />
                      <div>
                        <h4 className="font-bold text-gray-900">{item.name}</h4>
                        <p className="text-sm text-gray-500">{item.date}</p>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>

            {/* CTA Box */}
            <div className="mt-6 rounded-2xl bg-linear-to-br from-red-600 to-red-700 p-6 text-white shadow-lg">
              <Trophy className="mb-4 h-10 w-10" />
              <h3 className="mb-2 text-lg font-bold">Ingin Berkontribusi?</h3>
              <p className="mb-4 text-sm text-red-100">
                Dukung atlet Kampar dengan menjadi relawan atau sponsor event
                olahraga.
              </p>
              <Link
                to="/kontak"
                className="inline-block rounded-full bg-white px-4 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-50"
              >
                Hubungi Kami
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
