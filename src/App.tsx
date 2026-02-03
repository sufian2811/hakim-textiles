import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppFloat from './components/WhatsAppFloat';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import Tents from './pages/Tents';
import Tarpaulin from './pages/Tarpaulin';
import Canvas from './pages/Canvas';
import ConveyorBelt from './pages/ConveyorBelt';
import FilterCloths from './pages/FilterCloths';
import FilterBags from './pages/FilterBags';
import ContactPage from './pages/ContactPage';
import ProductDetail from './pages/ProductDetail';
import TentCategory from './pages/TentCategory';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen">
        <Navigation />
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
        <Footer />
        <WhatsAppFloat />
      </div>
    </Router>
  );
}

export default App;
