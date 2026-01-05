import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Plus,
  Search,
  Filter,
  Trash2,
  Image,
  Video,
  Grid,
  List,
} from "lucide-react";

// Mock data
const mockGallery = [
  {
    id: 1,
    title: "PON XX Papua 2024",
    type: "image",
    date: "2024-01-05",
    thumbnail: "/image/Gallery/image1.png",
  },
  {
    id: 2,
    title: "Kejuaraan Renang",
    type: "image",
    date: "2024-01-03",
    thumbnail: "/image/Gallery/image2.png",
  },
  {
    id: 3,
    title: "Highlight Bulu Tangkis",
    type: "video",
    date: "2024-01-02",
    thumbnail: "/image/Gallery/image3.png",
  },
  {
    id: 4,
    title: "Upacara Pembukaan",
    type: "image",
    date: "2024-01-01",
    thumbnail: "/image/Gallery/image4.png",
  },
  {
    id: 5,
    title: "Final Sepak Bola",
    type: "video",
    date: "2023-12-28",
    thumbnail: "/image/Gallery/image1.png",
  },
  {
    id: 6,
    title: "Penyerahan Medali",
    type: "image",
    date: "2023-12-25",
    thumbnail: "/image/Gallery/image2.png",
  },
];

export default function GalleryList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const [selectedItems, setSelectedItems] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [filterType, setFilterType] = useState("all");

  const filteredData = mockGallery.filter((item) => {
    const matchesSearch = item.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesType = filterType === "all" || item.type === filterType;
    return matchesSearch && matchesType;
  });

  const handleSelectItem = (id) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const handleDeleteSelected = () => {
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    console.log("Deleting:", selectedItems);
    setSelectedItems([]);
    setShowDeleteModal(false);
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Galeri</h1>
          <p className="text-gray-500 mt-1">
            Kelola foto dan video KONI Kampar
          </p>
        </div>
        <Link
          to="/admin/galeri/tambah"
          className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2.5 rounded-xl font-medium hover:bg-red-700 transition"
        >
          <Plus className="w-5 h-5" />
          Upload Media
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-xl">
              <Image className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-blue-700">156</p>
              <p className="text-sm text-blue-600">Total Foto</p>
            </div>
          </div>
        </div>
        <div className="bg-purple-50 rounded-2xl p-4 border border-purple-100">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-100 rounded-xl">
              <Video className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-purple-700">24</p>
              <p className="text-sm text-purple-600">Total Video</p>
            </div>
          </div>
        </div>
        <div className="bg-green-50 rounded-2xl p-4 border border-green-100">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-100 rounded-xl">
              <Grid className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-green-700">12</p>
              <p className="text-sm text-green-600">Album</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="bg-white rounded-2xl p-4 border border-gray-100">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Cari media..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition"
            />
          </div>
          <div className="flex items-center gap-2">
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-700 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition"
            >
              <option value="all">Semua Tipe</option>
              <option value="image">Foto</option>
              <option value="video">Video</option>
            </select>
            <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2.5 ${
                  viewMode === "grid"
                    ? "bg-red-600 text-white"
                    : "text-gray-500 hover:bg-gray-50"
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2.5 ${
                  viewMode === "list"
                    ? "bg-red-600 text-white"
                    : "text-gray-500 hover:bg-gray-50"
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Selected Actions */}
      {selectedItems.length > 0 && (
        <div className="bg-red-50 rounded-2xl p-4 border border-red-100 flex items-center justify-between">
          <span className="text-sm text-red-700">
            {selectedItems.length} item dipilih
          </span>
          <button
            onClick={handleDeleteSelected}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-red-600 text-white text-sm font-medium hover:bg-red-700 transition"
          >
            <Trash2 className="w-4 h-4" />
            Hapus Terpilih
          </button>
        </div>
      )}

      {/* Gallery Grid */}
      {viewMode === "grid" ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredData.map((item) => (
            <div
              key={item.id}
              className={`relative group bg-white rounded-2xl border overflow-hidden transition ${
                selectedItems.includes(item.id)
                  ? "border-red-500 ring-2 ring-red-500/20"
                  : "border-gray-100 hover:border-gray-200"
              }`}
            >
              <div className="aspect-square bg-gray-100 relative">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-black/50 rounded-full flex items-center justify-center">
                      <Video className="w-6 h-6 text-white" />
                    </div>
                  </div>
                )}
                {/* Checkbox Overlay */}
                <div className="absolute top-2 left-2">
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(item.id)}
                    onChange={() => handleSelectItem(item.id)}
                    className="w-5 h-5 rounded border-gray-300 text-red-600 focus:ring-red-500 bg-white"
                  />
                </div>
              </div>
              <div className="p-3">
                <p className="font-medium text-gray-900 text-sm truncate">
                  {item.title}
                </p>
                <p className="text-xs text-gray-500 mt-1">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="px-6 py-4 text-left">
                  <input
                    type="checkbox"
                    checked={
                      selectedItems.length === filteredData.length &&
                      filteredData.length > 0
                    }
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedItems(filteredData.map((item) => item.id));
                      } else {
                        setSelectedItems([]);
                      }
                    }}
                    className="w-4 h-4 rounded border-gray-300 text-red-600 focus:ring-red-500"
                  />
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">
                  Media
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">
                  Tipe
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">
                  Tanggal
                </th>
                <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredData.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4">
                    <input
                      type="checkbox"
                      checked={selectedItems.includes(item.id)}
                      onChange={() => handleSelectItem(item.id)}
                      className="w-4 h-4 rounded border-gray-300 text-red-600 focus:ring-red-500"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-16 h-12 bg-gray-100 rounded-lg overflow-hidden">
                        <img
                          src={item.thumbnail}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="font-medium text-gray-900">
                        {item.title}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium ${
                        item.type === "image"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-purple-100 text-purple-700"
                      }`}
                    >
                      {item.type === "image" ? (
                        <Image className="w-3 h-3" />
                      ) : (
                        <Video className="w-3 h-3" />
                      )}
                      {item.type === "image" ? "Foto" : "Video"}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{item.date}</td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => {
                        setSelectedItems([item.id]);
                        setShowDeleteModal(true);
                      }}
                      className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Delete Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Konfirmasi Hapus
            </h3>
            <p className="text-gray-600 mb-6">
              Apakah Anda yakin ingin menghapus {selectedItems.length} media
              terpilih?
            </p>
            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="px-4 py-2 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50 transition"
              >
                Batal
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 rounded-xl bg-red-600 text-white hover:bg-red-700 transition"
              >
                Hapus
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
