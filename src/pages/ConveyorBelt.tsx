import ProductCard from '../components/ProductCard';
import AnimateIn from '../components/AnimateIn';
import heroImage from '../assets/cb-hero.jpg';
import cottonCbImage from '../assets/cotton-cb.jpg';
import ebgCbImage from '../assets/ebg-cb.jpg';

const conveyorBeltProducts = [
  { name: 'Cotton Conveyor Belt', id: 'conveyor-cotton', imageUrl: cottonCbImage },
  { name: 'English Cotton Conveyor Belt', id: 'conveyor-english-cotton', imageUrl: ebgCbImage },
];

export default function ConveyorBelt() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img
          src={heroImage}
          alt="Conveyor Belt"
          className="absolute inset-0 w-full h-full object-cover object-center blur-md scale-110"
        />
        <div className="absolute inset-0 z-[1] bg-slate-900/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="bg-lime-500/80 backdrop-blur-sm border border-lime-300/50 rounded-2xl p-6 md:p-8 shadow-xl opacity-0 animate-fade-in-up animate-fill-both">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
                Conveyor Belt
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed">
                COTTON CONVEYOR BELT SPECIALLY USED IN COOLING CONVEYOR OF BISCUIT DOUGH FROM OVEN. IT IS MADE FROM 100% COTTON, SO IT CAN BE USE AS FOOD CONVEYOR BELT WE PROVIDE PREMIUM QUALITY RANGE OF ENDLESS CONVEYOR WEB TO OUR ESTEEMED CLIENTS
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
          {conveyorBeltProducts.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              description={`High-performance ${product.name.toLowerCase()} designed for efficient material handling.`}
              imageUrl={product.imageUrl}
              productId={product.id}
            />
          ))}
        </AnimateIn>
      </div>
      </section>
    </div>
  );
}
