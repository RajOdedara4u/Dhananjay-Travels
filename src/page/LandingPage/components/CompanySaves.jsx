"use client";
import { motion } from "framer-motion";

const stats = [
  { val: "40%", label: "Cost Reduction" },
  { val: "10+", label: "Companies Served" },
  { val: "0",   label: "HR Complaints" },
];

export default function CompanySaves() {
  return (
    <section className="bg-white py-7 md:py-15 px-4 max-w-[90%] mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="rounded-xl bg-[#111] px-5 py-5 sm:px-7 sm:py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6"
      >
        <div>
          <p className="text-white/50 text-[0.65rem] sm:text-[0.65rem] uppercase tracking-widest">
            Average Company Saves
          </p>
          <p className="text-white font-black text-[1.5rem] sm:text-[1.3rem] md:text-[1.5rem] leading-tight mt-0.5">
            ₹2–5 Lakh <span className="text-[#C1121F]">/ year</span>
          </p>
          <p className="text-white/40 text-[0.65rem] sm:text-[0.75rem] mt-1">
            by switching from individual cab reimbursements
          </p>
        </div>

        <div className="w-full h-[1px] sm:w-[1px] sm:h-10 bg-white/15 flex-shrink-0" />

        <div className="flex justify-between sm:justify-end sm:gap-8 text-left sm:text-center">
          {stats.map(({ val, label }) => (
            <div key={label}>
              <p className="text-white font-black text-[1.2rem] sm:text-[1.1rem] md:text-[1.3rem] leading-none">
                {val}
              </p>
              <p className="text-white/40 text-[0.65rem] sm:text-[0.75rem] tracking-wide mt-0.5">
                {label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
