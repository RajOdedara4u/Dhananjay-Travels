"use client";
import { motion} from "framer-motion";
import { useRef} from "react";
import {AboutCard} from "../../components";
import { Bus, MapPin, ShieldCheck, PlaneTakeoff, Sparkles } from "lucide-react";
import {TronPaperDevider} from "@/components";

export default function AboutPage() {
  const heroRef = useRef(null);

  return (
    <div className="bg-white overflow-hidden">
      <div className="relative text-white/80 flex items-center justify-center overflow-hidden pt-24 sm:pt-23">
        <div
          className="absolute inset-0 bg-cover bg-center md:bg-top  opacity-100"
          style={{ backgroundImage: "url('/G3.jpeg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b via-black/60 to-black/90" />

        <motion.div animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-[-80px] left-[-80px] w-80 h-80 rounded-full bg-[#48cae4]/20 blur-3xl pointer-events-none" />
        <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 8, repeat: Infinity, delay: 2 }}
          className="absolute bottom-[-60px] right-[-60px] w-96 h-96 rounded-full bg-[#0077b6]/25 blur-3xl pointer-events-none" />

        {[Bus, MapPin, PlaneTakeoff, ShieldCheck].map((Icon, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -14, 0], rotate: [0, i % 2 === 0 ? 8 : -8, 0] }}
            transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.8 }}
            className="absolute hidden text-grey-300 lg:flex items-center justify-center w-12 h-12 rounded-2xl backdrop-blur-sm border border-white/20 bg-white/30"
            style={{
              top: ["18%", "65%", "20%", "70%"][i],
              left: ["8%", "6%", "88%", "90%"][i],
            }}
          >
            <Icon size={20} className="  " />
          </motion.div>
        ))}

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pb-16" ref={heroRef}>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 mt-8"
          >
           
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
  Driven By{" "}
  <span className="relative inline-block text-[#C1121F]">
    Excellence
    <svg
      className="absolute -bottom-1 left-0 w-full"
      viewBox="0 0 160 8"
      preserveAspectRatio="none"
      style={{ height: "7px" }}
    >
      <path
        d="M0,6 Q40,0 80,5 Q120,10 160,3"
        stroke="#C1121F"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  </span>
</h2>

<p className="mt-4 text-[0.7rem] md:text-[1rem] sm:text-base max-w-sm md:max-w-lg mx-auto">
  Delivering safe, reliable, and comfortable transportation with a commitment to quality service and customer satisfaction.
</p>
          </motion.div>
<motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20    text-xs font-bold tracking-widest px-4 py-2 rounded-full "
          >
            <Sparkles className="text-[#C1121F]" size={12} />
           Who We Are
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 w-full z-20" style={{ lineHeight: 0 }}>
          <TronPaperDevider />
        </div>
      </div>
<AboutCard />
    </div>
  );
}
