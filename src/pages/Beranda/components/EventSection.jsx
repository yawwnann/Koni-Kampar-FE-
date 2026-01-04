import { ArrowRight } from "lucide-react";

const eventsData = [
  {
    id: 1,
    status: "Akan Datang",
    statusColor: "bg-blue-100 text-blue-600",
    title: "PON Beladiri Kudus 2025",
    date: "11 - 26 October 2025",
    sports: "10 Cabang Olahraga",
  },
  {
    id: 2,
    status: "Telah Selesai",
    statusColor: "bg-red-100 text-red-600",
    title: "KONI – BAYAN Championship 2025",
    date: "30 June 2025 - 12 July 2025",
    sports: "1 Cabang Olahraga",
  },
  {
    id: 3,
    status: "Telah Selesai",
    statusColor: "bg-red-100 text-red-600",
    title: "Jakarta Martial Arts Extravaganza",
    date: "22 April 2025 - 31 May 2025",
    sports: "4 Cabang Olahraga",
  },
];

export default function EventSection() {
  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-16 lg:py-20">
      {/* Decorative blurred background circles */}
      <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-red-500 blur-3xl opacity-10" />
      <div className="absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-red-400 blur-3xl opacity-5" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 flex items-end justify-between">
          <div>
            <span className="inline-block text-sm font-bold text-red-600 tracking-widest mb-2">
              EVENT OLAHRAGA
            </span>
            <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Event - event KONI
            </h2>
          </div>
          <a
            href="/berita"
            className="text-blue-500 hover:text-blue-700 font-medium text-sm transition"
          >
            Lihat semua →
          </a>
        </div>

        {/* Events Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {eventsData.map((event) => (
            <div
              key={event.id}
              className="rounded-2xl bg-white shadow-lg transition duration-300 hover:shadow-xl overflow-hidden"
            >
              {/* Image Placeholder */}
              <div className="relative h-48 w-full overflow-hidden bg-gray-200">
                <div className="flex h-full items-center justify-center">
                  <div className="text-center text-gray-400">
                    <p className="mt-2 text-sm">Event Image</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Status Badge */}
                <span
                  className={`inline-block rounded-full px-3 py-1 text-xs font-semibold mb-3 ${event.statusColor}`}
                >
                  {event.status}
                </span>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {event.title}
                </h3>

                {/* Date */}
                <p className="text-sm text-gray-600 mb-2">{event.date}</p>

                {/* Sports Count */}
                <p className="text-sm text-gray-600 mb-4">{event.sports}</p>

                {/* CTA Button */}
                <a
                  href="#event-detail"
                  className="inline-block text-center w-full rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-600 transition hover:bg-red-200"
                >
                  Lihat Event →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
