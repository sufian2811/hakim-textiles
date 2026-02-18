import ProductCard from '../components/ProductCard';
import AnimateIn from '../components/AnimateIn';
import heroImage from '../home-page-comp/canvvas.jpg';
import cc1Image from '../CC/1.png';
import cc2Image from '../CC/2.png';
import cc3Image from '../CC/3.png';
import cc5Image from '../CC/5.png';

const canvasProducts = [
  { name: 'Canvas Cloth', id: 'canvas-cloth', imageUrl: cc1Image, imageBlur: false, description: 'Premium cotton canvas for tents, tarpaulins, and protective covers. Durable and versatile for industrial and commercial use.' },
  { name: 'Waterproof Canvas Cloth', id: 'canvas-waterproof', imageUrl: cc2Image, imageBlur: false, description: 'Water-resistant canvas made from cotton and synthetic blends. Ideal for outdoor gear, industrial applications, and weather protection.' },
  { name: 'Fire Retardant Canvas Cloth', id: 'canvas-fireproof', imageUrl: cc3Image, imageBlur: false, description: 'Flame-retardant treated canvas for safety-critical applications. Military, emergency services, and event use.' },
  { name: 'Heavy Duty Cotton Canvas Cloth', id: 'canvas-heavy-duty', imageUrl: cc1Image, imageBlur: true, description: 'Extra-strength cotton canvas for demanding applications. Reinforced weave for maximum durability and longevity.' },
  { name: 'Stripe Canvas', id: 'canvas-strip', imageUrl: cc5Image, imageBlur: false, description: '100% cotton/polycotton black and white stripe waterproof canvas for tents and windbreak side walls. Yarn dyed, customizable.' },
];

export default function Canvas() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img
          src={heroImage}
          alt="Canvas"
          className="absolute inset-0 w-full h-full object-cover object-center blur-md scale-110"
        />
        <div className="absolute inset-0 z-[1] bg-slate-900/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="bg-lime-500/80 backdrop-blur-sm border border-lime-300/50 rounded-2xl p-6 md:p-8 shadow-xl opacity-100 lg:opacity-0 lg:animate-fade-in-up lg:animate-fill-both">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
                Canvas
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed">
                High-quality canvas cloth for tents, tarpaulins, outdoor gear, and industrial applications. From waterproof and fire-retardant to stripe and heavy-duty cotton—we offer custom widths and weights. Yarn dyed and made to order for your requirements.
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
              Explore our range of canvas cloth, waterproof, fire retardant, heavy duty, and stripe canvas
            </p>
          </AnimateIn>

          <AnimateIn className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {canvasProducts.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                description={product.description}
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
