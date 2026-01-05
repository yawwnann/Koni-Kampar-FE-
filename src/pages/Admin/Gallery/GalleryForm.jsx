import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ArrowLeft, Upload, X, Image, Video } from "lucide-react";

export default function GalleryForm() {
  const navigate = useNavigate();
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const newFiles = selectedFiles.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
      title: file.name.split(".")[0],
      type: file.type.startsWith("video/") ? "video" : "image",
    }));
    setFiles((prev) => [...prev, ...newFiles]);
  };

  const removeFile = (index) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const updateFileTitle = (index, title) => {
    setFiles((prev) => prev.map((f, i) => (i === index ? { ...f, title } : f)));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      console.log("Uploading files:", files);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      navigate("/admin/galeri");
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
          to="/admin/galeri"
          className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-xl transition"
        >
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Upload Media</h1>
          <p className="text-gray-500 mt-1">Upload foto atau video ke galeri</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Upload Area */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Pilih File
          </h2>

          <label className="flex flex-col items-center justify-center w-full min-h-[200px] border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-red-500 hover:bg-red-50/50 transition">
            <div className="flex flex-col items-center justify-center p-8">
              <Upload className="w-12 h-12 text-gray-400 mb-4" />
              <p className="text-lg font-medium text-gray-700 mb-2">
                <span className="text-red-600">Klik untuk upload</span> atau
                drag and drop
              </p>
              <p className="text-sm text-gray-500">
                Mendukung gambar (PNG, JPG) dan video (MP4, MOV)
              </p>
              <p className="text-xs text-gray-400 mt-2">
                Maksimal 10MB per file
              </p>
            </div>
            <input
              type="file"
              accept="image/*,video/*"
              multiple
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
        </div>

        {/* Selected Files */}
        {files.length > 0 && (
          <div className="bg-white rounded-2xl p-6 border border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              File Terpilih ({files.length})
            </h2>

            <div className="space-y-4">
              {files.map((file, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row items-start gap-4 p-4 bg-gray-50 rounded-xl"
                >
                  {/* Preview */}
                  <div className="w-24 h-24 bg-gray-200 rounded-lg overflow-hidden shrink-0 relative">
                    {file.type === "image" ? (
                      <img
                        src={file.preview}
                        alt={file.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-800">
                        <Video className="w-8 h-8 text-white" />
                      </div>
                    )}
                    <div className="absolute top-1 left-1">
                      <span
                        className={`inline-flex items-center px-1.5 py-0.5 rounded text-xs font-medium ${
                          file.type === "image"
                            ? "bg-blue-500 text-white"
                            : "bg-purple-500 text-white"
                        }`}
                      >
                        {file.type === "image" ? (
                          <Image className="w-3 h-3" />
                        ) : (
                          <Video className="w-3 h-3" />
                        )}
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0 w-full sm:w-auto">
                    <input
                      type="text"
                      value={file.title}
                      onChange={(e) => updateFileTitle(index, e.target.value)}
                      placeholder="Judul media"
                      className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition"
                    />
                    <p className="text-xs text-gray-500 mt-2 break-all">
                      {(file.file.size / 1024 / 1024).toFixed(2)} MB •{" "}
                      {file.file.type}
                    </p>
                  </div>

                  {/* Remove */}
                  <button
                    type="button"
                    onClick={() => removeFile(index)}
                    className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition self-start sm:self-auto"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3">
          <Link
            to="/admin/galeri"
            className="px-6 py-3 rounded-xl border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 transition text-center"
          >
            Batal
          </Link>
          <button
            type="submit"
            disabled={files.length === 0 || loading}
            className="px-6 py-3 rounded-xl bg-red-600 text-white font-medium hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Mengupload...
              </>
            ) : (
              <>
                <Upload className="w-5 h-5" />
                Upload {files.length > 0 ? `(${files.length})` : ""}
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
