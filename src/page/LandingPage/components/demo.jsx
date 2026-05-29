"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const destinations = [
  { image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop', label: 'Kashmir' },
  { image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=800&auto=format&fit=crop', label: 'Himachal' },
  { image: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=800&auto=format&fit=crop', label: 'Rajasthan' },
  { image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=800&auto=format&fit=crop', label: 'Kerala' },
];

const floatingPos = [
  'top-16 left-13 rotate-[-6deg]',
  'top-16 right-13 rotate-[6deg]',
  'bottom-20 left-13 rotate-[-8deg]',
  'bottom-20 right-13 rotate-[8deg]',
];

const stats = [
  { num: '15+', label: 'Years' },
  { num: '48',  label: 'Destinations' },
  { num: '12k+', label: 'Travellers' },
  { num: '4.9★', label: 'Rating' },
];

const bounceDelays = ['0s', '0.4s', '0.8s', '1.2s'];

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
    <div ref={ref} className="flex items-center flex-1 justify-center">
      <div className="flex flex-col items-center gap-[3px]">
        <span className="text-white leading-none"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 26, fontWeight: 600 }}>
          {display}
        </span>
        <span className="text-[9px] tracking-[.16em] uppercase text-white/35 font-light"
          style={{ fontFamily: "'DM Sans', sans-serif" }}>
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
  className="absolute inset-0 bg-cover"
  style={{
    backgroundImage: "url('hero.png')",
    backgroundPosition: "center 130%",
  }}
/>
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-black/30 to-black/80" />

      {/* Floating Cards */}
      <style>{`
        @keyframes floatBounce {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-7px); }
        }
        .float-card { animation: floatBounce 3s ease-in-out infinite; }
      `}</style>

      {destinations.map((item, i) => {
        const isLeft = i === 0 || i === 2;
        return (
          <motion.div
            key={i}
            className={`absolute hidden lg:block z-10 ${floatingPos[i]} float-card`}
            style={{ animationDelay: bounceDelays[i] }}
            initial={{ opacity: 0, x: isLeft ? -120 : 120 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3 + i * 0.15, ease: "easeOut" }}
          >
            <div className="w-[160px] h-[105px] xl:w-[215px] xl:h-[140px] rounded-2xl overflow-hidden border border-white/20 shadow-[0_15px_40px_rgba(0,0,0,0.4)] hover:scale-105 transition-transform duration-500">
              <img src={item.image} alt={item.label} className="w-full h-full object-cover" />
            </div>
            <p className="text-center text-xs mt-1.5 font-medium text-white/75">{item.label}</p>
          </motion.div>
        );
      })}

      <section className="relative flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-28 md:pt-15 pb-16 min-h-screen">
        <div className="flex flex-col items-center backdrop-blur-[1px] bg-black/20 rounded-3xl justify-evenly p-10 max-w-2xl">

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
            <span className="max-w-xl text-sm md:text-lg leading-relaxed font-medium text-white/75">
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

        {/* Mobile Destination Cards */}
        <div className="lg:hidden w-full mt-5 overflow-hidden relative">
          <div className="absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-black/30 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-black/30 to-transparent z-10 pointer-events-none" />
          <motion.div
            className="flex gap-3"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            style={{ willChange: "transform", width: "max-content" }}
          >
            {[...destinations, ...destinations].map((item, i) => (
              <div key={i} className="flex-shrink-0">
                <div className="w-[130px] h-[85px] sm:w-[150px] sm:h-[100px] rounded-xl overflow-hidden border border-white/20">
                  <img src={item.image} alt={item.label} className="w-full h-full object-cover" />
                </div>
                <p className="text-center text-white/75 text-xs mt-1 font-medium">{item.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="absolute inset-3 rounded-[32px] border border-[#caf0f8]/10 pointer-events-none" />

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
