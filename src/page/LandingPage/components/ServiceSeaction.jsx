"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Building2,  Camera, Compass,ArrowRight, 
Bus, GraduationCap, PartyPopper,
} from "lucide-react";
import {ServiceCard} from "../../../components";

const services = [
  {
    icon: Building2,
    title: "Corporate Employee Transportation",
    short: "Daily staff commute for companies, factories & institutions.",
    description: "Reliable, punctual staff transportation with professional coordination, GPS tracking, and flexible route management — built for businesses that value time.",
    features: ["Daily pickup & drop", "GPS-enabled buses", "Monthly contracts", "Large fleet availability"],
    tag: "Most Popular",
    color: "from-[#0077b6] to-[#00b4d8]",
    light: "bg-[#e0f7fa]",
    accent: "#0077b6",
  cardImage:"https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800&auto=format&fit=crop",
   },
  {
    icon: Bus,
    title: "Luxury Bus Rental",
    short: "Premium buses for trips, weddings & group travel.",
    description: "Travel in style with our AC luxury buses featuring pushback seating, entertainment systems, and spotless interiors — perfect for any occasion.",
    features: ["AC luxury buses", "Pushback seating", "Entertainment systems", "Flexible packages"],
    tag: "Premium",
    color: "from-[#03045e] to-[#0077b6]",
    light: "bg-[#e8eaf6]",
    accent: "#03045e",
     cardImage:"https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=800&auto=format&fit=crop",
  
},
  {
    icon: GraduationCap,
    title: "School & College Transport",
    short: "Safe, disciplined transport for educational institutions.",
    description: "Student safety is our top priority. Verified drivers, fixed routes, and timely operations ensure parents and institutions trust us completely.",
    features: ["Verified drivers", "Student safety first", "Fixed route management", "Timely pickup & drop"],
    tag: "Trusted",
    color: "from-[#0077b6] to-[#48cae4]",
    light: "bg-[#e0f7fa]",
    accent: "#0077b6",
  cardImage:"https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?q=80&w=800&auto=format&fit=crop",

  },
  {
    icon: PartyPopper,
    title: "Wedding & Event Transport",
    short: "Seamless guest transportation for your special day.",
    description: "From intimate gatherings to grand weddings — we coordinate multi-bus arrangements, luxury options, and on-time event logistics so you focus on celebrating.",
    features: ["Guest transportation", "Multi-bus arrangements", "On-time coordination", "Luxury & standard options"],
    tag: "Special",
    color: "from-[#48cae4] to-[#90e0ef]",
    light: "bg-[#e0f7fa]",
    accent: "#48cae4",
  cardImage:"https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=800&auto=format&fit=crop",

  },
  {
    icon: Camera,
    title: "Local City Tours",
    short: "Explore Vadodara & nearby gems with expert guides.",
    description: "Discover Vadodara, Statue of Unity, and nearby destinations with our experienced local drivers and flexible hourly booking options.",
    features: ["Vadodara sightseeing", "Statue of Unity tours", "Flexible hourly bookings", "Experienced local drivers"],
    tag: "Local",
    color: "from-[#03045e] to-[#0077b6]",
    light: "bg-[#e8eaf6]",
    accent: "#03045e",
  cardImage:"https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=800&auto=format&fit=crop",

  },
  {
    icon: Compass,
    title: "Customized Travel Planning",
    short: "Tailor-made itineraries for any group, budget & schedule.",
    description: "Tell us your destination, group size, and budget — we'll craft a personalized multi-day travel plan with dedicated support from start to finish.",
    features: ["Personalized itineraries", "Multi-day plans", "Corporate tour planning", "Budget-friendly packages"],
    tag: "Custom",
    color: "from-[#0077b6] to-[#00b4d8]",
    light: "bg-[#e0f7fa]",
    accent: "#0077b6",
  cardImage:"https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&auto=format&fit=crop",

  },
];

export default function ServiceSeaction() {
  return (
    <section className="relative md:py-10 px-4 overflow-hidden ">
      <div className="relative max-w-6xl mx-auto">

        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-[var(--text-red)] text-xs font-bold uppercase tracking-[0.35em] mb-3">
            What We Offer
          </span>
          <h2 className="text-black text-3xl sm:text-4xl font-black leading-tight">
            Services Built for{" "}
            <span className="relative inline-block text-[var(--text-red)]">
              Every Journey
              <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 180 8" preserveAspectRatio="none" style={{ height: "7px" }}>
                <path d="M0,6 Q45,0 90,5 Q135,10 180,3" stroke="#C1121F" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
          <p className="text-[var(--text-secondary)] mt-3 text-sm max-w-md mx-auto">
            From daily commutes to dream holidays — we've got every road covered.
          </p>
        </motion.div>

        {/* grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

        {/* View All CTA */}
       <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.25 }}
  className="flex justify-center mt-10"
>
  <Link
    href="/services"
    className="group inline-flex items-center gap-3 rounded-full bg-[#C1121F] hover:bg-[#A30F1A] px-6 py-3 text-[var(--text-primary)] text-sm font-semibold transition-all duration-300 shadow-[0_8px_24px_rgba(193,18,31,0.3)] hover:shadow-[0_12px_32px_rgba(193,18,31,0.4)] hover:scale-[1.02]"
  >
    View All Services
    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
  </Link>
</motion.div>

      </div>
    </section>
  );
}
