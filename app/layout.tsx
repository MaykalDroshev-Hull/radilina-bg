import type { Metadata } from "next";
import { Montserrat, Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "./lib/animations";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const sourceSans3 = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Radilina - Handmade Ceramic Pottery & Homeware",
  description: "Beautiful handmade ceramic pottery and homeware from Bulgaria. Each piece is lovingly crafted by hand, bringing warmth and natural beauty to your home.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${playfairDisplay.variable} ${sourceSans3.variable} antialiased`}
        style={{ backgroundColor: '#f6f7f9' }}
      >
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
