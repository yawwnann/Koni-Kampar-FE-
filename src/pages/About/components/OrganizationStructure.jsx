const teamMembers = [
  {
    id: 1,
    name: "Letjen TNI (Purn) Marciano Norman",
    position: "Ketua Umum KONI Pusat",
    year: "2019 - Presiden",
    image: "/image/About/Anggota1.png",
  },
  {
    id: 2,
    name: "Mayjen TNI (Purn) Suwarmo",
    position: "Wakil Ketua Umum KONI Pusat",
    year: "2019 - Presiden",
    image: "/image/About/Anggota2.png",
  },
  {
    id: 3,
    name: "Mayjen TNI (Purn) Soedarmo",
    position: "Wakil Ketua Umum KONI Kampar",
    year: "2019 - Presiden",
    image: "/image/About/Anggota3.png",
  },
  {
    id: 4,
    name: "Mayjen TNI (Purn) Andris T.U Soetamo",
    position: "Wakil Ketua Umum KONI Pusat",
    year: "2019 - Presiden",
    image: "/image/About/Anggota1.png",
  },
  {
    id: 5,
    name: "Vivin Cahyani",
    position: "Wakil Ketua Umum KONI Pusat",
    year: "2019 - Presiden",
    image: "/image/About/Anggota2.png",
  },
  {
    id: 6,
    name: "Drs. Tursandi Alwi, SH, MM",
    position: "Wakil Ketua Umum KONI Pusat",
    year: "2019 - Presiden",
    image: "/image/About/Anggota3.png",
  },
  {
    id: 7,
    name: "Vivin Cahyani",
    position: "Wakil Ketua Umum KONI Pusat",
    year: "2019 - Presiden",
    image: "/image/About/Anggota2.png",
  },
  {
    id: 8,
    name: "Drs. Tursandi Alwi, SH, MM",
    position: "Wakil Ketua Umum KONI Pusat",
    year: "2019 - Presiden",
    image: "/image/About/Anggota3.png",
  },
];

export default function OrganizationStructure() {
  return (
    <section className="relative overflow-hidden py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <span className="inline-block text-sm font-bold text-red-600 tracking-widest mb-2">
            DIBALIK KONI
          </span>
          <h2 className="text-4xl font-extrabold text-gray-900">
            Struktur Organisasi <span className="text-red-600">KONI</span>
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group rounded-3xl overflow-hidden transition duration-300 "
            >
              {/* Image container */}
              <div className="relative h-full overflow-hidden ">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover transition duration-300 "
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
