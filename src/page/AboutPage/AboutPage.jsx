"use client";
import { FaBus, FaRoute, FaUsers, FaHeadset } from "react-icons/fa";
import { AboutCard, CTA, StatsRow } from "@/components";

const stats = [
  { icon: FaBus, num: "50+", label: "Buses in Fleet" },
  { icon: FaUsers, num: "200+", label: "Corporate Clients" },
  { icon: FaRoute, num: "10K+", label: "Trips Completed" },
  { icon: FaHeadset, num: "24/7", label: "Customer Support" },
];

export default function AboutPage() {
  return (
    <div className="font-sans overflow-hidden bg-white">
      <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col gap-10">
<AboutCard />
<CTA />
      </div>
    </div>
  );
}
