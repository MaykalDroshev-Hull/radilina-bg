import Hero from '../Components/Hero';
import Courses from '../Components/Courses';
import Awards from '../Components/Awards';

export default function HomePage() {
  return (
    <div className="w-full max-w-[1620px] mx-auto">
      <Hero />
      <Courses />
      <Awards />
    </div>
  );
}
