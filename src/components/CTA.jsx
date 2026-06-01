import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Phone } from "lucide-react";
import { FaBus, FaRoute, FaUsers, FaHeadset } from "react-icons/fa";

const CTA = () => <>
      <motion.div
  className="relative overflow-hidden rounded-[28px] border border-white/20 bg-white/10 backdrop-blur-2xl px-5 py-5 sm:px-7 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-white/10 to-white" />

  <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#C1121F]/20 blur-3xl rounded-full" />

  <div className="relative z-10 flex items-center gap-4">
    <motion.div
      whileHover={{ rotate: 6, scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center flex-shrink-0 border border-white/30 bg-white/20 backdrop-blur-md shadow-inner"
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="2"
          y="5"
          width="20"
          height="13"
          rx="2"
          fill="#C1121F"
          fillOpacity="0.12"
          stroke="#C1121F"
          strokeWidth="1.5"
        />
        <path d="M2 10h20" stroke="#C1121F" strokeWidth="1.2" />
        <path
          d="M7 18v1.5M17 18v1.5"
          stroke="#C1121F"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="7" cy="17" r="1.5" fill="#C1121F" />
        <circle cx="17" cy="17" r="1.5" fill="#C1121F" />
        <path
          d="M6 7h4M14 7h4"
          stroke="#C1121F"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
    </motion.div>

    <div>
      <h3 className="text-[#1A1A1A] font-black text-sm sm:text-base leading-tight">
        Ready for Your Next Journey?
      </h3>

      <p className="text-[#666] text-xs sm:text-sm mt-1 leading-relaxed">
        Book premium travel experiences with comfort & safety.
      </p>
    </div>
  </div>

  <motion.a
    whileHover={{ scale: 1.04 }}
    whileTap={{ scale: 0.96 }}
    href="tel:+917567200702"
    className="relative z-10 inline-flex items-center gap-2 text-white text-xs sm:text-sm font-semibold px-5 py-3 rounded-full overflow-hidden group"
    style={{
      background: "var(--gradient-primary)",
      boxShadow: "0 10px 25px rgba(185, 163, 165, 0.28)",
    }}
  >
    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition duration-300" />

    <Phone size={15} className="relative z-10" />

    <span className="relative z-10">Call Us Now</span>
  </motion.a>

  <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-[#C1121F] to-transparent opacity-50" />
</motion.div>
</>

export default CTA