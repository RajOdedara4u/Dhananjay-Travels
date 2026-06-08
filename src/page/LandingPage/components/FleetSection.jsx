"use client";
import { motion } from "framer-motion";
import MapingBus from "./MapingBus";


export default function FleetSection() {
  return (
    <section className="py-7 max-w-[90%] mx-auto">
        <motion.div
          className="text-center mb-7 md:mb-4 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
           <div className="flex items-center justify-center gap-2 mb-0 pb-2 md:pb-0">
    <span className="inline-block w-6 h-[1.5px] rounded-full bg-[#C1121F]" />
    <span className="z-10 text-[10px] font-bold uppercase tracking-[0.32em] text-[#C1121F]">
      Our Fleet
    </span>
    <span className="inline-block w-6 h-[1.5px] rounded-full bg-[#C1121F]" />
  </div>
            <h2 className="z-10 text-[1.4rem] sm:text-[1.8rem] md:text-[2.2rem] whitespace-nowrap font-black leading-[1.2] tracking-[-0.01em] text-[#111]">
      Choose Your{" "}
      <span className="relative inline-block text-[#C1121F]">
        Perfect Ride
        <svg
          className="absolute left-0 bottom-[-3px] h-[7px] w-full"
          viewBox="0 0 120 8"
          preserveAspectRatio="none"
        >
          <path
            d="M0,6 Q30,0 60,5 Q90,10 120,3"
            stroke="#C1121F"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </span>
    </h2>
  <p className="z-10 mx-auto mt-2 text-[0.8rem] max-w-sm px-3 leading-[1.6] text-[#5F5F5F]">
  Every Bus in our fleet is{" "}
    <span className="font-semibold text-[#C1121F]"> {" "}
      maintained
      </span>
    {" "} — to the highest standard.
  </p>
          <motion.div
            className="mx-auto mt-5 mb-5 h-1 w-16 rounded-full bg-[#C1121F]"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
        </motion.div>
        <MapingBus />
    </section>
  );
}