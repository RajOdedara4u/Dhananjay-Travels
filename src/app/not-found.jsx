"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Home, ArrowLeft, MapPin } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center overflow-hidden relative px-4">

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#C1121F]/5" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#C1121F]/5" />
        <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-[#C1121F]/5" />

        <svg className="absolute top-8 right-8 opacity-10" width="120" height="120" viewBox="0 0 120 120">
          {[0, 20, 40, 60, 80, 100].map(x =>
            [0, 20, 40, 60, 80, 100].map(y => (
              <circle key={`${x}-${y}`} cx={x + 5} cy={y + 5} r="1.8" fill="#C1121F" />
            ))
          )}
        </svg>

        <svg className="absolute bottom-8 left-8 opacity-10" width="100" height="100" viewBox="0 0 100 100">
          {[0, 20, 40, 60, 80].map(x =>
            [0, 20, 40, 60, 80].map(y => (
              <circle key={`${x}-${y}`} cx={x + 5} cy={y + 5} r="1.8" fill="#C1121F" />
            ))
          )}
        </svg>

        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C1121F] to-transparent" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl w-full">

        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative select-none"
        >
          <span
            className="font-black text-[#C1121F] leading-none"
            style={{ fontSize: "clamp(100px, 22vw, 180px)", letterSpacing: "-0.04em" }}
          >
            404
          </span>
          <span
            className="absolute inset-0 font-black text-[#C1121F]/5 leading-none select-none"
            style={{ fontSize: "clamp(100px, 22vw, 180px)", letterSpacing: "-0.04em", transform: "translate(6px, 6px)" }}
            aria-hidden
          >
            404
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-4"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-6 h-[1.5px] rounded-full bg-[#C1121F]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#C1121F]">
              Lost on the road
            </span>
            <span className="w-6 h-[1.5px] rounded-full bg-[#C1121F]" />
          </div>

          <h1 className="font-black text-black leading-tight mb-3" style={{ fontSize: "clamp(22px, 5vw, 32px)" }}>
            Looks like this route{" "}
            <span className="text-[#C1121F]">doesn't exist</span>
          </h1>

          <p className="text-[var(--text-secondary)] text-sm leading-relaxed max-w-sm mx-auto mb-8">
            The page you're looking for has taken a detour. Let us drive you back to familiar roads.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-3"
        >
          <Link
            href="/"
            className="group inline-flex items-center gap-2.5 bg-[#C1121F] hover:bg-[#a30f1a] text-white text-sm font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:shadow-[0_12px_32px_rgba(193,18,31,0.4)] hover:scale-[1.03]"
          >
            <Home size={15} />
            Back to Home
          </Link>

          <Link
            href="/contact"
            className="group inline-flex items-center gap-2.5 bg-white border border-gray-200 hover:border-[#C1121F] text-[#111] hover:text-[#C1121F] text-sm font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:shadow-[0_8px_24px_rgba(193,18,31,0.12)]"
          >
            <MapPin size={15} />
            Contact Us
          </Link>
        </motion.div>
      </div>


    </div>
  );
}