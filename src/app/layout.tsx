import type { Metadata } from "next";
import "./globals.css";
import { Header, Footer } from "../components";
import { FloatingWhatsApp } from "@/components";

export const metadata: Metadata = {
  title: "Dhananjay Travels | Corporate & Luxury Bus Rental Services",
  description:
    "Dhananjay Travels provides reliable bus rental services for corporate transportation, employee shuttles, industrial travel, events, school trips, and group tours. Safe, comfortable, and professionally managed fleet.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full overflow-x-hidden">
        <Header />
        <main className="flex-1">
        <FloatingWhatsApp />
          {children}
        </main>
<Footer />
      </body>
    </html>
  );
}