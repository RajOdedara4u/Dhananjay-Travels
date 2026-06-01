import { motion } from "framer-motion";
import { FaBus, FaRoute, FaUsers, FaHeadset } from "react-icons/fa";

const StatsRow = () =>{
  const stats = [
  { icon: FaBus, num: "50+", label: "Buses in Fleet" },
  { icon: FaUsers, num: "200+", label: "Corporate Clients" },
  { icon: FaRoute, num: "10K+", label: "Trips Completed" },
  { icon: FaHeadset, num: "24/7", label: "Customer Support" },
];


return ( 
<motion.div
  className="grid grid-cols-2 sm:grid-cols-4 gap-3"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  {stats.map(({ icon: Icon, num, label }, i) => (
    <motion.div
      key={label}
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.45,
        delay: i * 0.08,
        type: "spring",
        stiffness: 120,
      }}
      whileHover={{
        y: -4,
        scale: 1.02,
      }}
      className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 backdrop-blur-lg px-3 py-4 text-center shadow-[0_6px_20px_rgba(0,0,0,0.06)]"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#C1121F]/10 via-white/5 to-[#780000]/10 opacity-0 group-hover:opacity-100 transition duration-500" />

      <div className="absolute -top-6 -right-6 w-16 h-16 bg-[#C1121F]/15 blur-2xl rounded-full" />

      <motion.div
        whileHover={{ rotate: 5, scale: 1.05 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="relative z-10 mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl border border-white/30 bg-white/20 backdrop-blur-md"
      >
        <Icon
          size={18}
          className="text-[#C1121F] drop-shadow-[0_0_8px_rgba(193,18,31,0.35)]"
        />
      </motion.div>

      <h3 className="relative z-10 text-xl sm:text-2xl font-black tracking-tight text-[#1A1A1A] leading-none">
        {num}
      </h3>

      <p className="relative z-10 mt-1 text-[11px] sm:text-xs font-medium tracking-wide text-[#666] leading-tight">
        {label}
      </p>

      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-[#C1121F] to-transparent opacity-40 group-hover:opacity-100 transition duration-500" />
    </motion.div>
  ))}
</motion.div>)
}

export default StatsRow