import About from '../components/About';
import AnimateIn from '../components/AnimateIn';
import { Factory, Target, Award, Users, Globe, Shield, Zap, Heart, CheckCircle, Star, Truck, Settings, Package } from 'lucide-react';

export default function AboutPage() {
  const coreValues = [
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'We maintain the highest standards in every product we manufacture, ensuring durability and reliability.',
      color: 'from-lime-400 to-lime-600'
    },
    {
      icon: Target,
      title: 'Customer Focus',
      description: 'Our customers are at the heart of everything we do. We strive to exceed expectations with every interaction.',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: Factory,
      title: 'Innovation',
      description: 'We continuously invest in modern technology and processes to deliver cutting-edge textile solutions.',
      color: 'from-purple-400 to-purple-600'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving clients worldwide with our extensive product range and reliable international shipping.',
      color: 'from-green-400 to-green-600'
    },
    {
      icon: Shield,
      title: 'Reliability',
      description: 'Trusted by industries worldwide for consistent quality and on-time delivery of textile products.',
      color: 'from-red-400 to-red-600'
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We conduct business with honesty, transparency, and ethical practices in all our operations.',
      color: 'from-pink-400 to-pink-600'
    }
  ];

  const whyChooseUs = [
    {
      icon: CheckCircle,
      title: '40+ Years Experience',
      description: 'Four decades of expertise in textile manufacturing and industry knowledge.',
      stat: '40+'
    },
    {
      icon: Users,
      title: '1000+ Happy Clients',
      description: 'A vast network of satisfied customers across various industries worldwide.',
      stat: '1000+'
    },
    {
      icon: Package,
      title: '100+ Products',
      description: 'Comprehensive range of textile products to meet diverse industrial needs.',
      stat: '100+'
    },
    {
      icon: Star,
      title: 'Premium Quality',
      description: 'Rigorous quality control processes ensuring every product meets international standards.',
      stat: '100%'
    },
    {
      icon: Truck,
      title: 'Timely Delivery',
      description: 'Efficient logistics and supply chain management for prompt order fulfillment.',
      stat: '99%'
    },
    {
      icon: Settings,
      title: 'Custom Solutions',
      description: 'Tailored manufacturing capabilities to meet specific client requirements.',
      stat: 'Custom'
    }
  ];

  const services = [
    {
      title: 'Conveyor Belts',
      description: 'High-performance conveyor belts for industrial applications with superior durability.',
    },
    {
      title: 'Filter Cloths',
      description: 'Premium filter cloths for various industries including food, chemical, and pharmaceutical.',
    },
    {
      title: 'Filter Bags',
      description: 'Efficient filter bags in multiple micron ratings for precise filtration needs.',
    },
    {
      title: 'Tents',
      description: 'Military, relief, and multipurpose tents built to withstand extreme conditions.',
    },
    {
      title: 'Canvas',
      description: 'Heavy-duty canvas materials for industrial and commercial applications.',
    },
    {
      title: 'Tarpaulin',
      description: 'Weather-resistant tarpaulin sheets for protection and covering applications.',
    }
  ];

  return (
    <div className="min-h-screen">
      <About />
      
      {/* Mission & Vision Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <AnimateIn className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Mission & Vision</h2>
            <div className="w-24 h-1 bg-lime-500 mx-auto mb-8" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-lime-400 to-lime-600 rounded-xl flex items-center justify-center mr-4">
                  <Target className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To be the leading textile manufacturer in pakistan and beyond, delivering superior quality products that meet and exceed our customers' expectations. we are committed to innovation, sustainability, and building lasting relationships with our clients through exceptional service and reliable products.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                  <Zap className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To become a globally recognized textile enterprise known for excellence, innovation, and sustainability. we envision expanding our reach to serve customers worldwide while maintaining our core values of quality, integrity, and customer satisfaction. we aim to be the preferred choice for industrial textile solutions.
              </p>
            </div>
          </div>
        </AnimateIn>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-white">
        <AnimateIn className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <div className="w-24 h-1 bg-lime-500 mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-4`}>
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </AnimateIn>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <AnimateIn className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <div className="w-24 h-1 bg-lime-500 mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What sets us apart in the textile industry
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-lime-500"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-lime-100 rounded-lg flex items-center justify-center">
                      <Icon className="text-lime-600" size={24} />
                    </div>
                    <div className="text-3xl font-bold text-lime-600">{item.stat}</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{item.description}</p>
                </div>
              );
            })}
          </div>
        </AnimateIn>
      </section>

      {/* Our Services/Products Section */}
      <section className="py-20 bg-white">
        <AnimateIn className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Product Range</h2>
            <div className="w-24 h-1 bg-lime-500 mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive textile solutions for diverse industrial needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </AnimateIn>
      </section>

      {/* Manufacturing Capabilities Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <AnimateIn className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Manufacturing Excellence</h2>
            <div className="w-24 h-1 bg-lime-500 mx-auto mb-8" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Factory className="text-lime-600 mr-3" size={32} />
                State-of-the-Art Facilities
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="text-lime-600 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span>Modern manufacturing equipment and precision technology</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-lime-600 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span>Located in kasur, the hub of pakistan's textile industry</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-lime-600 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span>Skilled workforce with decades of experience</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-lime-600 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span>Quality control processes at every stage</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Award className="text-lime-600 mr-3" size={32} />
                Quality Assurance
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="text-lime-600 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span>Rigorous testing and quality checks</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-lime-600 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span>International quality standards compliance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-lime-600 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span>Halal certified manufacturing processes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-lime-600 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span>Continuous improvement and innovation</span>
                </li>
              </ul>
            </div>
          </div>
        </AnimateIn>
      </section>
    </div>
  );
}
