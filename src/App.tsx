import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppFloat from './components/WhatsAppFloat';
import Home from './pages/Home';

// Lazy-load pages to reduce initial bundle (code-splitting)
const AboutPage = lazy(() => import('./pages/AboutPage'));
const Tents = lazy(() => import('./pages/Tents'));
const TentCategory = lazy(() => import('./pages/TentCategory'));
const Tarpaulin = lazy(() => import('./pages/Tarpaulin'));
const Canvas = lazy(() => import('./pages/Canvas'));
const ConveyorBelt = lazy(() => import('./pages/ConveyorBelt'));
const FilterCloths = lazy(() => import('./pages/FilterCloths'));
const FilterBags = lazy(() => import('./pages/FilterBags'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));

function PageLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center" aria-hidden="true">
      <div className="animate-pulse text-lime-600 font-medium">Loading...</div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen">
        <Navigation />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/tents" element={<Tents />} />
            <Route path="/tents/:categoryId" element={<TentCategory />} />
            <Route path="/tarpaulin" element={<Tarpaulin />} />
            <Route path="/canvas" element={<Canvas />} />
            <Route path="/conveyor-belt" element={<ConveyorBelt />} />
            <Route path="/filter-cloths" element={<FilterCloths />} />
            <Route path="/filter-bags" element={<FilterBags />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
        </Suspense>
        <Footer />
        <WhatsAppFloat />
      </div>
    </Router>
  );
}

export default App;
