"use client";

import Image from "next/image";
import {
  BadgeDollarSign,
  CircleDollarSign,
  CreditCard,
  ShieldCheck,
  Headphones,
  CarFront,
} from "lucide-react";
import { motion } from "framer-motion";

const featuresLeft = [
  { icon: BadgeDollarSign, title: "Competitive Pricing" },
  { icon: CircleDollarSign, title: "Easier Rent On\nYour Budget" },
  { icon: CreditCard, title: "Most Flexible\nPayment Plans" },
];

const featuresRight = [
  { icon: ShieldCheck, title: "Extended\nBus Warranties" },
  { icon: Headphones, title: "Roadside\nAssistance 24/7" },
  { icon: CarFront, title: "Your Choice Of\nMechanic" },
];

function LeftCard({ icon: Icon, title, index }) {
  return (
    <motion.div
      className="flex items-center justify-end gap-0 w-full z-10"
    >
      <motion.div
        className="flex flex-col justify-center items-center mx-auto"
        whileHover={{ scale: 1.08 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <motion.div
          className="w-9 h-9 rounded-xl bg-[#f8f8f8] border border-gray-100 shadow-sm flex items-center justify-center mx-auto mb-2"
          initial={{ rotate: -20, opacity: 0 }}
          whileInView={{ rotate: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.15 + 0.2 }}
        >
          <Icon className="w-4 h-4 text-red-500" strokeWidth={2.2} />
        </motion.div>
        <p className="text-[0.5rem] text-center md:text-[0.7rem] text-black/80 leading-[1.6] font-light mb-[14px]">
          {title}
        </p>
      </motion.div>

      {/* connector */}
      <div className="invisible md:visible flex items-center">
        <motion.div
          className="w-6 sm:w-10 md:w-16 xl:w-45 left-[27%] h-[2px] bg-[#243caa] absolute"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.15 + 0.3 }}
          style={{ originX: 1 }}
        >
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[10px] h-[10px] rounded-full border-2 border-[#243caa] bg-white" />
        </motion.div>
      </div>
    </motion.div>
  );
}

function RightCard({ icon: Icon, title, index }) {
  return (
    <motion.div
      className="flex items-center justify-start gap-0 w-full z-10"
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
    >
      <motion.div
        className="flex flex-col justify-center items-center mx-auto"
        whileHover={{ scale: 1.08 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <motion.div
          className="w-9 h-9 rounded-xl bg-[#f8f8f8] border border-gray-100 shadow-sm flex items-center justify-center mx-auto mb-2"
          initial={{ rotate: 20, opacity: 0 }}
          whileInView={{ rotate: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.15 + 0.2 }}
        >
          <Icon className="w-4 h-4 text-red-500" strokeWidth={2.2} />
        </motion.div>
        <p className="text-[0.5rem] text-center md:text-[0.7rem] text-black/80 leading-[1.6] font-light mb-[14px]">
          {title}
        </p>
      </motion.div>

      {/* connector */}
      <div className="flex items-center invisible md:visible">
        <motion.div
          className="w-6 sm:w-10 md:w-16 xl:w-45 right-[27%] h-[2px] bg-[#243caa] absolute"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.15 + 0.3 }}
          style={{ originX: 0 }}
        >
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[10px] h-[10px] rounded-full border-2 border-[#243caa] bg-white" />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function BusBenefitsSection() {
  return (
    <section className="relative overflow-hidden py-7 max-w-[90%] mx-auto">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-0">

          {/* LEFT COLUMN */}
          <div className="flex flex-col justify-between h-full gap-6 md:gap-12">
            {featuresLeft.map((item, i) => (
              <LeftCard key={i} {...item} isFirst={i === 0} />
            ))}
          </div>

          {/* CENTER BUS */}
          <div className="flex justify-center">
            <Image
              src="/bus2.png"
              alt="Bus"
              width={500}
              height={1200}
              className="w-[220px] md:w-[320px] lg:w-[420px] h-auto object-contain scale-[1.43] xl:scale-[1.63] -z-1"
              priority
            />
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col justify-between h-full gap-6 md:gap-12">
            {featuresRight.map((item, i) => (
              <RightCard key={i} {...item} isFirst={i === 0} />
            ))}
          </div>
        </div>
    </section>
  );
}
