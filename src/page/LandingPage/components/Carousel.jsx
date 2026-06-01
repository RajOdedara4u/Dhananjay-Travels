"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import DotGrid from "./DotGrid";

const clients = [
  { src: "/C7.png", alt: "Client 1" },
  { src: "/C1.png", alt: "Client 2" },
  { src: "/C3.png", alt: "Client 3" },
  { src: "/C4.png", alt: "Client 4" },
  { src: "/C5.png", alt: "Client 5" },
  { src: "/C6.png", alt: "Client 6" },
  { src: "/C1.png", alt: "Client 7" },
];

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

function WheelSection({ clients, size, cx, cy, outerR, innerR, n, slice, gap, start, logoR }) {
  const canvasRef = useRef(null);
  const scale = `min(${size}px, 90vw)`;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, size, size);

    ctx.beginPath();
    ctx.arc(cx, cy, outerR, 0, Math.PI * 2);
    ctx.strokeStyle = "white";
    ctx.lineWidth = 2;
    ctx.stroke();

    for (let i = 0; i < n; i++) {
      const a1 = start + i * slice + gap / 2;
      const a2 = start + (i + 1) * slice - gap / 2;
      ctx.beginPath();
      ctx.moveTo(cx + innerR * Math.cos(a1), cy + innerR * Math.sin(a1));
      ctx.arc(cx, cy, outerR, a1, a2);
      ctx.arc(cx, cy, innerR, a2, a1, true);
      ctx.closePath();
      ctx.fillStyle = "#ffffff";
      ctx.fill();
      ctx.strokeStyle = "white";
      ctx.lineWidth = 1.5;
      ctx.stroke();
    }

    for (let i = 0; i < n; i++) {
      const a = start + i * slice;
      ctx.beginPath();
      ctx.moveTo(cx + innerR * Math.cos(a), cy + innerR * Math.sin(a));
      ctx.lineTo(cx + outerR * Math.cos(a), cy + outerR * Math.sin(a));
      ctx.strokeStyle = "rgba(193,18,31,0.25)";
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    ctx.beginPath();
    ctx.arc(cx, cy, innerR, 0, Math.PI * 2);
    ctx.strokeStyle = "white";
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(cx, cy, innerR - 1, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();
  }, [size, cx, cy, outerR, innerR, n, slice, gap, start]);

  return (
    <div
      className="relative rounded-full"
      style={{
        width: scale,
        height: scale,
        boxShadow: "0 8px 48px 0 rgba(0, 0, 0, 0.1), 0 2px 16px 0 rgba(0,0,0,0.07)",
      }}
    >
      <div className="relative animate-spin-slow w-full h-full">
        <canvas
          ref={canvasRef}
          width={size}
          height={size}
          className="absolute inset-0 w-full h-full"
        />
        {clients.map((client, i) => {
          const midAngle = start + (i + 0.5) * slice;
          const lx = cx + logoR * Math.cos(midAngle);
          const ly = cy + logoR * Math.sin(midAngle);
          const rotateDeg = ((midAngle + Math.PI / 2) * 180) / Math.PI;
          return (
            <div
              key={i}
              className="absolute flex items-center justify-center z-10"
              style={{
                width: "92px",
                height: "58px",
                left: `calc(${((lx - 46) / size).toFixed(4)} * ${scale})`,
                top: `calc(${((ly - 29) / size).toFixed(4)} * ${scale})`,
              }}
            >
              <Image
                src={client.src}
                alt={client.alt}
                width={112}
                height={80}
                className="sm:max-w-[112px] rounded-full sm:max-h-[80px] max-w-[72px] max-h-[40px] object-contain animate-reverse-spin"
                style={{ transform: `rotate(${rotateDeg}deg)` }}
              />
            </div>
          );
        })}
      </div>

      <div
        className="absolute rounded-full z-20 flex items-center justify-center size-110"
        style={{
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          boxShadow: "0 0 0 2px 0 4px 24px rgba(193,18,31,0.15)",
        }}
      >
        <Image
          src="/bus.png"
          alt="Bus"
          width={520}
          height={520}
          className="object-contain size-70 md:size-130"
          style={{ right: "1%", position: "relative" }}
        />
      </div>
    </div>
  );
}

export default function Crousel() {
  return (
    <section className="relative flex py-7 pt-10 flex-col items-center overflow-hidden max-w-[100%] mx-auto">
      <div className="relative flex flex-col items-center text-center gap-0 pb-7">
        <DotGrid />
        <div className="flex items-center gap-2 mb-0 pb-2 md:pb-0">
          <span className="inline-block w-6 h-[1.5px] rounded-full bg-[#C1121F]" />
          <span className="z-10 text-[10px] font-bold uppercase tracking-[0.32em] text-[#C1121F]">
            Trusted By
          </span>
          <span className="inline-block w-6 h-[1.5px] rounded-full bg-[#C1121F]" />
        </div>

        <div className="relative flex items-center justify-center gap-3">
          <Image
            src="/leftWing.png"
            alt=""
            aria-hidden="true"
            width={180}
            height={180}
            className="absolute right-[90%] invisible sm:visible size-45 p-2 object-contain"
          />
          <h2 className="z-10 text-[1.4rem] sm:text-[1.8rem] md:text-[2.2rem] whitespace-nowrap font-black leading-[1.2] tracking-[-0.01em] text-[#111]">
            Brands That{" "}
            <span className="relative inline-block text-[#C1121F]">
              Trust Us
              <svg className="absolute left-0 bottom-[-3px] h-[7px] w-full" viewBox="0 0 120 8" preserveAspectRatio="none">
                <path d="M0,6 Q30,0 60,5 Q90,10 120,3" stroke="#C1121F" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
          <Image
            src="/rightWing.png"
            alt=""
            aria-hidden="true"
            width={180}
            height={180}
            className="absolute left-[90%] invisible sm:visible size-45 p-2 object-contain"
          />
        </div>

        <p className="z-10 mt-2 text-[0.8rem] max-w-sm px-3 leading-[1.6] text-[#5F5F5F]">
          Leading companies trust{" "}
          <span className="font-semibold text-[#C1121F]">Dhananjay Travels</span>{" "}
          for corporate &amp; group tours across India.
        </p>
      </div>

      <WheelSection
        clients={clients}
        size={SIZE}
        cx={CX}
        cy={CY}
        outerR={OUTER_R}
        innerR={INNER_R}
        n={N}
        slice={SLICE}
        gap={GAP}
        start={START}
        logoR={LOGO_R}
      />

      <p className="mt-7 text-sm text-gray-400 tracking-wide z-10">
        Trusted by <span className="text-red-500 font-semibold">100+</span> happy clients across India
      </p>
    </section>
  );
}
