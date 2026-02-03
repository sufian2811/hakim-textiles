import { Truck, Trophy, Users, User, FileText, Cog } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export default function QualitySection() {
  const [headingRef, headingInView] = useInView<HTMLDivElement>();
  const [cardsRef, cardsInView] = useInView<HTMLDivElement>();

  const features = [
    {
      icon: Truck,
      title: 'We Deliver in Time',
      description: 'The best thing is that, We always deliver on time. We know that your time is precious, so we always try to deliver on time.',
    },
    {
      icon: Trophy,
      title: 'A Premium Service',
      description: 'Hakim Ali Ansari Enterprises Provides a Premium and Quality Service to their clients in all over the world.',
    },
    {
      icon: Users,
      title: 'We Amaze Clients',
      description: 'We always amaze our clients by providing satisfactory products and services.',
    },
    {
      icon: User,
      title: 'Client Satisfaction',
      description: 'We are possess to satisfy our clients. We believe that "A satisfied customer is the best business strategy of all".',
    },
    {
      icon: FileText,
      title: 'We Manufacture',
      description: 'We believe that Manufacturing Excellence is delivered through focus on process efficiencies and Unique machinery modifications.',
    },
    {
      icon: Cog,
      title: 'We Engineer',
      description: 'We have developed textile solutions for many different applications and are experts in understanding customer\'s requirements.',
    },
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-gray-50 to-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={headingRef}
          className={`text-center mb-10 transition-all duration-700 ease-out ${
            headingInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-lime-600 text-sm font-medium mb-2 uppercase tracking-wide">
            Quality is the best business plan and...
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Quality is Our Passion
          </h2>
          <div className="w-24 h-1 bg-lime-500 mx-auto" />
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className={`group bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 ${
                  cardsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={cardsInView ? { transitionDelay: `${index * 80}ms`, transitionDuration: '500ms' } : {}}
              >
                <div className="mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-lime-400 to-lime-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <IconComponent size={28} className="text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-lime-600 transition-colors">
                  {feature.title}
                </h3>
                <div className="w-12 h-0.5 bg-lime-500 mb-3 rounded-full" />
                <p className="text-gray-600 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
