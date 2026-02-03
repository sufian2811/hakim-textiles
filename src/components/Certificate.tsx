import certificateImage from '../assets/certificate.png';
import { useInView } from '../hooks/useInView';

export default function Certificate() {
  const [sectionRef, inView] = useInView<HTMLElement>();

  return (
    <section ref={sectionRef} className="py-20 bg-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Certificate Image - Left Side */}
          <div
            className={`flex justify-center md:justify-start transition-all duration-700 ease-out ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="relative w-full max-w-lg">
              <div className="bg-gray-100 rounded-lg shadow-2xl p-4 hover:shadow-3xl transition-shadow duration-300">
                {certificateImage ? (
                  <img
                    src={certificateImage}
                    alt="Halal Certificate - Ch Hakim Ali Ansari Enterprises"
                    className="w-full h-auto rounded-lg object-contain"
                    onError={(e) => {
                      console.error('Failed to load certificate image:', certificateImage);
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                ) : (
                  <div className="w-full h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex flex-col items-center justify-center p-8 border-2 border-dashed border-gray-300">
                    <svg className="w-24 h-24 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                    <p className="text-gray-500 text-center">Certificate image not found</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Description Text - Right Side */}
          <div
            className={`space-y-6 transition-all duration-700 ease-out delay-150 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Halal Certified
              </h2>
              <div className="w-24 h-1 bg-lime-500 mb-6" />
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-lg">
                ch.hakim ali ansari enterprises is proud to be halal certified by al-waiz certification & training services (acts), ensuring that all our products meet the highest standards of quality and compliance with halal requirements.
              </p>
              <p className="text-lg">
                our halal certification covers the manufacturing of filter cloth, non-woven filter bags, filter panel, and conveyor belt. this certification is valid until december 8, 2026, and demonstrates our commitment to providing products that are not only of premium quality but also adhere to strict halal guidelines.
              </p>
              <p className="text-lg">
                this certification reflects our dedication to excellence and our respect for the values and requirements of our diverse customer base around the world, giving our customers confidence in every purchase.
              </p>
            </div>
            <div className="pt-4">
              <div className="inline-flex items-center space-x-2 bg-lime-50 px-6 py-3 rounded-lg border border-lime-200">
                <svg className="w-6 h-6 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-lime-700 font-semibold">Certified & Verified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
