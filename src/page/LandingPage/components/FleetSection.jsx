"use client";
import { motion } from "framer-motion";
import MapingBus from "./MapingBus";


export default function FleetSection() {
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-7 md:mb-4 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-block text-[var(--text-red)] text-xs font-bold uppercase tracking-[0.35em]">Our Fleet</span>
          <h2 className="mt-1 text-2xl sm:text-3xl md:text-4xl font-black text-black leading-tight">
            Choose Your{" "}
            <span className="relative inline-block text-[var(--text-red)]">
              Perfect Ride
              <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 180 8" preserveAspectRatio="none" style={{ height: "7px" }}>
                <path d="M0,6 Q45,0 90,5 Q135,10 180,3" stroke="#C1121F" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
          <p className="mt-3 text-[var(--text-secondary)] text-sm sm:text-base max-w-xl mx-auto">
            From compact coaches to luxury sleepers — every bus in our fleet is maintained to the highest standard.
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
      </div>
    </section>
  );
}