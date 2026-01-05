import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Plus,
  Search,
  Filter,
  Edit,
  Trash2,
  Eye,
  MoreVertical,
  Trophy,
  Dumbbell,
  Waves,
  Footprints,
  Volleyball,
} from "lucide-react";

// Mock data - replace with API call
const mockSportBranches = [
  {
    id: 1,
    name: "Sepak Bola",
    athletes: 25,
    achievements: 12,
    status: "active",
    icon: "Trophy",
    iconColor: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    id: 2,
    name: "Bulu Tangkis",
    athletes: 18,
    achievements: 24,
    status: "active",
    icon: "Dumbbell",
    iconColor: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    id: 3,
    name: "Renang",
    athletes: 15,
    achievements: 18,
    status: "active",
    icon: "Waves",
    iconColor: "text-cyan-600",
    bgColor: "bg-cyan-50",
  },
  {
    id: 4,
    name: "Atletik",
    athletes: 22,
    achievements: 15,
    status: "active",
    icon: "Footprints",
    iconColor: "text-orange-600",
    bgColor: "bg-orange-50",
  },
  {
    id: 5,
    name: "Basket",
    athletes: 12,
    achievements: 8,
    status: "inactive",
    icon: "Volleyball",
    iconColor: "text-purple-600",
    bgColor: "bg-purple-50",
  },
];

// Icon component mapper
const IconComponent = ({ iconName, className }) => {
  const icons = {
    Trophy: Trophy,
    Dumbbell: Dumbbell,
    Waves: Waves,
    Footprints: Footprints,
    Volleyball: Volleyball,
  };
  const Icon = icons[iconName] || Trophy;
  return <Icon className={className} />;
};

export default function SportBranchList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const filteredData = mockSportBranches.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
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
    // Handle delete logic here
    console.log("Deleting:", itemToDelete);
    setShowDeleteModal(false);
    setItemToDelete(null);
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Cabang Olahraga</h1>
          <p className="text-gray-500 mt-1">
            Kelola daftar cabang olahraga KONI Kampar
          </p>
        </div>
        <Link
          to="/admin/cabor/tambah"
          className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2.5 rounded-xl font-medium hover:bg-red-700 transition"
        >
          <Plus className="w-5 h-5" />
          Tambah Cabor
        </Link>
      </div>

      {/* Filters & Search */}
      <div className="bg-white rounded-2xl p-4 border border-gray-100">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Cari cabang olahraga..."
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
                  Cabang Olahraga
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Jumlah Atlet
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Prestasi
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Status
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
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-12 h-12 ${item.bgColor} rounded-xl flex items-center justify-center`}
                      >
                        <IconComponent
                          iconName={item.icon}
                          className={`w-6 h-6 ${item.iconColor}`}
                        />
                      </div>
                      <span className="font-medium text-gray-900">
                        {item.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    {item.athletes} atlet
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    {item.achievements} prestasi
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                        item.status === "active"
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {item.status === "active" ? "Aktif" : "Nonaktif"}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        to={`/admin/cabor/${item.id}`}
                        className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition"
                        title="Lihat Detail"
                      >
                        <Eye className="w-4 h-4" />
                      </Link>
                      <Link
                        to={`/admin/cabor/edit/${item.id}`}
                        className="p-2 text-gray-500 hover:text-yellow-600 hover:bg-yellow-50 rounded-lg transition"
                        title="Edit"
                      >
                        <Edit className="w-4 h-4" />
                      </Link>
                      <button
                        onClick={() => handleDelete(item)}
                        className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition"
                        title="Hapus"
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
            Menampilkan {filteredData.length} dari {mockSportBranches.length}{" "}
            data
          </p>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 rounded-lg border border-gray-200 text-sm text-gray-600 hover:bg-gray-50 disabled:opacity-50">
              Sebelumnya
            </button>
            <button className="px-3 py-1.5 rounded-lg bg-red-600 text-sm text-white">
              1
            </button>
            <button className="px-3 py-1.5 rounded-lg border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">
              2
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
              Apakah Anda yakin ingin menghapus{" "}
              <strong>{itemToDelete?.name}</strong>? Tindakan ini tidak dapat
              dibatalkan.
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
