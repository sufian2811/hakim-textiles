import { useState, useEffect } from 'react';
import { supabase, type Product, type ProductCategory } from '../lib/supabase';
import { Loader2 } from 'lucide-react';

export default function Products() {
  const [categories, setCategories] = useState<ProductCategory[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [categoriesRes, productsRes] = await Promise.all([
        supabase.from('product_categories').select('*').order('display_order'),
        supabase.from('products').select('*').order('display_order'),
      ]);

      if (categoriesRes.data) setCategories(categoriesRes.data);
      if (productsRes.data) setProducts(productsRes.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredProducts =
    selectedCategory === 'all'
      ? products
      : products.filter((p) => p.category_id === selectedCategory);

  const defaultProducts = [
    {
      id: '1',
      name: 'Premium Cotton Fabric',
      description: 'High-quality 100% cotton fabric, perfect for all seasons',
      image_url: 'https://images.pexels.com/photos/3738087/pexels-photo-3738087.jpeg?auto=compress&cs=tinysrgb&w=600',
      price_range: '$15-25/meter',
    },
    {
      id: '2',
      name: 'Silk Blend Collection',
      description: 'Luxurious silk blend with excellent drape and shine',
      image_url: 'https://images.pexels.com/photos/6479607/pexels-photo-6479607.jpeg?auto=compress&cs=tinysrgb&w=600',
      price_range: '$35-50/meter',
    },
    {
      id: '3',
      name: 'Designer Denim',
      description: 'Durable denim fabric in various weights and washes',
      image_url: 'https://images.pexels.com/photos/1261422/pexels-photo-1261422.jpeg?auto=compress&cs=tinysrgb&w=600',
      price_range: '$20-30/meter',
    },
    {
      id: '4',
      name: 'Linen Elegance',
      description: 'Natural linen fabric with superior breathability',
      image_url: 'https://images.pexels.com/photos/4226881/pexels-photo-4226881.jpeg?auto=compress&cs=tinysrgb&w=600',
      price_range: '$25-40/meter',
    },
    {
      id: '5',
      name: 'Polyester Blends',
      description: 'Versatile polyester blends for various applications',
      image_url: 'https://images.pexels.com/photos/3738087/pexels-photo-3738087.jpeg?auto=compress&cs=tinysrgb&w=600',
      price_range: '$10-20/meter',
    },
    {
      id: '6',
      name: 'Wool Collection',
      description: 'Premium wool fabrics for luxury apparel',
      image_url: 'https://images.pexels.com/photos/6479610/pexels-photo-6479610.jpeg?auto=compress&cs=tinysrgb&w=600',
      price_range: '$40-60/meter',
    },
  ];

  const displayProducts = filteredProducts.length > 0 ? filteredProducts : defaultProducts;

  if (loading) {
    return (
      <section id="products" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
          <Loader2 className="animate-spin text-lime-500" size={48} />
        </div>
      </section>
    );
  }

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h2>
          <div className="w-24 h-1 bg-lime-500 mx-auto mb-8" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our extensive range of premium quality textiles
          </p>
        </div>

        {categories.length > 0 && (
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === 'all'
                  ? 'bg-lime-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              All Products
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-lime-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image_url}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                {'price_range' in product && product.price_range && (
                  <div className="text-lime-600 font-semibold">{product.price_range}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
