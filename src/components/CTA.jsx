"use client";

import { Phone, Bus, ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="px-4 py-8 md:px-6">
      <div className="w-full">
        <div className="relative overflow-hidden rounded-[40px] bg-[#f4f4f4] p-3 md:p-5 shadow-xl">
          <div
            className="relative overflow-hidden rounded-[30px] h-[120px] sm:h-[200px] md:h-[220px] bg-cover bg-center"
            style={{
              backgroundImage: "url('/bg1.png')",
            }}
          >
            <div className="absolute inset-0 bg-black/25" />

            <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-transparent" />

            <div className="relative z-10 h-full flex flex-row items-center justify-between px-4 sm:px-6 md:px-10 gap-3">
              <div className="hidden sm:block max-w-xl text-white">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black leading-tight">
                  Trusted Bus Partner
                </h2>
                <p className="mt-1 text-white/90 text-[10px] sm:text-xs md:text-sm max-w-md">
                  Reliable, on-time, daily shuttles & office commutes  outstation
                  business trips across India.
                </p>
              </div>

              <div className="w-full sm:w-auto">
              <div className="bg-white/90 backdrop-blur-xl rounded-[14px] sm:rounded-[20px] p-1.5 sm:p-2.5 shadow-2xl">
                  <div className="flex gap-1.5 sm:gap-2">
                    <div className="bg-white rounded-[10px] sm:rounded-[14px] p-1.5 sm:p-2.5 flex-1 sm:min-w-[220px] md:min-w-[280px]">
                      <div className="flex items-center gap-1 sm:gap-1.5 text-[9px] sm:text-xs font-semibold text-gray-700">
                        <Bus size={9} className="sm:w-3 sm:h-3" />
                        <span>Corporate Bus Enquiry</span>
                      </div>
                      <div className="mt-1 sm:mt-2">
                        <input
                          type="text"
                          disabled
                          placeholder="Call us to discuss your route"
                          className="w-full bg-gray-100 rounded-full px-2 sm:px-3 py-1 sm:py-1.5 text-[9px] sm:text-xs outline-none cursor-not-allowed text-gray-400"
                        />
                      </div>
                    </div>

                    <a
                      href="tel:7567200702"
                      className="group bg-[#101014] text-white rounded-[10px] sm:rounded-[14px] px-2 sm:px-3 md:px-4 flex flex-col items-center justify-center gap-0.5 sm:gap-1 min-w-[56px] sm:min-w-[80px] md:min-w-[100px] transition-all duration-300 hover:scale-105"
                    >
                      <span className="text-[7px] sm:text-[9px] md:text-xs font-medium text-center">Contact Now</span>
                      <Phone size={12} className="sm:w-[18px] sm:h-[18px] transition-transform duration-300 group-hover:rotate-12" />
                      <span className="text-[6px] sm:text-[8px] md:text-[10px] text-white/70">7567200702</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-red-600/20 blur-[120px]" />
          </div>
        </div>
        </div>
    </section>
  );
}