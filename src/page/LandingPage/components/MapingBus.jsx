"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import {
  Bus,
  ShieldCheck,
  MapPinned,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const buses = [
  {
    id: "A",
    name: "Luxury Sleeper",
    seats: 20,
    type: "PREMIUM",
    category: "AC COACH",
    images: ["/D1.jpeg", "/D2.jpeg", "/D3.jpeg"],
  },
  {
    id: "B",
    name: "Executive Coach",
    seats: 30,
    type: "BUSINESS",
    category: "SEMI SLEEPER",
    images: ["/F1.jpeg", "/F2.jpeg", "/F3.jpeg"],
  },
  {
    id: "C",
    name: "Mini Luxury",
    seats: 40,
    type: "STANDARD",
    category: "MINI BUS",
    images: ["/B1.jpeg", "/B2.jpeg", "/B3.jpeg"],
  },
  {
    id: "D",
    name: "Royal Cruiser",
    seats: 50,
    type: "LUXURY",
    category: "MULTI AXLE",
    images: ["/A1.jpeg", "/A2.jpeg", "/A3.jpeg"],
  },
  {
    id: "E",
    name: "Grand Sleeper",
    seats: 60,
    type: "ULTRA",
    category: "VOLVO AC",
    images: ["/H1.jpeg", "/H2.jpeg", "/H3.jpeg"],
  },
];

export default function MapingBus() {
  const [activeSeat, setActiveSeat] = useState(40);

  const activeBus = useMemo(() => {
    return buses.find((b) => b.seats === activeSeat);
  }, [activeSeat]);

  return (
    <section className="w-full pb-8 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4">

        {/* SEAT NAVIGATION */}
        <div className="flex items-center justify-center gap-1 md:gap-4 flex-wrap">
          {buses.map((bus) => (
            <button
              key={bus.id}
              onClick={() => setActiveSeat(bus.seats)}
              className={`relative px-3 py-1.5 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${
                activeSeat === bus.seats
                  ? "bg-white shadow-[0_6px_18px_rgba(0,0,0,0.1)] text-black"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              {bus.seats} seat
            </button>
          ))}
        </div>

        {/* GRID */}
        <AnimatePresence mode="wait">
          <div key={activeBus.id} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1fr_180px] gap-3 mt-5">

            {/* LEFT SIDE */}
            <div className="flex flex-col gap-4">
              {/* TOP IMAGE */}
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

              {/* LARGE IMAGE */}
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

            {/* CENTER */}
            <div className="flex flex-col gap-4">
              {/* INFO CARD */}
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

              {/* MAIN BUS IMAGE */}
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

                {/* FLOATING CARD */}
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

            {/* RIGHT SIDE — hidden on small, shown md+ */}
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

              {/* FEATURES */}
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