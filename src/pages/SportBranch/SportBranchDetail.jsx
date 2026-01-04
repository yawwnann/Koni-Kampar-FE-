import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  Users,
  Trophy,
  Medal,
  Building2,
  UserCircle,
  Calendar,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import {
  GiSoccerBall,
  GiBasketballBall,
  GiVolleyballBall,
  GiShuttlecock,
  GiBoxingGlove,
  GiRunningShoe,
  GiSwimfins,
  GiArcheryTarget,
  GiTennisRacket,
  GiKimono,
} from "react-icons/gi";
import { BiCycling } from "react-icons/bi";
import { MdSportsMartialArts } from "react-icons/md";

// Full sports data with details
const sportsDetailData = {
  1: {
    id: 1,
    name: "Sepak Bola",
    icon: GiSoccerBall,
    category: "Permainan",
    color: "bg-green-500",
    description:
      "Sepak bola adalah olahraga tim yang paling populer di dunia. Di Kabupaten Kampar, sepak bola menjadi salah satu cabang olahraga unggulan dengan pembinaan atlet yang intensif.",
    organization: {
      name: "PSSI Kabupaten Kampar",
      founded: "1985",
      address: "Jl. Olahraga No. 10, Bangkinang",
      phone: "(0762) 123456",
      email: "pssi.kampar@example.com",
    },
    management: [
      {
        position: "Ketua Umum",
        name: "H. Ahmad Yani",
        photo: "https://placehold.co/100x100/22c55e/ffffff?text=AY",
      },
      {
        position: "Sekretaris",
        name: "Drs. Bambang Sutrisno",
        photo: "https://placehold.co/100x100/22c55e/ffffff?text=BS",
      },
      {
        position: "Bendahara",
        name: "Ir. Siti Aminah",
        photo: "https://placehold.co/100x100/22c55e/ffffff?text=SA",
      },
      {
        position: "Pelatih Kepala",
        name: "Coach Rudi Hartono",
        photo: "https://placehold.co/100x100/22c55e/ffffff?text=RH",
      },
    ],
    achievements: [
      {
        event: "PORPROV Riau 2024",
        medal: "Emas",
        athlete: "Tim Sepak Bola Kampar",
      },
      {
        event: "Piala Gubernur 2023",
        medal: "Perak",
        athlete: "Tim Sepak Bola Kampar",
      },
      {
        event: "Liga Nusantara 2023",
        medal: "Perunggu",
        athlete: "PS Kampar FC",
      },
      {
        event: "POPDA Riau 2023",
        medal: "Emas",
        athlete: "Tim Pelajar Kampar",
      },
    ],
    athletes: 45,
    totalAchievements: 12,
  },
  2: {
    id: 2,
    name: "Bola Basket",
    icon: GiBasketballBall,
    category: "Permainan",
    color: "bg-orange-500",
    description:
      "Bola basket adalah olahraga berkelompok yang dimainkan di lapangan tertutup. KONI Kampar aktif membina atlet basket dari usia dini hingga senior.",
    organization: {
      name: "Perbasi Kabupaten Kampar",
      founded: "1990",
      address: "Jl. Sudirman No. 25, Bangkinang",
      phone: "(0762) 234567",
      email: "perbasi.kampar@example.com",
    },
    management: [
      {
        position: "Ketua Umum",
        name: "Dr. Hendra Wijaya",
        photo: "https://placehold.co/100x100/f97316/ffffff?text=HW",
      },
      {
        position: "Sekretaris",
        name: "M. Rizki Pratama",
        photo: "https://placehold.co/100x100/f97316/ffffff?text=RP",
      },
      {
        position: "Bendahara",
        name: "Dewi Safitri, S.E.",
        photo: "https://placehold.co/100x100/f97316/ffffff?text=DS",
      },
      {
        position: "Pelatih Kepala",
        name: "Coach Andre Setiawan",
        photo: "https://placehold.co/100x100/f97316/ffffff?text=AS",
      },
    ],
    achievements: [
      {
        event: "PORPROV Riau 2024",
        medal: "Perak",
        athlete: "Tim Basket Putra",
      },
      { event: "DBL Riau 2023", medal: "Emas", athlete: "SMA N 1 Bangkinang" },
      {
        event: "Kejurda Basket 2023",
        medal: "Emas",
        athlete: "Tim Basket Putri",
      },
    ],
    athletes: 24,
    totalAchievements: 8,
  },
  3: {
    id: 3,
    name: "Bola Voli",
    icon: GiVolleyballBall,
    category: "Permainan",
    color: "bg-yellow-500",
    description:
      "Bola voli adalah olahraga permainan yang dimainkan oleh dua tim. Kampar memiliki tradisi kuat dalam pembinaan voli indoor dan voli pantai.",
    organization: {
      name: "PBVSI Kabupaten Kampar",
      founded: "1988",
      address: "Jl. Ahmad Yani No. 15, Bangkinang",
      phone: "(0762) 345678",
      email: "pbvsi.kampar@example.com",
    },
    management: [
      {
        position: "Ketua Umum",
        name: "H. Zainal Abidin",
        photo: "https://placehold.co/100x100/eab308/ffffff?text=ZA",
      },
      {
        position: "Sekretaris",
        name: "Andi Firmansyah",
        photo: "https://placehold.co/100x100/eab308/ffffff?text=AF",
      },
      {
        position: "Bendahara",
        name: "Hj. Nurhasanah",
        photo: "https://placehold.co/100x100/eab308/ffffff?text=NH",
      },
      {
        position: "Pelatih Kepala",
        name: "Coach Supriadi",
        photo: "https://placehold.co/100x100/eab308/ffffff?text=SP",
      },
    ],
    achievements: [
      { event: "PORPROV Riau 2024", medal: "Emas", athlete: "Tim Voli Putra" },
      { event: "PORPROV Riau 2024", medal: "Emas", athlete: "Tim Voli Putri" },
      { event: "Proliga Junior 2023", medal: "Perunggu", athlete: "Kampar VC" },
      {
        event: "Kejurnas Voli Pantai 2023",
        medal: "Perak",
        athlete: "Duo Kampar Beach",
      },
    ],
    athletes: 30,
    totalAchievements: 15,
  },
  4: {
    id: 4,
    name: "Bulu Tangkis",
    icon: GiShuttlecock,
    category: "Raket",
    color: "bg-red-500",
    description:
      "Bulu tangkis adalah olahraga raket unggulan Indonesia. Kampar memiliki program pembinaan yang menghasilkan banyak atlet berprestasi.",
    organization: {
      name: "PBSI Kabupaten Kampar",
      founded: "1982",
      address: "GOR Bangkinang, Jl. Diponegoro No. 5",
      phone: "(0762) 456789",
      email: "pbsi.kampar@example.com",
    },
    management: [
      {
        position: "Ketua Umum",
        name: "Ir. Syamsul Bahri",
        photo: "https://placehold.co/100x100/ef4444/ffffff?text=SB",
      },
      {
        position: "Sekretaris",
        name: "Drs. Agus Salim",
        photo: "https://placehold.co/100x100/ef4444/ffffff?text=AS",
      },
      {
        position: "Bendahara",
        name: "Hj. Ratna Dewi",
        photo: "https://placehold.co/100x100/ef4444/ffffff?text=RD",
      },
      {
        position: "Pelatih Kepala",
        name: "Coach Liem Swie King Jr.",
        photo: "https://placehold.co/100x100/ef4444/ffffff?text=LK",
      },
    ],
    achievements: [
      {
        event: "PORPROV Riau 2024",
        medal: "Emas",
        athlete: "Tunggal Putra - Rizky",
      },
      { event: "PORPROV Riau 2024", medal: "Emas", athlete: "Ganda Putra" },
      {
        event: "Sirnas Badminton 2023",
        medal: "Emas",
        athlete: "Tunggal Putri - Aulia",
      },
      { event: "POPNAS 2023", medal: "Perak", athlete: "Ganda Campuran" },
      {
        event: "Kejurnas Junior 2023",
        medal: "Perunggu",
        athlete: "Tunggal Putra U-17",
      },
    ],
    athletes: 20,
    totalAchievements: 25,
  },
  5: {
    id: 5,
    name: "Tinju",
    icon: GiBoxingGlove,
    category: "Bela Diri",
    color: "bg-purple-500",
    description:
      "Tinju adalah olahraga bela diri yang menggunakan pukulan tangan. Kampar menghasilkan petinju-petinju tangguh di berbagai kelas.",
    organization: {
      name: "Pertina Kabupaten Kampar",
      founded: "1992",
      address: "Sasana Tinju Kampar, Jl. Hangtuah No. 8",
      phone: "(0762) 567890",
      email: "pertina.kampar@example.com",
    },
    management: [
      {
        position: "Ketua Umum",
        name: "Brigjen (Purn) Sukarno",
        photo: "https://placehold.co/100x100/a855f7/ffffff?text=SK",
      },
      {
        position: "Sekretaris",
        name: "Mayor (Purn) Budi Santoso",
        photo: "https://placehold.co/100x100/a855f7/ffffff?text=BS",
      },
      {
        position: "Bendahara",
        name: "Kapten (Purn) Slamet",
        photo: "https://placehold.co/100x100/a855f7/ffffff?text=SL",
      },
      {
        position: "Pelatih Kepala",
        name: "Coach Muhammad Ali Jr.",
        photo: "https://placehold.co/100x100/a855f7/ffffff?text=MA",
      },
    ],
    achievements: [
      {
        event: "PON XXI 2024",
        medal: "Perunggu",
        athlete: "Kelas Welter - Joko",
      },
      {
        event: "PORPROV Riau 2024",
        medal: "Emas",
        athlete: "Kelas Ringan - Dedi",
      },
      {
        event: "Kejurnas Tinju 2023",
        medal: "Perak",
        athlete: "Kelas Berat - Roni",
      },
    ],
    athletes: 15,
    totalAchievements: 10,
  },
  6: {
    id: 6,
    name: "Atletik",
    icon: GiRunningShoe,
    category: "Individu",
    color: "bg-blue-500",
    description:
      "Atletik adalah kumpulan cabang olahraga yang meliputi lari, lompat, dan lempar. Kampar memiliki atlet-atlet potensial di berbagai nomor.",
    organization: {
      name: "PASI Kabupaten Kampar",
      founded: "1980",
      address: "Stadion Utama Kampar, Jl. Stadion No. 1",
      phone: "(0762) 678901",
      email: "pasi.kampar@example.com",
    },
    management: [
      {
        position: "Ketua Umum",
        name: "Prof. Dr. Rusdi Hamid",
        photo: "https://placehold.co/100x100/3b82f6/ffffff?text=RH",
      },
      {
        position: "Sekretaris",
        name: "Drs. Marwan Lubis",
        photo: "https://placehold.co/100x100/3b82f6/ffffff?text=ML",
      },
      {
        position: "Bendahara",
        name: "Ir. Fatimah Zahra",
        photo: "https://placehold.co/100x100/3b82f6/ffffff?text=FZ",
      },
      {
        position: "Pelatih Kepala",
        name: "Coach Suryo Agung",
        photo: "https://placehold.co/100x100/3b82f6/ffffff?text=SA",
      },
    ],
    achievements: [
      { event: "PON XXI 2024", medal: "Perak", athlete: "Lari 100m - Fajar" },
      {
        event: "PORPROV Riau 2024",
        medal: "Emas",
        athlete: "Lompat Jauh - Santi",
      },
      {
        event: "PORPROV Riau 2024",
        medal: "Emas",
        athlete: "Lempar Lembing - Budi",
      },
      {
        event: "Kejurnas Atletik 2023",
        medal: "Perunggu",
        athlete: "Lari 400m - Andi",
      },
    ],
    athletes: 35,
    totalAchievements: 20,
  },
  7: {
    id: 7,
    name: "Renang",
    icon: GiSwimfins,
    category: "Air",
    color: "bg-cyan-500",
    description:
      "Renang adalah olahraga yang dilakukan di dalam air. Kampar terus mengembangkan fasilitas dan pembinaan atlet renang.",
    organization: {
      name: "PRSI Kabupaten Kampar",
      founded: "1995",
      address: "Kolam Renang Tirta Kampar, Jl. Renang No. 3",
      phone: "(0762) 789012",
      email: "prsi.kampar@example.com",
    },
    management: [
      {
        position: "Ketua Umum",
        name: "Dr. Hendra Gunawan",
        photo: "https://placehold.co/100x100/06b6d4/ffffff?text=HG",
      },
      {
        position: "Sekretaris",
        name: "Rina Marlina, S.Pd.",
        photo: "https://placehold.co/100x100/06b6d4/ffffff?text=RM",
      },
      {
        position: "Bendahara",
        name: "Drs. Hermanto",
        photo: "https://placehold.co/100x100/06b6d4/ffffff?text=HM",
      },
      {
        position: "Pelatih Kepala",
        name: "Coach Richard Sambera Jr.",
        photo: "https://placehold.co/100x100/06b6d4/ffffff?text=RS",
      },
    ],
    achievements: [
      {
        event: "PORPROV Riau 2024",
        medal: "Emas",
        athlete: "50m Gaya Bebas - Dina",
      },
      {
        event: "PORPROV Riau 2024",
        medal: "Perak",
        athlete: "100m Gaya Kupu - Arif",
      },
      {
        event: "Kejurnas Renang 2023",
        medal: "Perunggu",
        athlete: "200m Gaya Punggung - Lisa",
      },
    ],
    athletes: 18,
    totalAchievements: 14,
  },
  8: {
    id: 8,
    name: "Panahan",
    icon: GiArcheryTarget,
    category: "Ketepatan",
    color: "bg-amber-500",
    description:
      "Panahan adalah seni atau olahraga menembakkan anak panah. Kampar memiliki potensi besar di cabang olahraga ini.",
    organization: {
      name: "Perpani Kabupaten Kampar",
      founded: "2000",
      address: "Lapangan Panahan Kampar, Jl. Panahan No. 7",
      phone: "(0762) 890123",
      email: "perpani.kampar@example.com",
    },
    management: [
      {
        position: "Ketua Umum",
        name: "Kolonel (Purn) Surya Darma",
        photo: "https://placehold.co/100x100/f59e0b/ffffff?text=SD",
      },
      {
        position: "Sekretaris",
        name: "Capt. (Purn) Yusuf Hakim",
        photo: "https://placehold.co/100x100/f59e0b/ffffff?text=YH",
      },
      {
        position: "Bendahara",
        name: "Ny. Kartini Surya",
        photo: "https://placehold.co/100x100/f59e0b/ffffff?text=KS",
      },
      {
        position: "Pelatih Kepala",
        name: "Coach Dellie Threesidhi Jr.",
        photo: "https://placehold.co/100x100/f59e0b/ffffff?text=DT",
      },
    ],
    achievements: [
      {
        event: "PORPROV Riau 2024",
        medal: "Emas",
        athlete: "Recurve Putri - Maya",
      },
      {
        event: "Kejurnas Panahan 2023",
        medal: "Perak",
        athlete: "Compound Putra - Reza",
      },
    ],
    athletes: 12,
    totalAchievements: 8,
  },
  9: {
    id: 9,
    name: "Tenis Lapangan",
    icon: GiTennisRacket,
    category: "Raket",
    color: "bg-lime-500",
    description:
      "Tenis lapangan adalah olahraga raket yang dapat dimainkan secara individu atau ganda. Kampar aktif membina atlet tenis muda.",
    organization: {
      name: "Pelti Kabupaten Kampar",
      founded: "1998",
      address: "Lapangan Tenis Kampar, Jl. Tenis No. 12",
      phone: "(0762) 901234",
      email: "pelti.kampar@example.com",
    },
    management: [
      {
        position: "Ketua Umum",
        name: "H. Darmawan Putra",
        photo: "https://placehold.co/100x100/84cc16/ffffff?text=DP",
      },
      {
        position: "Sekretaris",
        name: "Eko Prasetyo, S.H.",
        photo: "https://placehold.co/100x100/84cc16/ffffff?text=EP",
      },
      {
        position: "Bendahara",
        name: "Hj. Siti Rahmah",
        photo: "https://placehold.co/100x100/84cc16/ffffff?text=SR",
      },
      {
        position: "Pelatih Kepala",
        name: "Coach David Wibowo",
        photo: "https://placehold.co/100x100/84cc16/ffffff?text=DW",
      },
    ],
    achievements: [
      {
        event: "PORPROV Riau 2024",
        medal: "Perak",
        athlete: "Tunggal Putra - Kevin",
      },
      { event: "Kejurda Tenis 2023", medal: "Emas", athlete: "Ganda Putri" },
    ],
    athletes: 16,
    totalAchievements: 6,
  },
  10: {
    id: 10,
    name: "Pencak Silat",
    icon: GiKimono,
    category: "Bela Diri",
    color: "bg-rose-500",
    description:
      "Pencak silat adalah seni bela diri tradisional Indonesia. Kampar memiliki banyak perguruan silat dengan atlet-atlet berprestasi.",
    organization: {
      name: "IPSI Kabupaten Kampar",
      founded: "1978",
      address: "Padepokan Silat Kampar, Jl. Silat No. 9",
      phone: "(0762) 012345",
      email: "ipsi.kampar@example.com",
    },
    management: [
      {
        position: "Ketua Umum",
        name: "Pendekar H. Abdul Muis",
        photo: "https://placehold.co/100x100/f43f5e/ffffff?text=AM",
      },
      {
        position: "Sekretaris",
        name: "Pendekar Ridwan",
        photo: "https://placehold.co/100x100/f43f5e/ffffff?text=RW",
      },
      {
        position: "Bendahara",
        name: "Hj. Maimunah",
        photo: "https://placehold.co/100x100/f43f5e/ffffff?text=MM",
      },
      {
        position: "Pelatih Kepala",
        name: "Pendekar Suryadi",
        photo: "https://placehold.co/100x100/f43f5e/ffffff?text=SY",
      },
    ],
    achievements: [
      {
        event: "PON XXI 2024",
        medal: "Emas",
        athlete: "Tanding Kelas C Putra - Ilham",
      },
      {
        event: "SEA Games 2023",
        medal: "Perak",
        athlete: "Tunggal Putra - Farhan",
      },
      {
        event: "PORPROV Riau 2024",
        medal: "Emas",
        athlete: "Tanding Kelas A Putri - Nadia",
      },
      {
        event: "PORPROV Riau 2024",
        medal: "Emas",
        athlete: "Seni Tunggal - Ahmad",
      },
    ],
    athletes: 22,
    totalAchievements: 18,
  },
  11: {
    id: 11,
    name: "Balap Sepeda",
    icon: BiCycling,
    category: "Balap",
    color: "bg-indigo-500",
    description:
      "Balap sepeda adalah olahraga balap menggunakan sepeda. Kampar memiliki jalur-jalur yang potensial untuk balap sepeda.",
    organization: {
      name: "ISSI Kabupaten Kampar",
      founded: "2005",
      address: "Velodrome Mini Kampar, Jl. Sepeda No. 15",
      phone: "(0762) 112233",
      email: "issi.kampar@example.com",
    },
    management: [
      {
        position: "Ketua Umum",
        name: "Ir. Teguh Santoso",
        photo: "https://placehold.co/100x100/6366f1/ffffff?text=TS",
      },
      {
        position: "Sekretaris",
        name: "Haryanto, S.T.",
        photo: "https://placehold.co/100x100/6366f1/ffffff?text=HY",
      },
      {
        position: "Bendahara",
        name: "Endang Susilowati",
        photo: "https://placehold.co/100x100/6366f1/ffffff?text=ES",
      },
      {
        position: "Pelatih Kepala",
        name: "Coach Firman Cycling",
        photo: "https://placehold.co/100x100/6366f1/ffffff?text=FC",
      },
    ],
    achievements: [
      {
        event: "PORPROV Riau 2024",
        medal: "Perunggu",
        athlete: "Road Race - Denny",
      },
      {
        event: "Tour de Siak 2023",
        medal: "Perak",
        athlete: "Tim Kampar Cycling",
      },
    ],
    athletes: 14,
    totalAchievements: 5,
  },
  12: {
    id: 12,
    name: "Karate",
    icon: MdSportsMartialArts,
    category: "Bela Diri",
    color: "bg-slate-500",
    description:
      "Karate adalah seni bela diri asal Jepang yang fokus pada serangan tangan dan kaki. Kampar memiliki banyak karateka berprestasi.",
    organization: {
      name: "Forki Kabupaten Kampar",
      founded: "1985",
      address: "Dojo Karate Kampar, Jl. Karate No. 20",
      phone: "(0762) 223344",
      email: "forki.kampar@example.com",
    },
    management: [
      {
        position: "Ketua Umum",
        name: "Shihan H. Usman",
        photo: "https://placehold.co/100x100/64748b/ffffff?text=US",
      },
      {
        position: "Sekretaris",
        name: "Sensei Budi Utomo",
        photo: "https://placehold.co/100x100/64748b/ffffff?text=BU",
      },
      {
        position: "Bendahara",
        name: "Sensei Hj. Aminah",
        photo: "https://placehold.co/100x100/64748b/ffffff?text=AM",
      },
      {
        position: "Pelatih Kepala",
        name: "Sensei Yamamoto Jr.",
        photo: "https://placehold.co/100x100/64748b/ffffff?text=YJ",
      },
    ],
    achievements: [
      {
        event: "PON XXI 2024",
        medal: "Perunggu",
        athlete: "Kumite -67kg Putra - Faisal",
      },
      {
        event: "PORPROV Riau 2024",
        medal: "Emas",
        athlete: "Kata Perorangan Putri - Sari",
      },
      {
        event: "PORPROV Riau 2024",
        medal: "Emas",
        athlete: "Kumite -55kg Putri - Diana",
      },
      {
        event: "Kejurnas Karate 2023",
        medal: "Perak",
        athlete: "Kata Beregu Putra",
      },
    ],
    athletes: 20,
    totalAchievements: 16,
  },
};

// Other sports for sidebar
const otherSports = [
  { id: 1, name: "Sepak Bola", color: "bg-green-500" },
  { id: 4, name: "Bulu Tangkis", color: "bg-red-500" },
  { id: 10, name: "Pencak Silat", color: "bg-rose-500" },
  { id: 6, name: "Atletik", color: "bg-blue-500" },
];

export default function SportBranchDetail() {
  const { id } = useParams();
  const sport = sportsDetailData[id] || sportsDetailData[1];
  const IconComponent = sport.icon;

  const getMedalColor = (medal) => {
    switch (medal) {
      case "Emas":
        return "bg-yellow-100 text-yellow-700 border-yellow-300";
      case "Perak":
        return "bg-gray-100 text-gray-700 border-gray-300";
      case "Perunggu":
        return "bg-orange-100 text-orange-700 border-orange-300";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

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

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          to="/cabor"
          className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 mb-8 transition"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Kembali ke Cabang Olahraga</span>
        </Link>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header */}
            <div className="mb-8 flex items-start gap-6">
              <div
                className={`${sport.color} flex h-24 w-24 items-center justify-center rounded-2xl shadow-lg`}
              >
                <IconComponent className="h-12 w-12 text-white" />
              </div>
              <div>
                <span className="mb-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-sm font-semibold text-gray-600">
                  {sport.category}
                </span>
                <h1 className="text-4xl font-extrabold text-gray-900">
                  {sport.name}
                </h1>
                <p className="mt-2 text-lg text-gray-600">
                  {sport.description}
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="mb-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-blue-50 p-4 flex items-center gap-4">
                <Users className="h-10 w-10 text-blue-500" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">
                    {sport.athletes}
                  </p>
                  <p className="text-sm text-gray-600">Atlet Aktif</p>
                </div>
              </div>
              <div className="rounded-xl bg-yellow-50 p-4 flex items-center gap-4">
                <Trophy className="h-10 w-10 text-yellow-500" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">
                    {sport.totalAchievements}
                  </p>
                  <p className="text-sm text-gray-600">Total Prestasi</p>
                </div>
              </div>
            </div>

            {/* Organisasi Cabor */}
            <div className="mb-8 rounded-2xl bg-gray-50 p-6">
              <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-gray-900">
                <Building2 className="h-6 w-6 text-red-500" />
                Organisasi Cabor
              </h2>
              <div className="space-y-3">
                <p className="text-lg font-semibold text-gray-900">
                  {sport.organization.name}
                </p>
                <div className="grid gap-2 text-sm text-gray-600">
                  <p className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-gray-400" />
                    Berdiri sejak {sport.organization.founded}
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-gray-400" />
                    {sport.organization.address}
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-gray-400" />
                    {sport.organization.phone}
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-gray-400" />
                    {sport.organization.email}
                  </p>
                </div>
              </div>
            </div>

            {/* Manajemen Cabor */}
            <div className="mb-8">
              <h2 className="mb-6 flex items-center gap-2 text-xl font-bold text-gray-900">
                <UserCircle className="h-6 w-6 text-red-500" />
                Manajemen Cabor
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {sport.management.map((person, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-md"
                  >
                    <img
                      src={person.photo}
                      alt={person.name}
                      className="h-14 w-14 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-bold text-gray-900">{person.name}</p>
                      <p className="text-sm text-gray-500">{person.position}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pencapaian Cabor */}
            <div className="mb-8">
              <h2 className="mb-6 flex items-center gap-2 text-xl font-bold text-gray-900">
                <Medal className="h-6 w-6 text-red-500" />
                Pencapaian Cabor
              </h2>
              <div className="space-y-3">
                {sport.achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className={`rounded-xl border-l-4 p-4 ${getMedalColor(
                      achievement.medal
                    )}`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-bold text-gray-900">
                          {achievement.event}
                        </p>
                        <p className="text-sm text-gray-600">
                          {achievement.athlete}
                        </p>
                      </div>
                      <span className="rounded-full bg-white px-3 py-1 text-sm font-semibold shadow">
                        🏅 {achievement.medal}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Cabor Lainnya */}
            <div className="rounded-2xl bg-gray-50 p-6 shadow-lg">
              <h3 className="mb-6 flex items-center gap-2 text-xl font-bold text-gray-900">
                <Trophy className="h-5 w-5 text-red-500" />
                Cabor Lainnya
              </h3>
              <div className="space-y-3">
                {otherSports
                  .filter((s) => s.id !== parseInt(id))
                  .map((item) => (
                    <Link
                      to={`/cabor/${item.id}`}
                      key={item.id}
                      className="flex items-center gap-3 rounded-xl bg-white p-3 shadow transition hover:shadow-md"
                    >
                      <div
                        className={`${item.color} flex h-10 w-10 items-center justify-center rounded-lg`}
                      >
                        <Trophy className="h-5 w-5 text-white" />
                      </div>
                      <span className="font-semibold text-gray-900">
                        {item.name}
                      </span>
                    </Link>
                  ))}
              </div>
            </div>

            {/* CTA Box */}
            <div className="mt-6 rounded-2xl bg-linear-to-br from-red-600 to-red-700 p-6 text-white shadow-lg">
              <Trophy className="mb-4 h-10 w-10" />
              <h3 className="mb-2 text-lg font-bold">Ingin Bergabung?</h3>
              <p className="mb-4 text-sm text-red-100">
                Bergabunglah dengan {sport.name} dan kembangkan potensi
                olahragamu!
              </p>
              <Link
                to="/kontak"
                className="inline-block rounded-full bg-white px-4 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-50"
              >
                Daftar Sekarang
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
