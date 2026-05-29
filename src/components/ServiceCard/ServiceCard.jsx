"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

export default function ServiceCard({ service, index, total = 6 }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const Icon = service.icon;
  




function WaveDivider({ hovered }) {
  return (
    <svg
      viewBox="0 0 200 10" preserveAspectRatio="none"
      style={{ width: "100%", height: 10, display: "block", margin: "12px 0" }}
    >
      <path
        d="M0,5 Q25,0 50,5 Q75,10 100,5 Q125,0 150,5 Q175,10 200,5"
        stroke={hovered ? "#C1121F" : "#f1b5ba"}
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        style={{ transition: "stroke 0.4s" }}
      />
    </svg>
  );
}

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 3) * 0.09, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#fff",
        borderRadius: 16,
        boxShadow: hovered
          ? "0 20px 44px rgba(101,72,42,0.17)"
          : "0 2px 12px rgba(101,72,42,0.08)",
        overflow: "visible",          // let icon overflow the image bottom
        display: "flex",
        flexDirection: "column",
        position: "relative",
        transition: "transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        cursor: "pointer",
        overflow: "hidden",
      }}
    >
      {/* ── Image strip ──────────────────────────────────────────────────── */}
      <div
        style={{
          position: "relative",
          height: 140,
          borderRadius: "16px 16px 0 0",
          overflow: "hidden",
          flexShrink: 0,
        }}
      >
        {/* Photo */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url('${service.cardImage}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transition: "transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94)",
            transform: hovered ? "scale(1.07)" : "scale(1.01)",
          }}
        />
        {/* Bottom white shadow fade — image bleeds into card */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 70,
            background:
              "linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0.5) 50%, transparent 100%)",
          }}
        />

        {/* Tag pill */}
      <span
  className="absolute top-[10px] left-3 text-[9px] tracking-[0.16em] uppercase text-[var(--text-primary)] bg-[#C1121F] border border-[rgba(196,168,130,0.55)] px-2 py-[3px] rounded-full font-medium"
>
          {service.tag}
        </span>

        {/* Icon — centred, overlapping the image / card boundary */}
      <motion.div
  transition={{ type: "spring", stiffness: 320, damping: 22 }}
  className={`
    absolute left-1/2 -translate-x-1/2
    w-20 h-10 py-3 rounded-b-full bg-white
    flex items-center justify-center z-10
    transition-all duration-300
    ${
      hovered
        ? "border-b-[2.5px] border-b-[#C1121F] shadow-[0_6px_20px_rgba(193,18,31,0.22)]"
        : "border-b-[2.5px] border-b-[#f1b5ba] shadow-[0_4px_14px_rgba(193,18,31,0.14)]"
    }
  `}
>
  <Icon
    size={20}
    color={hovered ? "#C1121F" : "#d14a55"}
    strokeWidth={1.7}
  />
</motion.div>
      </div>

      {/* ── Card body ────────────────────────────────────────────────────── */}
      <div
        style={{
          padding: "36px 18px 18px", // 36px top gives room for the overlapping icon
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
     
        {/* Title */}
      <h3
  className="text-[18px] font-bold text-black leading-[1.2] mb-[7px]"
  style={{
    fontFamily: "'Cormorant Garamond', Georgia, serif",
  }}
>
  {service.title}
</h3>

{/* Description */}
<p className="text-[11.5px] text-black/80 leading-[1.6] font-light mb-[14px]">
  {service.short}
</p>
{/* Accent rule */}
<div className="w-8 h-[1.5px]  rounded-sm mb-3" />

        {/* Features 2-col grid */}
   <ul className="list-none p-0 grid grid-cols-2 gap-y-[5px] gap-x-2 mb-4 flex-1">
  {service.features.map((f) => (
    <li
      key={f}
      className="flex items-center gap-[5px] text-[10.5px] text-black/80"
    >
      <span className="w-[3px] h-[3px] rounded-full bg-[#C1121F] flex-shrink-0" />
      {f}
    </li>
  ))}
</ul>
<WaveDivider />

        {/* CTA */}
    <div className="flex items-center justify-between ">
  
  <span className="text-[10px] font-medium  tracking-[0.12em] uppercase text-[var(--text-red)]">
    Explore
  </span>

  <motion.div
    animate={hovered ? { rotate: 0, scale: 1.05 } : { rotate: 0, scale: 1 }}
    className={`
      w-7 h-7 rounded-full flex items-center justify-center
      transition-all duration-300
      ${
        hovered
          ? "bg-[#C1121F] border border-[#C1121F]"
          : "bg-[#FDECEF] border border-[#f3b2b9]"
      }
    `}
  >
    <ArrowUpRight
      size={13}
      color={hovered ? "#fff" : "#C1121F"}
      strokeWidth={2}
    />
  </motion.div>
</div>
      </div>
    </motion.article>
  );
}