"use client";

import Image from "next/image";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";


export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        overflow-hidden
      "
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Kasembon Servis"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-950/75" />

      {/* Gradient */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-slate-950/90
          via-slate-950/70
          to-slate-950/40
        "
      />

      {/* Content */}
      <div
  className="
    relative
    z-10

    max-w-7xl
    mx-auto

    px-6

    min-h-screen

    flex
    items-center
  "
>
  <div
    className="
      max-w-3xl

      pt-20
      md:pt-0
    "
  >

    {/* Logo */}
    <div className="mb-4">
      <Image
        src="/images/logo.png"
        alt="Kasembon Service"
        width={90}
        height={90}
        className="object-contain"
      />
    </div>

    {/* Title */}
    <h1
      className="
        text-3xl
        sm:text-4xl
        md:text-5xl
        lg:text-6xl

        font-black

        text-white

        leading-[1.05]
        tracking-tight
      "
    >
      Solusi Servis

      <span className="text-blue-400">
        {" "}Laptop
      </span>

      <br />

      & Komputer

      <br />

      Terpercaya
    </h1>

    {/* Tagline */}
    <p
      className="
        mt-5

        text-blue-300

        font-medium

        tracking-wide
      "
    >
      Cepat • Bergaransi • Profesional
    </p>

    {/* Description */}
    <p
      className="
        mt-6

        text-base
        md:text-lg

        text-slate-300

        max-w-2xl

        leading-relaxed
      "
    >
      Melayani servis laptop, komputer,
      instal ulang Windows, upgrade SSD,
      upgrade RAM, instal software,
      dan pengecekan perangkat gratis.
    </p>

    {/* Stats */}
    <div
      className="
        grid
        grid-cols-2
        md:grid-cols-3

        gap-4

        mt-12

        max-w-3xl
      "
    >
      <div
        className="
          bg-white/10
          backdrop-blur-xl

          border
          border-white/20

          p-5

          rounded-2xl
        "
      >
        <h3 className="text-3xl font-bold text-white">
          500+
        </h3>

        <p className="text-slate-300 text-sm">
          Perangkat Diperbaiki
        </p>
      </div>

      <div
        className="
          bg-white/10
          backdrop-blur-xl

          border
          border-white/20

          p-5

          rounded-2xl
        "
      >
        <h3 className="text-3xl font-bold text-white">
          3+
        </h3>

        <p className="text-slate-300 text-sm">
          Tahun Pengalaman
        </p>
      </div>

      <div
        className="
          col-span-2
          md:col-span-1

          bg-green-500/20
          backdrop-blur-xl

          border
          border-green-400/30

          p-5

          rounded-2xl
        "
      >
        <h3 className="text-white font-bold">
          ✓ Bergaransi
        </h3>

        <p className="text-slate-300 text-sm">
          Servis Terpercaya
        </p>
      </div>
    </div>
  </div>
</div>
    </section>
  );
}