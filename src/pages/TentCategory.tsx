import { useParams, useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import AnimateIn from '../components/AnimateIn';
// Military tent images
import universalMilitaryImage from '../tents/military tents/universaal.jpg';
import ridgeMilitaryImage from '../tents/military tents/ridge.jpg';
import temperHospitalImage from '../tents/military tents/temper.jpg';
import gpmBeamImage from '../tents/military tents/gpm.jpg';
import generalPurposeImage from '../tents/military tents/general.jpg';
import bivouacImage from '../tents/military tents/bivvouac.jpg';
import baseCollectiveImage from '../tents/military tents/base collective.jpg';
import baseMilitaryImage from '../tents/military tents/base military.jpg';
// Relief tent images
import reliefDoubleThreeImage from '../tents/relief tents/1.jpg';
import reliefDoubleDoubleImage from '../tents/relief tents/2.jpg';
import reliefDoubleSingleImage from '../tents/relief tents/3.jpg';
import reliefSingleDoubleImage from '../tents/relief tents/4.jpg';
import reliefSingleSingleImage from '../tents/relief tents/5.jpg';
// Marquee tent images
import marqueeTentImage from '../tents/marqee tents/1.jpg';
// Shelter tent images
import shelter101Image from '../tents/shelter tents/1.png';
import shelter102Image from '../tents/shelter tents/2.png';
import shelter103Image from '../tents/shelter tents/3.png';
import shelter104Image from '../tents/shelter tents/4.png';
import shelter105Image from '../tents/shelter tents/5.png';
import shelterHospitalImage from '../tents/shelter tents/6.png';
// Kuwaiti dulux tent images
import kuwaiti101Image from '../tents/Kuwaiti dulux tents/Kuwaiti Dulux Tent HT-101.jpg';
import kuwaiti102Image from '../tents/Kuwaiti dulux tents/Kuwaiti Dulux Tent HT-102.jpg';
import kuwaiti103Image from '../tents/Kuwaiti dulux tents/Kuwaiti Dulux Tent HT-103.jpg';
// Multipurpose tent images
import multipurposeBathImage from '../tents/multipurpose tents/1.png';
import multipurposeWall102Image from '../tents/multipurpose tents/2.png';
import multipurposeWall103Image from '../tents/multipurpose tents/3.png';
import multipurposeCampingImage from '../tents/multipurpose tents/4.png';
// Deluxe tent images
import dulux101Image from '../tents/dulux tents/101.png';
import dulux102Image from '../tents/dulux tents/102.png';
import dulux103Image from '../tents/dulux tents/103.png';
import dulux104Image from '../tents/dulux tents/104.png';
import dulux105Image from '../tents/dulux tents/105.png';
import dulux106Image from '../tents/dulux tents/106.png';
import dulux107Image from '../tents/dulux tents/107.png';
import dulux108Image from '../tents/dulux tents/108.png';
import dulux109Image from '../tents/dulux tents/109.png';
import dulux110Image from '../tents/dulux tents/110.png';
import dulux111Image from '../tents/dulux tents/111.png';
import dulux112Image from '../tents/dulux tents/112.png';
import dulux113Image from '../tents/dulux tents/113.png';
import dulux114Image from '../tents/dulux tents/114.png';
import dulux115Image from '../tents/dulux tents/115.png';
import dulux116Image from '../tents/dulux tents/116.png';
import dulux117Image from '../tents/dulux tents/117.png';
import dulux118Image from '../tents/dulux tents/118.png';

// Image mapping for military tents
const militaryTentImages: { [key: string]: string } = {
  'tents-military-universal': universalMilitaryImage,
  'tents-military-ridge': ridgeMilitaryImage,
  'tents-military-temper-hospital': temperHospitalImage,
  'tents-military-gpm-beam': gpmBeamImage,
  'tents-military-general-purpose': generalPurposeImage,
  'tents-military-bivouac-half': bivouacImage,
  'tents-military-base-collective': baseCollectiveImage,
  'tents-military-base': baseMilitaryImage,
};

// Image mapping for relief tents
const reliefTentImages: { [key: string]: string } = {
  'tents-relief-double-three': reliefDoubleThreeImage,
  'tents-relief-double-double': reliefDoubleDoubleImage,
  'tents-relief-double-single': reliefDoubleSingleImage,
  'tents-relief-single-double': reliefSingleDoubleImage,
  'tents-relief-single-single': reliefSingleSingleImage,
};

// Image mapping for marquee tents
const marqueeTentImages: { [key: string]: string } = {
  'tents-marquee': marqueeTentImage,
};

// Image mapping for dulux tents
const duluxTentImages: { [key: string]: string } = {
  'tents-dulex-ht101': dulux101Image,
  'tents-dulex-ht102': dulux102Image,
  'tents-dulex-ht103': dulux103Image,
  'tents-dulex-ht104': dulux104Image,
  'tents-dulex-ht105': dulux105Image,
  'tents-dulex-ht106': dulux106Image,
  'tents-dulex-ht107': dulux107Image,
  'tents-dulex-ht108': dulux108Image,
  'tents-dulex-ht109': dulux109Image,
  'tents-dulex-ht110': dulux110Image,
  'tents-dulex-ht111': dulux111Image,
  'tents-dulex-ht112': dulux112Image,
  'tents-dulex-ht113': dulux113Image,
  'tents-dulex-ht114': dulux114Image,
  'tents-dulex-ht115': dulux115Image,
  'tents-dulex-ht116': dulux116Image,
  'tents-dulex-ht117': dulux117Image,
  'tents-dulex-ht118': dulux118Image,
};

// Image mapping for shelter tents
const shelterTentImages: { [key: string]: string } = {
  'tents-shelter-ht101': shelter101Image,
  'tents-shelter-ht102': shelter102Image,
  'tents-shelter-ht103': shelter103Image,
  'tents-shelter-ht104': shelter104Image,
  'tents-shelter-ht105': shelter105Image,
  'tents-shelter-hospital-frame': shelterHospitalImage,
};

// Image mapping for kuwaiti dulux tents
const kuwaitiTentImages: { [key: string]: string } = {
  'tents-kuwaiti-ht101': kuwaiti101Image,
  'tents-kuwaiti-ht102': kuwaiti102Image,
  'tents-kuwaiti-ht103': kuwaiti103Image,
};

// Image mapping for multipurpose tents
const multipurposeTentImages: { [key: string]: string } = {
  'tents-multipurpose-bath-ht101': multipurposeBathImage,
  'tents-multipurpose-wall-ht102': multipurposeWall102Image,
  'tents-multipurpose-wall-ht103': multipurposeWall103Image,
  'tents-multipurpose-camping-ht104': multipurposeCampingImage,
};

const tentsProducts = {
  'tents-relief': [
    { name: 'Winterized Double Fly Three-fold Tent', id: 'tents-relief-double-three' },
    { name: 'Double Fly, Double Fold Tent', id: 'tents-relief-double-double' },
    { name: 'Double Fly, Single Fold Tent', id: 'tents-relief-double-single' },
    { name: 'Single Fly, Double Fold Tent', id: 'tents-relief-single-double' },
    { name: 'Single Fly, Single Fold Tent', id: 'tents-relief-single-single' },
  ],
  'tents-military': [
    { name: 'Universal Military Tent', id: 'tents-military-universal' },
    { name: 'Ridge Military Tent', id: 'tents-military-ridge' },
    { name: 'Temper Hospital Military Tent', id: 'tents-military-temper-hospital' },
    { name: 'GPM Beam Military Tent', id: 'tents-military-gpm-beam' },
    { name: 'General Purpose Military Tent', id: 'tents-military-general-purpose' },
    { name: 'Bivouac Half Military Tent', id: 'tents-military-bivouac-half' },
    { name: 'Base Collective Military Tent', id: 'tents-military-base-collective' },
    { name: 'Base Military Tent', id: 'tents-military-base' },
  ],
  'tents-dulex': [
    { name: 'Arabic Deluxe and Relief Tents HT-101', id: 'tents-dulex-ht101' },
    { name: 'Arabic Deluxe Tent HT-102', id: 'tents-dulex-ht102' },
    { name: 'Arabic Deluxe Tent HT-103', id: 'tents-dulex-ht103' },
    { name: 'Swiss Deluxe Tent HT-104', id: 'tents-dulex-ht104' },
    { name: 'Family Round Tent HT-105', id: 'tents-dulex-ht105' },
    { name: 'Arabic Deluxe Tent HT-106', id: 'tents-dulex-ht106' },
    { name: 'Arabic Deluxe Tent HT-107', id: 'tents-dulex-ht107' },
    { name: 'Arabic Deluxe Tent HT-108', id: 'tents-dulex-ht108' },
    { name: 'Arabic Deluxe Tent HT-109', id: 'tents-dulex-ht109' },
    { name: 'Arabic Deluxe Tent HT-110', id: 'tents-dulex-ht110' },
    { name: 'Arabic Deluxe Tent HT-111', id: 'tents-dulex-ht111' },
    { name: 'Swiss Arabic Deluxe Tent HT-112', id: 'tents-dulex-ht112' },
    { name: 'Family Round Tent HT-113', id: 'tents-dulex-ht113' },
    { name: 'Arabic Deluxe Tent HT-114', id: 'tents-dulex-ht114' },
    { name: 'Arabic Deluxe Tent HT-115', id: 'tents-dulex-ht115' },
    { name: 'Arabic Deluxe Tent HT-116', id: 'tents-dulex-ht116' },
    { name: 'Arabic Deluxe Tent HT-117', id: 'tents-dulex-ht117' },
    { name: 'Arabic Deluxe Tent HT-118', id: 'tents-dulex-ht118' },
  ],
  'tents-shelter': [
    { name: 'Arabic Deluxe Shelter Tent HT-101', id: 'tents-shelter-ht101' },
    { name: 'Arabic Deluxe Shelter Tent HT-102', id: 'tents-shelter-ht102' },
    { name: 'Arabic Deluxe Shelter Tent HT-103', id: 'tents-shelter-ht103' },
    { name: 'Party Tent HT-104', id: 'tents-shelter-ht104' },
    { name: 'General Purpose Large Tent HT-105', id: 'tents-shelter-ht105' },
    { name: 'Hospital Frame Tent for 10 person', id: 'tents-shelter-hospital-frame' },
  ],
  'tents-marquee': [
    { name: 'Marquee Tents', id: 'tents-marquee' },
  ],
  'tents-kuwaiti-dulex': [
    { name: 'Kuwaiti Deluxe Tent HT-101', id: 'tents-kuwaiti-ht101' },
    { name: 'Kuwaiti Deluxe Tent HT-102', id: 'tents-kuwaiti-ht102' },
    { name: 'Kuwaiti Deluxe Tent HT-103', id: 'tents-kuwaiti-ht103' },
  ],
  'tents-multipurpose': [
    { name: 'Bath Tent HT-101', id: 'tents-multipurpose-bath-ht101' },
    { name: 'Wall Tent HT-102', id: 'tents-multipurpose-wall-ht102' },
    { name: 'Wall Tent HT-103', id: 'tents-multipurpose-wall-ht103' },
    { name: 'Camping Tent HT-104', id: 'tents-multipurpose-camping-ht104' },
  ],
};

const categoryNames: { [key: string]: string } = {
  'tents-relief': 'Relief/Disaster Tents',
  'tents-military': 'Military Tents',
  'tents-dulex': 'Deluxe Tents',
  'tents-shelter': 'Shelter Tents',
  'tents-marquee': 'Marquee Tents',
  'tents-kuwaiti-dulex': 'Kuwaiti Deluxe Tent',
  'tents-multipurpose': 'Multipurpose Tents',
};

export default function TentCategory() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const navigate = useNavigate();

  if (!categoryId || !tentsProducts[categoryId as keyof typeof tentsProducts]) {
    return (
      <section className="py-20 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Category Not Found</h1>
          <button
            onClick={() => navigate('/tents')}
            className="bg-lime-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-lime-600 transition-colors"
          >
            Back to Tents
          </button>
        </div>
      </section>
    );
  }

  const products = tentsProducts[categoryId as keyof typeof tentsProducts];
  const categoryName = categoryNames[categoryId];

  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn className="mb-8">
          <button
            onClick={() => navigate('/tents')}
            className="text-lime-600 hover:text-lime-700 font-semibold mb-4 flex items-center gap-2"
          >
            ← Back to Tents
          </button>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{categoryName}</h1>
            <div className="w-24 h-1 bg-lime-500 mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our range of {categoryName.toLowerCase()} products
            </p>
          </div>
        </AnimateIn>

        <AnimateIn className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              description={`High-quality ${product.name.toLowerCase()} designed for durability and performance.`}
              productId={product.id}
              imageUrl={
                categoryId === 'tents-military' 
                  ? militaryTentImages[product.id] 
                  : categoryId === 'tents-relief'
                  ? reliefTentImages[product.id]
                  : categoryId === 'tents-marquee'
                  ? marqueeTentImages[product.id]
                  : categoryId === 'tents-dulex'
                  ? duluxTentImages[product.id]
                  : categoryId === 'tents-shelter'
                  ? shelterTentImages[product.id]
                  : categoryId === 'tents-kuwaiti-dulex'
                  ? kuwaitiTentImages[product.id]
                  : categoryId === 'tents-multipurpose'
                  ? multipurposeTentImages[product.id]
                  : undefined
              }
            />
          ))}
        </AnimateIn>
      </div>
    </section>
  );
}
