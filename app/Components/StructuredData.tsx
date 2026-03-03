export default function StructuredData() {
  const baseUrl = 'https://www.radilina-bg.com';
  
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${baseUrl}/#organization`,
    name: 'Radilina',
    description: 'Handmade ceramic pottery and homeware from Bulgaria. Each piece is lovingly crafted by hand, bringing warmth and natural beauty to your home.',
    url: baseUrl,
    logo: `${baseUrl}/images/Radilina - Logo.png`,
    image: `${baseUrl}/images/Radilina - Logo.png`,
    email: 'info.radilina@gmail.com',
    telephone: ['+359889964773', '+359887181368'],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'ул. "Христо Ботев" 231',
      addressLocality: 'Лъгат, Троян',
      postalCode: '5600',
      addressRegion: 'Ловеч',
      addressCountry: 'BG',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 42.8797495,
      longitude: 24.7089549,
    },
    priceRange: '$$',
    areaServed: {
      '@type': 'Country',
      name: 'Bulgaria',
    },
    sameAs: [],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${baseUrl}/#website`,
    url: baseUrl,
    name: 'Radilina - Handmade Ceramic Pottery',
    description: 'Beautiful handmade ceramic pottery and homeware from Bulgaria',
    publisher: {
      '@id': `${baseUrl}/#organization`,
    },
    inLanguage: ['bg', 'en', 'ro'],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
