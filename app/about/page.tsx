import PageHero from '../Components/PageHero';
import AboutUs from '../Components/AboutUs';
import HowItWorks from '../Components/HowItWorks';
import FAQ from '../Components/FAQ';

export const metadata = {
  title: 'За нас - Radilina | Ръчно изработена керамика',
  description: 'Научете повече за Radilina - семейна фирма с над 46 години опит в ръчното керамично производство от Троян, България.',
};

export default function AboutPage() {
  return (
    <div className="w-full max-w-[1620px] mx-auto">
      <PageHero
        title="Традиция, страст и занаят"
        subtitle="Семейна фирма с над 46 години опит в ръчното керамично производство от Троян, България. Всяко изделие е създадено с любов и внимание към детайла."
        images={[
          "/branding/Radilina branding_AP-238.avif",
          "/branding/Radilina branding_AP-79.avif",
          "/branding/Radilina branding_AP-74.avif",
        ]}
        ctaButtons={[
          { label: "Разгледайте продуктите", href: "/#courses" },
          { label: "Свържете се с нас", href: "/contact", variant: "secondary" },
        ]}
      />
      <AboutUs />
      <HowItWorks />
      <FAQ />
    </div>
  );
}
