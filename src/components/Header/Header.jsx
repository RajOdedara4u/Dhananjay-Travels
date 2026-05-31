"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Services", link: "services" },
  { label: "About", link: "about" },
  { label: "Contact", link: "contact" },
  { label: "Buses", link: "buses" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.div
      className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <nav
        className="w-full max-w-[100%] lg:max-w-[55%] rounded-4xl backdrop-blur-md border shadow-lg px-6 py-2.5 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255, 255, 255, 0.47)",
          borderColor: scrolled ? "#f0e4e4" : "rgba(253,240,213,0.15)",
          boxShadow: scrolled
            ? "0 4px 24px rgba(193,18,31,0.1)"
            : "0 4px 16px rgba(0,0,0,0.2)",
        }}
      >
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <Image src="/logo.jpeg" alt="Dhananjay Travels" width={36} height={36} priority className="rounded-xl object-cover" />
            <div className="flex flex-col items-start">
              <h2
                className="text-base leading-tight transition-colors duration-300"
                style={{ color: "#111"  }}
              >
                Dhananjay
              </h2>
              <h2
                className="text-[9px] tracking-[0.3em] uppercase transition-colors duration-300"
                style={{ color: "#C1121F"  }}
              >
                Travels
              </h2>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 font-medium">
            {links.map((l, i) => (
              <motion.div
                key={l.link}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1, ease: "easeOut" }}
              >
                <Link
                  href={l.link}
                  className="transition-colors duration-300 text-[#111] hover:text-[#C1121F]"
                >
                  {l.label}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px] cursor-pointer"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {[
              open ? "rotate-45 translate-y-[7px]" : "",
              open ? "opacity-0" : "",
              open ? "-rotate-45 -translate-y-[7px]" : "",
            ].map((cls, i) => (
              <span
                key={i}
                className={`block h-0.5 w-6 rounded transition-all duration-300 ${cls}`}
                style={{ background: scrolled ? "#111" : "#fff" }}
              />
            ))}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              className="md:hidden mt-3"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{ overflow: "hidden" }}
            >
              <div
                className="flex flex-col gap-3 pb-2 font-medium border-t pt-3"
                style={{
                  borderColor: scrolled ? "#f0e4e4" : "rgba(253,240,213,0.15)",
                  color: scrolled ? "#111" : "#fff",
                }}
              >
                {links.map((l, i) => (
                  <motion.div
                    key={l.link}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25, delay: i * 0.07 }}
                  >
                    <Link
                      href={l.link}
                      className="transition-colors duration-200 pl-1"
                      style={{ color: scrolled ? "#111" : "#fff" }}
                      onClick={() => setOpen(false)}
                    >
                      {l.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.div>
  );
}
