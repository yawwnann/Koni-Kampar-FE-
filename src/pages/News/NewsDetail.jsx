import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Tag } from "lucide-react";

const imageIds = [
  "/image/Gallery/image1.png",
  "/image/Gallery/image2.png",
  "/image/Gallery/image3.png",
  "/image/Gallery/image4.png",
];

// Generate news data
const generateNewsData = (id) => {
  return {
    id: id,
    title:
      "Makna Emas SEA Games 2025 Bagi Edgar Xavier, Perpisahan Manis dan Spesial Untuk Calon Buah Hati",
    date: "Jumat, 02 Januari 2026",
    category: "Berita",
    image: imageIds[(id - 1) % imageIds.length],
    content: `
      <p>SEA Games 2025 Thailand menjadi perpisahan manis atlet wushu Indonesia Edgar Xavier Marvelo. Medali emas berhasil dipersembahkan Edgar di penampilan terakhirnya di ajang olahraga multievent Asia Tenggara.</p>
      
      <p>Raihan emas tersebut membuat Edgar menjadi salah satu atlet wushu tersukses Indonesia di SEA Games. Sejak debut di SEA Games 2017 Kuala Lumpur, Edgar selalu membawa pulang medali emas.</p>
      
      <h3>Perjalanan Karir yang Gemilang</h3>
      
      <p>Edgar Xavier memulai karirnya di dunia wushu sejak usia muda. Dengan dedikasi dan kerja keras yang luar biasa, ia berhasil mengukir prestasi demi prestasi di kancah nasional dan internasional.</p>
      
      <p>Keberhasilannya di SEA Games 2025 ini bukan hanya menjadi puncak karir, tetapi juga menjadi hadiah spesial untuk keluarga kecilnya. Edgar mengumumkan bahwa ia dan istrinya sedang menantikan kehadiran buah hati pertama mereka.</p>
      
      <h3>Dukungan KONI dan Pemerintah</h3>
      
      <p>Pencapaian Edgar tidak lepas dari dukungan penuh KONI dan pemerintah Indonesia. Fasilitas latihan yang memadai, pelatih berkualitas, dan program pembinaan yang berkelanjutan menjadi kunci sukses atlet-atlet Indonesia di kancah internasional.</p>
      
      <p>KONI Kampar turut bangga dengan prestasi Edgar dan berharap dapat melahirkan lebih banyak atlet berprestasi dari Kabupaten Kampar untuk mengharumkan nama Indonesia di dunia olahraga.</p>
    `,
  };
};

// Related news
const relatedNews = [
  {
    id: 2,
    title: "Atlet Kampar Raih Medali di Kejuaraan Nasional",
    date: "Jumat, 01 Januari 2026",
    image: imageIds[1],
  },
  {
    id: 3,
    title: "KONI Kampar Gelar Pelatihan Atlet Muda",
    date: "Kamis, 31 Desember 2025",
    image: imageIds[2],
  },
  {
    id: 4,
    title: "Persiapan PON 2026: Kampar Siap Bersaing",
    date: "Rabu, 30 Desember 2025",
    image: imageIds[3],
  },
];

export default function NewsDetail() {
  const { id } = useParams();
  const news = generateNewsData(parseInt(id) || 1);

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

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          to="/berita"
          className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 mb-8 transition"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Kembali ke Berita</span>
        </Link>

        {/* Article Header */}
        <article>
          {/* Category & Date */}
          <div className="mb-4 flex items-center gap-4 text-sm">
            <span className="inline-flex items-center gap-1 rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-600">
              <Tag className="h-3 w-3" />
              {news.category}
            </span>
            <span className="inline-flex items-center gap-1 text-gray-500">
              <Calendar className="h-4 w-4" />
              {news.date}
            </span>
          </div>

          {/* Title */}
          <h1 className="mb-6 text-3xl font-extrabold text-gray-900 sm:text-4xl leading-tight">
            {news.title}
          </h1>

          {/* Featured Image */}
          <div className="mb-8 rounded-2xl overflow-hidden shadow-lg">
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Content */}
          <div
            className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: news.content }}
          />
        </article>

        {/* Share Section */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          <h3 className="mb-4 text-lg font-bold text-gray-900">
            Bagikan Artikel
          </h3>
          <div className="flex gap-3">
            <button className="rounded-full bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700 transition">
              Facebook
            </button>
            <button className="rounded-full bg-sky-500 px-4 py-2 text-sm text-white hover:bg-sky-600 transition">
              Twitter
            </button>
            <button className="rounded-full bg-green-500 px-4 py-2 text-sm text-white hover:bg-green-600 transition">
              WhatsApp
            </button>
          </div>
        </div>

        {/* Related News */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          <h3 className="mb-6 text-2xl font-bold text-gray-900">
            Berita Terkait
          </h3>
          <div className="grid gap-6 sm:grid-cols-3">
            {relatedNews.map((item) => (
              <Link
                to={`/berita/${item.id}`}
                key={item.id}
                className="group rounded-xl overflow-hidden bg-gray-50 shadow-md hover:shadow-lg transition"
              >
                <div className="h-40 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <p className="text-xs text-gray-500 mb-2">{item.date}</p>
                  <h4 className="text-sm font-bold text-gray-900 line-clamp-2 group-hover:text-red-600 transition">
                    {item.title}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
