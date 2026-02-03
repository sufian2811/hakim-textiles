import { useState } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import tentImage from '../home-page-comp/tents.jpg';
import conveyorBeltImage from '../home-page-comp/convveyer belt.jpg';
import filterBagImage from '../home-page-comp/filter bag.jfif';
import filterClothImage from '../home-page-comp/filter cloth.jfif';
import tarpaulinImage from '../home-page-comp/tarpaulin.jfif';
import canvasImage from '../home-page-comp/canvvas.jpg';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [headingRef, headingInView] = useInView<HTMLDivElement>();
  const [gridRef, gridInView] = useInView<HTMLDivElement>();

  const galleryItems = [
    {
      image: tentImage,
      title: 'TENTS',
      subtitle: 'HIGH QUALITY CANVAS TENTS',
      link: '/tents',
    },
    {
      image: conveyorBeltImage,
      title: 'CONVEYOR BELT',
      subtitle: 'PREMIUM QUALITY',
      link: '/conveyor-belt',
    },
    {
      image: filterClothImage,
      title: 'FILTER CLOTH',
      subtitle: 'INDUSTRIAL GRADE',
      link: '/filter-cloths',
    },
    {
      image: filterBagImage,
      title: 'FILTER BAGS',
      subtitle: 'HIGH PERFORMANCE',
      link: '/filter-bags',
    },
    {
      image: tarpaulinImage,
      title: 'TARPAULIN',
      subtitle: 'COTTON CANVAS TARPAULIN',
      link: '/tarpaulin',
    },
    {
      image: canvasImage,
      title: 'CANVAS CLOTH',
      subtitle: 'CANVAS FABRIC 100% COTTON',
      link: '/canvas',
    },
  ];

  return (
    <>
      <section id="gallery" className="py-12 bg-white overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={headingRef}
            className={`text-center mb-10 transition-all duration-700 ease-out ${
              headingInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Product Gallery</h2>
            <div className="w-24 h-1 bg-lime-500 mx-auto mb-4" />
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our diverse collection of premium textiles
            </p>
          </div>

          <div
            ref={gridRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-3"
          >
            {/* Main Large Image - Tents */}
            <div
              className={`md:col-span-2 md:row-span-2 relative overflow-hidden rounded-lg cursor-pointer group shadow-lg h-[280px] md:h-[350px] transition-all duration-500 ease-out ${
                gridInView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-[0.98]'
              }`}
              style={gridInView ? { transitionDelay: '0ms' } : {}}
              onClick={() => setSelectedImage(tentImage)}
            >
              <img
                src={tentImage}
                alt="Tents"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex flex-col justify-end p-4">
                <p className="text-white text-xs font-medium mb-1">{galleryItems[0].subtitle}</p>
                <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">{galleryItems[0].title}</h3>
                <Link
                  to={galleryItems[0].link}
                  onClick={(e) => e.stopPropagation()}
                  className="inline-block bg-lime-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-lime-600 transition-colors"
                >
                  MORE DETAILS
                </Link>
              </div>
            </div>

            {/* Smaller Images */}
            {galleryItems.slice(1).map((item, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-lg cursor-pointer group shadow-lg h-[170px] transition-all duration-500 ease-out ${
                  gridInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={gridInView ? { transitionDelay: `${(index + 1) * 80}ms` } : {}}
                onClick={() => setSelectedImage(item.image)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex flex-col justify-end p-3">
                  <p className="text-white text-xs font-medium mb-1">{item.subtitle}</p>
                  <h3 className="text-white text-lg font-bold mb-2">{item.title}</h3>
                  <Link
                    to={item.link}
                    onClick={(e) => e.stopPropagation()}
                    className="inline-block bg-lime-500 text-white px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-lime-600 transition-colors"
                  >
                    MORE DETAILS
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Gallery view"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </>
  );
}
