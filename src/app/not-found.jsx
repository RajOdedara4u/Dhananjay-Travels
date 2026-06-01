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
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-full max-w-md h-24 -mt-4 mb-2"
        >
          <div className="absolute bottom-0 left-0 right-0 h-10 bg-[#1f2937] rounded-2xl overflow-hidden">
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 h-[3px]"
              style={{
                width: "200%",
                background: "repeating-linear-gradient(90deg, transparent 0px, transparent 20px, #f9fafb 20px, #f9fafb 40px)",
                opacity: 0.3,
              }}
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            <div className="absolute top-1 left-0 right-0 h-[2px] bg-[#C1121F]/40 rounded-full" />
            <div className="absolute bottom-1 left-0 right-0 h-[2px] bg-[#C1121F]/40 rounded-full" />
          </div>

          {[0, 160, 320].map((offset, i) => (
            <motion.div
              key={i}
              className="absolute bottom-10 flex flex-col items-center"
              style={{ left: offset }}
              animate={{ x: [0, -480] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: i * 1 }}
            >
              <div className="w-[2px] h-8 bg-[#9ca3af]" />
              <div className="w-4 h-[3px] bg-[#9ca3af] -mt-[3px]" />
            </motion.div>
          ))}

          <motion.div
            className="absolute bottom-10"
            style={{ left: "50%", x: "-50%" }}
            animate={{ y: [0, -2, 0, -1, 0] }}
            transition={{ duration: 0.45, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg width="100" height="52" viewBox="0 0 100 52" fill="none">
              <rect x="3" y="6" width="90" height="34" rx="6" fill="#C1121F" />
              <rect x="3" y="6" width="90" height="8" rx="6" fill="#a30f1a" />
              <rect x="80" y="10" width="13" height="26" rx="3" fill="#a30f1a" />
              <rect x="81" y="12" width="10" height="12" rx="2" fill="#bfdbfe" opacity="0.9" />
              <rect x="82" y="13" width="3" height="4" rx="1" fill="white" opacity="0.5" />
              {[10, 26, 42, 58].map((x, i) => (
                <g key={i}>
                  <rect x={x} y="12" width="12" height="10" rx="2" fill="#bfdbfe" opacity="0.85" />
                  <rect x={x + 1} y="13" width="4" height="4" rx="1" fill="white" opacity="0.4" />
                </g>
              ))}
              <motion.rect x="91" y="22" width="6" height="4" rx="1.5" fill="#fef08a"
                animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 0.5, repeat: Infinity }} />
              <rect x="3" y="22" width="4" height="4" rx="1.5" fill="#fca5a5" />
              <rect x="3" y="38" width="90" height="3" rx="1.5" fill="#7f1d1d" />
              <motion.circle cx="6" cy="41" r="2.5" fill="#9ca3af"
                animate={{ cx: [6, -8], opacity: [0.5, 0], r: [2.5, 5] }}
                transition={{ duration: 0.6, repeat: Infinity, ease: "easeOut" }} />
              <rect x="12" y="39" width="20" height="8" rx="4" fill="#111827" />
              <rect x="66" y="39" width="20" height="8" rx="4" fill="#111827" />
              <BusWheel cx={22} cy={46} />
              <BusWheel cx={76} cy={46} />
            </svg>
          </motion.div>
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

function BusWheel({ cx, cy }) {
  return (
    <motion.g
      style={{ transformOrigin: `${cx}px ${cy}px` }}
      animate={{ rotate: 360 }}
      transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
    >
      <circle cx={cx} cy={cy} r="6" fill="#111827" />
      <circle cx={cx} cy={cy} r="3.5" fill="#374151" />
      <circle cx={cx} cy={cy} r="1.5" fill="#9ca3af" />
      {[0, 60, 120].map((deg, i) => {
        const rad = (deg * Math.PI) / 180;
        return (
          <line key={i}
            x1={cx + Math.cos(rad) * 1.5} y1={cy + Math.sin(rad) * 1.5}
            x2={cx + Math.cos(rad) * 3.5} y2={cy + Math.sin(rad) * 3.5}
            stroke="#6b7280" strokeWidth="1"
          />
        );
      })}
    </motion.g>
  );
}
