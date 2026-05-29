"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import DotGrid from "./DotGrid"

const clients = [
  { src: "/C7.png", alt: "Client 1" },
  { src: "/C1.png", alt: "Client 2" },
  { src: "/C3.png", alt: "Client 3" },
  { src: "/C4.png", alt: "Client 4" },
  { src: "/C5.png", alt: "Client 5" },
  { src: "/C6.png", alt: "Client 6" },
  { src: "/C1.png", alt: "Client 7" },
];

export default function Crousel() {
  const canvasRef = useRef(null);

  const SIZE = 540;
  const CX = SIZE / 2;
  const CY = SIZE / 2;

  const OUTER_R = SIZE / 2 - 10;
  const INNER_R = SIZE * 0.28;

  const N = clients.length;
  const SLICE = (2 * Math.PI) / N;
  const GAP = (2 * Math.PI) / 180;
  const START = -Math.PI / 2;

  const LOGO_R = (OUTER_R + INNER_R) / 2;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    // clear
    ctx.clearRect(0, 0, SIZE, SIZE);

    // outer border circle
    ctx.beginPath();
    ctx.arc(CX, CY, OUTER_R, 0, Math.PI * 2);
    ctx.strokeStyle = "white";
    ctx.lineWidth = 2;
    ctx.stroke();

    // PIE SEGMENTS — white fill, red dividers
    for (let i = 0; i < N; i++) {
      const a1 = START + i * SLICE + GAP / 2;
      const a2 = START + (i + 1) * SLICE - GAP / 2;

      ctx.beginPath();
      ctx.moveTo(CX + INNER_R * Math.cos(a1), CY + INNER_R * Math.sin(a1));
      ctx.arc(CX, CY, OUTER_R, a1, a2);
      ctx.arc(CX, CY, INNER_R, a2, a1, true);
      ctx.closePath();

      // alternating very subtle tint
      ctx.fillStyle ="#ffffff";
      ctx.fill();

      ctx.strokeStyle = "white";
      ctx.lineWidth = 1.5;
      ctx.stroke();
    }

    // spokes
    for (let i = 0; i < N; i++) {
      const a = START + i * SLICE;
      ctx.beginPath();
      ctx.moveTo(CX + INNER_R * Math.cos(a), CY + INNER_R * Math.sin(a));
      ctx.lineTo(CX + OUTER_R * Math.cos(a), CY + OUTER_R * Math.sin(a));
      ctx.strokeStyle = "rgba(193,18,31,0.25)";
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    // inner ring border
    ctx.beginPath();
    ctx.arc(CX, CY, INNER_R, 0, Math.PI * 2);
    ctx.strokeStyle = "white";
    ctx.lineWidth = 2;
    ctx.stroke();

    // inner white disc
    ctx.beginPath();
    ctx.arc(CX, CY, INNER_R - 1, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();
  }, []);

  const scale = `min(${SIZE}px, 90vw)`;

  return (
    <section className="relative flex flex-col items-center pt-7 md:pt-14 px-4 overflow-hidden">
      {/* decorative blobs */}

      {/* heading */}
         <div className="pb-7" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 0, position: "relative" }}>

          <DotGrid />

          {/* Label */}
          <div className="pb-2 md:pb-0" style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 0 }}>
            <span style={{ width: 24, height: 1.5, background: "#C1121F", borderRadius: 2, display: "inline-block" }} />
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.32em", textTransform: "uppercase", color: "#C1121F" }} className="z-10">
              Trusted By
            </span>
            <span style={{ width: 24, height: 1.5, background: "#C1121F", borderRadius: 2, display: "inline-block" }} />
          </div>

          {/* Heading with wing images */}
          <div  style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12 }} >
            <img src="/leftWing.png" alt="" aria-hidden="true"
              style={{  objectFit: "contain" }}
               className="size-45 p-2 absolute right-[90%] invisible sm:visible" /> 

            <h2 style={{
              fontSize: "clamp(22px, 4vw, 34px)",
              fontWeight: 900, color: "#111",
              lineHeight: 1.2, letterSpacing: "-0.01em",
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              whiteSpace: "nowrap",
            }} 
            className="z-10"
            >
              Brands That{" "}
              <span style={{ position: "relative", display: "inline-block", color: "#C1121F" }}>
                Trust Us
                <svg style={{ position: "absolute", bottom: -3, left: 0, width: "100%", height: 7 }}
                  viewBox="0 0 120 8" preserveAspectRatio="none">
                  <path d="M0,6 Q30,0 60,5 Q90,10 120,3" stroke="#C1121F" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h2>

            <img src="/rightWing.png" alt="" aria-hidden="true"
              style={{objectFit: "contain" }}
              className="size-45 p-2 absolute left-[90%] invisible sm:visible" />
          </div>

          {/* Sub text */}
          <p style={{ fontSize: 13, color: "#5F5F5F", lineHeight: 1.6, maxWidth: 380, marginTop: 8 }}
          className="z-10 px-2"
          >
            Leading companies trust{" "}
            <span style={{ color: "#C1121F", fontWeight: 600 }}>Dhananjay Travels</span>
            {" "}for corporate & group tours across India.
          </p>
        </div>

      {/* SPINNING WHEEL */}
      <div
        className="relative rounded-full"
        style={{
          width: scale,
          height: scale,
          boxShadow: "0 8px 48px 0 rgba(0, 0, 0, 0.1), 0 2px 16px 0 rgba(0,0,0,0.07)",
        }}
      >
        {/* spinning part */}
        <div className="relative animate-spin-slow w-full h-full">
          {/* CANVAS */}
          <canvas
            ref={canvasRef}
            width={SIZE}
            height={SIZE}
            className="absolute inset-0 w-full h-full"
          />

          {/* LOGOS */}
          {clients.map((client, i) => {
            const midAngle = START + (i + 0.5) * SLICE;
            const lx = CX + LOGO_R * Math.cos(midAngle);
            const ly = CY + LOGO_R * Math.sin(midAngle);
            const rotateDeg = ((midAngle + Math.PI / 2) * 180) / Math.PI;

            return (
              <div
                key={i}
                className="absolute flex items-center justify-center z-10"
                style={{
                  width: "92",
                  height: "58",
                  left: `calc(${(lx - 46) / SIZE} * ${scale})`,
                  top: `calc(${(ly - 29) / SIZE} * ${scale})`,
                }}
              >
                <img
                  src={client.src}
                  alt={client.alt}
                  className="sm:max-w-[112px] sm:max-h-[80px] max-w-[72px] max-h-[40px] object-contain animate-reverse-spin "
                  style={{ transform: `rotate(${rotateDeg}deg)` }}
                />
              </div>
            );
          })}
        </div>

        {/* CENTER CIRCLE — outside spinning div, stays still */}
        <div
          className="absolute rounded-full z-20 flex items-center justify-center size-110"
          style={{
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            boxShadow: "0 0 0 2px  0 4px 24px rgba(193,18,31,0.15)",
          }}
        >
          <img
            src="/bus.png"
            alt="Bus"
            className="object-contain size-70 md:size-130"
            style={{ right: "1%", position: "relative" }}
          />
        </div>
      </div>

      {/* bottom tagline */}
      <p className="mt-7 text-sm text-gray-400 tracking-wide z-10">
        Trusted by <span className="text-red-500 font-semibold">100+</span> happy clients across India
      </p>
    </section>
  );
}