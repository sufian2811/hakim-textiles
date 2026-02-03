import { useNavigate } from 'react-router-dom';

interface ProductCardProps {
  name: string;
  description?: string;
  imageUrl?: string;
  productId?: string;
  isCategory?: boolean;
  /** When true, applies blur to the card image (e.g. for placeholder) */
  imageBlur?: boolean;
}

export default function ProductCard({ name, description, imageUrl, productId, isCategory = false, imageBlur = false }: ProductCardProps) {
  const navigate = useNavigate();

  const handleExploreDetails = () => {
    if (productId) {
      if (isCategory) {
        navigate(`/tents/${productId}`);
      } else {
        navigate(`/product/${productId}`);
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (productId && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      handleExploreDetails();
    }
  };

  const isClickable = !!productId;

  return (
    <div
      role={isClickable ? 'button' : undefined}
      tabIndex={isClickable ? 0 : undefined}
      onClick={isClickable ? handleExploreDetails : undefined}
      onKeyDown={isClickable ? handleKeyDown : undefined}
      className={`bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group ${isClickable ? 'cursor-pointer' : ''}`}
    >
      <div className="relative h-64 overflow-hidden bg-gray-200">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={name}
            className={`w-full h-full object-cover transition-transform duration-500 ${imageBlur ? 'blur-md scale-105' : 'group-hover:scale-110'}`}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
            <span className="text-gray-400 text-sm">No Image</span>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
        {description && (
          <p className="text-gray-600 mb-4">{description}</p>
        )}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            handleExploreDetails();
          }}
          className="w-full mt-4 bg-lime-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-lime-600 transition-colors duration-300"
        >
          Explore Details
        </button>
      </div>
    </div>
  );
}
