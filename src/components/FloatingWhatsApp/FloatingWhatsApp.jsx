"use client";
import { motion } from "framer-motion";
import {  FaWhatsapp } from "react-icons/fa";

const PHONE1 = "+917567200702";

export default function FloatingWhatsApp() {
  return (
      <motion.a
        href={`https://wa.me/${PHONE1}?text=Hi%20Dhananjay%20Travels!`}
        target="_blank" rel="noopener noreferrer"
        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.5)]   p-3.5">
        <FaWhatsapp size={24} fill="white" />
      </motion.a>
  );
}
