import { services } from "@/data/services";

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold">
            Layanan Kami
          </span>

          <h2 className="text-4xl font-bold mt-2">
            Solusi Lengkap untuk Laptop & Komputer
          </h2>

          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            Kami menyediakan berbagai layanan perbaikan,
            upgrade, dan instalasi perangkat komputer
            dengan proses cepat dan harga terjangkau.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="
                  group
                  p-8
                  rounded-3xl
                  border
                  border-slate-200
                  hover:border-blue-500
                  hover:shadow-xl
                  transition-all
                  duration-300
                "
              >
                <div
                  className="
                    w-14
                    h-14
                    bg-blue-100
                    rounded-2xl
                    flex
                    items-center
                    justify-center
                    mb-6
                    group-hover:bg-blue-600
                    transition
                  "
                >
                  <Icon
                    size={28}
                    className="
                      text-blue-600
                      group-hover:text-white
                    "
                  />
                </div>

                <h3 className="text-xl font-semibold mb-3">
                  {service.title}
                </h3>

                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}