"use client";
import { motion } from "framer-motion";
import { Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const highlights = [
  "50+ well-maintained AC & Non-AC buses",
  "Experienced, licensed & courteous drivers",
  "GPS-tracked fleet for safety",
  "Trusted by 200+ corporate clients",
];

export default function AboutCard() {
  return (
    <section className="py-7 max-w-[90%] mx-auto">
        <motion.div
          className="flex flex-col md:flex-row items-center gap-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-[#C1121F]/10 border border-[#C1121F]/20 text-[var(--text-secondary)] text-xs font-bold tracking-widest px-4 py-2 rounded-full"
            >
              <Sparkles size={12} />
              Who We Are
            </motion.div>

            <h3 className="mt-3 text-2xl sm:text-3xl font-black text-black leading-tight">
              Vadodara's Trusted <br />
              <span className="text-[var(--text-red)]">Bus Travel Partner</span>
            </h3>

            <div  className="h-1 w-10 bg-[#C1121F] rounded-full mt-4 mb-4" />

            <p className="text-[var(--text-secondary)] text-sm  leading-relaxed">
              Dhananjay Travels is a Vadodara-based travel agency specialising in premium bus services across Gujarat and India. Founded with a passion for safe, comfortable, and reliable journeys, we have grown into one of the most trusted names in group travel, corporate transportation, and pilgrimage tours.
            </p>
            <p className="mt-3 text-[var(--text-secondary)] text-sm  leading-relaxed">
              From our base at Waghodia Road, Vadodara, we operate a modern fleet of AC and Non-AC buses — ranging from 20-seat luxury coaches to 56-seat sleeper buses — serving thousands of happy travellers every year.
            </p>

            <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2">
              {highlights.map((h) => (
                <li key={h} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle2 size={14} className="text-[var(--text-red)] flex-shrink-0" />
                  {h}
                </li>
              ))}
            </ul>

            <Link href="/about">
              <motion.button
                whileHover={{ x: 3 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="mt-5 inline-flex items-center gap-2 bg-[#C1121F] hover:bg-[#A30F1A] text-white text-sm font-semibold px-4 py-3 rounded-full shadow-black/10 hover:shadow-[0_12px_32px_rgba(193,18,31,0.4)] transition-all duration-300"
              >
                Learn More About Us
                <ArrowRight size={15} />
              </motion.button>
            </Link>
          </div>

          <motion.div
            className="flex-shrink-0 w-full md:w-80"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -top-3 -left-3 w-20 h-20 rounded-full border-2 border-[#C1121F]/50 pointer-events-none" />
              <div className="absolute -bottom-3 -right-3 w-14 h-14 rounded-full border-2 border-[#C1121F]/60 pointer-events-none" />

              <div className="grid grid-cols-2 gap-3" style={{ gridTemplateRows: "160px 130px" }}>
                <div className="relative overflow-hidden shadow-lg border-2 border-[var(--border-color)] z-10" style={{ borderRadius: "2rem 0.5rem 2rem 0.5rem" }}>
                  <Image src="/background.png" alt="Fleet" fill className="object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="relative row-span-2 z-10 overflow-hidden shadow-xl border-2 border-[var(--border-color)]" style={{ borderRadius: "0.5rem 2.5rem 0.5rem 2.5rem" }}>
                  <Image src="/img1.png" alt="Journey" fill className="object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="relative overflow-hidden shadow-md border-2 border-[var(--border-color)]" style={{ borderRadius: "1.5rem 0.5rem 0.5rem 1.5rem" }}>
                  <Image src="/img2.png" alt="Comfort" fill className="object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
            </div>
          </motion.div>

        </motion.div>
    </section>
  );
}
