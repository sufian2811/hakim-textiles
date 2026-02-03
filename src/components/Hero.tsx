import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import heroImage from './hero-image.jpg';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      />
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 opacity-0 animate-hero-text animate-fill-both">
          Premium Quality Textiles
        </h1>
        <p className="text-xl md:text-2xl text-lime-100 mb-8 max-w-3xl mx-auto opacity-0 animate-fade-in-up animate-fill-both animate-delay-300">
          Crafting excellence in fabrics with over 30 years of industry expertise.
          Your trusted partner for superior textile solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up animate-fill-both animate-delay-500">
          <button
            onClick={() => navigate('/about')}
            className="bg-white text-lime-700 px-8 py-4 rounded-lg font-semibold hover:bg-lime-50 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <span>Explore Us</span>
            <ArrowRight size={20} />
          </button>
          <button
            onClick={() => navigate('/contact')}
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-lime-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Get In Touch
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full" />
        </div>
      </div>
    </section>
  );
}
