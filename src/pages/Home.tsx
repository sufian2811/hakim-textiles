import Hero from '../components/Hero';
import About from '../components/About';
import Gallery from '../components/Gallery';
import Certificate from '../components/Certificate';
import QualitySection from '../components/QualitySection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Gallery />
      <Certificate />
      <QualitySection />
    </div>
  );
}
