import Hero from '../components/Hero';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import About from '../components/About';
import Contact from '../components/Contact';
import CollectionsSection from '../components/CollectionsSection';
import Navigation from '../components/Navigation';

export default function Home() {
  return (
    <div className="bg-[#07090D] text-white overflow-x-hidden">
      <Navigation />
      <Hero />
      <Services />
      <CollectionsSection />
      <Gallery />
      <About />
      <Contact />
    </div>
  );
}
