"use client";

import Image from "next/image";
import {
  BadgeDollarSign,
  CircleDollarSign,
  CreditCard,
  ShieldCheck,
  Headphones,
  CarFront,
} from "lucide-react";

const featuresLeft = [
  { icon: BadgeDollarSign, title: "Competitive Pricing" },
  { icon: CircleDollarSign, title: "Easier Rent On\nYour Budget" },
  { icon: CreditCard, title: "Most Flexible\nPayment Plans" },
];

const featuresRight = [
  { icon: ShieldCheck, title: "Extended\nBus Warranties" },
  { icon: Headphones, title: "Roadside\nAssistance 24/7" },
  { icon: CarFront, title: "Your Choice Of\nMechanic" },
];

function LeftCard({ icon: Icon, title, isFirst }) {
  return (
    <div className="flex items-center justify-end gap-0 w-full z-10">
      {/* text + icon */}
    <div className="flex flex-col justify-center items-center mx-auto">
        <div className="w-9 h-9 rounded-xl bg-[#f8f8f8] border border-gray-100 shadow-sm flex items-center justify-center mx-auto mb-2">
          <Icon className="w-4 h-4 text-red-500" strokeWidth={2.2} />
        </div>
       <p className="text-[13.5px] text-black/80 leading-[1.6] font-light mb-[14px]">
              {title}
       </p>
      </div>

      {/* connector */}
      <div className="flex items-center">
        {/* horizontal line */}
        <div className="w-16  xl:w-45 left-[27%] h-[2px] bg-[#243caa] absolute">
          {/* dot at right end */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[10px] h-[10px] rounded-full border-2 border-[#243caa] bg-white" />
        </div>
      </div>
    </div>
  );
}

function RightCard({ icon: Icon, title, isFirst }) {
  return (
    <div className="flex items-center justify-start gap-0 w-full z-10">
      {/* connector */}
        <div className="flex flex-col justify-center items-center mx-auto">
        <div className="w-9 h-9 rounded-xl bg-[#f8f8f8] border border-gray-100 shadow-sm flex items-center justify-center mx-auto mb-2">
          <Icon className="w-4 h-4 text-red-500" strokeWidth={2.2} />
        </div>
       <p className="text-[13.5px] text-black/80 leading-[1.6] font-light mb-[14px]">
              {title}
       </p>
      </div>

      {/* connector */}
      <div className="flex items-center">
        {/* horizontal line */}
        <div className="w-16  xl:w-45 right-[27%] h-[2px] bg-[#243caa] absolute">
          {/* dot at right end */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[10px] h-[10px] rounded-full border-2 border-[#243caa] bg-white" />
        </div>
      </div>
    </div>
  );
}

export default function BusBenefitsSection() {
  return (
    <section className="relative overflow-hidden py-7 max-w-[90%] mx-auto">
        {/* DESKTOP LAYOUT */}
        <div className="hidden lg:grid grid-cols-[1fr_auto_1fr] items-center gap-0">

          {/* LEFT COLUMN */}
          <div className="flex flex-col justify-between h-full gap-12">
            {featuresLeft.map((item, i) => (
              <LeftCard key={i} {...item} isFirst={i === 0} />
            ))}
          </div>

          {/* CENTER BUS */}
          <div className="flex justify-center">
            <Image
              src="/bus2.png"
              alt="Bus"
              width={500}
              height={1200}
              className="w-[420px] h-auto object-contain scale-[1.43] xl:scale-[1.63] -z-1"
              priority
            />
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col justify-between h-full gap-12">
            {featuresRight.map((item, i) => (
              <RightCard key={i} {...item} isFirst={i === 0} />
            ))}
          </div>
        </div>

        {/* MOBILE / TABLET LAYOUT */}
        <div className="lg:hidden flex flex-col items-center gap-8">
          <Image
            src="/bus2.png"
            alt="Bus"
            width={500}
            height={1200}
            className="w-[180px] sm:w-[220px] h-auto object-contain"
            priority
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            {[...featuresLeft, ...featuresRight].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex items-start gap-3 bg-gray-50 rounded-2xl p-4 border border-gray-100">
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-red-500" strokeWidth={2.2} />
                  </div>
                  <p className="text-[11.5px] text-black/80 leading-[1.6] font-light mb-[14px]">
                       {item.title}c
                   </p>
                </div>
              );
            })}
          </div>
        </div>

    </section>
  );
}
