import ProductCard from '../components/ProductCard';
import AnimateIn from '../components/AnimateIn';
import heroImage from '../tents/universaal.jpg';
// Category representative images
import reliefTentCategoryImage from '../tents/relief tents/1.jpg';
import militaryTentCategoryImage from '../tents/military tents/universaal.jpg';
import marqueeTentCategoryImage from '../tents/marqee tents/1.jpg';
import duluxTentCategoryImage from '../tents/dulux tents/101.png';
import shelterTentCategoryImage from '../tents/shelter tents/1.png';
import kuwaitiTentCategoryImage from '../tents/Kuwaiti dulux tents/Kuwaiti Dulux Tent HT-101.jpg';
import multipurposeTentCategoryImage from '../tents/multipurpose tents/1.png';

// Main tent categories
const tentCategories = [
  { 
    name: 'Relief/Disaster Tents', 
    id: 'relief',
    description: 'High-quality relief and disaster tents designed for emergency situations and humanitarian aid.',
    categoryId: 'tents-relief',
    imageUrl: reliefTentCategoryImage
  },
  { 
    name: 'Military Tents', 
    id: 'military',
    description: 'Durable military-grade tents built for rugged conditions and tactical operations.',
    categoryId: 'tents-military',
    imageUrl: militaryTentCategoryImage
  },
  { 
    name: 'Deluxe Tents', 
    id: 'dulex',
    description: 'Premium Arabic Deluxe tents available in various models and configurations.',
    categoryId: 'tents-dulex',
    imageUrl: duluxTentCategoryImage
  },
  { 
    name: 'Shelter Tents', 
    id: 'shelter',
    description: 'Versatile shelter tents for general purpose, hospital, party, and multipurpose applications.',
    categoryId: 'tents-shelter',
    imageUrl: shelterTentCategoryImage
  },
  { 
    name: 'Marquee Tents', 
    id: 'marquee',
    description: 'Elegant marquee tents perfect for events, gatherings, and special occasions.',
    categoryId: 'tents-marquee',
    imageUrl: marqueeTentCategoryImage
  },
  { 
    name: 'Kuwaiti Deluxe Tent', 
    id: 'kuwaiti-dulex',
    description: 'Specialized Kuwaiti Deluxe tents with premium quality and design.',
    categoryId: 'tents-kuwaiti-dulex',
    imageUrl: kuwaitiTentCategoryImage
  },
  { 
    name: 'Multipurpose Tents', 
    id: 'multipurpose',
    description: 'Versatile multipurpose tents for various applications including bath, wall, and camping tents.',
    categoryId: 'tents-multipurpose',
    imageUrl: multipurposeTentCategoryImage
  },
];

export default function Tents() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img
          src={heroImage}
          alt="Tents"
          className="absolute inset-0 w-full h-full object-cover object-center blur-md scale-110"
        />
        <div className="absolute inset-0 z-[1] bg-slate-900/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="bg-lime-500/80 backdrop-blur-sm border border-lime-300/50 rounded-2xl p-6 md:p-8 shadow-xl opacity-0 animate-fade-in-up animate-fill-both">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
                Tents
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed">
                Explore our wide range of premium quality tents for various applications including military, relief, disaster, shelter, and event tents
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Products</h2>
            <div className="w-24 h-1 bg-lime-500 mx-auto mb-8" />
          </AnimateIn>

          <AnimateIn className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tentCategories.map((category) => (
              <ProductCard
                key={category.id}
                name={category.name}
                description={category.description}
                productId={category.categoryId}
                isCategory={true}
                imageUrl={category.imageUrl}
              />
            ))}
          </AnimateIn>
        </div>
      </section>
    </div>
  );
}
