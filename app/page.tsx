import Header from './Components/Header';
import Hero from './Components/Hero';
import Courses from './Components/Courses';
import SelectedProducts from './Components/SelectedProducts';
import Awards from './Components/Awards';
import AllProducts from './Components/AllProducts';
import HowItWorks from './Components/HowItWorks';
import AboutUs from './Components/AboutUs';
import FAQ from './Components/FAQ';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <div className="w-full max-w-[1620px] mx-auto">
        <Hero />
        <Courses />
        <SelectedProducts />
        <Awards />
        <AllProducts />
        <HowItWorks />
        <AboutUs />
        <FAQ />
        <Contact />
      </div>
      <Footer />
    </>
  );
}
