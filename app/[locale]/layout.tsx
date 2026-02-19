import type { Metadata } from "next";
import { Montserrat, Playfair_Display, Source_Sans_3 } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '../../i18n/routing';
import "../globals.css";
import { LenisProvider } from "../lib/animations";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

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

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${montserrat.variable} ${playfairDisplay.variable} ${sourceSans3.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <LenisProvider>
            <Header />
            {children}
            <Footer />
          </LenisProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
