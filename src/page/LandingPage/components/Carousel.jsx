
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import DotGrid from "../../../components/DotGrid"

const clients = [
  { src: "/C7.png", alt: "Client 1" },
  { src: "/C1.png", alt: "Client 2" },
  { src: "/C3.png", alt: "Client 3" },
  { src: "/C4.png", alt: "Client 4" },
  { src: "/C5.png", alt: "Client 5" },
  { src: "/C6.png", alt: "Client 6" },
  { src: "/C8.jpeg", alt: "Client 8" },
  { src: "/C2.png", alt: "Client 7" },
];

export default function Crousel() {
  
  const canvasRef = useRef(null);

  const [SIZE, setSIZE] = useState(350);

  useEffect(() => {
    const update = () => setSIZE(window.innerWidth >= 768 ? 500 : 340);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  
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

    ctx.clearRect(0, 0, SIZE, SIZE);

    ctx.beginPath();
    ctx.arc(CX, CY, OUTER_R, 0, Math.PI * 2);
    ctx.strokeStyle = "white";
    ctx.lineWidth = 2;
    ctx.stroke();

    for (let i = 0; i < N; i++) {
      const a1 = START + i * SLICE + GAP / 2;
      const a2 = START + (i + 1) * SLICE - GAP / 2;

      ctx.beginPath();
      ctx.moveTo(CX + INNER_R * Math.cos(a1), CY + INNER_R * Math.sin(a1));
      ctx.arc(CX, CY, OUTER_R, a1, a2);
      ctx.arc(CX, CY, INNER_R, a2, a1, true);
      ctx.closePath();

      ctx.fillStyle ="#ffffff";
      ctx.fill();

      ctx.strokeStyle = "white";
      ctx.lineWidth = 1.5;
      ctx.stroke();
    }

    for (let i = 0; i < N; i++) {
      const a = START + i * SLICE;
      ctx.beginPath();
      ctx.moveTo(CX + INNER_R * Math.cos(a), CY + INNER_R * Math.sin(a));
      ctx.lineTo(CX + OUTER_R * Math.cos(a), CY + OUTER_R * Math.sin(a));
      ctx.strokeStyle = "rgba(193,18,31,0.25)";
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    ctx.beginPath();
    ctx.arc(CX, CY, INNER_R, 0, Math.PI * 2);
    ctx.strokeStyle = "white";
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.beginPath();
  }, [SIZE, CX, CY, OUTER_R, INNER_R, N, SLICE, GAP, START]);

  const scale = `min(${SIZE}px, 90vw)`;

  return (
    <section className="relative bg-white flex pt-15 flex-col items-center overflow-hidden max-w-[100%] mx-auto">
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

    <h2
      className="z-10 text-[1.4rem] sm:text-[1.8rem] md:text-[2.2rem] whitespace-nowrap font-black leading-[1.2] tracking-[-0.01em] text-[#111]"
    >
      Brands That{" "}
      <span className="relative inline-block text-[#C1121F]">
        Trust Us
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
    <span className="font-semibold text-[#C1121F]">
      Dhananjay Travels
    </span>{" "}
    for corporate &amp; group tours across India.
  </p>
</div>

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
            width={SIZE}
            height={SIZE}
            className="absolute inset-0 w-full h-full"
          />

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
                  width: "92px",
                  height: "58px",
                  left: `calc(${((lx - 46) / SIZE).toFixed(4)} * ${scale})`,
                  top: `calc(${((ly - 29) / SIZE).toFixed(4)} * ${scale})`,
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
            boxShadow: "0 0 0 2px  0 4px 24px rgba(193,18,31,0.15)",
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

      <p className="mt-7 text-sm text-gray-400 tracking-wide z-10">
        Trusted by <span className="text-red-500 font-semibold">100+</span> happy clients across India
      </p>
    </section>
  );
}
