import ProductCard from '../components/ProductCard';
import AnimateIn from '../components/AnimateIn';
import heroImage from '../home-page-comp/filter bag.jfif';
// Filter bag product images
import filterBag5Image from '../filter bag/1.jfif';
import filterBag10Image from '../filter bag/2.jfif';
import filterBag25Image from '../filter bag/3.jfif';

const filterBagsProducts = [
  { name: '5 Microns Filter Bags', id: 'filter-bags-5', imageUrl: filterBag5Image },
  { name: '10 Microns Filter Bags', id: 'filter-bags-10', imageUrl: filterBag10Image },
  { name: '25 Microns Filter Bags', id: 'filter-bags-25', imageUrl: filterBag25Image },
];

export default function FilterBags() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img
          src={heroImage}
          alt="Filter Bags"
          className="absolute inset-0 w-full h-full object-cover object-center blur-md scale-110"
        />
        <div className="absolute inset-0 z-[1] bg-slate-900/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="bg-lime-500/80 backdrop-blur-sm border border-lime-300/50 rounded-2xl p-6 md:p-8 shadow-xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
                Filter Bags
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed">
                ch.hakim ali ansari enterprises manufactures premium quality filter bags designed for efficient industrial filtration. our filter bags are engineered to provide superior particle removal, high flow rates, and excellent chemical compatibility. available in various micron ratings including 5, 10, and 25 microns, our filter bags are ideal for pharmaceutical manufacturing, chemical processing, water treatment, food & beverage processing, and various other industrial applications requiring reliable and efficient filtration solutions.
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
            {filterBagsProducts.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                description={`Premium quality ${product.name.toLowerCase()} designed for efficient filtration.`}
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
