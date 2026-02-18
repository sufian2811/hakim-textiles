import { useState, useEffect, useRef, useMemo, type RefObject } from 'react';
import { Award, Users, Package, TrendingUp } from 'lucide-react';
import aboutImage from './about.jpg';
import { useInView } from '../hooks/useInView';

export default function About() {
  const [headingRef, headingInView] = useInView<HTMLDivElement>();
  const [contentRef, contentInView] = useInView<HTMLDivElement>();
  const [statsRef, statsInView] = useInView<HTMLDivElement>();

  const stats = useMemo(() => [
    { icon: Award, label: 'Years of Excellence', value: '40+', target: 40, suffix: '+' },
    { icon: Users, label: 'Happy Clients', value: '1000+', target: 1000, suffix: '+' },
    { icon: Package, label: 'Product Range', value: '100+', target: 100, suffix: '+' },
    { icon: TrendingUp, label: 'Growth Rate', value: '25%', target: 25, suffix: '%' },
  ], []);

  const [animatedValues, setAnimatedValues] = useState([0, 0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const animateNumbers = () => {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      stats.forEach((stat, index) => {
        let currentStep = 0;
        const increment = stat.target / steps;

        const timer = setInterval(() => {
          currentStep++;
          const currentValue = Math.min(Math.floor(increment * currentStep), stat.target);

          setAnimatedValues((prev) => {
            const newValues = [...prev];
            newValues[index] = currentValue;
            return newValues;
          });

          if (currentStep >= steps) {
            clearInterval(timer);
          }
        }, stepDuration);
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateNumbers();
          }
        });
      },
      { threshold: 0.3 }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, [hasAnimated, stats]);

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={headingRef as RefObject<HTMLDivElement>}
          className={`text-center mb-16 transition-all duration-700 ease-out ${
            headingInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Hakim Textiles</h2>
          <div className="w-24 h-1 bg-lime-500 mx-auto mb-8" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading the textile industry with unwavering commitment to quality and innovation
          </p>
        </div>

        <div
          ref={contentRef as RefObject<HTMLDivElement>}
          className={`grid md:grid-cols-2 gap-12 items-center mb-16 transition-all duration-700 ease-out delay-200 ${
            contentInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="overflow-hidden rounded-lg">
            <img
              src={aboutImage}
              alt="About Hakim Textiles"
              className={`rounded-lg shadow-xl w-full h-[400px] object-cover transition-transform duration-700 ease-out ${
                contentInView ? 'scale-100' : 'scale-105'
              }`}
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Crafting Quality Since 1984
            </h3>
            <div className="text-gray-600 leading-relaxed space-y-4 lowercase">
              <p>
                The company was established in 1984. our traditional business model is based on the latest market trends, located in the city of pakistan named "kasur". the city is considered as the hub of textile industry. ch hakim ali enterprises is the well-known and prominent in the production of textile products like conveyor belt, filter cloth, filter bags, tents and canvas.
              </p>
              <p>
                Over the years, we have built a strong reputation for delivering high-quality textile products that meet the diverse needs of our clients. our commitment to excellence and innovation has made us a trusted name in the industry, serving customers both locally and internationally.
              </p>
              <p>
                With our strategic location in kasur, the heart of pakistan's textile industry, we have access to the finest raw materials and skilled workforce. this enables us to produce superior quality products while maintaining competitive prices and ensuring timely delivery to our valued customers.
              </p>
            </div>
          </div>
        </div>

        <div
          ref={statsRef as RefObject<HTMLDivElement>}
          className={`grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-700 ease-out ${
            statsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-lime-100 rounded-full mb-4">
                  <Icon className="text-lime-600" size={32} />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {animatedValues[index]}{stat.suffix}
                </div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
