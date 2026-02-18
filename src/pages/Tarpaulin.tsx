import ProductCard from '../components/ProductCard';
import AnimateIn from '../components/AnimateIn';
import heroImage from '../home-page-comp/tarpaulin.jfif';
import tarpulin1Image from '../tarpulin/1.png';
import tarpulin2Image from '../tarpulin/2.png';
import tarpulin3Image from '../tarpulin/3.png';
import tarpulin4Image from '../tarpulin/4.png';

const tarpaulinProducts = [
  { name: 'Canvas Tarpaulin', id: 'tarpaulin-canvas', imageUrl: tarpulin1Image },
  { name: 'Grey Tarpaulin', id: 'tarpaulin-grey', imageUrl: tarpulin2Image },
  { name: 'Heavy Duty Waterproof Tarpaulin', id: 'tarpaulin-heavy-duty', imageUrl: tarpulin3Image },
  { name: 'PE Tarpaulin', id: 'tarpaulin-pe', imageUrl: tarpulin4Image },
  { name: 'Fire Retardant Tarpaulin', id: 'tarpaulin-fire-retardant', imageUrl: tarpulin3Image },
];

export default function Tarpaulin() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - same format as Conveyor Belt / Filter Bags */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img
          src={heroImage}
          alt="Tarpaulin"
          className="absolute inset-0 w-full h-full object-cover object-center blur-md scale-110"
        />
        <div className="absolute inset-0 z-[1] bg-slate-900/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="bg-lime-500/80 backdrop-blur-sm border border-lime-300/50 rounded-2xl p-6 md:p-8 shadow-xl opacity-100 lg:opacity-0 lg:animate-fade-in-up lg:animate-fill-both">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
                Tarpaulin
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed">
                Durable and waterproof tarpaulin solutions for all your covering needs. We specialize in high-quality canvas, grey, heavy duty waterproof, PE, PVC coated, and fire retardant tarpaulins for protection, shelter, construction, agriculture, transport, and outdoor applications.
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
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our range of canvas, grey, heavy duty waterproof, PE, and fire retardant tarpaulins
            </p>
          </AnimateIn>

          <AnimateIn className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tarpaulinProducts.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                description={`Premium quality ${product.name.toLowerCase()} designed for maximum protection and durability.`}
                productId={product.id}
                imageUrl={product.imageUrl}
              />
            ))}
          </AnimateIn>
        </div>
      </section>
    </div>
  );
}
