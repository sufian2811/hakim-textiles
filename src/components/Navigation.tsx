import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import logoImage from '../assets/logo.png';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const [openNestedDropdown, setOpenNestedDropdown] = useState<string | null>(null);
  const [openMobileNestedDropdown, setOpenMobileNestedDropdown] = useState<string | null>(null);

  const handleNavigation = () => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
    setOpenMobileDropdown(null);
    setOpenNestedDropdown(null);
    setOpenMobileNestedDropdown(null);
  };

  const dropdownMenus = {
    tents: [
      { 
        label: 'Relief/Disaster Tents', 
        id: 'tents-relief',
        hasSubmenu: true,
        submenu: [
          { label: 'Winterized Double Fly Three-fold Tent', id: 'tents-relief-double-three' },
          { label: 'Double Fly, Double Fold Tent', id: 'tents-relief-double-double' },
          { label: 'Double Fly, Single Fold Tent', id: 'tents-relief-double-single' },
          { label: 'Single Fly, Double Fold Tent', id: 'tents-relief-single-double' },
          { label: 'Single Fly, Single Fold Tent', id: 'tents-relief-single-single' },
        ]
      },
      { 
        label: 'Military Tents', 
        id: 'tents-military',
        hasSubmenu: true,
        submenu: [
          { label: 'Universal Military Tent', id: 'tents-military-universal' },
          { label: 'Ridge Military Tent', id: 'tents-military-ridge' },
          { label: 'Temper Hospital Military Tent', id: 'tents-military-temper-hospital' },
          { label: 'GPM Beam Military Tent', id: 'tents-military-gpm-beam' },
          { label: 'General Purpose Military Tent', id: 'tents-military-general-purpose' },
          { label: 'Bivouac Half Military Tent', id: 'tents-military-bivouac-half' },
          { label: 'Base Collective Military Tent', id: 'tents-military-base-collective' },
          { label: 'Base Military Tent', id: 'tents-military-base' },
        ]
      },
      { 
        label: 'Deluxe Tents', 
        id: 'tents-dulex',
        hasSubmenu: true,
        submenu: [
          { label: 'Arabic Deluxe and Relief Tents HT-101', id: 'tents-dulex-ht101' },
          { label: 'Arabic Deluxe Tent HT-102', id: 'tents-dulex-ht102' },
          { label: 'Arabic Deluxe Tent HT-103', id: 'tents-dulex-ht103' },
          { label: 'Swiss Deluxe Tent HT-104', id: 'tents-dulex-ht104' },
          { label: 'Family Round Tent HT-105', id: 'tents-dulex-ht105' },
          { label: 'Arabic Deluxe Tent HT-106', id: 'tents-dulex-ht106' },
          { label: 'Arabic Deluxe Tent HT-107', id: 'tents-dulex-ht107' },
          { label: 'Arabic Deluxe Tent HT-108', id: 'tents-dulex-ht108' },
          { label: 'Arabic Deluxe Tent HT-109', id: 'tents-dulex-ht109' },
          { label: 'Arabic Deluxe Tent HT-110', id: 'tents-dulex-ht110' },
          { label: 'Arabic Deluxe Tent HT-111', id: 'tents-dulex-ht111' },
          { label: 'Swiss Arabic Deluxe Tent HT-112', id: 'tents-dulex-ht112' },
          { label: 'Family Round Tent HT-113', id: 'tents-dulex-ht113' },
          { label: 'Arabic Deluxe Tent HT-114', id: 'tents-dulex-ht114' },
          { label: 'Arabic Deluxe Tent HT-115', id: 'tents-dulex-ht115' },
          { label: 'Arabic Deluxe Tent HT-116', id: 'tents-dulex-ht116' },
          { label: 'Arabic Deluxe Tent HT-117', id: 'tents-dulex-ht117' },
          { label: 'Arabic Deluxe Tent HT-118', id: 'tents-dulex-ht118' },
        ]
      },
      { 
        label: 'Shelter Tents', 
        id: 'tents-shelter',
        hasSubmenu: true,
        submenu: [
          { label: 'Arabic Deluxe Shelter Tent HT-101', id: 'tents-shelter-ht101' },
          { label: 'Arabic Deluxe Shelter Tent HT-102', id: 'tents-shelter-ht102' },
          { label: 'Arabic Deluxe Shelter Tent HT-103', id: 'tents-shelter-ht103' },
          { label: 'Party Tent HT-104', id: 'tents-shelter-ht104' },
          { label: 'General Purpose Large Tent HT-105', id: 'tents-shelter-ht105' },
          { label: 'Hospital Frame Tent for 10 person', id: 'tents-shelter-hospital-frame' },
        ]
      },
      { label: 'Marquee Tents', id: 'tents-marquee' },
      { 
        label: 'Kuwaiti Deluxe Tent', 
        id: 'tents-kuwaiti-dulex',
        hasSubmenu: true,
        submenu: [
          { label: 'Kuwaiti Deluxe Tent HT-101', id: 'tents-kuwaiti-ht101' },
          { label: 'Kuwaiti Deluxe Tent HT-102', id: 'tents-kuwaiti-ht102' },
          { label: 'Kuwaiti Deluxe Tent HT-103', id: 'tents-kuwaiti-ht103' },
        ]
      },
      { 
        label: 'Multipurpose Tents', 
        id: 'tents-multipurpose',
        hasSubmenu: true,
        submenu: [
          { label: 'Bath Tent HT-101', id: 'tents-multipurpose-bath-ht101' },
          { label: 'Wall Tent HT-102', id: 'tents-multipurpose-wall-ht102' },
          { label: 'Wall Tent HT-103', id: 'tents-multipurpose-wall-ht103' },
          { label: 'Camping Tent HT-104', id: 'tents-multipurpose-camping-ht104' },
        ]
      },
    ],
    tarpaulin: [
      { label: 'Canvas Tarpaulin', id: 'tarpaulin-canvas' },
      { label: 'Grey Tarpaulin', id: 'tarpaulin-grey' },
      { label: 'Heavy Duty Waterproof Tarpaulin', id: 'tarpaulin-heavy-duty' },
      { label: 'PE Tarpaulin', id: 'tarpaulin-pe' },
      { label: 'Fire Retardant Tarpaulin', id: 'tarpaulin-fire-retardant' },
    ],
    canvas: [
      { label: 'Canvas Cloth', id: 'canvas-cloth' },
      { label: 'Waterproof Canvas Cloth', id: 'canvas-waterproof' },
      { label: 'Fire Retardant Canvas Cloth', id: 'canvas-fireproof' },
      { label: 'Heavy Duty Cotton Canvas Cloth', id: 'canvas-heavy-duty' },
      { label: 'Stripe Canvas', id: 'canvas-strip' },
    ],
    'conveyor-belt': [
      { label: 'Cotton Conveyor Belt', id: 'conveyor-cotton' },
      { label: 'English Cotton Conveyor Belt', id: 'conveyor-english-cotton' },
    ],
    'filter-cloths': [
      { label: 'Cotton Filter Cloth-90', id: 'filter-cotton-90' },
      { label: 'Polyester Cotton(PC) Filter Cloth-96', id: 'filter-pc-96' },
      { label: 'Pure Polyester(P.P) Filter Cloth', id: 'filter-pure-polyester' },
      { label: 'Danier Filter Cloth', id: 'filter-danier' },
      { label: 'Candle Filter Cloth', id: 'filter-candle' },
      { label: 'Polypropylene Filter Cloth', id: 'filter-polypropylene' },
      { label: 'Cotton Filter Cloth-92', id: 'filter-cotton-92' },
    ],
    'filter-bags': [
      { label: '5 Microns Filter Bags', id: 'filter-bags-5' },
      { label: '10 Microns Filter Bags', id: 'filter-bags-10' },
      { label: '25 Microns Filter Bags', id: 'filter-bags-25' },
    ],
  };

  const handleMobileDropdownToggle = (menu: string) => {
    const newState = openMobileDropdown === menu ? null : menu;
    setOpenMobileDropdown(newState);
    if (!newState) {
      setOpenMobileNestedDropdown(null);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex-shrink-0 flex items-center space-x-3">
            <img 
              src={logoImage} 
              alt="Hakim Textiles Logo" 
              className="h-20 md:h-20 w-auto object-contain"
            />
            <h1 className="text-xl md:text-2xl font-bold text-black">
              Hakim Textiles
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              onClick={handleNavigation}
              className="text-sm font-medium text-black hover:text-lime-500"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={handleNavigation}
              className="text-sm font-medium text-black hover:text-lime-500"
            >
              About
            </Link>

            {/* Tents Dropdown */}
            <div 
              className="relative group dropdown-container"
              onMouseEnter={() => setOpenDropdown('tents')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                to="/tents"
                className="text-sm font-medium text-black hover:text-lime-600 flex items-center space-x-1"
              >
                <span>Tents</span>
                <ChevronDown size={16} />
              </Link>
              {openDropdown === 'tents' && (
                <div className="absolute top-full left-0 pt-2">
                  <div className="bg-lime-50 border border-lime-200 rounded-md shadow-lg py-2 flex">
                    <div className="w-48">
                      {dropdownMenus.tents.map((item) => (
                        <div
                          key={item.id}
                          className="relative"
                          onMouseEnter={() => item.hasSubmenu && setOpenNestedDropdown(item.id)}
                          onMouseLeave={() => item.hasSubmenu && setOpenNestedDropdown(null)}
                        >
                          {item.hasSubmenu ? (
                            <Link
                              to={`/tents/${item.id}`}
                              onClick={handleNavigation}
                              className="flex items-center justify-between px-4 py-2 text-sm text-gray-800 hover:bg-lime-100 hover:text-lime-800"
                            >
                              <span>{item.label}</span>
                              <ChevronRight size={16} />
                            </Link>
                            ) : (
                              <Link
                                to={`/tents/${item.id}`}
                                onClick={handleNavigation}
                                className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-lime-100 hover:text-lime-800"
                              >
                                {item.label}
                              </Link>
                            )}
                          {item.hasSubmenu && openNestedDropdown === item.id && (
                            <div className="absolute left-full top-0 ml-2 w-64 bg-lime-50 border border-lime-200 rounded-md shadow-lg py-2 z-50">
                              {item.submenu?.map((subItem) => (
                                  <Link
                                    key={subItem.id}
                                    to={`/product/${subItem.id}`}
                                    onClick={handleNavigation}
                                    className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-lime-100 hover:text-lime-800"
                                  >
                                    {subItem.label}
                                  </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Tarpaulin Dropdown */}
            <div 
              className="relative group dropdown-container"
              onMouseEnter={() => setOpenDropdown('tarpaulin')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                to="/tarpaulin"
                className="text-sm font-medium text-black hover:text-lime-600 flex items-center space-x-1"
              >
                <span>Tarpaulin</span>
                <ChevronDown size={16} />
              </Link>
              {openDropdown === 'tarpaulin' && (
                <div className="absolute top-full left-0 pt-2 w-56">
                  <div className="bg-lime-50 border border-lime-200 rounded-md shadow-lg py-2">
                    {dropdownMenus.tarpaulin.map((item) => (
                      <Link
                        key={item.id}
                        to={`/product/${item.id}`}
                        onClick={handleNavigation}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-lime-100 hover:text-lime-800"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Canvas Dropdown */}
            <div 
              className="relative group dropdown-container"
              onMouseEnter={() => setOpenDropdown('canvas')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                to="/canvas"
                className="text-sm font-medium text-black hover:text-lime-600 flex items-center space-x-1"
              >
                <span>Canvas</span>
                <ChevronDown size={16} />
              </Link>
              {openDropdown === 'canvas' && (
                <div className="absolute top-full left-0 pt-2 w-48">
                  <div className="bg-lime-50 border border-lime-200 rounded-md shadow-lg py-2">
                    {dropdownMenus.canvas.map((item) => (
                      <Link
                        key={item.id}
                        to="/canvas"
                        onClick={handleNavigation}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-lime-100 hover:text-lime-800"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Conveyor Belt Dropdown */}
            <div 
              className="relative group dropdown-container"
              onMouseEnter={() => setOpenDropdown('conveyor-belt')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                to="/conveyor-belt"
                className="text-sm font-medium text-black hover:text-lime-600 flex items-center space-x-1"
              >
                <span>Conveyor Belt</span>
                <ChevronDown size={16} />
              </Link>
              {openDropdown === 'conveyor-belt' && (
                <div className="absolute top-full left-0 pt-2 w-56">
                  <div className="bg-lime-50 border border-lime-200 rounded-md shadow-lg py-2">
                        {dropdownMenus['conveyor-belt'].map((item) => (
                          <Link
                            key={item.id}
                            to={`/product/${item.id}`}
                            onClick={handleNavigation}
                            className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-lime-100 hover:text-lime-800"
                          >
                            {item.label}
                          </Link>
                        ))}
                  </div>
                </div>
              )}
            </div>

            {/* Filter Cloths Dropdown */}
            <div 
              className="relative group dropdown-container"
              onMouseEnter={() => setOpenDropdown('filter-cloths')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                to="/filter-cloths"
                className="text-sm font-medium text-black hover:text-lime-600 flex items-center space-x-1"
              >
                <span>Filter Cloths</span>
                <ChevronDown size={16} />
              </Link>
              {openDropdown === 'filter-cloths' && (
                <div className="absolute top-full left-0 pt-2 w-56">
                  <div className="bg-lime-50 border border-lime-200 rounded-md shadow-lg py-2">
                        {dropdownMenus['filter-cloths'].map((item) => (
                          <Link
                            key={item.id}
                            to={`/product/${item.id}`}
                            onClick={handleNavigation}
                            className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-lime-100 hover:text-lime-800"
                          >
                            {item.label}
                          </Link>
                        ))}
                  </div>
                </div>
              )}
            </div>

            {/* Filter Bags Dropdown */}
            <div 
              className="relative group dropdown-container"
              onMouseEnter={() => setOpenDropdown('filter-bags')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                to="/filter-bags"
                className="text-sm font-medium text-black hover:text-lime-600 flex items-center space-x-1"
              >
                <span>Filter Bags</span>
                <ChevronDown size={16} />
              </Link>
              {openDropdown === 'filter-bags' && (
                <div className="absolute top-full left-0 pt-2 w-56">
                  <div className="bg-lime-50 border border-lime-200 rounded-md shadow-lg py-2">
                        {dropdownMenus['filter-bags'].map((item) => (
                          <Link
                            key={item.id}
                            to={`/product/${item.id}`}
                            onClick={handleNavigation}
                            className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-lime-100 hover:text-lime-800"
                          >
                            {item.label}
                          </Link>
                        ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/contact"
              onClick={handleNavigation}
              className="text-sm font-medium text-black hover:text-lime-500"
            >
              Contact US
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="text-black" />
            ) : (
              <Menu className="text-black" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-lime-50/30 border-t border-lime-200">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <Link
              to="/"
              onClick={handleNavigation}
              className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-lime-100 hover:text-lime-800 rounded-md"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={handleNavigation}
              className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-lime-100 hover:text-lime-800 rounded-md"
            >
              About
            </Link>

            {/* Mobile Tents Dropdown */}
            <div>
              <button
                onClick={() => handleMobileDropdownToggle('tents')}
                className="flex items-center justify-between w-full text-left px-4 py-2 text-gray-800 hover:bg-lime-100 hover:text-lime-800 rounded-md"
              >
                <span>Tents</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    openMobileDropdown === 'tents' ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openMobileDropdown === 'tents' && (
                <div className="pl-6 space-y-1">
                  {dropdownMenus.tents.map((item) => (
                    <div key={item.id}>
                      {item.hasSubmenu ? (
                        <>
                          <div className="flex items-center justify-between">
                            <Link
                              to={`/tents/${item.id}`}
                              onClick={handleNavigation}
                              className="flex-1 block px-4 py-2 text-sm text-gray-700 hover:bg-lime-100 hover:text-lime-800 rounded-md"
                            >
                              {item.label}
                            </Link>
                            <button
                              onClick={() => setOpenMobileNestedDropdown(
                                openMobileNestedDropdown === item.id ? null : item.id
                              )}
                              className="px-2 py-2 text-gray-600 hover:bg-lime-100 rounded-md"
                            >
                              <ChevronDown
                                size={16}
                                className={`transition-transform ${
                                  openMobileNestedDropdown === item.id ? 'rotate-180' : ''
                                }`}
                              />
                            </button>
                          </div>
                          {openMobileNestedDropdown === item.id && item.submenu && (
                            <div className="pl-6 space-y-1">
                              {item.submenu.map((subItem) => (
                                <Link
                                  key={subItem.id}
                                  to={`/product/${subItem.id}`}
                                  onClick={handleNavigation}
                                  className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-lime-100 hover:text-lime-800 rounded-md"
                                >
                                  {subItem.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </>
                      ) : (
                        <Link
                          to={`/tents/${item.id}`}
                          onClick={handleNavigation}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-lime-100 hover:text-lime-800 rounded-md"
                        >
                          {item.label}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Tarpaulin Dropdown */}
            <div>
              <button
                onClick={() => handleMobileDropdownToggle('tarpaulin')}
                className="flex items-center justify-between w-full text-left px-4 py-2 text-gray-800 hover:bg-lime-100 hover:text-lime-800 rounded-md"
              >
                <span>Tarpaulin</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    openMobileDropdown === 'tarpaulin' ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openMobileDropdown === 'tarpaulin' && (
                <div className="pl-6 space-y-1">
                  {dropdownMenus.tarpaulin.map((item) => (
                    <Link
                      key={item.id}
                      to={`/product/${item.id}`}
                      onClick={handleNavigation}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-lime-100 hover:text-lime-800 rounded-md"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Canvas Dropdown */}
            <div>
              <button
                onClick={() => handleMobileDropdownToggle('canvas')}
                className="flex items-center justify-between w-full text-left px-4 py-2 text-gray-800 hover:bg-lime-100 hover:text-lime-800 rounded-md"
              >
                <span>Canvas</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    openMobileDropdown === 'canvas' ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openMobileDropdown === 'canvas' && (
                <div className="pl-6 space-y-1">
                  {dropdownMenus.canvas.map((item) => (
                    <Link
                      key={item.id}
                      to="/canvas"
                      onClick={handleNavigation}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-lime-100 hover:text-lime-800 rounded-md"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Conveyor Belt Dropdown */}
            <div>
              <button
                onClick={() => handleMobileDropdownToggle('conveyor-belt')}
                className="flex items-center justify-between w-full text-left px-4 py-2 text-gray-800 hover:bg-lime-100 hover:text-lime-800 rounded-md"
              >
                <span>Conveyor Belt</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    openMobileDropdown === 'conveyor-belt' ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openMobileDropdown === 'conveyor-belt' && (
                <div className="pl-6 space-y-1">
                  {dropdownMenus['conveyor-belt'].map((item) => (
                    <Link
                      key={item.id}
                      to={`/product/${item.id}`}
                      onClick={handleNavigation}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-lime-100 hover:text-lime-800 rounded-md"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Filter Cloths Dropdown */}
            <div>
              <button
                onClick={() => handleMobileDropdownToggle('filter-cloths')}
                className="flex items-center justify-between w-full text-left px-4 py-2 text-gray-800 hover:bg-lime-100 hover:text-lime-800 rounded-md"
              >
                <span>Filter Cloths</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    openMobileDropdown === 'filter-cloths' ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openMobileDropdown === 'filter-cloths' && (
                <div className="pl-6 space-y-1">
                  {dropdownMenus['filter-cloths'].map((item) => (
                    <Link
                      key={item.id}
                      to={`/product/${item.id}`}
                      onClick={handleNavigation}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-lime-100 hover:text-lime-800 rounded-md"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Filter Bags Dropdown */}
            <div>
              <button
                onClick={() => handleMobileDropdownToggle('filter-bags')}
                className="flex items-center justify-between w-full text-left px-4 py-2 text-gray-800 hover:bg-lime-100 hover:text-lime-800 rounded-md"
              >
                <span>Filter Bags</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    openMobileDropdown === 'filter-bags' ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openMobileDropdown === 'filter-bags' && (
                <div className="pl-6 space-y-1">
                  {dropdownMenus['filter-bags'].map((item) => (
                    <Link
                      key={item.id}
                      to={`/product/${item.id}`}
                      onClick={handleNavigation}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-lime-100 hover:text-lime-800 rounded-md"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/contact"
              onClick={handleNavigation}
              className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-lime-100 hover:text-lime-800 rounded-md"
            >
              Contact US
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
