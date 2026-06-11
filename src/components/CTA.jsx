"use client";

import { Phone, Bus, ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="px-4 py-8 md:px-6">
      <div className="w-full">
        <div className="relative overflow-hidden rounded-[40px] bg-[#f4f4f4] p-3 md:p-5 shadow-xl">
          <div
            className="relative overflow-hidden rounded-[30px] h-[180px] sm:h-[200px] md:h-[220px] bg-cover bg-center"
            style={{
              backgroundImage: "url('/bg1.png')",
            }}
          >
            <div className="absolute inset-0 bg-black/25" />

            <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-transparent" />

            <div className="relative z-10 h-full flex flex-col sm:flex-row items-center justify-between px-5 md:px-10 py-4 gap-3 sm:gap-0">
              <div className="max-w-xl text-white text-center sm:text-left">
                <h2 className="text-base sm:text-2xl md:text-3xl lg:text-4xl font-black leading-tight">
                  Travel Without Limits
                </h2>
                <p className="mt-1 text-white/90 text-[9px] sm:text-xs md:text-sm max-w-md hidden sm:block">
                  Premium bus rentals for corporate tours, group travel,
                  weddings, events and outstation journeys across India.
                </p>
              </div>

              <div className="w-full sm:w-auto sm:mt-0">
                <div className="bg-white/90 backdrop-blur-xl rounded-[20px] p-2.5 shadow-2xl">
                  <div className="flex gap-2">
                    <div className="bg-white rounded-[14px] p-2.5 flex-1 sm:min-w-[220px] md:min-w-[280px]">
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-700">
                        <Bus size={12} />
                        <span>Your Journey</span>
                      </div>
                      <div className="mt-2">
                        <input
                          type="text"
                          placeholder="Tell us your destination"
                          className="w-full bg-gray-100 rounded-full px-3 py-1.5 text-xs outline-none"
                        />
                      </div>
                    </div>

                    <a
                      href="tel:7567200702"
                      className="group bg-[#101014] text-white rounded-[14px] px-3 sm:px-4 flex flex-col items-center justify-center gap-1 min-w-[80px] sm:min-w-[100px] transition-all duration-300 hover:scale-105"
                    >
                      <span className="text-[9px] sm:text-[10px] md:text-xs font-medium text-center">Contact Now</span>
                      <Phone size={18} className="transition-transform duration-300 group-hover:rotate-12" />
                      <span className="text-[8px] sm:text-[10px] text-white/70">7567200702</span>
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