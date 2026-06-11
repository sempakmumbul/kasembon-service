import {
  ShieldCheck,
  Clock3,
  BadgeDollarSign,
  Headset,
} from "lucide-react";

const features = [
  {
    title: "Bergaransi",
    description: "Setiap perbaikan diberikan garansi sesuai layanan.",
    icon: ShieldCheck,
  },
  {
    title: "Pengerjaan Cepat",
    description: "Diagnosa dan perbaikan dilakukan seefisien mungkin.",
    icon: Clock3,
  },
  {
    title: "Harga Terjangkau",
    description: "Biaya transparan dan sesuai kebutuhan.",
    icon: BadgeDollarSign,
  },
  {
    title: "Konsultasi Gratis",
    description: "Tanyakan masalah perangkat sebelum servis.",
    icon: Headset,
  },
];

export default function WhyChooseUs() {
  return (
    <section id="advantages" 
    className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Mengapa Memilih Kami?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition"
              >
                <Icon className="text-blue-600 mb-4" size={36} />

                <h3 className="font-semibold text-xl mb-2">
                  {item.title}
                </h3>

                <p className="text-slate-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}