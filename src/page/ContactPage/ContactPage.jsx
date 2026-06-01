"use client";
import { motion } from "framer-motion";
import { IoCall } from "react-icons/io5";
import { useRef} from "react";
import { Phone, Bus, MapPin, Clock, Mail, ShieldCheck, PlaneTakeoff, Sparkles } from "lucide-react";

export default function ContactPage() {
  const heroRef = useRef(null);

  return (
    <div className="font-sans overflow-hidden">

      <div className="relative text-white/80 flex items-center justify-center overflow-hidden pt-24 sm:pt-23">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-100"
          style={{ backgroundImage: "url('/background.png')" }}
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
            <p className=" mt-4 text-sm sm:text-base max-w-xl mx-auto">
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
          <svg viewBox="0 0 1440 70" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ height: "70px", display: "block", width: "100%" }}>
            <path d="M0,35 C60,15 90,52 140,34 C190,16 220,48 270,30 C320,12 360,46 410,28 C460,10 500,44 550,26 C600,8 640,42 690,24 C740,6 780,40 830,22 C880,4 920,38 970,20 C1020,2 1060,36 1110,18 C1160,0 1200,34 1250,16 C1300,0 1360,30 1400,18 C1420,12 1432,22 1440,18 L1440,70 L0,70 Z" fill="white" />
          </svg>
        </div>
      </div>

      <div className="px-4 pt-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            <motion.div
              className="flex flex-col gap-3"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <a href="tel:+917567200702" className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#E9D8C4] hover:border-[#C1121F]/40 hover:bg-[#FFF8EE] transition-all duration-200 group shadow-sm">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 border border-[#E9D8C4] group-hover:bg-[#C1121F] group-hover:border-[#C1121F] transition-all duration-200" style={{ background: "rgba(193,18,31,0.08)" }}>
                  <Phone size={16} className="text-[#C1121F] group-hover:text-white transition-colors duration-200" />
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-widest uppercase text-[#C1121F]">Call Us</p>
                  <p className="text-[#1D1D1D] font-semibold text-sm">+91 75672 00702</p>
                  <p className="text-[#8A8A8A] text-xs">+91 79908 52169</p>
                </div>
              </a>

              <a href="mailto:info@dhananjaytravels.com" className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#E9D8C4] hover:border-[#C1121F]/40 hover:bg-[#FFF8EE] transition-all duration-200 group shadow-sm">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 border border-[#E9D8C4] group-hover:bg-[#C1121F] group-hover:border-[#C1121F] transition-all duration-200" style={{ background: "rgba(193,18,31,0.08)" }}>
                  <Mail size={16} className="text-[#C1121F] group-hover:text-white transition-colors duration-200" />
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-widest uppercase text-[#C1121F]">Email Us</p>
                  <p className="text-[#1D1D1D] font-semibold text-sm">info@dhananjaytravels.com</p>
                </div>
              </a>

              <a
                href="https://maps.google.com/?q=Jasraj+Complex+Waghodia+Road+Vadodara"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#E9D8C4] hover:border-[#C1121F]/40 hover:bg-[#FFF8EE] transition-all duration-200 group shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 border border-[#E9D8C4] group-hover:bg-[#C1121F] group-hover:border-[#C1121F] transition-all duration-200" style={{ background: "rgba(193,18,31,0.08)" }}>
                  <MapPin size={16} className="text-[#C1121F] group-hover:text-white transition-colors duration-200" />
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-widest uppercase text-[#C1121F]">Our Office</p>
                  <p className="text-[#1D1D1D] font-semibold text-sm">Shop F24, Jasraj Complex Nr,</p>
                  <p className="text-[#8A8A8A] text-xs">Parivar Char Rasta, Waghodia Road, Vadodara – 390025</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#E9D8C4] shadow-sm">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 border border-[#E9D8C4]" style={{ background: "rgba(193,18,31,0.08)" }}>
                  <Clock size={16} className="text-[#C1121F]" />
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-widest uppercase text-[#C1121F]">Working Hours</p>
                  <p className="text-[#1D1D1D] font-semibold text-sm">Mon – Sat: 9:00 AM – 8:00 PM</p>
                  <p className="text-[#8A8A8A] text-xs">24/7 support for active trips</p>
                </div>
              </div>

              <div className="flex items-center justify-between gap-3 p-4 rounded-2xl border border-[#E9D8C4]" style={{ background: "linear-gradient(135deg, #fff8ee 0%, #fff 100%)" }}>
                <p className="text-[#1D1D1D] font-semibold text-sm">Ready to book your trip?</p>
                <a
                  href="tel:+917567200702"
                  className="flex-shrink-0 flex items-center gap-1.5 text-white text-xs font-bold px-4 py-2 rounded-xl hover:opacity-90 transition-opacity"
                  style={{ background: "var(--gradient-primary)", boxShadow: "0 4px 14px rgba(193,18,31,0.25)" }}
                >
                  <IoCall size={13} />
                  Call Now
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-2"
            >
              <div className="rounded-2xl overflow-hidden shadow-md border border-[#E9D8C4]" style={{ height: "380px" }}>
                <iframe
                  title="Dhananjay Travels Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.6823!2d73.1812!3d22.2958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc5873b0f7b3b%3A0x1!2sJasraj+Complex%2C+Waghodia+Rd%2C+Vadodara%2C+Gujarat+390025!5e0!3m2!1sen!2sin!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="flex items-center gap-1.5 px-1">
                <MapPin size={12} className="text-[#C1121F] flex-shrink-0" />
                <p className="text-[#8A8A8A] text-xs">Shop F24, Jasraj Complex, Waghodia Road, Vadodara – 390025</p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
}
