import { useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Search, Filter, Edit, Trash2, Eye, Medal } from "lucide-react";

// Mock data
const mockPerformances = [
  {
    id: 1,
    athlete: "Ahmad Rizki",
    sport: "Bulu Tangkis",
    event: "PON XX Papua",
    medal: "gold",
    year: 2024,
  },
  {
    id: 2,
    athlete: "Siti Nurhaliza",
    sport: "Renang",
    event: "Kejurnas Renang",
    medal: "silver",
    year: 2024,
  },
  {
    id: 3,
    athlete: "Budi Santoso",
    sport: "Atletik",
    event: "SEA Games",
    medal: "bronze",
    year: 2023,
  },
  {
    id: 4,
    athlete: "Dewi Lestari",
    sport: "Bulu Tangkis",
    event: "Asian Games",
    medal: "gold",
    year: 2023,
  },
  {
    id: 5,
    athlete: "Rudi Hartono",
    sport: "Sepak Bola",
    event: "Piala Gubernur",
    medal: "gold",
    year: 2024,
  },
];

const medalColors = {
  gold: "bg-yellow-100 text-yellow-700",
  silver: "bg-gray-100 text-gray-700",
  bronze: "bg-orange-100 text-orange-700",
};

const medalLabels = {
  gold: "Emas",
  silver: "Perak",
  bronze: "Perunggu",
};

export default function PerformanceList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const filteredData = mockPerformances.filter(
    (item) =>
      item.athlete.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.sport.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.event.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedItems(filteredData.map((item) => item.id));
    } else {
      setSelectedItems([]);
    }
  };

  const handleSelectItem = (id) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const handleDelete = (item) => {
    setItemToDelete(item);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    console.log("Deleting:", itemToDelete);
    setShowDeleteModal(false);
    setItemToDelete(null);
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Prestasi Atlet</h1>
          <p className="text-gray-500 mt-1">
            Kelola data prestasi atlet KONI Kampar
          </p>
        </div>
        <Link
          to="/admin/prestasi/tambah"
          className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2.5 rounded-xl font-medium hover:bg-red-700 transition"
        >
          <Plus className="w-5 h-5" />
          Tambah Prestasi
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-yellow-50 rounded-2xl p-4 border border-yellow-100">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-yellow-100 rounded-xl">
              <Medal className="w-6 h-6 text-yellow-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-yellow-700">24</p>
              <p className="text-sm text-yellow-600">Medali Emas</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 rounded-2xl p-4 border border-gray-200">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gray-200 rounded-xl">
              <Medal className="w-6 h-6 text-gray-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-700">18</p>
              <p className="text-sm text-gray-600">Medali Perak</p>
            </div>
          </div>
        </div>
        <div className="bg-orange-50 rounded-2xl p-4 border border-orange-100">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-orange-100 rounded-xl">
              <Medal className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-orange-700">12</p>
              <p className="text-sm text-orange-600">Medali Perunggu</p>
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
              placeholder="Cari nama atlet, cabor, atau event..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition"
            />
          </div>
          <button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50 transition">
            <Filter className="w-5 h-5" />
            Filter
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
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
                    onChange={handleSelectAll}
                    className="w-4 h-4 rounded border-gray-300 text-red-600 focus:ring-red-500"
                  />
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Nama Atlet
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Cabang Olahraga
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Event
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Medali
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Tahun
                </th>
                <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">
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
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {item.athlete}
                  </td>
                  <td className="px-6 py-4 text-gray-600">{item.sport}</td>
                  <td className="px-6 py-4 text-gray-600">{item.event}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                        medalColors[item.medal]
                      }`}
                    >
                      {medalLabels[item.medal]}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{item.year}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        to={`/admin/prestasi/${item.id}`}
                        className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition"
                      >
                        <Eye className="w-4 h-4" />
                      </Link>
                      <Link
                        to={`/admin/prestasi/edit/${item.id}`}
                        className="p-2 text-gray-500 hover:text-yellow-600 hover:bg-yellow-50 rounded-lg transition"
                      >
                        <Edit className="w-4 h-4" />
                      </Link>
                      <button
                        onClick={() => handleDelete(item)}
                        className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100">
          <p className="text-sm text-gray-500">
            Menampilkan {filteredData.length} dari {mockPerformances.length}{" "}
            data
          </p>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 rounded-lg border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">
              Sebelumnya
            </button>
            <button className="px-3 py-1.5 rounded-lg bg-red-600 text-sm text-white">
              1
            </button>
            <button className="px-3 py-1.5 rounded-lg border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">
              Selanjutnya
            </button>
          </div>
        </div>
      </div>

      {/* Delete Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Konfirmasi Hapus
            </h3>
            <p className="text-gray-600 mb-6">
              Apakah Anda yakin ingin menghapus data prestasi{" "}
              <strong>{itemToDelete?.athlete}</strong>?
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
