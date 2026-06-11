const testimonials = [
  {
    name: "Mahda Gaylord",
    text: "Laptop saya yang lemot jadi cepat kembali setelah upgrade SSD.",
  },
  {
    name: "Muzayana Mini",
    text: "Pelayanan ramah dan pengerjaan cepat.",
  },
  {
    name: "Andi Gateli",
    text: "Install ulang selesai dalam satu hari.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold">
            Testimoni
          </span>

          <h2 className="text-4xl font-bold mt-2">
            Apa Kata Pelanggan Kami?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="
                bg-white
                p-8
                rounded-3xl
                shadow-sm
              "
            >
              <div className="text-yellow-500 mb-4">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="text-slate-600">
                "{item.text}"
              </p>

              <h4 className="font-semibold mt-5">
                {item.name}
              </h4>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}