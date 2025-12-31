"use client"; // <--- MUST be the first line

import { Geist, Geist_Mono } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";

import Navbar from "@/app/components/navbar/navbar.jsx";
import Footer from "@/app/components/navbar/footer.jsx";
import { Playfair_Display, Montserrat } from 'next/font/google';
import "./globals.css";

// Fonts
const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
  display: 'swap',
});

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Client-side import of Bootstrap JS
export default function RootLayout({ children }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <html lang="en">
      <Navbar />
      <body className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${montserrat.variable}`}>
        {children}
      </body>
      <Footer />
    </html>
  );
}

