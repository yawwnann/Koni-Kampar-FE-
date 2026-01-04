import { ArrowRight } from "lucide-react";

export default function AboutOrganization() {
  return (
    <section className="relative bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl ">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Left - Image */}
          <div className="flex justify-center">
            <div className="relative rounded-3xl shadow-lg overflow-hidden ">
              <img
                src="/image/About/gedung_koni.png"
                alt="Gedung KONI Kampar"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="lg:pl-12">
            <h2 className="mb-6 text-4xl font-extrabold leading-tight text-gray-900">
              KONI <span className="text-red-600">Kampar</span>
            </h2>
            <p className="mb-6 text-lg text-gray-600 leading-relaxed">
              Komite Olahraga Nasional Indonesia (KONI) Kabupaten Kampar adalah
              jantung dari pembinaan dan pengembangan prestasi olahraga di Bumi
              Serambi Mekah. Kami adalah rumah bagi para atlet, pelindung
              perjuangan mereka, dan pendorong mimpi-mimpi mereka untuk
              mengharumkan nama Kampar. Dengan semangat yang tak pernah padam,
              kami berkomitmen untuk menemukan, menempa, dan mengantarkan setiap
              potensi menjadi prestasi yang membangga kan di tingkat regional,
              nasional, hingga internasional.
            </p>

            {/* CTA Button */}
            <a
              href="/anggota"
              className="inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-3 text-white font-medium shadow-lg shadow-red-200 transition hover:bg-red-700"
            >
              Lihat Anggota
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Subtle border */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-gray-200 to-transparent" />
    </section>
  );
}
