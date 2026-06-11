"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const navItems = [
  { id: "home", label: "Home" },
  { id: "services", label: "Layanan" },
  { id: "advantages", label: "Keunggulan" },
  { id: "process", label: "Proses" },
  { id: "location", label: "Lokasi" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find(
          (entry) => entry.isIntersecting
        );

        if (visibleSection) {
          setActive(visibleSection.target.id);
        }
      },
      {
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0,
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
  <nav
  className="
    fixed
    top-4
    left-1/2
    -translate-x-1/2
    z-[999]
    max-w-[95vw]
  "
>
      <div
  className="
    relative
    flex
    gap-1
    p-2

    overflow-x-auto
    no-scrollbar

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

    px-3
    sm:px-4
    md:px-6

    py-2
    md:py-3

    rounded-full

    text-[11px]
    sm:text-xs
    md:text-sm

    font-medium

    whitespace-nowrap
    shrink-0
  "
>
            {active === item.id && (
              <motion.div
                layoutId="navbar-pill"
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 35,
                }}
                className="
                  absolute
                  inset-0
                  rounded-full
                  bg-slate-900
                "
              />
            )}

            <span
              className={`
                relative z-10 transition-colors
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
  );
}