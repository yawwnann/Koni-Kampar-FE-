import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { ArrowLeft, Save } from "lucide-react";

export default function PerformanceForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEdit = Boolean(id);

  const [formData, setFormData] = useState({
    athlete: "",
    sportBranch: "",
    event: "",
    medal: "gold",
    year: new Date().getFullYear(),
    description: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isEdit) {
      setFormData({
        athlete: "Ahmad Rizki",
        sportBranch: "bulu-tangkis",
        event: "PON XX Papua",
        medal: "gold",
        year: 2024,
        description: "Meraih medali emas di nomor tunggal putra.",
      });
    }
  }, [id, isEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      console.log("Form data:", formData);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      navigate("/admin/prestasi");
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center gap-4">
        <Link
          to="/admin/prestasi"
          className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-xl transition"
        >
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            {isEdit ? "Edit Prestasi" : "Tambah Prestasi"}
          </h1>
          <p className="text-gray-500 mt-1">
            {isEdit
              ? "Perbarui data prestasi atlet"
              : "Tambahkan data prestasi atlet baru"}
          </p>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Informasi Prestasi
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Atlet <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="athlete"
                    value={formData.athlete}
                    onChange={handleChange}
                    placeholder="Masukkan nama atlet"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Cabang Olahraga <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="sportBranch"
                      value={formData.sportBranch}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition"
                      required
                    >
                      <option value="">Pilih Cabang Olahraga</option>
                      <option value="sepak-bola">Sepak Bola</option>
                      <option value="bulu-tangkis">Bulu Tangkis</option>
                      <option value="renang">Renang</option>
                      <option value="atletik">Atletik</option>
                      <option value="basket">Basket</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Jenis Medali <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="medal"
                      value={formData.medal}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition"
                      required
                    >
                      <option value="gold">Emas</option>
                      <option value="silver">Perak</option>
                      <option value="bronze">Perunggu</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nama Event <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="event"
                      value={formData.event}
                      onChange={handleChange}
                      placeholder="Contoh: PON XX Papua"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tahun <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      name="year"
                      value={formData.year}
                      onChange={handleChange}
                      min="1990"
                      max={new Date().getFullYear()}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Deskripsi
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Deskripsi prestasi..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition resize-none"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <div className="space-y-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 bg-red-600 text-white px-4 py-3 rounded-xl font-medium hover:bg-red-700 disabled:opacity-50 transition"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Save className="w-5 h-5" />
                      {isEdit ? "Simpan Perubahan" : "Simpan Data"}
                    </>
                  )}
                </button>
                <Link
                  to="/admin/prestasi"
                  className="w-full flex items-center justify-center gap-2 border border-gray-200 text-gray-700 px-4 py-3 rounded-xl font-medium hover:bg-gray-50 transition"
                >
                  Batal
                </Link>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
