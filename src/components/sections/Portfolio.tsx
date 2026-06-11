import Image from "next/image";

const works = [
  {
    image: "/images/work1.jpg",
    title: "Upgrade SSD Laptop Asus",
  },
  {
    image: "/images/work2.jpg",
    title: "Install Ulang Windows 11",
  },
  {
    image: "/images/work3.jpg",
    title: "Pembersihan Laptop Overheat",
  },
  {
    image: "/images/work4.jpg",
    title: "Perbaikan Mainboard",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <span className="text-blue-600 font-semibold">
            Hasil Pengerjaan
          </span>

          <h2 className="text-4xl font-bold mt-2">
            Beberapa Servis Yang Telah Kami Kerjakan
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {works.map((item, index) => (
            <div
              key={index}
              className="
                overflow-hidden
                rounded-3xl
                shadow-lg
                group
              "
            >
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={400}
                className="
                  w-full
                  h-64
                  object-cover
                  group-hover:scale-110
                  transition
                  duration-500
                "
              />

              <div className="p-4 bg-white">
                <h3 className="font-semibold">
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