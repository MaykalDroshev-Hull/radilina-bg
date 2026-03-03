import type { Metadata } from "next";
import { Montserrat, Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

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

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Radilina - Ръчно изработена керамика и домакински артикули",
    template: "%s | Radilina",
  },
  description: "Красива ръчно изработена керамика и домакински артикули от България. Всяко парче е създадено с любов на ръка, носейки топлина и естествена красота във вашия дом.",
  keywords: "керамика, ръчна керамика, българска керамика, гювечи, чинии, чаши, домакински артикули, Троян, България",
  authors: [{ name: "Radilina" }],
  creator: "Radilina",
  publisher: "Radilina",
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
  openGraph: {
    type: 'website',
    locale: 'bg_BG',
    url: baseUrl,
    siteName: 'Radilina',
    title: "Radilina - Ръчно изработена керамика и домакински артикули",
    description: "Красива ръчно изработена керамика и домакински артикули от България. Всяко парче е създадено с любов на ръка, носейки топлина и естествена красота във вашия дом.",
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
    title: "Radilina - Ръчно изработена керамика и домакински артикули",
    description: "Красива ръчно изработена керамика и домакински артикули от България. Всяко парче е създадено с любов на ръка, носейки топлина и естествена красота във вашия дом.",
    images: [`${baseUrl}/images/Radilina - Logo.png`],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body
        className={`${montserrat.variable} ${playfairDisplay.variable} ${sourceSans3.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
