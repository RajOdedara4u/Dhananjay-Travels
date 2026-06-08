"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Spinner from "@/components/Spinner";

function useCountUp(target, decimals = 0, duration = 1500) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const mounted = { current: true };
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      const tick = (now) => {
        if (!mounted.current) return;
        const progress = Math.min((now - start) / duration, 1);
        const value = progress * target;
        setCount(decimals ? parseFloat(value.toFixed(decimals)) : Math.floor(value));
        if (progress < 1) requestAnimationFrame(tick);
        else setCount(target);
      };
      requestAnimationFrame(tick);
    });
    if (ref.current) observer.observe(ref.current);
    return () => { mounted.current = false; observer.disconnect(); };
  }, [target, decimals, duration]);
  return { count, ref };
}

function CountUp({ target, suffix = "", decimals = 0 }) {
  const { count, ref } = useCountUp(target, decimals);
  return <span ref={ref}>{count}{suffix}</span>;
}

const slides = [
  { bg: "/bg3.png", word: "BUSINESS",   sub: "WE MOVE YOUR BUSINESS FORWARD" },
  { bg: "/bg2.png", word: "EXCELLENCE", sub: "DELIVERING EXCELLENCE ON EVERY ROUTE" },
  { bg: "/bg4.png", word: "ENTERPRISE", sub: "TRUSTED BY LEADING ENTERPRISES" },
  { bg: "/bg1.png", word: "CORPORATE",  sub: "PREMIUM CORPORATE TRAVEL SOLUTIONS" },
  { bg: "/bg5.png", word: "JOURNEYS",   sub: "CRAFTING SEAMLESS JOURNEYS DAILY" },
];

export default function HeroSection() {
  const stats = [
    { target: 10,  suffix: "+", title: "YEARS SERVING CORPORATES"},
    { target: 50,  suffix: "+", title: "BUSES IN FLEET"},
    { target: 4.9, suffix: "",  decimals: 1, title: "GOOGLE RATING"},
    { target: 200, suffix: "+", title: "COMPANIES TRUST US"},
  ];

  const [index, setIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let count = 0;
    slides.forEach(({ bg }) => {
      const img = new Image();
      img.src = bg;
      img.onload = img.onerror = () => {
        count++;
        if (count === slides.length) setLoaded(true);
      };
    });
  }, []);

  useEffect(() => {
    if (!loaded) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), 4000);
    return () => clearInterval(t);
  }, [loaded]);

  const current = slides[index];

  if (!loaded) {
    return (
          <Spinner />
    );
  }

  return (
    <section className="relative h-[95vh] md:h-screen overflow-hidden bg-black">

      <AnimatePresence>
        <motion.div
          key={current.bg}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 bg-contain bg-bottom bg-no-repeat md:bg-cover md:bg-center md:scale-105"
          style={{ backgroundImage: `url('${current.bg}')` }}
        />

      </AnimatePresence>

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, rgba(120,0,0,0.92) 0%, rgba(160,10,10,0.78) 20%, rgba(180,20,20,0.5) 40%, rgba(140,0,0,0.18) 60%, transparent 75%)",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
      <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 flex flex-col justify-center">
        <div className="max-w-xl">
          <motion.h2
            initial={{ opacity: 0, x: -70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white/70 uppercase font-light tracking-tight leading-none"
          >
            <span className="block text-[1.4rem] lg:text-[3.4rem]">
              BUILT FOR
            </span>
          </motion.h2>
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={current.word}
                initial={{ rotateX: -90, opacity: 0 }}
                animate={{ rotateX: 0,   opacity: 1 }}
                exit={{    rotateX:  90, opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                style={{ transformOrigin: "center", display: "block" }}
                className="text-white/80 font-black uppercase leading-none text-[3rem] lg:text-[4.9rem]"
              >
                {current.word}
              </motion.span>
            </AnimatePresence>
          </div>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ duration: 1, delay: 0.6 }}
            className="h-[3px] bg-white mt-3 mb-4"
          />
          <AnimatePresence mode="wait">
            <motion.p
              key={current.sub}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{    opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-white/60 font-semibold tracking-wide text-xs sm:text-sm md:text-base lg:text-lg uppercase"
            >
              {current.sub}
            </motion.p>
          </AnimatePresence>

          <div className="flex gap-1.5 mt-4">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-1 rounded-full transition-all duration-500 ${
                  i === index ? "w-6 bg-white" : "w-2 bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 w-[95%] max-w-3xl"
        >
          <div className="border-t border-white/50 pt-2">
            <div className="grid grid-cols-4">
              {stats.map((item, i) => (
                <div
                  key={i}
                  className={`text-center py-1.5 px-1 ${i !== stats.length - 1 ? "border-r border-white/30" : ""}`}
                >
                  <h3 className="text-white font-black text-base sm:text-xl md:text-2xl leading-none">
                    <CountUp target={item.target} suffix={item.suffix} decimals={item.decimals || 0} />
                    {item.title === "GOOGLE RATING" && (
                      <Star className="inline-block ml-1 mb-0.5 fill-yellow-400 text-yellow-400" size={14} />
                    )}
                  </h3>
                  <p className="text-white/80 text-[7px] sm:text-[8px] md:text-[9px] uppercase tracking-wider mt-0.5 leading-tight">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute top-24 left-20 w-3 h-3 bg-white/40 rounded-full blur-sm"
      />
      <motion.div
        animate={{ y: [0, 18, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        className="absolute top-40 left-40 w-2 h-2 bg-white/30 rounded-full blur-sm"
      />
    </section>
  );
}