import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    id: 1,
    question: "Apa itu KONI Kabupaten Kampar?",
    answer:
      "KONI Kabupaten Kampar adalah Komite Olahraga Nasional Indonesia di tingkat kabupaten yang bertanggung jawab dalam mengembangkan olahraga dan prestasi atlet di wilayah Kampar, Riau.",
  },
  {
    id: 2,
    question: "Apa peran KONI Kampar dalam dunia olahraga Indonesia?",
    answer:
      "KONI Kampar berperan sebagai fasilitator dan pengembang olahraga di level lokal. Kami mengelola berbagai cabang olahraga, melatih atlet-atlet berbakat, dan mewakili Kampar dalam kompetisi tingkat nasional dan regional.",
  },
  {
    id: 3,
    question: "Apakah KONI Kampar hanya menangani olahraga profesional saja?",
    answer:
      "Tidak. KONI Kampar menangani berbagai tingkat olahraga mulai dari amatir hingga profesional. Kami membuka kesempatan bagi semua kalangan untuk mengembangkan bakat olahraga mereka.",
  },
  {
    id: 4,
    question: "Bagaimana cara pendaftaran untuk bergabung dengan KONI Kampar?",
    answer:
      "Anda dapat menghubungi kantor KONI Kabupaten Kampar langsung untuk mendapatkan informasi pendaftaran. Tim kami siap membantu memberikan panduan lengkap mengenai persyaratan dan proses pendaftaran.",
  },
  {
    id: 5,
    question: "Apa saja cabang olahraga yang dikelola KONI Kampar?",
    answer:
      "KONI Kampar mengelola 78 cabang olahraga yang tersebar di berbagai komunitas dan klub olahraga di Kabupaten Kampar. Mulai dari olahraga tradisional hingga modern, semuanya kami kembangkan.",
  },
  {
    id: 6,
    question: "Apakah ada dukungan beasiswa untuk atlet berprestasi?",
    answer:
      "Ya. KONI Kampar menyediakan berbagai bentuk dukungan termasuk pelatihan intensif, fasilitas latihan, dan dalam beberapa kasus, bantuan finansial untuk atlet-atlet yang menunjukkan potensi luar biasa.",
  },
];

export default function FAQSection() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="relative overflow-hidden py-12 sm:py-16 lg:py-20">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <span className="inline-block text-sm font-bold text-red-600 tracking-widest mb-2">
            FREQUENTLY ASKED QUESTION
          </span>
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Pertanyaan yang Sering Diajukan
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((faq) => (
            <div
              key={faq.id}
              className="border-b border-gray-200 last:border-b-0 overflow-hidden transition duration-300"
            >
              <button
                onClick={() => toggleExpand(faq.id)}
                className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition"
              >
                <span className="text-left font-semibold text-gray-900">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-gray-600 transition duration-300 shrink-0 ml-4 ${
                    expandedId === faq.id ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Answer */}
              {expandedId === faq.id && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
