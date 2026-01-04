import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Telepon",
    value: "0762-123-456",
    desc: "Senin - Jumat",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@konikampar.id",
    desc: "Respon 1x24 jam",
  },
  {
    icon: MapPin,
    label: "Alamat",
    value: "Komplek Sport Center, Bangkinang, Kampar",
    desc: "Riau, Indonesia",
  },
  {
    icon: Clock,
    label: "Jam Operasional",
    value: "09.00 - 16.00 WIB",
    desc: "Senin - Jumat",
  },
];

const socialMedia = [
  {
    name: "Instagram",
    handle: "@konikampar",
    url: "https://instagram.com/konikampar",
  },
  {
    name: "Facebook",
    handle: "KONI Kampar",
    url: "https://facebook.com/konikampar",
  },
  {
    name: "Twitter",
    handle: "@konikampar",
    url: "https://twitter.com/konikampar",
  },
];

export default function Contact() {
  return (
    <main>
      <section className="relative overflow-hidden bg-white py-12 sm:py-16 lg:py-20">
        {/* Background effect - blurred */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            src="/image/effect.png"
            alt="background effect"
            className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-full object-cover blur-3xl opacity-20 rotate-45"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-extrabold text-gray-900">
              Hubungi Kami
            </h2>
            <p className="text-3xl font-bold text-red-600 mb-4">
              Siap Melayani Anda
            </p>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              Jangan ragu untuk menghubungi KONI Kampar untuk pertanyaan umum,
              kerja sama, atau informasi seputar kegiatan olahraga di Kabupaten
              Kampar.
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-12">
            {contactInfo.map((item) => (
              <div
                key={item.label}
                className="group rounded-2xl bg-white border border-gray-200 p-6 shadow-lg transition duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white transition">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-gray-900">{item.label}</h3>
                <p className="mt-1 text-gray-800 font-medium">{item.value}</p>
                <p className="mt-1 text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Contact Form & Map */}
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact Form */}
            <div className="rounded-2xl bg-white border border-gray-200 p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-100 text-red-600">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Kirim Pesan
                  </h3>
                  <p className="text-sm text-gray-600">
                    Kami akan merespon secepatnya
                  </p>
                </div>
              </div>

              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      placeholder="Masukkan nama"
                      className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:border-red-500 focus:ring-1 focus:ring-red-500 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="email@contoh.com"
                      className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:border-red-500 focus:ring-1 focus:ring-red-500 transition"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Subjek
                  </label>
                  <input
                    type="text"
                    placeholder="Topik pesan Anda"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:border-red-500 focus:ring-1 focus:ring-red-500 transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Pesan
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tulis pesan Anda di sini..."
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:border-red-500 focus:ring-1 focus:ring-red-500 transition resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 w-full rounded-lg bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700 transition"
                >
                  <Send className="h-4 w-4" />
                  Kirim Pesan
                </button>
              </form>
            </div>

            {/* Map */}
            <div className="rounded-2xl bg-white border border-gray-200 overflow-hidden shadow-lg">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-100 text-red-600">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Lokasi Kami
                    </h3>
                    <p className="text-sm text-gray-600">
                      Temukan kantor KONI Kampar
                    </p>
                  </div>
                </div>
              </div>
              <div className="aspect-4/3 w-full">
                <iframe
                  title="Map KONI Kampar"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.620571223568!2d101.030!3d0.330!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBangkinang!5e0!3m2!1sen!2sid!4v1710000000000"
                  style={{ border: 0 }}
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="mt-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900">
                Ikuti Media Sosial Kami
              </h3>
              <p className="mt-2 text-gray-600">
                Dapatkan update terbaru seputar olahraga Kampar
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {socialMedia.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-full bg-white border border-gray-200 px-6 py-3 shadow-sm hover:shadow-md hover:border-red-200 transition"
                >
                  <span className="font-semibold text-gray-900">
                    {social.name}
                  </span>
                  <span className="text-red-600">{social.handle}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
