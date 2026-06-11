import {
  MessageCircle,
  Search,
  Wrench,
  CheckCircle,
} from "lucide-react";

const steps = [
  {
    title: "Hubungi Kami",
    description: "Chat WhatsApp untuk konsultasi awal.",
    icon: MessageCircle,
  },
  {
    title: "Diagnosa",
    description: "Kami cek kondisi perangkat terlebih dahulu.",
    icon: Search,
  },
  {
    title: "Perbaikan",
    description: "Proses servis dilakukan sesuai kebutuhan.",
    icon: Wrench,
  },
  {
    title: "Selesai",
    description: "Perangkat siap digunakan kembali.",
    icon: CheckCircle,
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold">
            Proses Servis
          </span>

          <h2 className="text-4xl font-bold mt-2">
            Mudah dan Cepat
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="text-center relative"
              >
                <div className="w-20 h-20 mx-auto rounded-full bg-blue-100 flex items-center justify-center mb-6">
                  <Icon
                    size={36}
                    className="text-blue-600"
                  />
                </div>

                <h3 className="text-xl font-semibold mb-3">
                  {step.title}
                </h3>

                <p className="text-slate-600">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}