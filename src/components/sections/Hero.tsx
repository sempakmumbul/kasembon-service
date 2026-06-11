"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
  id="home"
  className="
    relative
    min-h-screen

    pt-28
    md:pt-0

    pb-16

    flex
    items-center

    overflow-hidden

    bg-slate-50
  "
>
      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-200/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-300/10 blur-3xl rounded-full" />

      {/* Watermark */}
      <div
        className="
          absolute
          inset-0
          flex
          items-center
          justify-center
          pointer-events-none
          select-none
          overflow-hidden
        "
      >
        <h1
          className="
            text-[180px]
            lg:text-[320px]
            font-black
            text-slate-200/20
            tracking-tight
          "
        >
          KASEMBON
        </h1>
      </div>

      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-6
          grid
          lg:grid-cols-2
          gap-16
          items-center
        "
      >
        {/* Left */}
        <div>
          <span
            className="
              inline-flex
              items-center
              px-4
              py-2
              rounded-full
              bg-blue-100
              text-blue-600
              text-sm
              font-medium
            "
          >
            🔧 Servis Laptop & Komputer Kasembon
          </span>

          <h1
            className="
              mt-8
              text-5xl
              md:text-6xl
              lg:text-7xl
              font-black
              text-slate-900
              leading-tight
            "
          >
            Solusi Servis
            <span className="text-blue-600">
              {" "}Laptop
            </span>
            <br />
            & Komputer
            <br />
            Terpercaya
          </h1>

          <p
            className="
              mt-6
              text-lg
              text-slate-600
              max-w-xl
            "
          >
            Melayani servis laptop, komputer,
            instal ulang Windows, upgrade SSD,
            upgrade RAM, instal software,
            serta pengecekan perangkat gratis.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="https://wa.me/6285156313382"
              target="_blank"
              className="
                bg-slate-900
                text-white
                px-8
                py-4
                rounded-full
                transition
                hover:scale-105
              "
            >
              Chat WhatsApp
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-6 mt-12 flex-wrap">
            <div
              className="
                bg-white
                px-6
                py-5
                rounded-2xl
                shadow-sm
              "
            >
              <h3 className="text-3xl font-bold text-blue-600">
                500+
              </h3>
              <p className="text-slate-500 text-sm">
                Perangkat Diperbaiki
              </p>
            </div>

            <div
              className="
                bg-white
                px-6
                py-5
                rounded-2xl
                shadow-sm
              "
            >
              <h3 className="text-3xl font-bold text-blue-600">
                3+
              </h3>
              <p className="text-slate-500 text-sm">
                Tahun Pengalaman
              </p>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="relative">
          <Image
            src="/images/hero.jpg"
            alt="Kasembon Servis"
            width={800}
            height={600}
            priority
            className="
              rounded-[32px]
              shadow-2xl
              object-cover
              w-full
            "
          />

          <div
            className="
              absolute
              bottom-6
              left-6
              bg-white/90
              backdrop-blur-md
              px-5
              py-3
              rounded-2xl
              shadow-lg
            "
          >
            <p className="font-semibold text-blue-600">
              ✓ Bergaransi
            </p>

            <p className="text-sm text-slate-500">
              Servis Cepat & Terpercaya
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}