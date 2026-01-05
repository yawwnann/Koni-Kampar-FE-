import { Building2 } from "lucide-react";

// Daftar gambar fasilitas yang tersedia
const availableImages = [
  {
    name: "Stadion",
    path: "/image/Fasilitas/Stadion.png",
    description: "Stadion Utama",
  },
  {
    name: "GOR",
    path: "/image/Fasilitas/GOR.png",
    description: "Gedung Olahraga",
  },
  {
    name: "Kolam Berenang",
    path: "/image/Fasilitas/Kolam_Berenang.png",
    description: "Kolam Renang",
  },
  {
    name: "Lapangan Bulu Tangkis",
    path: "/image/Fasilitas/Lapangan_Bulu_Tangkis.png",
    description: "Lapangan Bulu Tangkis",
  },
  {
    name: "Lapangan Tenis",
    path: "/image/Fasilitas/Lapangan_Tenis.png",
    description: "Lapangan Tenis",
  },
  {
    name: "Gedung Silat",
    path: "/image/Fasilitas/Gedung_silat.png",
    description: "Gedung Pencak Silat",
  },
];

export default function FacilitiesImageReference() {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 mt-6">
      <div className="flex items-center gap-2 mb-4">
        <Building2 className="w-5 h-5 text-gray-700" />
        <h3 className="text-lg font-semibold text-gray-900">Gambar Tersedia</h3>
      </div>
      <p className="text-sm text-gray-600 mb-4">
        Referensi gambar fasilitas yang dapat digunakan
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {availableImages.map((image) => (
          <div
            key={image.name}
            className="group relative rounded-xl overflow-hidden border border-gray-200 hover:border-red-500 transition cursor-pointer"
          >
            <div className="aspect-video w-full overflow-hidden bg-gray-100">
              <img
                src={image.path}
                alt={image.name}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
            <div className="p-2 bg-white">
              <p className="text-xs font-medium text-gray-700 truncate">
                {image.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 p-3 bg-blue-50 border border-blue-100 rounded-xl">
        <p className="text-xs text-blue-700">
          💡 <strong>Tips:</strong> Pilih gambar yang sesuai dengan jenis
          fasilitas atau upload gambar baru
        </p>
      </div>
    </div>
  );
}
