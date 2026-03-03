import { Metadata } from 'next';

const baseUrl = 'https://www.radilina-bg.com';

export function createMetadata({
  title,
  description,
  path,
  locale = 'bg',
  image,
}: {
  title: string;
  description: string;
  path: string;
  locale?: string;
  image?: string;
}): Metadata {
  const url = `${baseUrl}/${locale}${path}`;
  const ogImage = image || `${baseUrl}/images/Radilina - Logo.png`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        'bg': `${baseUrl}/bg${path}`,
        'en': `${baseUrl}/en${path}`,
        'ro': `${baseUrl}/ro${path}`,
      },
    },
    openGraph: {
      type: 'website',
      locale: locale === 'bg' ? 'bg_BG' : locale === 'en' ? 'en_US' : 'ro_RO',
      url,
      siteName: 'Radilina',
      title,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}
