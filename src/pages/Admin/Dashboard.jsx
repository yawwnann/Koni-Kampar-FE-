import { Link } from "react-router-dom";
import {
  Trophy,
  Medal,
  Newspaper,
  Calendar,
  Image,
  Building2,
  Users,
  TrendingUp,
  Eye,
  Plus,
} from "lucide-react";

const stats = [
  {
    name: "Cabang Olahraga",
    value: "24",
    change: "+2",
    changeType: "increase",
    icon: Trophy,
    to: "/admin/cabor",
    color: "bg-blue-500",
  },
  {
    name: "Total Atlet",
    value: "156",
    change: "+12",
    changeType: "increase",
    icon: Users,
    to: "/admin/prestasi",
    color: "bg-green-500",
  },
  {
    name: "Prestasi",
    value: "48",
    change: "+5",
    changeType: "increase",
    icon: Medal,
    to: "/admin/prestasi",
    color: "bg-yellow-500",
  },
  {
    name: "Event Aktif",
    value: "8",
    change: "+1",
    changeType: "increase",
    icon: Calendar,
    to: "/admin/event",
    color: "bg-purple-500",
  },
];

const quickActions = [
  {
    name: "Tambah Cabor",
    icon: Trophy,
    to: "/admin/cabor/tambah",
    color: "text-blue-600 bg-blue-50",
  },
  {
    name: "Tambah Berita",
    icon: Newspaper,
    to: "/admin/berita/tambah",
    color: "text-green-600 bg-green-50",
  },
  {
    name: "Tambah Event",
    icon: Calendar,
    to: "/admin/event/tambah",
    color: "text-purple-600 bg-purple-50",
  },
  {
    name: "Upload Galeri",
    icon: Image,
    to: "/admin/galeri/tambah",
    color: "text-pink-600 bg-pink-50",
  },
];

const recentActivities = [
  {
    action: "Menambahkan berita baru",
    item: "Atlet Kampar Raih Emas di PON",
    time: "2 jam lalu",
    type: "berita",
  },
  {
    action: "Memperbarui data cabor",
    item: "Sepak Bola",
    time: "4 jam lalu",
    type: "cabor",
  },
  {
    action: "Upload foto galeri",
    item: "Kejuaraan Renang 2025",
    time: "6 jam lalu",
    type: "galeri",
  },
  {
    action: "Menambahkan event",
    item: "Pekan Olahraga Kabupaten",
    time: "1 hari lalu",
    type: "event",
  },
  {
    action: "Memperbarui data atlet",
    item: "Muhammad Rizki - Badminton",
    time: "2 hari lalu",
    type: "prestasi",
  },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex col sm:row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-500 mt-1">
            Selamat datang di Admin Panel KONI Kampar
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-500">
            {new Date().toLocaleDateString("id-ID", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Link
            key={stat.name}
            to={stat.to}
            className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all group"
          >
            <div className="flex items-start justify-between">
              <div className={`p-3 rounded-xl ${stat.color}`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="flex items-center gap-1 text-green-600 text-sm font-medium">
                <TrendingUp className="w-4 h-4" />
                {stat.change}
              </div>
            </div>
            <div className="mt-4">
              <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-sm text-gray-500 mt-1">{stat.name}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quick Actions */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Aksi Cepat
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {quickActions.map((action) => (
              <Link
                key={action.name}
                to={action.to}
                className={`flex col items-center gap-2 p-4 rounded-xl ${action.color} hover:opacity-80 transition`}
              >
                <action.icon className="w-6 h-6" />
                <span className="text-xs font-medium text-center">
                  {action.name}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Recent Activities */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">
              Aktivitas Terbaru
            </h2>
            <button className="text-sm text-red-600 hover:text-red-700 font-medium">
              Lihat Semua
            </button>
          </div>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-3 rounded-xl hover:bg-gray-50 transition"
              >
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center shrink-0">
                  {activity.type === "berita" && (
                    <Newspaper className="w-5 h-5 text-green-600" />
                  )}
                  {activity.type === "cabor" && (
                    <Trophy className="w-5 h-5 text-blue-600" />
                  )}
                  {activity.type === "galeri" && (
                    <Image className="w-5 h-5 text-pink-600" />
                  )}
                  {activity.type === "event" && (
                    <Calendar className="w-5 h-5 text-purple-600" />
                  )}
                  {activity.type === "prestasi" && (
                    <Medal className="w-5 h-5 text-yellow-600" />
                  )}
                </div>
                <div className="1 min-w-0">
                  <p className="text-sm text-gray-900 font-medium">
                    {activity.action}
                  </p>
                  <p className="text-sm text-gray-500 truncate">
                    {activity.item}
                  </p>
                </div>
                <span className="text-xs text-gray-400 whitespace-nowrap">
                  {activity.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Data Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent News */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">
              Berita Terbaru
            </h2>
            <Link
              to="/admin/berita"
              className="text-sm text-red-600 hover:text-red-700 font-medium flex items-center gap-1"
            >
              <Eye className="w-4 h-4" />
              Lihat Semua
            </Link>
          </div>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition"
              >
                <div className="w-16 h-12 bg-gray-200 rounded-lg shrink-0"></div>
                <div className="1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    Judul Berita Contoh {i}
                  </p>
                  <p className="text-xs text-gray-500">2 Jan 2026</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">
              Event Mendatang
            </h2>
            <Link
              to="/admin/event"
              className="text-sm text-red-600 hover:text-red-700 font-medium flex items-center gap-1"
            >
              <Eye className="w-4 h-4" />
              Lihat Semua
            </Link>
          </div>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition"
              >
                <div className="w-12 h-12 bg-red-50 rounded-xl flex col items-center justify-center shrink-0">
                  <span className="text-lg font-bold text-red-600">
                    {10 + i}
                  </span>
                  <span className="text-xs text-red-500">Jan</span>
                </div>
                <div className="1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    Event Contoh {i}
                  </p>
                  <p className="text-xs text-gray-500">Lokasi Event</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
