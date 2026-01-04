import { Link } from "react-router-dom";

const imageIds = [
  "/image/Gallery/image1.png",
  "/image/Gallery/image2.png",
  "/image/Gallery/image3.png",
  "/image/Gallery/image4.png",
];

// Generate news items with looping images
const generateNewsItems = (count) => {
  const items = [];
  for (let i = 0; i < count; i++) {
    items.push({
      id: i + 1,
      title:
        "Makna Emas SEA Games 2025 Bagi Edgar Xavier, Perpisahan Manis dan Spesial Untuk Calon Buah Hati",
      excerpt:
        "SEA Games 2025 Thailand menjadi perpisahan manis atlet wushu Indonesia Edgar Xavier Marvelo. Medali emas berhasil dipersembahkan Edgar di penampilan terakhirnya di ajang olahraga multievent Asia Tenggara...",
      date: "Jumat, 02 Januari 2026",
      category: "Berita",
      image: imageIds[i % imageIds.length],
    });
  }
  return items;
};

const newsItems = generateNewsItems(12);

export default function NewsGrid() {
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
            Berita KONI Kampar –
          </h2>
          <p className="text-3xl font-bold text-red-600  mb-4">
            Kabar Terbaru Olahraga Kampar.
          </p>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            Temukan berita terkini seputar dunia olahraga nasional, pencapaian
            atlet, agenda penting KONI Kampar, serta opini & liputan eksklusif
            lainnya yang menginspirasi!
          </p>
        </div>

        {/* News Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {newsItems.map((news) => (
            <Link
              to={`/berita/${news.id}`}
              key={news.id}
              className="group rounded-2xl overflow-hidden bg-white shadow-lg transition duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={news.image}
                  alt={news.title}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category & Date */}
                <div className="mb-3 flex items-center gap-3 text-sm">
                  <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-600">
                    {news.category}
                  </span>
                  <span className="text-gray-500">{news.date}</span>
                </div>

                {/* Title */}
                <h3 className="mb-3 text-lg font-bold text-gray-900 line-clamp-3 group-hover:text-red-600 transition">
                  {news.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-gray-600 line-clamp-4">
                  {news.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center gap-2">
          <button className="h-10 w-10 rounded-lg bg-red-600 text-white font-medium">
            1
          </button>
          <button className="h-10 w-10 rounded-lg bg-gray-200 text-gray-700 font-medium hover:bg-gray-300 transition">
            2
          </button>
          <button className="h-10 w-10 rounded-lg bg-gray-200 text-gray-700 font-medium hover:bg-gray-300 transition">
            3
          </button>
          <button className="h-10 w-10 rounded-lg bg-gray-200 text-gray-700 font-medium hover:bg-gray-300 transition">
            →
          </button>
        </div>
      </div>
    </section>
  );
}
