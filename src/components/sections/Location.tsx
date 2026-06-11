import { MapPin, Phone, Clock } from "lucide-react";

export default function Location() {
  return (
    <section
      id="location"
      className="py-24 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold">
            Lokasi Kami
          </span>

          <h2 className="text-4xl font-bold mt-2">
            Kunjungi Tempat Servis Kami
          </h2>

          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            Datang langsung untuk konsultasi, pengecekan perangkat,
            maupun proses servis laptop dan komputer.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          <div className="bg-white p-8 rounded-3xl shadow-sm">

            <div className="flex gap-4 mb-6">
              <MapPin className="text-blue-600" />
              <div>
                <h3 className="font-semibold">
                  Alamat
                </h3>

                <p className="text-slate-600">
                  Sanggrahan Kidul, Kasembon,
                  Kecamatan Kasembon,
                  Kabupaten Malang,
                  Jawa Timur 65393
                </p>
              </div>
            </div>

            <div className="flex gap-4 mb-6">
              <Phone className="text-blue-600" />
              <div>
                <h3 className="font-semibold">
                  WhatsApp
                </h3>

                <p className="text-slate-600">
                  0851-5631-3382
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock className="text-blue-600" />
              <div>
                <h3 className="font-semibold">
                  Jam Operasional
                </h3>

                <p className="text-slate-600">
                  Buka 24 Jam
                </p>
              </div>
            </div>

            <a
              href="https://maps.app.goo.gl/sHL9WjiArgZSk7Uf9"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-block
                mt-8
                bg-blue-600
                text-white
                px-6
                py-3
                rounded-xl
                hover:bg-blue-700
                transition
              "
            >
              Buka di Google Maps
            </a>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-lg">
            <iframe
              src="https://maps.google.com/maps?q=Kasembon%20Servis%20Laptop%20Komputer%20Printer&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
            />
          </div>

        </div>
      </div>
    </section>
  );
}