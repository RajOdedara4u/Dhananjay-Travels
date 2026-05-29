"use client";
import Link from "next/link";
import { Phone, MapPin, Mail } from "lucide-react";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";

function DotPattern() {
  return (
    <svg width="140" height="100" viewBox="0 0 140 100" fill="none"
      style={{ position: "absolute", top: 16, right: 16, opacity: 0.08, pointerEvents: "none" }}>
      {[0, 18, 36, 54, 72, 90, 108, 126].map(x =>
        [0, 18, 36, 54, 72, 90].map(y => (
          <circle key={`${x}-${y}`} cx={x + 5} cy={y + 5} r="1.8" fill="#C1121F" />
        ))
      )}
    </svg>
  );
}

function CornerCircles() {
  return (
    <svg width="120" height="120" viewBox="0 0 120 120" fill="none"
      style={{ position: "absolute", bottom: 0, left: 0, opacity: 0.04, pointerEvents: "none" }}>
      <circle cx="0" cy="120" r="80" stroke="#C1121F" strokeWidth="1.5" fill="none" />
      <circle cx="0" cy="120" r="50" stroke="#C1121F" strokeWidth="1" fill="none" />
      <circle cx="0" cy="120" r="25" stroke="#C1121F" strokeWidth="0.8" fill="none" />
    </svg>
  );
}

function RouteIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
      stroke="#C1121F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="6" r="3" />
      <circle cx="18" cy="18" r="3" />
      <path d="M6 9v3a3 3 0 0 0 3 3h6" />
    </svg>
  );
}

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Our Fleet", href: "/buses" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="my-5" style={{ position: "relative"}}>

   {/* ── Divider ── */}
          <div className="" style={{ position: "relative"}}>
            <div style={{ height: 1, background: "#f0e4e4" }} />
            <div style={{
              position: "absolute", top: "50%", left: "50%",
              transform: "translate(-50%, -50%)",
              background: "#fff", padding: "0 12px",
              display: "flex", alignItems: "center", gap: 8,
            }}>
              <RouteIcon />
              <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#C1121F" }}>
                Dhananjay Travels
              </span>
              <RouteIcon />
            </div>
          </div>
      <div style={{ position: "relative", overflow: "hidden" }}>

        <DotPattern />
        <CornerCircles />

        {/* Red glow top-left */}
        <div style={{
          position: "absolute", top: -80, left: -80,
          width: 280, height: 280, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(193,18,31,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <div style={{ maxWidth: 1152, margin: "0 auto", padding: "48px 24px 0px", position: "relative", zIndex: 1 }}>

          {/* ── Top grid ── */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: "40px 32px" }}>

            {/* Brand */}
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

              <p style={{ fontSize: 12.5, color: "#5F5F5F", lineHeight: 1.75, maxWidth: 230 }}>
                Luxury tours, curated adventures & spiritual escapes across India —{" "}
                <span style={{ color: "#C1121F", fontWeight: 600 }}>crafted with care.</span>
              </p>

              {/* Social icons */}
              <div style={{ display: "flex", gap: 8 }}>
                {[BsInstagram, BsTwitter, BsFacebook, BsYoutube].map((Icon, i) => (
                  <a key={i} href="#"
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
                    <Icon size={13} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
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

            {/* Contact */}
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                <span style={{ width: 16, height: 2.5, background: "#C1121F", borderRadius: 2, display: "inline-block" }} />
                <h3 style={{ fontSize: 10, fontWeight: 800, letterSpacing: "0.28em", textTransform: "uppercase", color: "#111" }}>
                  Contact Us
                </h3>
              </div>

              {/* Phone */}
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

              {/* Email */}
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

              {/* Address */}
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
                  Shop F24, Jasraj Complex,<br />
                  Waghodia Road,<br />
                  <span style={{ color: "#C1121F", fontWeight: 600 }}>Vadodara – 390025</span>
                </p>
              </a>
            </div>

          </div>

       

          {/* ── Bottom bar ── */}
          <div className="pt-7 pb-4 flex justify-between items-center text-sm">
            <p style={{ fontSize: 11, color: "#5F5F5F" }}>
              © {new Date().getFullYear()}{" "}
              <span style={{ color: "#C1121F", fontWeight: 700 }}>Dhananjay Travels</span>
              . All rights reserved.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#FF9933", display: "inline-block" }} />
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#111", display: "inline-block" }} />
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#138808", display: "inline-block" }} />
              <p style={{ fontSize: 11, color: "#5F5F5F", marginLeft: 4 }}>Vadodara, Gujarat, India</p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
