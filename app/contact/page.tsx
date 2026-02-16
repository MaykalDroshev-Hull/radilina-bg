import PageHero from '../Components/PageHero';
import Contact from '../Components/Contact';

export const metadata = {
  title: 'Контакти - Radilina | Свържете се с нас',
  description: 'Свържете се с Radilina за въпроси, поръчки или консултации. Намерете ни в Троян, България.',
};

export default function ContactPage() {
  return (
    <div className="w-full max-w-[1620px] mx-auto">
      <PageHero
        title="Свържете се с нас"
        subtitle="Имате въпроси или искате да направите поръчка? Ще се радваме да чуем от вас. Свържете се с нас по удобен за вас начин."
        images={[
          "/branding/Radilina branding_AP-37.avif",
          "/branding/Radilina branding_AP-70.avif",
        ]}
      />
      <Contact />
    </div>
  );
}
