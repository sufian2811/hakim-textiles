import ProductCard from '../components/ProductCard';
import AnimateIn from '../components/AnimateIn';
import heroImage from '../FC/hero.jpeg';
import fc1Image from '../FC/1.png';
import fc2Image from '../FC/2.png';
import fc3Image from '../FC/3.png';
import fc7Image from '../FC/7.png';

const filterClothsProducts = [
  { name: 'Cotton Filter Cloth-90', id: 'filter-cotton-90', imageUrl: fc1Image, imageBlur: false },
  { name: 'Polyester Cotton(PC) Filter Cloth-96', id: 'filter-pc-96', imageUrl: fc2Image, imageBlur: false },
  { name: 'Pure Polyester(P.P) Filter Cloth', id: 'filter-pure-polyester', imageUrl: fc3Image, imageBlur: false },
  { name: 'Danier Filter Cloth', id: 'filter-danier', imageUrl: fc1Image, imageBlur: true },
  { name: 'Candle Filter Cloth', id: 'filter-candle', imageUrl: fc2Image, imageBlur: true },
  { name: 'Polypropylene Filter Cloth', id: 'filter-polypropylene', imageUrl: fc3Image, imageBlur: true },
  { name: 'Cotton Filter Cloth-92', id: 'filter-cotton-92', imageUrl: fc7Image, imageBlur: false },
];

export default function FilterCloths() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img
          src={heroImage}
          alt="Filter Cloths"
          className="absolute inset-0 w-full h-full object-cover object-center blur-md scale-110"
        />
        <div className="absolute inset-0 z-[1] bg-slate-900/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="bg-lime-500/80 backdrop-blur-sm border border-lime-300/50 rounded-2xl p-6 md:p-8 shadow-xl opacity-100 lg:opacity-0 lg:animate-fade-in-up lg:animate-fill-both">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
                Filter Cloths
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed">
                ch.hakim ali ansari enterprises also manufacture filter cloth. filter cloth is used for filtration purposes in various industries such as cooking oil industries, sugar industries, soap industries, chemical industries, lubricant/grease industries, cement industries, food & beverages industries, glass industries, steel industries, and paint industries. we manufacture filter cloth in 100% cotton, 100% polyester, and 50:50 poly cotton mixed blends. utilizing the latest precision, high technology equipment, we ensure quick and responsive turnaround for your satisfaction.
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
            {filterClothsProducts.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                description={`High-quality ${product.name.toLowerCase()} for efficient filtration processes.`}
                productId={product.id}
                imageUrl={product.imageUrl}
                imageBlur={product.imageBlur}
              />
            ))}
          </AnimateIn>
        </div>
      </section>
    </div>
  );
}
