import Image from "next/image";

const works = [
  {
    image: "/images/work1.jpg",
    title: "Upgrade SSD Laptop Asus",
    subtitle: "Upgrade Hardware",
  },
  {
    image: "/images/work2.jpg",
    title: "Install Ulang Windows 11",
    subtitle: "Software Optimization",
  },
  {
    image: "/images/work3.jpg",
    title: "Pembersihan Laptop Overheat",
    subtitle: "Maintenance Service",
  },
  {
    image: "/images/work4.jpg",
    title: "Perbaikan Mainboard",
    subtitle: "Hardware Repair",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="
        py-32

        bg-gradient-to-b
        from-slate-50
        via-white
        to-slate-100

        overflow-hidden
      "
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">
          <span className="text-blue-600 font-semibold">
            Hasil Pengerjaan
          </span>

          <h2
            className="
              mt-4
              text-4xl
              md:text-5xl
              lg:text-6xl

              font-bold
              tracking-tight

              text-slate-900
            "
          >
            Portfolio Servis Kami
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
            Beberapa perangkat yang telah kami tangani
            dengan proses profesional dan hasil terbaik.
          </p>
        </div>

        <div
          className="
            flex
            gap-8

            overflow-x-auto

            snap-x
            snap-mandatory

            pb-6

            scrollbar-hide
          "
        >
          {works.map((item, index) => (
            <div
              key={index}
              className="
                relative

                min-w-[90%]
                lg:min-w-[70%]

                h-[400px]
                md:h-[550px]
                lg:h-[650px]

                snap-center

                overflow-hidden

                rounded-[32px]
                lg:rounded-[40px]

                shadow-2xl

                group
                shrink-0
              "
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="
                  object-cover

                  group-hover:scale-105

                  transition-all
                  duration-700
                "
              />

              <div
                className="
                  absolute
                  inset-0

                  bg-gradient-to-t
                  from-black/80
                  via-black/20
                  to-transparent
                "
              />

              <div
                className="
                  absolute

                  bottom-8
                  md:bottom-10

                  left-8
                  md:left-10

                  right-8
                "
              >
                <p
                  className="
                    text-blue-300
                    font-medium
                    mb-2
                  "
                >
                  {item.subtitle}
                </p>

                <h3
                  className="
                    text-white

                    text-2xl
                    md:text-4xl
                    lg:text-5xl

                    font-bold
                    leading-tight
                  "
                >
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}