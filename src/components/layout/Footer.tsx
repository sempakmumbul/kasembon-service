import Image from "next/image";
import {
  Phone,
  MapPin,
  Clock,
} from "lucide-react";

import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="
        bg-slate-950
        text-white

        pt-20
        pb-10
      "
    >
      <div className="max-w-7xl mx-auto px-6">

        <div
          className="
            grid
            md:grid-cols-3

            gap-12
          "
        >
          {/* Brand */}
          <div>
            <div className="flex items-center gap-4">
              <Image
                src="/images/logo.png"
                alt="Kasembon Service"
                width={60}
                height={60}
              />

              <div>
                <h3 className="text-2xl font-bold">
                  Kasembon Service
                </h3>

                <p className="text-slate-400 text-sm">
                  Service Center
                </p>
              </div>
            </div>

            <p
              className="
                text-slate-400

                mt-5

                leading-relaxed
              "
            >
              Melayani servis laptop,
              komputer, instal ulang Windows,
              upgrade SSD, upgrade RAM,
              instal software dan berbagai
              kebutuhan perangkat digital.
            </p>

            {/* Social Media */}
            <div className="mt-6 flex gap-3">

              {/* WhatsApp */}
              <a
                href="https://wa.me/6285156313382"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-12
                  h-12

                  rounded-full

                  bg-slate-800
                  hover:bg-green-500

                  flex
                  items-center
                  justify-center

                  transition-all
                "
              >
                <FaWhatsapp size={20} />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/kasembonservis?igsh=cTJiOHJjdmpvcmY2"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-12
                  h-12

                  rounded-full

                  bg-slate-800

                  hover:bg-gradient-to-r
                  hover:from-pink-500
                  hover:to-purple-500

                  flex
                  items-center
                  justify-center

                  transition-all
                "
              >
               <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Kontak */}
          <div>
            <h4
              className="
                font-semibold
                text-lg
                mb-5
              "
            >
              Kontak
            </h4>

            <div className="space-y-4">

              <div className="flex gap-3">
                <Phone
                  size={18}
                  className="text-blue-400"
                />

                <span className="text-slate-400">
                  0851-5631-3382
                </span>
              </div>

              <div className="flex gap-3">
                <Clock
                  size={18}
                  className="text-blue-400"
                />

                <span className="text-slate-400">
                  Buka 24 Jam
                </span>
              </div>

            </div>
          </div>

          {/* Lokasi */}
          <div>
            <h4
              className="
                font-semibold
                text-lg
                mb-5
              "
            >
              Lokasi
            </h4>

            <div className="flex gap-3">
              <MapPin
                size={18}
                className="text-blue-400 mt-1"
              />

              <span
                className="
                  text-slate-400
                  leading-relaxed
                "
              >
                Sanggrahan Kidul,
                Kasembon,
                Kabupaten Malang,
                Jawa Timur 65393
              </span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className="
            border-t
            border-slate-800

            mt-12
            pt-8
          "
        >
          <div
            className="
              flex
              flex-col
              md:flex-row

              justify-between
              items-center

              gap-4
            "
          >
            <p className="text-slate-500 text-sm">
              © 2026 Kasembon Service.
              All rights reserved.
            </p>

            <p className="text-slate-500 text-sm">
              Dibuat dengan ❤️ untuk pelayanan terbaik.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}