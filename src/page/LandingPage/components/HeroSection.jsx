"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const stats = [
  { num: '10+', label: 'Years' },
  { num: '48',  label: 'Destinations' },
  { num: '12k+', label: 'Travellers' },
  { num: '4.9★', label: 'Rating' },
];


// ── Live count-up ──────────────────────────────────────────────────────────────
function useCountUp(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const num = parseFloat(target);
    const frame = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * num));
      if (progress < 1) requestAnimationFrame(frame);
      else setCount(num);
    };
    requestAnimationFrame(frame);
  }, [start]);
  return count;
}

function StatItem({ num, label }) {
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Extract leading number and suffix e.g. '12k+' -> num=12, suffix='k+'
  const match = num.match(/^(\d+\.?\d*)(.*)$/);
  const rawNum = match ? parseFloat(match[1]) : 0;
  const suffix = match ? match[2] : '';
  const isDecimal = String(rawNum).includes('.');

  const counted = useCountUp(rawNum, 2000, started);
  const display = started
    ? (isDecimal ? counted.toFixed(1) : Math.floor(counted)) + suffix
    : '0' + suffix;

  return (
   <div ref={ref} className="flex flex-1 items-center justify-center">
  <div className="flex flex-col items-center gap-0.5">
    <span className="text-[clamp(1rem,5vw,1.2rem)] font-semibold leading-none text-white">
      {display}
    </span>

    <span className="font-['DM_Sans'] text-[clamp(0.5rem,1.5vw,0.7rem)] uppercase tracking-[0.22em] text-white/70">
      {label}
    </span>
  </div>
</div>
  );
}

// ── Hero ───────────────────────────────────────────────────────────────────────
export default function HeroSection() {
  return (
    <div className="min-h-screen overflow-hidden relative font-sans">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: "url('hero.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-black/30 to-black/80" />

      <section className="relative flex flex-col items-left justify-center text-left px-4 sm:px-6 pt-28 md:pt-15 pb-16 min-h-screen">
        <div className="flex flex-col items-left backdrop-blur-[1px] bg-black/20 rounded-3xl justify-evenly p-4 md:p-10 max-w-2xl">

          <motion.h1
            className="max-w-3xl font-black leading-[1] tracking-tight text-4xl sm:text-5xl md:text-6xl text-[var(--text-primary)] drop-shadow-[0_8px_25px_rgba(0,0,0,0.4)]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            <span>Explore </span><span className="text-red-500">India,</span>
            <br />
            <span className="text-white/70">Dhananjay Travels.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-6"
          >
            <span className="max-w-xl md:text-lg leading-relaxed font-medium text-white/75">
              Luxury tours, curated adventures, spiritual escapes, and unforgettable
              group experiences designed by Dhananjay Travels.
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.42, ease: 'easeOut' }}
            className="flex items-center justify-center w-full max-w-[440px] mt-7 pt-5 border-t border-white/10"
          >
            {stats.map((s, i) => (
              <div key={s.label} className="flex items-center flex-1 justify-center">
                <StatItem num={s.num} label={s.label} />
                {i < stats.length - 1 && <div className="w-px h-9 bg-white/12 ml-4 flex-shrink-0" />}
              </div>
            ))}
          </motion.div>
        </div>

      </section>

      <div className="absolute inset-y-3 inset-x-0 rounded-[32px] border border-[#caf0f8]/10 pointer-events-none" />

      {/* Wave Divider */}
      <div className="absolute bottom-[-20] left-0 w-full overflow-hidden leading-none" style={{ lineHeight: 0 }}>
        <svg viewBox="0 0 1440 180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full" style={{ height: "140px", display: "block" }}>
          <defs>
            <linearGradient id="waveGradient1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
            </linearGradient>
            <filter id="blur">
              <feGaussianBlur stdDeviation="6" />
            </filter>
          </defs>
          <path d="M0,95 C120,120 220,60 340,85 C460,110 560,150 700,120 C840,90 980,40 1120,70 C1260,100 1360,130 1440,95 L1440,180 L0,180 Z" fill="url(#waveGradient2)" filter="url(#blur)" />
          <path d="M0,110 C140,70 280,150 420,110 C560,70 700,40 840,90 C980,140 1120,140 1260,100 C1340,78 1400,88 1440,95 L1440,180 L0,180 Z" fill="url(#waveGradient1)" />
          <path d="M0,118 C140,80 280,155 420,118 C560,82 700,52 840,98 C980,144 1120,144 1260,108 C1340,90 1400,96 1440,102" stroke="rgba(255, 29, 29, 0.34)" strokeWidth="4" fill="none" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
}
