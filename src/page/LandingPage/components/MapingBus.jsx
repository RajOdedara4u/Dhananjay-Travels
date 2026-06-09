"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Bus, ShieldCheck, MapPinned, Armchair, Zap, Wind } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const buses = [
  {
    id: "A",
    name: "20 Seat Premium Coach",
    seats: 20,
    type: "PREMIUM",
    category: "2×1 AC",
    images: ["/D1.jpeg", "/D2.jpeg", "/D3.jpeg"],
  },
  {
    id: "B",
    name: "25 Seater Bus",
    seats: 25,
    type: "STANDARD",
    category: "2×2 AC",
     images: ["/G1.jpeg", "/G2.jpeg", "/G3.jpeg"],
  },
  {
    id: "C",
    name: "29 Seater Bus",
    seats: 29,
    type: "STANDARD",
    category: "2×2 AC",
    images: ["/F1.jpeg", "/F2.jpeg", "/F3.jpeg"],
  },
  {
    id: "D",
    name: "37 Seater Bus",
    seats: 37,
    type: "EXECUTIVE",
    category: "2×2 AC",
    images: ["/E1.jpeg", "/E2.jpeg", "/E3.jpeg"],
  },
  {
    id: "E",
    name: "56 Seater Deluxe AC",
    seats: 56,
    type: "DELUXE",
    category: "3×2 AC",
    images: ["/A1.jpeg", "/A2.jpeg", "/A3.jpeg"],
  },
  {
    id: "F",
    name: "56 Seater Deluxe",
    seats: 56,
    type: "DELUXE",
    category: "3×2 NON AC",
    images: ["/B1.jpeg", "/B2.jpeg", "/B3.jpeg"],
     },
  {
    id: "G",
    name: "56 Seater Standard",
    seats: 56,
    type: "STANDARD",
    category: "3×2 NON AC",
    images: ["/H1.jpeg", "/H2.jpeg", "/H3.jpeg"],
  },
];


export default function MapingBus() {
  const [activeId, setActiveId] = useState(buses[0].id);

  const activeBus = useMemo(() => {
    return buses.find((b) => b.id === activeId);
  }, [activeId]);

  return (
    <section className="w-full bg-white pb-8 overflow-hidden">
      <div className="max-w-5xl mx-auto md:px-4">

        <div className="flex items-center justify-center gap-1.5 md:gap-2 flex-wrap mb-5">
          {buses.map((bus) => {
            const Icon = bus.icon;
            const isActive = activeId === bus.id;
            return (
              <button
                key={bus.id}
                onClick={() => setActiveId(bus.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[0.6rem] sm:text-[0.7rem] md:text-xs font-semibold border transition-all duration-300 ${
                  isActive
                    ? "bg-red-600 text-white border-red-600 shadow-md shadow-red-200"
                    : "bg-white text-gray-500 border-gray-200 hover:border-red-300 hover:text-red-500"
                }`}
              >
                <Armchair size={11} />
                <span>{bus.seats}</span>
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <div key={activeBus.id} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1fr_180px] gap-3 mt-5">

            <div className="flex flex-col gap-4">
              <motion.div
                key={activeBus.id + "-img0"}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="relative h-[120px] md:h-[130px] rounded-xl overflow-hidden group"
              >
                <Image
                  src={activeBus.images[0]}
                  alt=""
                  fill
                  priority={activeBus.seats === 40}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </motion.div>

              <motion.div
                key={activeBus.id + "-img1"}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative h-[200px] md:h-[220px] rounded-xl overflow-hidden group"
              >
                <Image
                  src={activeBus.images[1]}
                  alt=""
                  fill
                  priority={activeBus.seats === 40}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            </div>

            <div className="flex flex-col gap-4">
              <motion.div
                key={activeBus.id + "-info"}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-[#e9e9e9] rounded-xl px-4 py-4 flex flex-col justify-center h-[120px] md:h-[130px]"
              >
                <div className="flex items-end gap-2">
                  <h2 className="text-4xl leading-none font-black text-red-600">
                    {activeBus.seats}
                  </h2>
                  <span className="text-lg font-light text-gray-700 mb-0.5">
                    SEATS
                  </span>
                </div>
                <div className="mt-1.5 flex items-center gap-2 text-gray-600 text-xs tracking-wide">
                  <span>{activeBus.type}</span>
                  <div className="w-px h-4 bg-gray-400" />
                  <span>{activeBus.category}</span>
                </div>
              </motion.div>

              <motion.div
                key={activeBus.id + "-img2"}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative h-[200px] md:h-[220px] rounded-xl overflow-hidden group"
              >
                <Image
                  src={activeBus.images[2]}
                  alt=""
                  fill
                  priority={activeBus.seats === 40}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-xl rounded-lg px-3 py-2 shadow-md">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-red-50 flex items-center justify-center">
                      <Bus className="text-red-600" size={14} />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs text-black">{activeBus.name}</h4>
                      <p className="text-gray-500 text-[10px]">Premium Travel Experience</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              key={activeBus.id + "-right"}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative h-[355px] rounded-xl overflow-hidden group hidden lg:block"
            >
              <Image
                src={activeBus.images[0]}
                alt=""
                fill
                priority={activeBus.seats === 40}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-2">
                {[
                  { icon: Bus, title: "LUXURY", subtitle: "PREMIUM COACH" },
                  { icon: ShieldCheck, title: "SAFE", subtitle: "SECURE JOURNEY" },
                  { icon: MapPinned, title: "ROUTES", subtitle: "ALL INDIA" },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={i}
                      className="bg-white/90 backdrop-blur-xl rounded-lg p-2 flex items-center gap-2 hover:bg-white transition-colors duration-200"
                    >
                      <div className="w-7 h-7 rounded-md bg-red-50 flex items-center justify-center">
                        <Icon className="text-red-600" size={14} />
                      </div>
                      <div>
                        <h5 className="font-bold text-[10px] text-black leading-none">{item.title}</h5>
                        <p className="text-gray-500 text-[10px] mt-0.5">{item.subtitle}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </AnimatePresence>
      </div>
    </section>
  );
}