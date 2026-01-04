import { useState } from "react";
import { X } from "lucide-react";

const videoIds = ["VVU_dLx4kLg", "FDOaoGVPTDw", "S8jhkEahjL4", "myN9gkDwQNI"];

const imageIds = [
  "/image/Gallery/image1.png",
  "/image/Gallery/image2.png",
  "/image/Gallery/image3.png",
  "/image/Gallery/image4.png",
];

// Generate gallery items with looping
const generateGalleryItems = (imageCount, videoCount) => {
  const items = [];
  let id = 1;

  // Add images (looping)
  for (let i = 0; i < imageCount; i++) {
    items.push({
      id: id++,
      type: "image",
      title: `Momen Kegiatan ${(i % imageIds.length) + 1}`,
      src: imageIds[i % imageIds.length],
    });
  }

  // Add videos (looping)
  for (let i = 0; i < videoCount; i++) {
    items.push({
      id: id++,
      type: "video",
      title: "PENCOBAAN MARTIAL ARTS GAMES 2023",
      videoId: videoIds[i % videoIds.length],
    });
  }

  return items;
};

const galleryImages = generateGalleryItems(6, 0); // 6 images for initial display
const galleryVideos = generateGalleryItems(0, 6); // 6 videos for initial display
const allGalleryImages = generateGalleryItems(12, 0); // 12 images for modal
const allGalleryVideos = generateGalleryItems(0, 12); // 12 videos for modal

export default function GalleryGrid() {
  const [activeTab, setActiveTab] = useState("gambar");
  const [showModal, setShowModal] = useState(false);
  const [modalPage, setModalPage] = useState(0);

  const filteredItems = activeTab === "gambar" ? galleryImages : galleryVideos;

  const filteredAllItems =
    activeTab === "gambar" ? allGalleryImages : allGalleryVideos;

  //   const itemsPerPage = 6;
  const modalItemsPerPage = 6;
  const totalPages = Math.ceil(filteredAllItems.length / modalItemsPerPage);
  const paginatedModalItems = filteredAllItems.slice(
    modalPage * modalItemsPerPage,
    (modalPage + 1) * modalItemsPerPage
  );

  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-16 lg:py-20">
      {/* Background effect - blurred */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          src="/image/effect.png"
          alt="background effect"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover blur-3xl opacity-20 rotate-45"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-extrabold text-gray-900">
            Galeri Koni Kampar
          </h2>
          <h2 className="font-bold text-4xl  text-red-600">
            Prestasi & Momen bersejarak.
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            <br />
            Lihat momen terbaik dari event olahraga nasional, kemenangan atlet
            Indonesia, dan sorotan kegiatan KONI dalam mendukung prestasi
            olahraga Tanah Air.
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-8 flex gap-4">
          <button
            onClick={() => {
              setActiveTab("gambar");
              setModalPage(0);
            }}
            className={`inline-flex items-center gap-2 rounded-full px-5 py-2 font-medium transition ${
              activeTab === "gambar"
                ? "bg-red-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Gambar
          </button>
          <button
            onClick={() => {
              setActiveTab("vidio");
              setModalPage(0);
            }}
            className={`inline-flex items-center gap-2 rounded-full px-5 py-2 font-medium transition ${
              activeTab === "vidio"
                ? "bg-red-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Vidio
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="mb-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden shadow-lg transition duration-300 hover:shadow-xl"
            >
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={item.title}
                  className="h-64 w-full object-cover transition duration-300 group-hover:scale-105"
                />
              ) : (
                <div className="relative h-64 w-full bg-black">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${item.videoId}`}
                    title={item.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute inset-0"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="flex justify-end">
          <button
            onClick={() => setShowModal(true)}
            className="inline-flex items-center gap-2 rounded-full bg-red-100 px-5 py-2 text-sm font-medium text-red-600 transition hover:bg-red-200"
          >
            Lainya
            <span>→</span>
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white p-8">
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute right-6 top-6 rounded-full bg-gray-200 p-2 hover:bg-gray-300"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Modal Header */}
            <h3 className="mb-6 text-2xl font-bold text-gray-900">
              Semua {activeTab === "gambar" ? "Gambar" : "Video"}
            </h3>

            {/* Modal Grid */}
            <div className="mb-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {paginatedModalItems.map((item) => (
                <div
                  key={item.id}
                  className="group relative rounded-2xl overflow-hidden shadow-lg transition duration-300 hover:shadow-xl"
                >
                  {item.type === "image" ? (
                    <img
                      src={item.src}
                      alt={item.title}
                      className="h-64 w-full object-cover transition duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="relative h-64 w-full bg-black">
                      <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${item.videoId}`}
                        title={item.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="absolute inset-0"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center gap-2">
                {Array.from({ length: totalPages }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setModalPage(idx)}
                    className={`h-10 w-10 rounded-lg font-medium transition ${
                      modalPage === idx
                        ? "bg-red-600 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    {idx + 1}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
