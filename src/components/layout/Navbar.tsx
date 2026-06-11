"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import {
  Home,
  Wrench,
  ShieldCheck,
  Images,
  MessageSquareQuote,
  Workflow,
  MapPin,
  Phone,
  Menu,
  X,
} from "lucide-react";

import { useEffect, useState } from "react";

const navItems = [
  {
    id: "home",
    label: "Home",
    icon: Home,
  },
  {
    id: "services",
    label: "Layanan",
    icon: Wrench,
  },
  {
    id: "advantages",
    label: "Keunggulan",
    icon: ShieldCheck,
  },
  {
    id: "portfolio",
    label: "Portfolio",
    icon: Images,
  },
  {
    id: "testimonials",
    label: "Testimoni",
    icon: MessageSquareQuote,
  },
  {
    id: "process",
    label: "Proses",
    icon: Workflow,
  },
  {
    id: "location",
    label: "Lokasi",
    icon: MapPin,
  },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return () => {
    document.body.style.overflow = "auto";
  };
}, [isOpen]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    navItems.forEach((item) => {
      const section = document.getElementById(item.id);

      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* MOBILE NAVBAR */}
      <div
        className="
          md:hidden
          fixed
          top-0
          left-0
          right-0
          z-[999]
          bg-white/80
          backdrop-blur-xl
          border-b
          border-slate-200
        "
      >
        <div className="flex items-center justify-between px-5 py-4">
          <h2 className="font-bold text-slate-900">
            <div>
  <p className="text-[10px] tracking-widest text-slate-500">
    SERVICE CENTER
  </p>

  <h2 className="font-bold">
    Kasembon Servis
  </h2>
</div>
          </h2>

          <button
            onClick={() => setIsOpen(true)}
            className="p-2"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="
                fixed
                inset-0
                bg-black/30
                backdrop-blur-sm
                z-[999]
              "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 250,
              }}
             className="
  fixed
  top-0
  right-0

  h-dvh
  w-[85%]

overflow-y-auto
overscroll-contain

  bg-white/80
  backdrop-blur-3xl

  border-l
  border-white/40

  shadow-2xl

  z-[1000]

  p-8

  flex
  flex-col
"
            >
             <div className="flex justify-between items-center mb-10">
  <div>
    <p className="text-xs tracking-widest text-slate-500">
      KASEMBON SERVIS
    </p>

    <h2 className="font-bold text-2xl text-slate-900">
      Navigasi
    </h2>
  </div>

  <button
    onClick={() => setIsOpen(false)}
    className="
      w-10
      h-10

      rounded-full

      bg-white/60
      backdrop-blur-xl

      flex
      items-center
      justify-center
    "
  >
    <X size={22} />
  </button>
</div>

              <div className="space-y-3">
  {navItems.map((item) => {
    const Icon = item.icon;

    return (
      <a
        key={item.id}
        href={`#${item.id}`}
        onClick={() => setIsOpen(false)}
        className={`
          flex
          items-center
          gap-4

          p-4

          rounded-2xl

          transition-all
          duration-300

          ${
            active === item.id
              ? `
                bg-blue-500/10
                backdrop-blur-xl
                border
                border-blue-200
              `
              : `
                hover:bg-slate-100
              `
          }
        `}
      >
        <Icon
          size={22}
          className={
            active === item.id
              ? "text-blue-600"
              : "text-slate-500"
          }
        />

        <span
          className={`
            text-lg
            font-semibold

            ${
              active === item.id
                ? "text-blue-600"
                : "text-slate-800"
            }
          `}
        >
          {item.label}
        </span>
      </a>
    );
  })}
</div>

              <div className="mt-auto mb-6">
  <div className="flex items-center gap-3 text-slate-600">
    <Phone size={18} />
    <span>0851-5631-3382</span>
  </div>

  <div className="flex items-center gap-3 text-slate-600 mt-3">
    <MapPin size={18} />
    <span>Kasembon, Malang</span>
  </div>
</div>
              <div className="mt-auto">
                <a
                  href="https://wa.me/6285156313382"
                  target="_blank"
                  className="
  block
  text-center

  py-4

  rounded-2xl

  bg-gradient-to-r
  from-blue-600
  to-blue-500

  text-white
  font-semibold

  shadow-lg

  hover:scale-105

  transition-all
"
                >
                  Chat WhatsApp
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* DESKTOP NAVBAR */}
      <nav
        className="
          hidden md:block

          fixed
          top-4
          left-1/2
          -translate-x-1/2

          z-[999]
        "
      >
        <div
          className="
            relative
            flex
            gap-1
            p-2

            rounded-full

            bg-white/60
            backdrop-blur-2xl

            border
            border-white/50

            shadow-xl
          "
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="
                relative
                px-6
                py-3
                rounded-full
                text-sm
                font-medium
              "
            >
              {active === item.id && (
                <motion.div
                  layoutId="navbar-pill"
                  className="
                    absolute
                    inset-0
                    rounded-full
                    bg-slate-900
                  "
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 35,
                  }}
                />
              )}

              <span
                className={`
                  relative z-10
                  ${
                    active === item.id
                      ? "text-white"
                      : "text-slate-700"
                  }
                `}
              >
                {item.label}
              </span>
            </a>
          ))}
        </div>
      </nav>
    </>
  );
}