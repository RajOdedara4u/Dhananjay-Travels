"use client";
import { motion} from "framer-motion";
import { useRef} from "react";
import {ServiceCard, TronPaperDevider} from "../../components";
import { Building2, Bus, MapPin, GraduationCap, PartyPopper,
  Camera, Compass, ShieldCheck, PlaneTakeoff, Sparkles
} from "lucide-react";

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
    icon: GraduationCap,
    title: "School & College Transport",
    short: "Safe, disciplined transport for educational institutions.",
    description: "Student safety is our top priority. Verified drivers, fixed routes, and timely operations ensure parents and institutions trust us completely.",
    features: ["Verified drivers", "Student safety first", "Fixed route management", "Timely pickup & drop"],
    tag: "Trusted",
    color: "from-[#0077b6] to-[#48cae4]",
    light: "bg-[#e0f7fa]",
    accent: "#0077b6",
    cardImage:"https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&auto=format&fit=crop",
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
  icon: MapPin,
  title: "Tourist & Holiday Travel",
  short: "Memorable tours across Gujarat and all of India.",
  description: "From Gujarat sightseeing to pan-India pilgrimages and weekend getaways — we craft journeys that become lifelong memories for families and groups.",
  features: ["Gujarat sightseeing", "Outstation trips", "Pilgrimage tours", "Weekend getaways"],
  tag: "Trending",
  color: "from-[#00b4d8] to-[#48cae4]",
  light: "bg-[#e0f7fa]",
  accent: "#00b4d8",
  cardImage:"https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&auto=format&fit=crop",
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
    cardImage:"https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop",
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
    cardImage:"https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=800&auto=format&fit=crop",
   },
  {
    icon: ShieldCheck,
    title: "Professional Drivers & Fleet",
    short: "Trained drivers and well-maintained buses, always.",
    description: "Every bus is regularly sanitized and maintained. Every driver is licensed, trained, and safety-certified — because your journey deserves nothing less.",
    features: ["Trained & licensed drivers", "Clean sanitized buses", "Regular maintenance", "24/7 support"],
    tag: "Safe",
    color: "from-[#00b4d8] to-[#48cae4]",
    light: "bg-[#e0f7fa]",
    accent: "#00b4d8",
    cardImage:"https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop",
  },
  {
    icon: PlaneTakeoff,
    title: "Airport & Railway Transfers",
    short: "Punctual transfers for airports, stations & hotels.",
    description: "Never miss a flight or train again. Our reliable transfer service handles group pickups, luggage space, and flexible scheduling with easy booking.",
    features: ["Timely transfers", "Group pickup services", "Comfortable luggage space", "Easy booking support"],
    tag: "Express",
    color: "from-[#03045e] to-[#0077b6]",
    light: "bg-[#e8eaf6]",
    accent: "#03045e", 
    cardImage:"https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?q=80&w=800&auto=format&fit=crop",

  },
];

export default function ServicesPage() {
  const heroRef = useRef(null);

  return (
    <div className="bg-white overflow-hidden">

      <div className="relative text-white/80 flex items-center justify-center overflow-hidden pt-24 sm:pt-23">
        <div
          className="absolute inset-0 bg-cover bg-bottom md:bg-center opacity-100"
          style={{ backgroundImage: "url('/D3.jpeg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b via-black/60 to-black/90" />

        <motion.div animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-[-80px] left-[-80px] w-80 h-80 rounded-full bg-[#48cae4]/20 blur-3xl pointer-events-none" />
        <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 8, repeat: Infinity, delay: 2 }}
          className="absolute bottom-[-60px] right-[-60px] w-96 h-96 rounded-full bg-[#0077b6]/25 blur-3xl pointer-events-none" />

        {[Bus, MapPin, PlaneTakeoff, ShieldCheck].map((Icon, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -14, 0], rotate: [0, i % 2 === 0 ? 8 : -8, 0] }}
            transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.8 }}
            className="absolute hidden text-grey-300 lg:flex items-center justify-center w-12 h-12 rounded-2xl backdrop-blur-sm border border-white/20 bg-white/30"
            style={{
              top: ["18%", "65%", "20%", "70%"][i],
              left: ["8%", "6%", "88%", "90%"][i],
            }}
          >
            <Icon size={20} className="  " />
          </motion.div>
        ))}

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pb-16" ref={heroRef}>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 mt-8"
          >
           
            <h2 className="  text-3xl sm:text-4xl font-black tracking-tight">
              Everything You Need,{" "}
              <span className="relative inline-block text-[#C1121F]">
                One Place
                <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 160 8" preserveAspectRatio="none" style={{ height: "7px" }}>
                  <path d="M0,6 Q40,0 80,5 Q120,10 160,3" stroke="#C1121F" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
            <p className=" mt-4 text-[0.7rem] md:text-[1rem] sm:text-base max-w-sm md:max-w-lg mx-auto">
              Specialized services specially designed to move people safely, comfortably, and on time — every single trip.
            </p>
          </motion.div>
<motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20    text-xs font-bold tracking-widest px-4 py-2 rounded-full "
          >
            <Sparkles className="text-[#C1121F]" size={12} />
           What We Offer
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 w-full z-20" style={{ lineHeight: 0 }}>
<TronPaperDevider />
        </div>
      </div>

     

      <div className="  px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ServiceCard key={service.title} service={service} index={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
