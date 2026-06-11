const testimonials = [
  {
    name: "Mahda Gaylord",
    text: "Laptop saya yang lemot jadi sangat cepat setelah upgrade SSD. Pelayanan ramah dan pengerjaan cepat.",
  },
  {
    name: "Muzayana Mini",
    text: "Servis sangat memuaskan. Proses pengerjaan transparan dan hasilnya sesuai harapan.",
  },
  {
    name: "Andi Gateli",
    text: "Install ulang selesai dalam satu hari. Laptop kembali lancar digunakan untuk bekerja.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="
        py-32

        bg-gradient-to-b
        from-white
        via-slate-50
        to-white

        overflow-hidden
      "
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">
          <span className="text-blue-600 font-semibold">
            Testimoni
          </span>

          <h2
            className="
              mt-4
              text-4xl
              md:text-5xl
              lg:text-6xl

              font-bold
              tracking-tight
            "
          >
            Apa Kata Pelanggan Kami?
          </h2>

          <p
            className="
              mt-6
              text-lg
              text-slate-500
              max-w-2xl
              mx-auto
            "
          >
            Kepuasan pelanggan menjadi prioritas utama
            dalam setiap proses servis yang kami kerjakan.
          </p>
        </div>

        <div
          className="
            flex
            gap-6

            overflow-x-auto

            snap-x
            snap-mandatory

            pb-6

            scrollbar-hide
          "
        >
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="
                min-w-[320px]
                md:min-w-[420px]

                snap-center

                p-8

                rounded-[32px]

                bg-white/70
                backdrop-blur-xl

                border
                border-white/60

                shadow-lg

                hover:-translate-y-2
                hover:shadow-2xl

                transition-all
                duration-500
              "
            >
              <div className="flex items-center gap-4 mb-6">

                <div
                  className="
                    w-14
                    h-14

                    rounded-full

                    bg-gradient-to-br
                    from-blue-500
                    to-blue-700

                    flex
                    items-center
                    justify-center

                    text-white
                    font-bold
                  "
                >
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h4 className="font-semibold text-lg">
                    {item.name}
                  </h4>

                  <div className="text-yellow-500">
                    ★★★★★
                  </div>
                </div>
              </div>

              <p
                className="
                  text-slate-600
                  leading-relaxed
                  text-lg
                "
              >
                "{item.text}"
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}