import type { Metadata } from "next";
import "./globals.css";
import { Header, Footer } from "../components";
import { FloatingWhatsApp } from "@/components";

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