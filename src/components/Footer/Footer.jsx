"use client";
import Link from "next/link";
import { Phone, MapPin, Mail } from "lucide-react";
import WaveDivider from "../WaveDivider"; 
import DotPattern from "../DotPattern";
import CornerCircles from "../CornerCircles";


const CURRENT_YEAR = new Date().getFullYear();

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Our Fleet", href: "/buses" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="py-3" style={{ position: "relative"}}>
      <div style={{ position: "relative", overflow: "hidden" }}>
        <WaveDivider />
        <DotPattern />
        <CornerCircles />

        <div style={{
          position: "absolute", top: -80, left: -80,
          width: 280, height: 280, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(193,18,31,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <div style={{ maxWidth: 1152, margin: "0 auto", padding: "48px 24px 0px", position: "relative", zIndex: 1 }}>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: "40px 32px" }}>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ position: "relative" }}>
                  <img src="/logo.jpeg" alt="Dhananjay Travels"
                    style={{ width: 48, height: 48, borderRadius: 12, objectFit: "cover", border: "2px solid #f0e4e4" }} />
                  <span style={{
                    position: "absolute", bottom: -2, right: -2,
                    width: 11, height: 11, borderRadius: "50%",
                    background: "#C1121F", border: "2px solid #fff",
                  }} />
                </div>
                <div>
                  <h2 style={{ fontSize: 20, fontWeight: 900, color: "#111", letterSpacing: "0.02em", lineHeight: 1.1 }}>
                    Dhananjay
                  </h2>
                  <p style={{ fontSize: 9, letterSpacing: "0.38em", textTransform: "uppercase", color: "#C1121F", fontWeight: 700 }}>
                    Travels
                  </p>
                </div>
              </div>

             <p
  style={{
    fontSize: 12.5,
    color: "#5F5F5F",
    lineHeight: 1.75,
    maxWidth: 230,
  }}
>
  Bus rentals for corporate travel, events, and group transport —{" "}
  <span style={{ color: "#C1121F", fontWeight: 600 }}>
    safe & reliable.
  </span>
</p>
              <div style={{ display: "flex", gap: 8 }}>
                {[
                  { label: "Instagram", path: "M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.197.157 3.355.673 2.014 2.014.673 3.355.157 5.197.072 7.052.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.085 1.855.601 3.697 1.942 5.038 1.341 1.341 3.183 1.857 5.038 1.942C8.332 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 1.855-.085 3.697-.601 5.038-1.942 1.341-1.341 1.857-3.183 1.942-5.038.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.668-.072-4.948-.085-1.855-.601-3.697-1.942-5.038C20.645.673 18.803.157 16.948.072 15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" },
                  { label: "Twitter", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
                  { label: "Facebook", path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
                  { label: "YouTube", path: "M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" },
                ].map(({ label, path }) => (
                  <a key={label} href="#"
                    style={{
                      width: 34, height: 34, borderRadius: "50%",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      background: "#fff0f0",
                      border: "1px solid #f3b2b9",
                      transition: "all 0.25s",
                      color: "#C1121F",
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = "#C1121F";
                      e.currentTarget.style.borderColor = "#C1121F";
                      e.currentTarget.style.color = "#fff";
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = "#fff0f0";
                      e.currentTarget.style.borderColor = "#f3b2b9";
                      e.currentTarget.style.color = "#C1121F";
                    }}
                  >
                    <svg width={13} height={13} viewBox="0 0 24 24" fill="currentColor">
                      <path d={path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                <span style={{ width: 16, height: 2.5, background: "#C1121F", borderRadius: 2, display: "inline-block" }} />
                <h3 style={{ fontSize: 10, fontWeight: 800, letterSpacing: "0.28em", textTransform: "uppercase", color: "black" }}>
                  Quick Links
                </h3>
              </div>
              {navLinks.map(({ label, href }) => (
                <Link key={label} href={href}
                  style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none", color: "#5F5F5F", fontSize: 13, transition: "color 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.color = "#C1121F"}
                  onMouseLeave={e => e.currentTarget.style.color = "#5F5F5F"}
                >
                  <svg width="5" height="5" viewBox="0 0 5 5" fill="#C1121F">
                    <circle cx="2.5" cy="2.5" r="2.5" />
                  </svg>
                  {label}
                </Link>
              ))}
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                <span style={{ width: 16, height: 2.5, background: "#C1121F", borderRadius: 2, display: "inline-block" }} />
                <h3 style={{ fontSize: 10, fontWeight: 800, letterSpacing: "0.28em", textTransform: "uppercase", color: "#111" }}>
                  Contact Us
                </h3>
              </div>

              <a href="tel:+917567200702" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
                <div style={{
                  width: 32, height: 32, borderRadius: 8, flexShrink: 0,
                  background: "#fff0f0", border: "1px solid #f3b2b9",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <Phone size={13} color="#C1121F" />
                </div>
                <div>
                  <p style={{ fontSize: 12.5, color: "#111", fontWeight: 600, lineHeight: 1.3 }}>+91 75672 00702</p>
                  <p style={{ fontSize: 11.5, color: "#5F5F5F" }}>+91 79908 52169</p>
                </div>
              </a>

              <a href="mailto:info@dhananjaytravels.com" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
                <div style={{
                  width: 32, height: 32, borderRadius: 8, flexShrink: 0,
                  background: "#fff0f0", border: "1px solid #f3b2b9",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <Mail size={13} color="#C1121F" />
                </div>
                <p style={{ fontSize: 12, color: "#5F5F5F", lineHeight: 1.3 }}>
                  info@dhananjaytravels.com
                </p>
              </a>

              <a
                href="https://maps.google.com/?q=Jasraj+Complex+Waghodia+Road+Vadodara"
                target="_blank" rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "flex-start", gap: 10, textDecoration: "none" }}
              >
                <div style={{
                  width: 32, height: 32, borderRadius: 8, flexShrink: 0, marginTop: 2,
                  background: "#fff0f0", border: "1px solid #f3b2b9",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <MapPin size={13} color="#C1121F" />
                </div>
                <p style={{ fontSize: 12, color: "#5F5F5F", lineHeight: 1.75 }}>
                  Shop F24, Jasraj Complex,
                  Waghodia Road,<br />
                  <span style={{ color: "#C1121F", fontWeight: 600 }}>Vadodara – 390025</span>
                </p>
              </a>
            </div>
          </div>

          <div className="pt-7 flex justify-between items-center text-sm">
            <p style={{ fontSize: 11, color: "#5F5F5F" }}>
              <span style={{ color: "#C1121F", fontWeight: 700 }}>Dhananjay Travels</span>
              <br />
              © {CURRENT_YEAR}. All rights reserved.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center">
              <span>
               <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#FF9933", display: "inline-block" }} />
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#111", display: "inline-block" }} />
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#138808", display: "inline-block" }} />
              </span>
              <p style={{ fontSize: 11, color: "#5F5F5F", marginLeft: 4 }}>Vadodara, Gujarat, India</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
