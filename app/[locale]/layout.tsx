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
import StructuredData from "../Components/StructuredData";

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

const baseUrl = 'https://www.radilina-bg.com';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isBg = locale === 'bg';
  
  const title = isBg 
    ? "Radilina - Ръчно изработена керамика и домакински артикули"
    : "Radilina - Handmade Ceramic Pottery & Homeware";
  
  const description = isBg
    ? "Красива ръчно изработена керамика и домакински артикули от България. Всяко парче е създадено с любов на ръка, носейки топлина и естествена красота във вашия дом."
    : "Beautiful handmade ceramic pottery and homeware from Bulgaria. Each piece is lovingly crafted by hand, bringing warmth and natural beauty to your home.";

  return {
    title,
    description,
    keywords: isBg
      ? "керамика, ръчна керамика, българска керамика, гювечи, чинии, чаши, домакински артикули, Троян, България"
      : "ceramic pottery, handmade ceramics, Bulgarian ceramics, pottery, homeware, Troyan, Bulgaria",
    authors: [{ name: "Radilina" }],
    creator: "Radilina",
    publisher: "Radilina",
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        'bg': `${baseUrl}/bg`,
        'en': `${baseUrl}/en`,
        'ro': `${baseUrl}/ro`,
      },
    },
    openGraph: {
      type: 'website',
      locale: locale === 'bg' ? 'bg_BG' : locale === 'en' ? 'en_US' : 'ro_RO',
      url: `${baseUrl}/${locale}`,
      siteName: 'Radilina',
      title,
      description,
      images: [
        {
          url: `${baseUrl}/images/Radilina - Logo.png`,
          width: 1200,
          height: 630,
          alt: 'Radilina - Handmade Ceramic Pottery',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${baseUrl}/images/Radilina - Logo.png`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      // Add Google Search Console verification code here when available
      // google: 'your-verification-code',
    },
  };
}

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
        <StructuredData />
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
