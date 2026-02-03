import { useState, useEffect } from 'react';
import { supabase, type Testimonial } from '../lib/supabase';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      if (!supabase) {
        setLoading(false);
        return;
      }
      const { data } = await supabase
        .from('testimonials')
        .select('*')
        .eq('is_published', true)
        .order('created_at', { ascending: false });

      if (data) setTestimonials(data);
    } catch (error) {
      console.error('Error fetching testimonials:', error);
    } finally {
      setLoading(false);
    }
  };

  const defaultTestimonials = [
    {
      id: '1',
      client_name: 'Sarah Johnson',
      company_name: 'Fashion Forward Inc.',
      content:
        'Hakim Textiles has been our go-to supplier for over 5 years. Their quality is unmatched, and their customer service is exceptional. Highly recommended!',
      rating: 5,
      image_url: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
      is_published: true,
      created_at: new Date().toISOString(),
    },
    {
      id: '2',
      client_name: 'Michael Chen',
      company_name: 'Elegant Designs Ltd.',
      content:
        "The range of fabrics available is impressive. We've sourced materials for multiple projects and have never been disappointed with the quality.",
      rating: 5,
      image_url: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200',
      is_published: true,
      created_at: new Date().toISOString(),
    },
    {
      id: '3',
      client_name: 'Emily Rodriguez',
      company_name: 'Boutique Collections',
      content:
        'Outstanding service and premium quality textiles. Their attention to detail and commitment to customer satisfaction sets them apart from competitors.',
      rating: 5,
      image_url: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200',
      is_published: true,
      created_at: new Date().toISOString(),
    },
  ];

  const displayTestimonials = testimonials.length > 0 ? testimonials : defaultTestimonials;

  if (loading) {
    return null;
  }

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <div className="w-24 h-1 bg-lime-500 mx-auto mb-8" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by leading businesses worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow duration-300 relative"
            >
              <Quote className="absolute top-6 right-6 text-lime-100" size={48} />

              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image_url || 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200'}
                  alt={testimonial.client_name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.client_name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.company_name}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={18} />
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed relative z-10">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
