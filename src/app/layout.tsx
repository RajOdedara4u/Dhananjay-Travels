import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Inter,
  Playfair_Display,
} from "next/font/google";

import "./globals.css";

import { Header, Footer, } from "../components";
import { FloatingWhatsApp } from "@/components";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Dhananjay Travels",
  description: "Luxury travel experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`
        ${geistSans.variable}
        ${geistMono.variable}
        ${inter.variable}
        ${playfair.variable}
        h-full
        antialiased
      `}
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